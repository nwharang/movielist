import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Order from "./pages/Order";
import About from "./pages/About";
import NoPage from "./pages/Nopage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:type/:id" element={<Posts />} />
        <Route path="/order/:cinemaId/:session/:id" element={<Order />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}
export default App;