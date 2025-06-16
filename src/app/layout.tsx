import { ReactNode } from "react";
import "./globals.css";
import { montserrat, notoSans } from "@/lib/fonts";
import Header from "@/components/HeaderComps/Header";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${montserrat.variable} scroll-smooth antialiased`}
      suppressHydrationWarning>
      <body>
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
