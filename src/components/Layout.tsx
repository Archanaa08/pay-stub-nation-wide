
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Home, MessageSquare, Info, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { states } from '@/utils/stateData';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description, keywords }) => {
  // Set document title for SEO
  React.useEffect(() => {
    if (title) {
      document.title = `${title} | Free Paycheck Calculator`;
    }
    
    // Set meta description for SEO
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.getElementsByTagName('head')[0].appendChild(meta);
      }
    }

    // Set meta keywords for SEO
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.getElementsByTagName('head')[0].appendChild(meta);
      }
    }
  }, [title, description, keywords]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-finance-primary text-white shadow-md">
        <div className="container mx-auto py-3 md:py-4 px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-7 md:h-7">
                <rect width="24" height="24" rx="4" fill="white" fillOpacity="0.2"/>
                <path d="M17 9V7C17 5.89543 16.1046 5 15 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H15C16.1046 19 17 18.1046 17 17V15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 8H8V16H12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 12H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18 9L21 12L18 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-display font-bold text-lg md:text-xl">Free Paycheck Calculator</span>
            </Link>
            <nav className="hidden sm:block">
              <ul className="flex space-x-4 md:space-x-6">
                <li>
                  <Link to="/" className="hover:text-finance-accent transition-colors flex items-center text-sm md:text-base">
                    <Home size={16} className="mr-1 md:w-4 md:h-4" />
                    <span className="hidden md:inline">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-finance-accent transition-colors flex items-center text-sm md:text-base">
                    <Info size={16} className="mr-1 md:w-4 md:h-4" />
                    <span className="hidden md:inline">About</span>
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-finance-accent transition-colors flex items-center text-sm md:text-base">
                    <HelpCircle size={16} className="mr-1 md:w-4 md:h-4" />
                    <span className="hidden md:inline">FAQ</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-finance-accent transition-colors flex items-center text-sm md:text-base">
                    <MessageSquare size={16} className="mr-1 md:w-4 md:h-4" />
                    <span className="hidden md:inline">Contact</span>
                  </Link>
                </li>
              </ul>
            </nav>
            
            {/* Mobile menu button */}
            <div className="sm:hidden">
              <Link to="/" className="text-finance-accent text-sm font-semibold">
                Menu
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto py-6 md:py-8 px-4 md:px-6">
        {title && (
          <div className="mb-6 md:mb-8 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-finance-primary">{title}</h1>
            {description && <p className="mt-2 md:mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">{description}</p>}
          </div>
        )}
        {children}
      </main>
      
      <footer className="bg-finance-dark text-white py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <p className="font-display font-bold text-lg md:text-xl mb-3 md:mb-4">Free Paycheck Calculator</p>
              <p className="text-sm text-gray-300">Accurate paycheck calculations to estimate your take-home pay with federal and state taxes and deductions for all 50 states.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-base md:text-lg mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-finance-accent transition-colors text-sm">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-finance-accent transition-colors text-sm">About</Link></li>
                <li><Link to="/faq" className="text-gray-300 hover:text-finance-accent transition-colors text-sm">FAQ</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-finance-accent transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="font-semibold text-base md:text-lg mb-3">State Paycheck Calculators</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
                {states.map((state) => (
                  <Link 
                    key={state.abbreviation}
                    to={state.path}
                    className="text-gray-300 hover:text-finance-accent transition-colors text-xs md:text-sm truncate"
                    title={`${state.name} Paycheck Calculator`}
                  >
                    {state.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-xs md:text-sm text-gray-300">© {new Date().getFullYear()} <a href="https://salarycheck.me" className="hover:text-finance-accent transition-colors">salarycheck.me</a>. All rights reserved.</p>
            <p className="text-xs text-gray-400 text-center md:text-right">Disclaimer: This calculator provides estimates only and should not be used for tax filing purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
