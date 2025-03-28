
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

const Item = ({title, price, count }) => {
  return (
      <li>
          <span>{title}</span>
          <span>{price}</span>
          <span>{count}</span>
      </li>
  )
}


export default Item;