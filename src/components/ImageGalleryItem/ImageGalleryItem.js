import React, { Component } from "react";
import "styles/style.css";
import propTypes from "prop-types"


export class ImageGalleryItem extends Component {
    render() {
        return (<>
            <li className="ImageGalleryItem" >
                <img src={this.props.item} alt="" className="ImageGalleryItem-image" data-l-url={this.props.url} />
            </li>
        </>
        )
    }
}

ImageGalleryItem.propTypes = {
    item: propTypes.string,
    url: propTypes.string,
}