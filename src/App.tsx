import { createHashRouter, RouterProvider } from "react-router-dom";
import './App.css';
import 'swiper';
import { ForParnters, AboutPlatform, Policy } from "./pages/index";
import "./i18n/index";
import { RootLayout } from "./components";

function App() {
  const routerConfig = createHashRouter([
    {
      element: <RootLayout />,
      children: [
        { path: "/", element: <AboutPlatform /> },
        { path: "/for_partners", element: <ForParnters /> },
        { path: "/about_platform", element: <AboutPlatform /> },
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


