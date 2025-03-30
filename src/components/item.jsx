
// const Item = ({item}) => {
//     return (
//         <li>
//             <span>{item.title}</span>
//             <span>{item.price}</span>
//             <span>{item.count}</span>
//         </li>
//     )
// }

// *************** Spread Opertor method for props

const Item = ({id ,title, price, count, onRemoveItem}) => {
  
  // const handleRemoveItem = () => {
  //   onRemoveItem(id)
  // }

  return (
      <li>
          <span>{title}</span>
          <span>{price}</span>  
          <span>{count}</span>
          <button onClick={() => onRemoveItem(id)}>Remove</button>   
      </li>                                                                // inline handler method
  )
}


export default Item;