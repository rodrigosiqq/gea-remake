import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "./providers/sessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gestão de Equipamentos Alugados",
  description: "Developement by @rodrigosiqq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
       <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </body>
    </html>
  );
}
