import LinkCard from './../components/LinkCard'
import LinkInputContainer from '../components/LinkInputContainer';
import { useEffect, useState } from 'react';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const {VITE_APP_BACKEND_API_BASE_URL} = import.meta.env

import './LinksScreen.css'

const LinksScreen = ()=>{

    const navigate = useNavigate()

    const [urlsData, setUrlsData] = useState([])

    const [toggleFlag, setToggleFlag] = useState(false)
 
    useEffect(()=>{
      (async()=>{
        

        const token = localStorage.getItem("token")
        if(!token){
          navigate("/auth/signin")
        }

     
        const API_URL = VITE_APP_BACKEND_API_BASE_URL + "/user/urls"
        const config = {
          headers : {
            'Authorization' : `Bearer ${token}`
          }
        }


        try{

          const urlsApiResponse = await axios.get(API_URL, config)
          const {success, message, data} = urlsApiResponse.data

          if(success && data.length>0){
            setUrlsData(data)
          }

        }catch(err){

          alert("Error whiling featching the URLS")

        }
        })()

    },[toggleFlag])

    function formatDate(timestamp) {
      const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = date.getFullYear();
      
      return `${day}/${month}/${year}`;
    }


    return (
        <div id='links-screen'>
            <h1>Links</h1>
          
            <LinkInputContainer setToggleFlag={setToggleFlag}/>
            <div className='links-container'>
                {urlsData.map((element)=>{
                    return <LinkCard 
                        originalURL={element.originalUrl}
                        redirectURL={VITE_APP_BACKEND_API_BASE_URL.split("/api/v1")[0]+`/${element.keyId}`}
                        clickedCount={element.clickedCount}
                        createDate={formatDate(element.createdAt)}
                    />
                })}
            </div>
        </div>
    )
}

export default LinksScreen