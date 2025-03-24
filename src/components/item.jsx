
const Item = (props) => {
    return (
      <li>
        <span>{props.item.title}</span>
        <span>{props.item.price}</span>
        <span>{props.item.count}</span>
      </li>
    )
}

export default Item;