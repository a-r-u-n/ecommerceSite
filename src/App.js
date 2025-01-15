import logo from './logo.svg';
import './App.css';
import clogo from './Assets/logo.png'
import cart from './Assets/cart_icon.png'
import {useState} from 'react'

function App() {
  const [currentHr,setHr]=useState('home');
  return (
    <div className="navbar">
       <div className="navlogo">
        <img src={clogo} />
        <p>BuyCart</p>
        </div>
        <ul className="navmenu">
        <li onClick={()=>{setHr('home')}}>Home{currentHr==='home'&&<hr/>}</li>
        <li onClick={()=>{setHr('mens')}}>Mens{currentHr==='mens'&&<hr/>}</li>
        <li onClick={()=>{setHr('womens')}}>Womens{currentHr==='womens'&&<hr/>}</li>
        <li onClick={()=>{setHr('kids')}}>Kids{currentHr==='kids'&&<hr/>}</li>
        </ul> 
        <div className='navlogincart'>
        <button>Login</button>
        <img src={cart} />
        </div>
        <div className="CartCount">0</div>
    </div>
  );
}

export default App;
