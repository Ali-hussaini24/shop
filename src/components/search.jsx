import { useState } from "react";

const Search = (props) => {
    const [searchTerm , setSearchTerm] = useState('');
    const handler = (event) => {
        setSearchTerm(event.target.value);
        props.onSearch(event)
    }
    return (
        <div>
            <label htmlFor="search">Search</label>
            <input onChange={handler} type="text" id="search"/>
            <p>
                input Text : <strong>{searchTerm}</strong>
            </p>
        </div>
    )
}

export default Search;
