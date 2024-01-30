import Main from "../../pages/Main";
import { Routes, Route } from 'react-router-dom';
import SharedLayout from "../SharedLayout/SharedLayout";
import Shop from "../../pages/Shop";
import ItemPage from "../../pages/ItemPage";


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Main/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="shop/:id" element={<ItemPage/>} />
      </Route>
    </Routes>
  )
}

export default App;
