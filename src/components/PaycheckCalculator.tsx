
import React, { useState } from 'react';
import { calculatePaycheck } from '@/utils/calculationUtils';
import PaycheckForm from './PaycheckForm';
import PaycheckResults from './PaycheckResults';

interface PaycheckCalculatorProps {
  stateName: string;
  stateAbbreviation: string;
}

const PaycheckCalculator: React.FC<PaycheckCalculatorProps> = ({ stateName, stateAbbreviation }) => {
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
  
  return (
    <div className="calculator-container">
      <PaycheckForm 
        formData={formData} 
        handleChange={handleChange} 
        handleCalculate={handleCalculate}
        stateName={stateName}
      />

      {results && (
        <PaycheckResults 
          results={results} 
          stateName={stateName} 
          payFrequency={formData.payFrequency}
          activeChart={activeChart}
          setActiveChart={setActiveChart}
        />
      )}
    </div>
  );
};

export default PaycheckCalculator;
