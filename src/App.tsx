
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Faq from "./pages/Faq";

// Import state specific calculator pages
import CaliforniaPaycheckCalculator from "./pages/CaliforniaPaycheckCalculator";
import TexasPaycheckCalculator from "./pages/TexasPaycheckCalculator";
import FloridaPaycheckCalculator from "./pages/FloridaPaycheckCalculator";
import MichiganPaycheckCalculator from "./pages/MichiganPaycheckCalculator";
import ColoradoPaycheckCalculator from "./pages/ColoradoPaycheckCalculator";
import IndianaPaycheckCalculator from "./pages/IndianaPaycheckCalculator";
import MarylandPaycheckCalculator from "./pages/MarylandPaycheckCalculator";
import MissouriPaycheckCalculator from "./pages/MissouriPaycheckCalculator";
import NevadaPaycheckCalculator from "./pages/NevadaPaycheckCalculator";
import NorthCarolinaPaycheckCalculator from "./pages/NorthCarolinaPaycheckCalculator";
import UtahPaycheckCalculator from "./pages/UtahPaycheckCalculator";
import MinnesotaPaycheckCalculator from "./pages/MinnesotaPaycheckCalculator";
import OhioPaycheckCalculator from "./pages/OhioPaycheckCalculator";
import VirginiaPaycheckCalculator from "./pages/VirginiaPaycheckCalculator";
import WashingtonPaycheckCalculator from "./pages/WashingtonPaycheckCalculator";
import TennesseePaycheckCalculator from "./pages/TennesseePaycheckCalculator";
import AlabamaPaycheckCalculator from "./pages/AlabamaPaycheckCalculator";
import OklahomaPaycheckCalculator from "./pages/OklahomaPaycheckCalculator";
import NewJerseyPaycheckCalculator from "./pages/NewJerseyPaycheckCalculator";
import ArizonaPaycheckCalculator from "./pages/ArizonaPaycheckCalculator";
import ArkansasPaycheckCalculator from "./pages/ArkansasPaycheckCalculator";
import WisconsinPaycheckCalculator from "./pages/WisconsinPaycheckCalculator";
import KansasPaycheckCalculator from "./pages/KansasPaycheckCalculator";
import KentuckyPaycheckCalculator from "./pages/KentuckyPaycheckCalculator";

const queryClient = new QueryClient();

const SeoProvider = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Paycheck Calculator | Free Salary & Tax Calculator</title>
        <meta name="description" content="Free paycheck calculator to estimate your take-home pay with accurate federal and state tax calculations. Calculate your net pay for all 50 states." />
        <meta name="keywords" content="paycheck calculator, salary calculator, tax calculator, take-home pay, withholding calculator, net pay calculator, state tax calculator" />
        <link rel="canonical" href="https://salarycheck.me/" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Paycheck Calculator | Free Salary & Tax Calculator" />
        <meta property="og:description" content="Free paycheck calculator to estimate your take-home pay with accurate federal and state tax calculations." />
        <meta property="og:url" content="https://salarycheck.me/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Paycheck Calculator" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paycheck Calculator | Free Salary & Tax Calculator" />
        <meta name="twitter:description" content="Free paycheck calculator to estimate your take-home pay with accurate federal and state tax calculations." />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SalaryCheck.me" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en-US" />
        
        {/* Enhanced Schema markup for Organization and WebSite */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://salarycheck.me/#organization",
                  "name": "SalaryCheck.me",
                  "url": "https://salarycheck.me/",
                  "description": "Free paycheck calculator to estimate your take-home pay with accurate federal and state tax calculations.",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Customer Support",
                    "url": "https://salarycheck.me/contact"
                  },
                  "sameAs": [
                    "https://salarycheck.me/"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://salarycheck.me/#website",
                  "url": "https://salarycheck.me/",
                  "name": "Paycheck Calculator",
                  "description": "Free paycheck calculator to estimate your take-home pay with accurate federal and state tax calculations.",
                  "publisher": {
                    "@id": "https://salarycheck.me/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://salarycheck.me/{search_term_string}-paycheck-calculator"
                    },
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Paycheck Calculator",
                  "description": "Free online paycheck calculator for all US states with accurate tax calculations",
                  "url": "https://salarycheck.me/",
                  "applicationCategory": "FinanceApplication",
                  "operatingSystem": "Web Browser",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  "featureList": [
                    "State-specific tax calculations",
                    "Federal tax withholding",
                    "FICA tax calculations",
                    "Take-home pay estimation",
                    "Multiple pay frequency options"
                  ]
                }
              ]
            }
          `}
        </script>
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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            
            {/* State Paycheck Calculator Routes */}
            <Route path="/california-paycheck-calculator" element={<CaliforniaPaycheckCalculator />} />
            <Route path="/texas-paycheck-calculator" element={<TexasPaycheckCalculator />} />
            <Route path="/florida-paycheck-calculator" element={<FloridaPaycheckCalculator />} />
            <Route path="/michigan-paycheck-calculator" element={<MichiganPaycheckCalculator />} />
            <Route path="/colorado-paycheck-calculator" element={<ColoradoPaycheckCalculator />} />
            <Route path="/indiana-paycheck-calculator" element={<IndianaPaycheckCalculator />} />
            <Route path="/maryland-paycheck-calculator" element={<MarylandPaycheckCalculator />} />
            <Route path="/missouri-paycheck-calculator" element={<MissouriPaycheckCalculator />} />
            <Route path="/nevada-paycheck-calculator" element={<NevadaPaycheckCalculator />} />
            <Route path="/north-carolina-paycheck-calculator" element={<NorthCarolinaPaycheckCalculator />} />
            <Route path="/utah-paycheck-calculator" element={<UtahPaycheckCalculator />} />
            <Route path="/minnesota-paycheck-calculator" element={<MinnesotaPaycheckCalculator />} />
            <Route path="/ohio-paycheck-calculator" element={<OhioPaycheckCalculator />} />
            <Route path="/virginia-paycheck-calculator" element={<VirginiaPaycheckCalculator />} />
            <Route path="/washington-paycheck-calculator" element={<WashingtonPaycheckCalculator />} />
            <Route path="/tennessee-paycheck-calculator" element={<TennesseePaycheckCalculator />} />
            <Route path="/alabama-paycheck-calculator" element={<AlabamaPaycheckCalculator />} />
            <Route path="/oklahoma-paycheck-calculator" element={<OklahomaPaycheckCalculator />} />
            <Route path="/new-jersey-paycheck-calculator" element={<NewJerseyPaycheckCalculator />} />
            <Route path="/arizona-paycheck-calculator" element={<ArizonaPaycheckCalculator />} />
            <Route path="/arkansas-paycheck-calculator" element={<ArkansasPaycheckCalculator />} />
            <Route path="/wisconsin-paycheck-calculator" element={<WisconsinPaycheckCalculator />} />
            <Route path="/kansas-paycheck-calculator" element={<KansasPaycheckCalculator />} />
            <Route path="/kentucky-paycheck-calculator" element={<KentuckyPaycheckCalculator />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
