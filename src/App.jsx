import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './component/hero/Hero';
import Login from './component/login/Login';
import Feed from './component/feed/Feed';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

