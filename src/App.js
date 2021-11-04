import react, { useState,useEffect } from 'react';
import './App.css';

function App() {

  const nayoks = ['Anwar', 'jafor', 'alomgir', 'salman', 'bappi'];


  const fruitsInfo = [
    { name: 'Apple', price: '260', quantity: '10' },
    { name: 'banana', price: '320', quantity: '30' },
    { name: 'pineApple', price: '350', quantity: '50' },
    { name: 'Orange', price: '550', quantity: '25' },
    { name: 'Lichi', price: '650', quantity: '150' },
  ]

  const products = [
    { name: 'Photoshop', price: '$90.90' },
    { name: 'Illustrator', price: '$80.50' },
    { name: 'Adobe Reader', price: '$30.80' },
    { name: 'Adobe Premire Pro', price: "$250" }

  ]


  return (
    <div className="App">
      <h1>This is a App Component</h1>
      <Counter />
      <Users />

      <div className="showProducts">
        {
          products.map(product => <Products product={product} ></Products>)
        }
      </div>
      <div className="fruits-container">
        {
          fruitsInfo.map(fElement => <Fruitcom fElement={fElement} />)
        }

      </div>

      {/* <Products product={products[0]}  />
      <Products product={products[1]}  />
      <Products product={products[2]}  /> */}
      {/* <Products name={products[1].name} price={products[1].price} />
      <Products name={products[2].name} price={products[2].price} /> */}

      <Person name='Jalal' profession='programmer' />
      <Person name='Firoz' profession='Teacher' />
      <ul>
        {
          nayoks.map(nayok => <h3>{nayok}</h3>)
        }
      </ul>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)} >Increase</button>
      <button onClick={() => setCount(count -1)} >Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data=> {
       setUsers(data)
     })
  },[])
  return(
    <div>
      <h3>Dynamic Users:{users.length} </h3>
      <ul>
        {
          users.map(user => <li> {user.name}  </li>)
        }
      </ul>
    </div>
  )
}

function Products(props) {

  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '220px',
    width: '220px',
    marginTop: '20px',
    marginLeft: '20px'

  }

  const { name, price } = props.product;


  // console.log(props);
  return (
    <div style={productStyle} className="products">
      <h2>Name: {name}</h2>
      <h1>Price:{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Fruitcom(props) {

  const fruitStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '320px',
    width: '320px',
    marginTop: '20px',
    marginLeft: '20px'
  }
  return (
    <div className="fruits" style={fruitStyle} >
      <h2>Fruit Name: {props.fElement.name}</h2>
      <h2>Fruit Price: ${props.fElement.price}</h2>
      <h2>Fruit Quantity: ${props.fElement.quantity}</h2>
    </div>
  )
}


function Person(props) {
  // console.log(props);
  return (
    <div style={{ border: '2px solid red', margin: '20px', width: '300px' }}>
      <h3>My Name: {props.name}</h3>
      <h3>My profession: {props.profession}</h3>
    </div>
  )
}
function Name() {
  return (
    <div>
      <h2>father's name: Shahriar</h2>
      <h2>Mother's name: Tahmina begum</h2>
      <h2>Name: Shahriar Jalal</h2>
    </div>
  )
}


export default App;
