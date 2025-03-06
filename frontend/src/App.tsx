import './App.css';
import Home from './pages/home';
import CreateNewPost from './pages/create';
import PostDetails from './pages/postDetails';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<PostDetails />} />
        <Route path="/create" element={<CreateNewPost />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
