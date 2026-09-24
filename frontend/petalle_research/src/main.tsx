import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import Layout from "./Layout.tsx";
import Menu from "./pages/Menu/main.tsx";
import Register from "./pages/Register/main.tsx";
import Update from "./pages/Update/main.tsx";
import Delete from "./pages/Delete/main.tsx";
import List from "./pages/List/main.tsx";


const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<Layout/>}>
    <Route path="" element={<Menu/>}></Route>
    <Route path="/list" element={<List/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/update" element={<Update/>}></Route>
    <Route path="/delete" element={<Delete/>}></Route>
  </Route>)
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
