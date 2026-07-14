import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";

const CyberConsulting = lazy(() => import("./pages/CyberConsulting"));
const WorkforceDevelopment = lazy(() => import("./pages/WorkforceDevelopment"));
const CyberPlug = lazy(() => import("./pages/CyberPlug"));
const LegacyInitiatives = lazy(() => import("./pages/LegacyInitiatives"));
const Institute = lazy(() => import("./pages/Institute"));
const About = lazy(() => import("./pages/About"));
const Investor = lazy(() => import("./pages/Investor"));
const Contact = lazy(() => import("./pages/Contact"));
const CyberChecklist = lazy(() => import("./pages/CyberChecklist"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const AppRoutes = () => (
  <Layout>
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cyber-consulting" element={<CyberConsulting />} />
        <Route path="/services" element={<Navigate to="/cyber-consulting" replace />} />
        <Route path="/workforce-development" element={<WorkforceDevelopment />} />
        <Route path="/cyberplug" element={<CyberPlug />} />
        <Route path="/legacy-initiatives" element={<LegacyInitiatives />} />
        <Route path="/legacy" element={<Navigate to="/legacy-initiatives" replace />} />
        <Route path="/institute" element={<Institute />} />
        <Route path="/about" element={<About />} />
        <Route path="/investors" element={<Investor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cyber-checklist" element={<CyberChecklist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Layout>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
