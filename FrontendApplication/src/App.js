import React from 'react';  
import AddCustomer from './Customer/AddCustomer';  
import CustomerList from './Customer/CustomerList';  
import EditCustomer from './Customer/EditCustomer';  
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  
import './App.css';  
function App() {  
  return (  
    <Router>  
      <div className="container">  
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
              <li className="nav-item">  
                <Link to={'/AddCustomer'} className="nav-link">Add Customer</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/CustomerList'} className="nav-link">Customer List</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        <Routes>  
          <Route exact path='/AddCustomer' component={AddCustomer} />  
          <Route path='/edit/:id' component={EditCustomer} />  
          <Route path='/CustomerList' component={CustomerList} />  
        </Routes>  
      </div>  
    </Router>  
  );  
}  

export default App;