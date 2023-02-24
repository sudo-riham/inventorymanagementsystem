import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import ListProduct from './components/ListProduct';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      </BrowserRouter>
      <h5>React CRUD using Laravel and Mysql</h5>
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">List</Link>
          </li>
          <li>
            <Link to="product/create">Create</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<ListProduct/>} />
        <Route path="product/create" element={<CreateProduct />} />
        <Route path="product/:id/edit" element={<EditProduct />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
