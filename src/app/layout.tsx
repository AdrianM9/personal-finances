import React from "react";

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <title>Personal Finances</title>
    </head>
    <body>
    {children}
    </body>
    </html>
  );
}
