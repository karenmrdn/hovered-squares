import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { MainContent } from "components/MainContent";

export const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};
