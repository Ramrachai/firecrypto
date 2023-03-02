import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Routes/Home";
import CoinPage from "./Routes/CoinPage";
import Background from "./Components/Background";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/CoinPage/:id",
        element: <CoinPage />,
      },
    ],
    {
      basename: "/firecrypto",
    }
  );

  return (
    <div className="App">
      <Background />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
