import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from "./App";
import AllAbout from "./About/AllAbout";
import AllServices from "./Services/AllServices";    
import AllFeatures from "./Features/AllFeatures";
import { AllData } from "./Data/AllData";
import AllShop from "./Shop/AllShop";
import AllCart from "./Cart/AllCart";
import { CartProvider } from "react-use-cart";


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

     {
    path: "Shop",
    element: <AllShop/>,
  },
      {
    path: "Cart",
    element: <AllCart/>,
  },

]);

createRoot(document.getElementById("root")).render(

  <CartProvider>
<AllData>
  <RouterProvider router={router} />

</AllData>
  </CartProvider>


);
































// import ReactDOM from 'react-dom/client';    
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

