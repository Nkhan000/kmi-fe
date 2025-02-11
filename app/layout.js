import "@/app/_styles/globals.css";

import { Josefin_Sans, Roboto } from "next/font/google";
import Header from "./_components/Header";
// import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin",
});
import { Outfit } from "next/font/google";
import Footer from "./_components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "100", "300"],
  variable: "--font-outfit",
});

export const metadata = {
  title: {
    template: "%s | Scholarships Portal",
    default: "Welcome | The Scholarship portal",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} ${outfit.className}  text-primary-100 min-h-screen `}
      >
        <Header />
        <div className="flex-1 grid ">
          <main className="overflow-y-hidden">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
