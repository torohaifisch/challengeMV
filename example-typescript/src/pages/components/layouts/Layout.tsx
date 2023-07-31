import { ReactNode } from "react";
import { Navbar } from "../navbar/Navbar";

// eslint-disable-next-line react/display-name
const Layout = () => (page: ReactNode) => {
  return (
    <main>
      <Navbar />
      <div className="container w-100">
        {page}
      </div>
    </main>
  );
};

Layout.displayName = "Layout";
export default Layout;