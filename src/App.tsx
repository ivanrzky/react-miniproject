
import HeaderCustom from "./components/HeaderCustom";
// import ProfileCard from "./components/ProfileCard";
import Welcomes from "./components/Welcomes";
import Counter from "./components/Counter";
import FooterCustom from "./components/FooterCustom";
import Like from "./components/Like";
import { Routes, Route } from "react-router";
import TermsPage from "./pages/TermsPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPages";
import ProductListPage from "./pages/ProductListPage";





// const teachers : Teacher[] = [
//   {
//   job: "Dosen",
//   name: "Samsil",
//   year : 2023,
//   id : 1
//   },
//   {
//     name: "Hadi",
//     year : 2222,
//     job : "Mandi",
//     id : 2
//   },
//   {
//     name: "rahmat",
//     year : 1220,
//     job : "pengangguran",
//     id : 3
//   }
  
// ]
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/terms" element={<TermsPage />}/>
      <Route path="/product-list" element={<ProductListPage/>}/>
      
      {/* dynamic Route */}
      <Route path="/product/:productSlug" element={<ProductDetailPage />}/>

      <Route path="/*" element={<NotFoundPage/>}/>
    </Routes>
    </>
    
  );
}

export default App
