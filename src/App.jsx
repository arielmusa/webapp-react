import { BrowserRouter, Route, Routes } from "react-router";
import "./assets/css/App.css";
import { Homepage } from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="movie/:id" element={<MovieDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
