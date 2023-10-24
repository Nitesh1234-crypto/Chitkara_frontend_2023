import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import UserList from './pages/UserList';
import User from './pages/User';
import NewUser from './pages/NewUser';
import UserListLayout from './pages/UserListLayout';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/about'>About</Link>
          </li>
          <li>
          <Link to='/users'>UserList</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<UserListLayout />} >
          <Route index element={<UserList />} />
          <Route path=':id' element={<User />} />
          <Route path='newuser' element={<NewUser />} />
        </Route>
        {/* <Route path='/users' element={<UserList />}/>
        <Route path='/users/:id' element={<User />}/>
        <Route path='/users/newuser' element={<NewUser />} /> */}
      </Routes>
      
    </div>
  );
}

export default App;
