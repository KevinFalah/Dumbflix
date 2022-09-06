import './App.css';
import Layout from './widgets/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TvShows from './pages/TvShows';
import {Home, Movie, VideoDetail, Profile, Payment, Notfound} from './pages'

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

      <Route path='*' element={
        <Layout>
          <Notfound />
        </Layout>
      }/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
