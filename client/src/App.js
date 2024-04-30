import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SingleBooks from "./books/SingleBooks";
import Shop from "./pages/Shop";
import AdmDashboard from "./Admin/AdmDashboard";
import AdmForm from "./Admin/AdmPages/AdmForm";
import Admhome from "./Admin/AdmPages/Admhome";
import UploadBook from "./Admin/AdmPages/UploadBook";
import AdmCategory from "./Admin/AdmPages/AdmCategory";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/singlebook" element={<SingleBooks />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/admin" element={<AdmDashboard />} />
          <Route path="/admin/form" element={<AdmForm />} />
          <Route path="/admin/home" element={<Admhome />} />
          <Route path="/admin/bkcategory" element={<AdmCategory />} />
          <Route path="/admin/upload/book" element={<UploadBook />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
