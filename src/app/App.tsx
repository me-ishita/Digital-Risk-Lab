import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default function App() {
  const appRouter = router;
  return <RouterProvider router={appRouter} />;
}
