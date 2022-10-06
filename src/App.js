import "./App.css";
import Navbar from "./Components/Navbar";
// import About from "./Components/About";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Appointment from "./Components/Appointment";
import Services from "./Login";
// import DoctorProfile from "./Components/DoctorProfile";
// import DisplayMedical from "./Components/DisplayMedical";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login";
import Mainpage from "./Main";
import Contact from "./Components/Contact";

function App() {
  const [user] = useAuthState(auth);
  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          {/* <Route path="/About" element={<About />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={user ? <Mainpage /> : <Login />} />
          {/* <Route path="/DoctorProfile/:id" element={<DoctorProfile />} /> */}
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/Appointment/:name" element={<Appointment />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
