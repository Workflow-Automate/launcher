
import { Provider } from "../components/ui/provider"
// import "./globals.css";

export const metadata = {
  title: "FINCA App Launcher",
  description: "Launch work apps from here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}