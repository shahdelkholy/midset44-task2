import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from "./App";
import AllAbout from "./About/AllAbout";
import AllServices from "./Services/AllServices";    
import AllFeatures from "./Features/AllFeatures";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  
  {
    path: "about",
    element: <AllAbout/>,
  },

    {
    path: "services",
    element: <AllServices/>,
  },

      {
    path: "features",
    element: <AllFeatures/>,
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
































// import ReactDOM from 'react-dom/client';    
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

