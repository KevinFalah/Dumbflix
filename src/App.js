import logo from './logo.svg';
import './App.css';
import Layout from './widgets/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import TvShows from './pages/TvShows';
import Movie from './pages/Movie';
import VideoDetail from './pages/VideoDetail'
import Profile from './pages/Profile';
import Payment from './pages/Payment';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route />
      <Route path='/' element={
        <Layout>
          <Home />
        </Layout>
      } />

      <Route path='/tvshows' element={
        <Layout>
          <TvShows />
        </Layout>
      }/>

      <Route path='/movies' element={
        <Layout>
          <Movie />
        </Layout>
      }/>

      <Route path='/video' element={
        <Layout>
          <VideoDetail />
        </Layout>
      }/>

      <Route path='/profile' element={
        <Layout>
          <Profile />
        </Layout>
      }/>

      <Route path='/payment' element={
        <Layout>
          <Payment />
        </Layout>
      }/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
