import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect";


const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrainsMono",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Jeremiah Bankole",
  description: "My Porfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`mx-4 md:mx-0 ${jetBrainsMono.variable}`}
      >
        <Header />
        <StairEffect />
        <PageTransition>
            {children}
        </PageTransition>
      </body>
    </html>
  );
}
