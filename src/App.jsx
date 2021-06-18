import './App.css';
import data from './shared/data/products.json'
import Card from './shared/components/card/index'

const App = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>List of Products</h1>
      </div>
      <div>
        {data.products.map((item) => (
          <Card data={item}/>
        ))}
      </div>
    </div>
  );
}

export default App;
