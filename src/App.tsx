import { BrowserRouter, Route, Routes } from "react-router"
import { MainLayout } from "./layouts/mainlayout"
import { MainPage } from "./pages/mainpage"
import { DetailsShoePage } from "./pages/detailsshoepage"
import { Cart } from "./pages/cart"
import { CartProvider } from "./context/cartcontext"

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/details" element={<DetailsShoePage />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
