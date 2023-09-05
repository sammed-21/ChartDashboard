import "./globals.css";
import { Inter } from "next/font/google";
 const inter = Inter({ subsets: ["latin"] });
import AuthProvider from "@/components/authProvider";

export const metadata = {
  title: "Sammed Dev",
  description: "This is my description",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <div className="">

        <AuthProvider>{children}</AuthProvider>
        </div>
      </body>
    </html>
  );
}
