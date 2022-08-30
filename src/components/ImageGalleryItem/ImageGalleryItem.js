import React from "react";
import "styles/style.css";
import propTypes from "prop-types"
//import { Modal } from "components/Modal/Modal";


export const ImageGalleryItem = ({ url, tag, largeImageURL }) => {
    
    return (<div>
            <img src={url} className="ImageGalleryItem-image" alt={tag}  data-url={largeImageURL} />
        </div>
        )
}

ImageGalleryItem.propTypes = {
    item: propTypes.string,
    url: propTypes.string,
}