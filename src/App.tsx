
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
        <title>Free Paycheck Calculator 2025 | State Tax Calculator for All 50 States</title>
        <meta name="description" content="Free paycheck calculator for all 50 states. Calculate your take-home pay, tax withholdings, and net salary with accurate federal and state tax calculations. Updated for 2025 tax rates and completely free to use." />
        <meta name="keywords" content="free paycheck calculator, state tax calculator, salary calculator, take-home pay calculator, tax withholding calculator, net pay calculator, federal tax calculator, state income tax calculator, payroll calculator 2025" />
        <link rel="canonical" href="https://salarycheck.me/" />
        
        {/* Enhanced Mobile Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Free Paycheck Calculator 2025 | State Tax Calculator for All 50 States" />
        <meta property="og:description" content="Free paycheck calculator for all 50 states. Calculate your take-home pay with accurate tax calculations. Updated for 2025." />
        <meta property="og:url" content="https://salarycheck.me/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SalaryCheck.me" />
        <meta property="og:image" content="https://salarycheck.me/opengraph-image.png" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Paycheck Calculator 2025 | State Tax Calculator" />
        <meta name="twitter:description" content="Free paycheck calculator for all 50 states. Calculate your take-home pay with accurate tax calculations." />
        <meta name="twitter:image" content="https://salarycheck.me/opengraph-image.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SalaryCheck.me" />
        <meta httpEquiv="Content-Language" content="en-US" />
        <meta name="theme-color" content="#114275" />
        
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
                  "description": "Free paycheck calculator for all 50 states with accurate federal and state tax calculations.",
                  "foundingDate": "2024",
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
                  "name": "Free Paycheck Calculator",
                  "description": "Free paycheck calculator for all 50 states with accurate federal and state tax calculations. Updated for 2025.",
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
                  "name": "Free Paycheck Calculator 2025",
                  "description": "Free online paycheck calculator for all US states with accurate tax calculations and take-home pay estimates",
                  "url": "https://salarycheck.me/",
                  "applicationCategory": "FinanceApplication",
                  "operatingSystem": "Web Browser",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  "featureList": [
                    "State-specific tax calculations for all 50 states",
                    "Federal tax withholding calculations",
                    "FICA tax calculations (Social Security and Medicare)",
                    "Take-home pay estimation",
                    "Multiple pay frequency options",
                    "2025 updated tax rates",
                    "Mobile-responsive design",
                    "Completely free to use"
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
  <HelmetProvider>
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
  </HelmetProvider>
);

export default App;
