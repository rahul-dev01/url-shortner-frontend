import React,{useContext, useState} from 'react'

import axios from 'axios'

import AppContext from "./../context"

const {VITE_APP_BACKEND_API_BASE_URL} = import.meta.env

import "./LinkInputContainer.css"

const LinkInputContainer = (props) => {

    const {setToggleFlag} = props

    const [url, setUrl] = useState("")

    const {userToken, isLoginedUser} = useContext(AppContext)  

    const CreateNewShortUrlHandler = async ()=>{
        try{

            const API_URL = VITE_APP_BACKEND_API_BASE_URL + "/short-url/new"

            const data = {
                "originalURL" : url
            }

            const config = {
                headers : {
                  'Authorization' : `Bearer ${userToken}`
                }
            }

            const createNewUrlResponse = await axios.post(API_URL, data, config)

            const {success, message, data : apiData} = createNewUrlResponse.data

            if(!success){
                alert(message)
            }else{
                alert("New URL is added")
                setToggleFlag(prevFlag=>!prevFlag)
            }

        }catch(err){
            console.log('Error in CreateNewShortUrlHandler', err)
        }
    }

    return (
        <div className='input-container'>
        <div>
                <input onChange={(e)=>{setUrl(e.target.value)}} type='text'/>
                <button onClick={CreateNewShortUrlHandler}>Save</button>
        </div>
        </div>
    )
}

export default LinkInputContainer