import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './Sidebar/Sidebar';
import Grid from './Grid/Grid';



function App() {
  return (
    <Router> {/* Wrap your Routes in a Router component */}
      <div id="container">
        <Routes>
          <Route path="/" element={<Grid />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
