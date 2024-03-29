import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./containers/footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  const location = useLocation();
  const shouldComponentRender =
    location.pathname !== "/login" && location.pathname !== "/register";
  return (
    <>
      {shouldComponentRender && <Navbar />}
      <Toaster position="top-center" />
      <Outlet />
      {shouldComponentRender && <Footer />}
    </>
  );
}

export default App;
