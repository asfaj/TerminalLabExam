import './App.css';
import Header from './components/Header';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Rockets/>}></Route>
        <Route path='/missions' element={<Missions/>}></Route>
        <Route path='/myprofile' element={<MyProfile/>}></Route>
      </Routes>
    </>
  );
}

export default App;
