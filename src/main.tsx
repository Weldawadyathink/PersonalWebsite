import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function lazyLoadComponent(route: string) {
  const LazyComponent = lazy(() => import(`./routes/${route}.tsx`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: lazyLoadComponent("index"),
  },
  {
    path: "test",
    element: <span>Testing</span>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
