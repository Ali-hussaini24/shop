import Item from "./item"

const List = (props) => {
    return (
      <ul>
        {
          props.list.map( function ( item ) {
            return <Item key={item.id} item = {item}/>
          })
        }
      </ul>
    )
}

export default List;

