import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Portfolio } from "./pages/Portfolio";
import { AllAchievements } from "./pages/AllAchievements";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Portfolio />} />
          <Route path="/achievements/all" element={<AllAchievements />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
