import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashcord",
  description: "Chat and connect to your friends and communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            storageKey="dashcord-theme"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
