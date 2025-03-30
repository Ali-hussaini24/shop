import Item from "./item"

const List = ({list , onRemoveItem}) => {
  return (
      <ul>
          {
              list.map( function (item) { // seprate method 
                  return <Item key={item.id} {...item} onRemoveItem = {onRemoveItem} />
              })
          }
      </ul>
  )
}

export default List;

