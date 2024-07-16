import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> */}
                <Route path="/" element={<Register/>}/>


      </Routes>
    </Router>
  );
};

export default App;
