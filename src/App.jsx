"use client";
import Layout from "./component/Layout";
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="bg-cream min-h-screen">
      <ToastContainer/>
      <Layout />
    </div>
  
  );
};

export default App;
