import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Providers from "./providers";
import Header from "@/_components/header";
import Footer from "@/_components/footer";
import getCurrentUser from "@/actions/user/current/get";
import ThemeModal from "@/_components/theme-modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beapro",
  description: "Break Down Big Projects into Manageable Tasks with AI",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  return (
    <html lang="en" className="orange" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            <Header user={user} />
            <ThemeModal />
            <main className="">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
