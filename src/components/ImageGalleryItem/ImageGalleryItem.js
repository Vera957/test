import React, { Component } from "react";
import "styles/style.css";


export class ImageGalleryItem extends Component {
    state = {
        url: ''
    }
    render() {
        //console.log(this.props.url, this.props.toggleModal)
        return (<>
            <li className="ImageGalleryItem" >
                <img src={this.props.item} alt="" className="ImageGalleryItem-image" data-l-url={this.props.url} />
            </li>
        </>
        )

    }
}