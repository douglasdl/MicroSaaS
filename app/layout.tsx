import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ept-BR">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
