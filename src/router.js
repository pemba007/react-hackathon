import { createBrowserRouter } from "react-router-dom";

import Root from "./routes/root";
import Test from "./routes/test";
import Test2 from "./routes/test2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader
  },

  {
    path: "test",
    element: <Test />,
    errorElement: <Test2 />,
    // loader: postLoader,
  },
]);

export default router;
