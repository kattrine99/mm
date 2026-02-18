import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import 'swiper';
import { ForParnters, Franchise, Policy, MainPage } from "./pages/index";
import "./i18n/index";
import { RootLayout } from "./components";

function App() {
  const routerConfig = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/for_partners", element: <ForParnters /> },
        { path: "/franchise", element: <Franchise /> },
        { path: "/policy", element: <Policy /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>

  )
}

export default App


