import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShippingPage from "./pages/ShippingPage";
import PrivateRoutes from "./components/PrivateRoutes";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderPage from "./pages/OrderPage";
import ProfilePage from "./pages/ProfilePage";
import AdminRoutes from "./components/AdminRoutes";
import OrderListPage from "./pages/admin/OrderListPage";
import ProductListPage from "./pages/admin/ProductListPage";
import UserListPage from "./pages/admin/userListPage";
import ProductEditPage from "./pages/admin/ProductEditPage";
import UserEditPage from "./pages/admin/UserEditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/search/:keyword" element={<HomePage />} />
          <Route path="/page/:pageNumber" element={<HomePage />} />
          <Route
            path="/search/:keyword/page/:pageNumber"
            element={<HomePage />}
          />

          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="" element={<PrivateRoutes />}>
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/placeOrder" element={<PlaceOrderPage />} />
            <Route path="/order/:id" element={<OrderPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          <Route path="" element={<AdminRoutes />}>
            <Route path="/admin/orderList" element={<OrderListPage />} />
            <Route path="/admin/productList" element={<ProductListPage />} />
            <Route
              path="/admin/productList/:pageNumber"
              element={<ProductListPage />}
            />
            <Route path="/admin/userList" element={<UserListPage />} />
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditPage />}
            />
            <Route path="/admin/user/:id/edit" element={<UserEditPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
