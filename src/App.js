import "./App.scss";
import HomePageComponents from "./pages/homepage/HomePageComponents";
import Emailtemplete1 from "./components/emailtemplete/Emailtemplet1/Emailtemplete1";
import Emailtemplete2 from "./components/emailtemplete/Emailtemplete2/Emailtemplete2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePageComponents />} />
        <Route exact path="/email-template1" element={<Emailtemplete1 />} />
        <Route exact path="/email-template2" element={<Emailtemplete2 />} />
      </Routes>
    </Router>
  );
}

export default App;
