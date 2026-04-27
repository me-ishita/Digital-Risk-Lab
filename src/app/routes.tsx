import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import AdvisoryHome from "@/app/pages/advisory/AdvisoryHome";
import { Services } from "./pages/advisory/Services";
import { Industries } from "./pages/advisory/Industries";
import { HowWeWork } from "./pages/advisory/HowWeWork";
import { CaseStudies } from "./pages/advisory/CaseStudies"; 
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";    
import { News } from "./pages/News";
import { Research } from "./pages/Research";
import { About } from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <AdvisoryHome /> },
      { path: "advisory/services", element: <Services /> },
      { path: "advisory/industries", element: <Industries /> },
      { path: "advisory/how-we-work", element: <HowWeWork /> },
      { path: "advisory/case-studies", element: <CaseStudies /> },
      { path: "contact", element: <Contact /> },
      { path: "advisory/about", element: <About /> },
      { path: "news", element: <News /> },
      { path: "research", element: <Research /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
