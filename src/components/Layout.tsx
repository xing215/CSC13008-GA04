import type { ReactNode } from "react";
import Header from "./Layout/Header.tsx";
import Footer from "./Layout/Footer.tsx";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;