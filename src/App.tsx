
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

// Import state specific calculator pages
import MichiganPaycheckCalculator from "./pages/MichiganPaycheckCalculator";
import ColoradoPaycheckCalculator from "./pages/ColoradoPaycheckCalculator";
import IndianaPaycheckCalculator from "./pages/IndianaPaycheckCalculator";
import MarylandPaycheckCalculator from "./pages/MarylandPaycheckCalculator";
import MissouriPaycheckCalculator from "./pages/MissouriPaycheckCalculator";
import NevadaPaycheckCalculator from "./pages/NevadaPaycheckCalculator";
import NorthCarolinaPaycheckCalculator from "./pages/NorthCarolinaPaycheckCalculator";
import UtahPaycheckCalculator from "./pages/UtahPaycheckCalculator";
import MinnesotaPaycheckCalculator from "./pages/MinnesotaPaycheckCalculator";

const queryClient = new QueryClient();

const SeoProvider = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Paycheck Calculator | Free Salary & Tax Calculator</title>
        <meta name="description" content="Free paycheck calculator to estimate your take-home pay with accurate federal and state tax calculations." />
        <meta name="keywords" content="paycheck calculator, salary calculator, tax calculator, take-home pay, withholding calculator" />
        <link rel="canonical" href="https://salarycheck.me/" />
        <meta property="og:title" content="Paycheck Calculator | Free Salary & Tax Calculator" />
        <meta property="og:description" content="Free paycheck calculator to estimate your take-home pay with accurate federal and state tax calculations." />
        <meta property="og:url" content="https://salarycheck.me/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Outlet />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SeoProvider />}>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* State Paycheck Calculator Routes */}
            <Route path="/michigan-paycheck-calculator" element={<MichiganPaycheckCalculator />} />
            <Route path="/colorado-paycheck-calculator" element={<ColoradoPaycheckCalculator />} />
            <Route path="/indiana-paycheck-calculator" element={<IndianaPaycheckCalculator />} />
            <Route path="/maryland-paycheck-calculator" element={<MarylandPaycheckCalculator />} />
            <Route path="/missouri-paycheck-calculator" element={<MissouriPaycheckCalculator />} />
            <Route path="/nevada-paycheck-calculator" element={<NevadaPaycheckCalculator />} />
            <Route path="/north-carolina-paycheck-calculator" element={<NorthCarolinaPaycheckCalculator />} />
            <Route path="/utah-paycheck-calculator" element={<UtahPaycheckCalculator />} />
            <Route path="/minnesota-paycheck-calculator" element={<MinnesotaPaycheckCalculator />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
