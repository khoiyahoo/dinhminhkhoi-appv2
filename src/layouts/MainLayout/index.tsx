import Footer from "@/myComponents/Footer";
import Header from "@/myComponents/Header";
import { type FC, type ReactNode } from "react";

export interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="font-mitr">{children}</main>
      <Footer />
    </>
  );
};
export default MainLayout;
