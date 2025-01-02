import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Docters from "./pages/Doctors";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import MyAppoinments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Docters />} />
        <Route path="/doctors/:speciality" element={<Docters />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointment" element={<MyAppoinments />} />
        <Route path="/my-appointment/:doc-id" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
