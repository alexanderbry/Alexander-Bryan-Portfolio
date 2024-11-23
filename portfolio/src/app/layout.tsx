// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "Alexander Briyan's Portfolio",
  description:
    "I'm Alexander Briyan, a passionate Fullstack Software Developer from Indonesia. I have a diverse background, having transitioned from the banking industry to technology through Hacktiv8's full-stack JavaScript bootcamp, where I graduated with a strong foundation in web and mobile development. This journey allowed me to cultivate skills in various technologies, including React, React Native, Next.js, Node.js, TypeScript, MongoDB, GraphQL, and PostgreSQL. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
