
import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { states } from '@/utils/stateData';

const FloatingCalculatorButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popularStates = states.slice(0, 6); // Show first 6 states as quick access options

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button 
            size="lg" 
            className="w-14 h-14 rounded-full shadow-lg bg-finance-accent hover:bg-finance-accent/90 transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Calculator className="h-6 w-6" />
            <span className="sr-only">Open calculator selector</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          side="top" 
          className="w-72 p-4 animate-scale-in"
          align="end"
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-center mb-3">Quick Calculator Access</h3>
            <div className="grid grid-cols-2 gap-2">
              {popularStates.map((state) => (
                <Link 
                  key={state.abbreviation}
                  to={state.path}
                  className="block p-2 bg-finance-light hover:bg-finance-light/80 rounded text-center text-sm transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {state.name}
                </Link>
              ))}
            </div>
            <div className="pt-2 mt-2 border-t border-gray-200">
              <Link 
                to="/"
                className="block text-center text-sm text-finance-primary hover:underline"
                onClick={() => setIsOpen(false)}
              >
                View all states
              </Link>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FloatingCalculatorButton;
