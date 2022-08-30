import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = (props) => {

    return (<ul className="ImageGallery" onClick={e => props.toggleModal(e)}>
        {props.data.map((elem) => <li key={elem.id}><ImageGalleryItem
            url={elem.webformatURL}
            largeImageURL={elem.largeImageURL}
            tag={elem.tags}
            className='ImageGalleryItem'
        /></li>)
        }
    </ul>)
}


