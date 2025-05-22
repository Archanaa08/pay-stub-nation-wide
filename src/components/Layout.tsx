
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Home, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      document.title = `${title} | Paycheck Calculator`;
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
        <div className="container mx-auto py-4 px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="white" fillOpacity="0.2"/>
                <path d="M17 9V7C17 5.89543 16.1046 5 15 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H15C16.1046 19 17 18.1046 17 17V15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 8H8V16H12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 12H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18 9L21 12L18 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-display font-bold text-xl">Paycheck Calculator</span>
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="hover:text-finance-accent transition-colors flex items-center">
                    <Home size={18} className="mr-1" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-finance-accent transition-colors flex items-center">
                    <MessageSquare size={18} className="mr-1" />
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto py-8 px-4 md:px-6">
        {title && (
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-finance-primary">{title}</h1>
            {description && <p className="mt-2 text-gray-600 max-w-2xl mx-auto">{description}</p>}
          </div>
        )}
        {children}
      </main>
      
      <footer className="bg-finance-dark text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-display font-bold text-xl">Paycheck Calculator</p>
              <p className="text-sm text-gray-300 mt-1">Accurate Paycheck Calculations</p>
            </div>
            <div>
              <p className="text-sm text-gray-300">© {new Date().getFullYear()} <a href="https://salarycheck.me" className="hover:text-finance-accent transition-colors">salarycheck.me</a>. All rights reserved.</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-sm text-gray-400">
            <p>Disclaimer: This calculator provides estimates only and should not be used for tax filing purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
