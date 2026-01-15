import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
    <body
  className="text-slate-800 antialiased min-h-screen"
  style={{ backgroundColor: "#ece3da" }}
>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
