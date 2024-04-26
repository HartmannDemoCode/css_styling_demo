import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";


import App from './App.jsx'
import ErrorPage from './components/error-page.jsx';
import BasicCSS from './components/basicCSS/BasicCSS';
import CssModulesDemo from './components/cssmodules/CssModules'
import TailwindDemo from './components/tailwind/TailwindDemo'
import Flexbox from './components/flexbox/FlexboxCSS'
import CSSGrid from './components/cssgrid/CSSGrid'
import TesterComp from './components/tester/TesterComp'
import BasicFlex from './components/basicflex/BasicFlex'
import StyledComp from './components/styledComponents/StyledCompDemo'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="/test" element={<TesterComp />} />
      <Route path="/basiccss" element={<BasicCSS />} />
      <Route path="/cssmodules" element={<CssModulesDemo />} />
      <Route path="/flexbox" element={<Flexbox />} />
      <Route path="/basicflex" element={<BasicFlex />} />
      <Route path="/cssgrid" element={<CSSGrid/>} />
      <Route path="/tailwind" element={<TailwindDemo />} />
      <Route path="/styledcomponents" element={<StyledComp />} />
    </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
