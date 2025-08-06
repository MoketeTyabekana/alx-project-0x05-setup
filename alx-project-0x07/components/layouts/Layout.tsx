import {ReactComponentProps} from "@/interfaces";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout:React.FC<ReactComponentProps> = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;