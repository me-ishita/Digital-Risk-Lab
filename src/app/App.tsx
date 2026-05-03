import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "next-themes";

export default function App() {
  const appRouter = router;
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  );
}
