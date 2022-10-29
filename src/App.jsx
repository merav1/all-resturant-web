import { useState } from "react";
import "./App.css";
import Blog from "./components/aBlog";
import BlogDetails from "./components/BlogDetails";
import Modal from "./components/Model";
import DataGridDemo from "./components/inventions";
import SignIn from "./components/SignIn"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/orders" element={<DataGridDemo/>}/>
          <Route path="/:id" element={<BlogDetails />} />
        </Routes>
      </Router>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;

