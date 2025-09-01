import type { Metadata } from "next";
import { Raleway, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/providers/theme-provider';

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
})

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Multiplayer Study Room",
  description: "Your virtual study group—whenever, wherever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lora.variable} ${raleway.variable} ${raleway.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
