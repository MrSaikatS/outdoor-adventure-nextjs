import { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
