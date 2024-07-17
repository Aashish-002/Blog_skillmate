import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import AuthProvider from "@/providers/AuthProviders";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.skillmate.ai"),
  keywords: ["Skillmate Blogs", "Skillmate Careers", "Skillmate workplace tips", "Skillmate resume advice"],
  title: {
    default: "Skillmate Blog",
    template: `%s | Skillmate Blog`
  },
  openGraph: {
    description: "Discover the Extraordinary, Unlock expert advice, actionable tips, and inspiring stories to accelerate your professional journey, Transform. Thrive. Succeed.",
    images: ['']
  }
  // description: "Where genuine skill meets opportunity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <AuthProvider>
          <Header />
          <main className="flex-1 w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 mx-auto flex flex-col justify-center">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
