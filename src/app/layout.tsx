import { Source_Sans_3, Merriweather } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/providers/TanStackProvider";
import StyledComponentsRegistry from "@/providers/StyleSheetManager";
import { Metadata } from "next";

 const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: '--font-source-sans',  
});


const merriweathe = Merriweather({ 
  subsets: ["latin"],
  variable: '--merriweather',  
  weight: "700"
});

export const metadata: Metadata = {
  title: 'NewsLetter',
  description: 'Subscribe now',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${merriweathe.variable}` } >
      <body >
        <TanStackProvider>
          <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
        </TanStackProvider>
      </body>
    </html>
  );
}
