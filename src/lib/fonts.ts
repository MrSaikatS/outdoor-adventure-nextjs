import { Montserrat, Noto_Sans } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-montserrat",
});

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-noto-sans",
});
