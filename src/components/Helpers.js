import axios from "axios";

export const KEY = '28290487-08acef9b94dbac81dafc26654';
export const PAGE = '1';
export const SEARCH = '';


export const URL = `https://pixabay.com/api/?q=${SEARCH}&page=${PAGE}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`

export const response = async(search, page) => {
    const response = await axios.get(`https://pixabay.com/api/?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    return response.data;
}