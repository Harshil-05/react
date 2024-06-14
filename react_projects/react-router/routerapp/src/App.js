
import { Routes,Route,Link, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <navbar>
        <ul>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/support">SUPPORT PAGE</NavLink></li>
          <li><NavLink to="/labs">LABS PAGE</NavLink></li>
          <li><NavLink to="/about">ABOUT PAGE</NavLink></li>
          
        </ul>
      </navbar>
     <Routes> 
     <Route path='/' element={<div>HOME PAGE</div>}></Route>
     <Route path='/support' element={<div>SUPPORT PAGE</div>}></Route>
     <Route path='/labs' element={<div>LABS PAGE</div>}></Route>
     <Route path='/about' element={<div>ABOUT PAGE</div>}></Route>
     <Route path='*' element={<div>NOT FOUND PAGE</div>}></Route>
     </Routes>
    </div>
  );
}

export default App;
