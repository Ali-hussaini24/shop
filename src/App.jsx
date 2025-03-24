import List from './components/list';
import Search from './components/search';

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
    }
  ]

const handlerSearch = (event) => {
  console.log(event.target.value);
}

  return (
    <div>
      <h1>{title}</h1>
      <List list={datalist}/>
      <Search onSearch={handlerSearch}/>
    </div>
  )
}

export default App;
