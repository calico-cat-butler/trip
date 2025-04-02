import React, { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { TITLE, DESCRIPTION, FAVICON } from "@constants/metadata";
import Provider from "@components/common/Provider";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: FAVICON,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
  userScalable: true,
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
    <head>
      <link
        rel="stylesheet"
        as="style"
        crossOrigin="anonymous"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
      />
    </head>
    <body>
    <Provider>
      <div id="app">
        {children}
      </div>
    </Provider>
    </body>
    </html>
  );
}
