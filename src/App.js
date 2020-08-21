import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const students = ['jahid', 'arif', 'atik', 'kalaia', 'humayun','lose','jiku']
 const products = [
   {name: 'Photoshop', price: '$60.99'},
   {name:'Illustrator', price:'$40.99'},
   {name:'PDF reader', price:'$7.99'},
   {name:'Adobe XD', price:'Free'}
]
 const studentNames = students.map(student => student)
 console.log(studentNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
        {
          students.map(student => <li>{student}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
          {/* <li>{students[0]}</li>
          <li>{students[1]}</li>
          <li>{students[2]}</li>
          <li>{students[3]}</li> */}
        </ul>
       <div>
       {
         products.map(product => <Product product={product}></Product>)
       }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product> */}
       </div>

        <Student name="Jahidul Kabir" id = "001"></Student>
        <Student name="Atikul Kabir" id="002"></Student>
        <Student name="Ariful Kabir" id="003"></Student>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count+1);
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick= {() => setCount(count-1)}>Decrease</button>
      <button onClick = {() => setCount(count+1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h2>Dynamic users {users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.name + " "+"Email: " + user.email}</li>)
        }
      
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius: "7px",
    backgroundColor: 'lightgray',
    height: '250px',
    width: '250px',
    float:'left',
    color:'black',
    margin:'8px',
    paddingTop:'30px'
  }
  const {name, price} = props.product;
  return (
      <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy now</button>
      </div>
  )
}

function Student(props){
  return (
    <div style = {{backgroundColor:'#ffdd', color:'black', width:'500px', height:"150px", margin:'5px', borderRadius:"10px"}}>
      <h3>Name: {props.name} </h3>
      <h4>Id: {props.id} </h4>
    </div>
  )
}

export default App;
