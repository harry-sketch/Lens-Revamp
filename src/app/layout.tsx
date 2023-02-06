import { Spline_Sans } from "@next/font/google";

// Styles
import "./globals.css";

// Toast
import Toast from "@/components/common/Toast";

// Utils
import { cw } from "@/utils/helpers";
import PackageProvider from "@/components/PackageProvider/PackageProvider";

const spline = Spline_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body
        className={cw("bg-custom-lens01 w-full min-h-screen", spline.className)}
      >
        <PackageProvider>
          <Toast />
          {children}
        </PackageProvider>
      </body>
    </html>
  );
}
