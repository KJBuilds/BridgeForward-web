import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import CyberConsulting from "./pages/CyberConsulting";
import WorkforceDevelopment from "./pages/WorkforceDevelopment";
import CyberPlug from "./pages/CyberPlug";
import LegacyInitiatives from "./pages/LegacyInitiatives";
import Institute from "./pages/Institute";
import About from "./pages/About";
import Investor from "./pages/Investor";
import Contact from "./pages/Contact";
import CyberChecklist from "./pages/CyberChecklist";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => (
  <Layout>
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
  </Layout>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
