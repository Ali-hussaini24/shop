import List from './components/list';
import Search from './components/search';
import { useEffect, useState } from "react";

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

    const [textTerm , setTextTerm] = useState(localStorage.getItem('search') || '');    // State function : for re-reloading // controlled state.

    const backhandler = (event) => {
        setTextTerm(event.target.value);
    }

    useEffect(() => {
      localStorage.setItem('search' , textTerm);
    } , [textTerm])

    const filterdItem = datalist.filter((item) => {
        return item.title.toLowerCase().includes(textTerm.toLowerCase());
    })

    return (
        <div>
            <h1>{title}</h1>
            <List list = {filterdItem} />
            <Search Search = {textTerm} onSearch = {backhandler} />
        </div>
    )
}

export default App;
