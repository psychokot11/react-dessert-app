import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainDessertsPage from "./pages/MainDessertsPage";
import NewDessertPage from "./pages/NewDessertPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/layout/Layout";
import Starred from "./pages/Starred";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<MainDessertsPage />} />
            <Route path="new-dessert" element={<NewDessertPage />} />
            <Route path="starred" element={<Starred />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
