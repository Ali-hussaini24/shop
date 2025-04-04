import List from './components/list';
import InputWhitLabel from './components/InputWhitLabel';
import { useEffect, useState } from "react";
import useStorageState from './hooks/useStorageState';
import { useReducer } from 'react';

const title = "Hallo welt"

const datalistReducer = (state , action) => {
    switch (action.type) {
        case 'STORIES_FETCH_INIT' : 
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        case 'STORIES_FETCH_SUCCESS' : 
            return {
                ...state,
                isLoading : false,
                isError : false,
                data : action.payload
            }
        case 'STORIES_FETCH_FAILURE' :
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        case 'REMOVE_STORIES': 
            return {
                ...state,
                data : state.data.filter((item) => item.id !== action.payload)
            }
        default:
            return state
    }
}

const API_ADDRESS = 'https://react-mini-projects-api.classbon.com/Story/list';

const App = () => {

    const [datalist , dispatchDatalist] = useReducer(datalistReducer ,{
        data : [], isLoading : false, isError : false
    })
    const [textTerm , setTextTerm] = useStorageState('search' , '')

    useEffect(() => {

        if (!textTerm) return;

        dispatchDatalist({type : 'STORIES_FETCH_INIT'})

        fetch(`${API_ADDRESS}?query=${textTerm}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatchDatalist({type : 'STORIES_FETCH_SUCCESS' , payload : data})
            })
            .catch(() => dispatchDatalist({type : 'STORIES_FETCH_FAILURE'}));

    } , [textTerm])

    const handleRemoveDatalist = (id) => {
        dispatchDatalist({type : 'REMOVE_STORIES' , payload : id})
    } 

    const backhandler = (event) => {
        setTextTerm(event.target.value);
    }

    // const filterdItem = datalist.data.filter((item) => {
    //     return item.title.toLowerCase().includes(textTerm.toLowerCase());
    // })

    return (
        <div>
            <h1>{title}</h1>
            <InputWhitLabel id= "search" label= "Search" value = {textTerm} onInputChange = {backhandler}/>
            {
                datalist.isError && <p>something went wrong</p> 
            }
            {
                datalist.isLoading ? (<p>Loading...</p>) : <List list = {datalist.data} onRemoveItem = {handleRemoveDatalist}/>
            }
        </div>
    )
}

export default App;
