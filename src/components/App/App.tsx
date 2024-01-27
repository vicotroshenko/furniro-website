import Main from "../../pages/Main";
import { Routes, Route } from 'react-router-dom';
import SharedLayout from "../SharedLayout/SharedLayout";
import Shop from "../../pages/Shop";


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Main/>} />
        <Route path="shop" element={<Shop/>} />
      </Route>
    </Routes>
  )
}

export default App;
