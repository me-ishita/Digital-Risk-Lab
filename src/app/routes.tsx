import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import AdvisoryHome from "@/app/pages/advisory/AdvisoryHome";
import { Services } from "./pages/advisory/Services";
import { CaseStudies } from "./pages/advisory/CaseStudies";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { News } from "./pages/News";
import { Research } from "./pages/Research";
import { Innovation } from "./pages/advisory/Innovation";
import { Incubation } from "./pages/advisory/Incubation";
import { Acceleration } from "./pages/advisory/Accelaration";
import { NewsArticleDetail } from "./pages/NewsArticleDetail";
import { ResearchPaperDetail } from "./pages/ResearchPaperDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <AdvisoryHome /> },
      { path: "advisory/services", element: <Services /> },
      { path: "advisory/case-studies", element: <CaseStudies /> },
      { path: "innovation", element: <Innovation /> },
      { path: "about", element: <About/>},
      { path: "contact", element: <Contact /> },
      { path: "news", element: <News /> },
      { path: "news/:id", element: <NewsArticleDetail /> },
      { path: "research", element: <Research /> },
      { path: "research/:id", element: <ResearchPaperDetail /> },
      { path: "incubation", element: <Incubation /> },
      { path: "acceleration", element: <Acceleration /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
