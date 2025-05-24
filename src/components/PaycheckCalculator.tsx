
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calculator, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { calculatePaycheck } from '@/utils/calculationUtils';
import { states } from '@/utils/stateData';
import PaycheckForm from './PaycheckForm';
import PaycheckResults from './PaycheckResults';

interface PaycheckCalculatorProps {
  stateName: string;
  stateAbbreviation: string;
}

const PaycheckCalculator: React.FC<PaycheckCalculatorProps> = ({ stateName, stateAbbreviation }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    payRate: '',
    payFrequency: 'bi-weekly',
    hoursPerWeek: '40',
    allowances: '1',
    filingStatus: 'single',
    additionalWithholding: '',
  });
  
  const [results, setResults] = useState<{
    grossPay: number;
    federalTax: number;
    stateTax: number;
    socialSecurity: number;
    medicare: number;
    netPay: number;
  } | null>(null);
  
  const [activeChart, setActiveChart] = useState<'pie' | 'bar'>('pie');

  // Get other states for internal linking (exclude current state)
  const otherStates = states.filter(state => state.abbreviation !== stateAbbreviation).slice(0, 5);

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    const calculationResults = calculatePaycheck({
      payRate: parseFloat(formData.payRate) || 0,
      payFrequency: formData.payFrequency,
      hoursPerWeek: parseFloat(formData.hoursPerWeek) || 0,
      allowances: parseInt(formData.allowances) || 0,
      filingStatus: formData.filingStatus,
      additionalWithholding: parseFloat(formData.additionalWithholding) || 0,
      state: stateAbbreviation,
    });
    
    setResults(calculationResults);
  };

  const handleCalculateAgain = () => {
    setResults(null);
    setFormData({
      payRate: '',
      payFrequency: 'bi-weekly',
      hoursPerWeek: '40',
      allowances: '1',
      filingStatus: 'single',
      additionalWithholding: '',
    });
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="calculator-container">
      {/* Header with navigation */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Button 
          onClick={handleGoBack}
          variant="outline"
          className="flex items-center gap-2 w-fit"
        >
          <ArrowLeft size={16} />
          Go Back
        </Button>
        
        <div className="flex items-center gap-2 text-finance-primary">
          <Calculator size={20} />
          <h1 className="text-xl font-semibold">{stateName} Paycheck Calculator</h1>
        </div>
      </div>

      <PaycheckForm 
        formData={formData} 
        handleChange={handleChange} 
        handleCalculate={handleCalculate}
        stateName={stateName}
      />

      {results && (
        <>
          <PaycheckResults 
            results={results} 
            stateName={stateName} 
            payFrequency={formData.payFrequency}
            activeChart={activeChart}
            setActiveChart={setActiveChart}
          />
          
          {/* Calculate Again Button */}
          <div className="mt-6 text-center">
            <Button 
              onClick={handleCalculateAgain}
              variant="outline"
              className="flex items-center gap-2 mx-auto"
            >
              <RotateCcw size={16} />
              Calculate Again
            </Button>
          </div>
        </>
      )}

      {/* Internal Linking Section */}
      <div className="mt-12 p-6 bg-finance-light rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold text-finance-primary mb-4">
          Try Other State Calculators
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {otherStates.map((state) => (
            <Link
              key={state.abbreviation}
              to={state.path}
              className="block p-3 bg-white hover:bg-finance-light/50 rounded border border-gray-100 hover:border-finance-accent transition-colors text-center"
            >
              <div className="font-medium text-finance-secondary">
                {state.name}
              </div>
              <div className="text-sm text-gray-600">
                Paycheck Calculator
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link 
            to="/"
            className="text-finance-accent hover:underline text-sm"
          >
            View all state calculators →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaycheckCalculator;
