import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import '../styles/style.css';
//import { ImageGallery } from './ImageGallery/ImageGallery';
import { useState, useEffect } from "react";
import { response } from "./Helpers";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";
import "styles/style.css";



export const App = () => {
  const [search, setsearch] = useState('');
  const [page, setpage] = useState(1);
  const [dataPage, setdataPage] = useState([]);
  const [lastPage, setlastPage] = useState(null);
  const [pending, setpending] = useState(false);
  const [modal, setmodal] = useState(false);
  const [largeIMG, setlargeIMG] = useState(undefined);
  //const [responseData, setresponseData] = useState([]);


  useEffect(() => {// answer from server data and last page
    if (search === '') return;
    setpending(true);
    response(search, page).then((response) => {
      const { hits } = response;
      //setresponseData(response);
      setlastPage(Math.ceil(response.totalHits / 12));
      setpending(false);
      if (page > 1) {
        setdataPage(prev => ([...prev, ...hits]))
      } else {
        setdataPage(hits);
      }
    }).catch(console.error);
  }, [search, page]);

  const getVal = (queue) => {
    setsearch(queue);
  }

  const nextPage = () => setpage(prev => prev + 1);//set next page event

  const toggleModal = (e) => {//img for modal
    if (!modal && e.target.nodeName !== 'IMG') return;
    if (!modal && e.target.nodeName === 'IMG') {
      setmodal(!modal)
      setlargeIMG(e.target.dataset.url);
    } else if (modal && !e.target) setmodal(!modal);
  };

  return (<>
    <Searchbar onSubmit={getVal} />
    {pending && (<Loader />)}
    {modal && (<Modal toggleModal={toggleModal} ><img src={largeIMG} alt="" /></Modal>)} 
    {dataPage.length === 0 && search !== '' && (<p className="Notification">no matches found</p>)}
    {dataPage.length > 0 && (<ImageGallery data={dataPage} toggleModal={toggleModal} />)}
    {page !== lastPage && search !== '' && dataPage.length>0 && !pending && (<button type="button" className='Button' onClick={nextPage}>Load more...</button>)}
  </>
  )
};

//no props
