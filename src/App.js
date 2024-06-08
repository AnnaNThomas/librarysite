import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import DeleteBook from './components/DeleteBook';
import ViewAll from './components/ViewAll';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddBook />} />
          <Route path='/SearchBook' element={<SearchBook />} />
          <Route path='/DeleteBook' element={<DeleteBook />} />
          <Route path='/ViewAll' element={<ViewAll />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
