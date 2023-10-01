import { Route, Routes } from "react-router-dom";
import "./app.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import ScrollToTop from "./utils/ScrollTo";

const App = () => {
  return (
    <div className="app__container">
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
};

export default App;
