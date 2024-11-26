import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import ReadPage from "./pages/ReadPage";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreatePage />} />
          <Route path="/read" element={<ReadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
