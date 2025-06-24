import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CustomScrollToTop from "../Common/CustomScrollToTop";
const Layout = () => {
  return (
    <div>
      <CustomScrollToTop />
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
