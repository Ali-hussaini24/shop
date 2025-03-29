// const Search = (props) => {

//     const handler = (event) => {
//         props.onSearch(event);
//     }

//     return (
//         <div>
//             <label htmlFor="search">Search</label>
//             <input onChange={handler} type="text" id="search" value={props.Search} />
//         </div>
//     )
// }

// ********** props Destructuring 1 
// ********** props is an Object and has some propertise

// const Search = (props) => {
//     const {Search , onSearch} = props

//     const handler = (event) => {
//         onSearch(event);
//     }

//     return (
//         <div>
//             <label htmlFor="search">Search</label>
//             <input onChange={handler} type="text" id="search" value={Search} />
//         </div>
//     )
// }

// ********** props Destructuring 1 

// const Search = ({Search , onSearch}) => {
    
//     const handler = (event) => {
//         onSearch(event);
//     }

//     return (
//         <>
//             <label htmlFor="search">Search</label>
//             <input onChange={handler} type="text" id="search" value={Search} />
//         </>
//     )
// }

// ******** create a general component **********8

const InputWhitLabel = ({id, label, value , onInputChange , type="text"}) => {
    
    const handler = (event) => {
        onInputChange(event);
    }

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input onChange={handler} type={type} id={id} value={value} />
        </>
    )
}

export default InputWhitLabel;

