
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Home } from 'lucide-react';
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
      document.title = `${title} | PayStub Nation`;
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
              <Calculator size={28} />
              <span className="font-display font-bold text-xl">PayStub Nation</span>
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="hover:text-finance-accent transition-colors flex items-center">
                    <Home size={18} className="mr-1" />
                    <span>Home</span>
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
              <p className="font-display font-bold text-xl">PayStub Nation</p>
              <p className="text-sm text-gray-300 mt-1">Accurate Paycheck Calculators</p>
            </div>
            <div>
              <p className="text-sm text-gray-300">© {new Date().getFullYear()} PayStub Nation. All rights reserved.</p>
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
