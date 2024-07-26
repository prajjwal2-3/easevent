import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/wrapper/Header";
import Footer from "@/components/wrapper/Footer";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easevent",
  description: "Made by prajjwal sharma",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
      <div className=''>
        
        <NextAuthSessionProvider session={session} >
          {session && <Header />}
          <main className="pt-[3.9rem]">{children}</main>
        {session && <Footer/>}
          
        </NextAuthSessionProvider>
       
      </div>
      <Toaster />
      </body>
    </html>
  );
}
