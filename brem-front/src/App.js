// This is a React Router v6 app
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from './pages/home'
import PayBill from './pages/pay-bill'

export default function App() {
  function NotFound(){
    return <div><h2>404 Page Not Found!</h2></div>
  }


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pay" element={<PayBill />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};
