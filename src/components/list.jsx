import Item from "./item"

const List = ({list}) => {
  return (
      <ul>
          {
              list.map( function ( {id , ...item} ) { // seprate method 
                  return <Item key={id} {...item} />
              })
          }
      </ul>
  )
}

export default List;

