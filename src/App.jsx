import List from './components/list';
import InputWhitLabel from './components/InputWhitLabel';
import { useEffect, useState } from "react";
import useStorageState from './hooks/useStorageState';

const title = "Hallo welt"

const App = () => {

    const datalist = [
        {
            id : 1,
            title : "React",
            price : 20000,
            count : 13,
        },
        {
            id : 2,
            title : "Java",
            price : 23000,
            count : 10,
        },
        {
          id : 3,
          title : "Redux",
          price : 23000,
          count : 10,
      }
    ]

    const [textTerm , setTextTerm] = useStorageState('search' , '');    // State function : for re-reloading // controlled state.

    const backhandler = (event) => {
        setTextTerm(event.target.value);
    }

    const filterdItem = datalist.filter((item) => {
        return item.title.toLowerCase().includes(textTerm.toLowerCase());
    })

    return (
        <div>
            <h1>{title}</h1>
            <InputWhitLabel id= "search" label= "Search" value = {textTerm} onInputChange = {backhandler} />
            <List list = {filterdItem} />
        </div>
    )
}

export default App;
