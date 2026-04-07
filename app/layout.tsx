import "../styles/globals.css";

export const metadata = {
  title: "AMARG SoftDev - Software Development",
  description: "Web, mobile, automation and custom software services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}