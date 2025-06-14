import { ReactNode } from "react";
import "./globals.css";
import { montserrat, notoSans } from "@/lib/fonts";

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
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
