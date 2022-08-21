import axios from "axios";
import React, { Component } from "react";
import { KEY } from '../Helpers';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from "components/Loader/Loader";
import { Modal } from 'components/Modal/Modal';

export class ImageGallery extends Component {
    state = {
        list: '',
        idle: false,
        pending: false,
        resolved: false,
        rejected: false,
        page: 1,
        total: 0,
        modal: false,
        largeImageURL: ''
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            this.response();
        }
        if (prevProps.search !== this.props.search) {
            this.setState({ page: 1 });
            this.response();
        }
    }
    componentDidMount() {
        if (this.props.search) {
            this.setState({ pending: true });
            this.response();
        }
    }
    response = () => {
        this.setState({ pending: true });
        axios.get(`https://pixabay.com/api/?q=${this.props.search}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(res => {
                if (res.data.total === 0) {
                    this.setState({ idle: true, resolved: false, pending: false });
                }
                if (res.data.total > 0) {
                    this.setState({
                        pending: false,
                        resolved: true,
                        total: res.data.totalHits / 12,
                        idle: false,
                    });
                    if (this.state.page === 1) {
                        this.setState({ list: res.data.hits })
                    } else {
                        this.setState(prevState => ({
                            list: [...prevState.list, ...res.data.hits]
                        }))
                    }
                }
            })
            .catch(error => {
                this.setState({ rejected: true, pending: false })
            });
    }  
    changePage = () => {
        this.setState(prev => ({
            page: prev.page + 1,
        }))
    }
    toggleModal = (url) => {
        this.setState(({ modal }) => ({ modal: !modal}))
        if (url !== undefined ) {
            this.setState({ largeImageURL: url })
        }
    }

    render() {
        const { total, page, idle, pending, rejected, resolved, modal, largeImageURL, list } = this.state;
        return (<>
            {modal === true &&
                <Modal toggleModal={this.toggleModal} >
                <img src={largeImageURL} alt="" />
                </Modal>
            }
            {pending === true && <Loader/>}
            {idle === true && <p className="Notification">Not found</p>}
            {rejected === true && alert("Server don't answer")}
            {resolved === true && (<>
                <ul className='ImageGallery' onClick={(e) => this.toggleModal(e.target.dataset.lUrl)}>
                    {list.map(e => <ImageGalleryItem
                        key={e.id}
                        item={e.webformatURL}
                        url={e.largeImageURL}
                         />)}
                </ul>
                {total > page && <button
                    type="button"
                    className="Button"
                    onClick={this.changePage}>Load more</button>}
            </>)}
        </>)
    }
}

//no propTypes