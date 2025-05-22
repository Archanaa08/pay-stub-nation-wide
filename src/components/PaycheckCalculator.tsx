
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator } from 'lucide-react';
import { calculatePaycheck } from '@/utils/calculationUtils';

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
  
  const payFrequencies = [
    { id: 'weekly', label: 'Weekly' },
    { id: 'bi-weekly', label: 'Bi-Weekly (Every 2 Weeks)' },
    { id: 'semi-monthly', label: 'Semi-Monthly (Twice a Month)' },
    { id: 'monthly', label: 'Monthly' }
  ];
  
  const filingStatuses = [
    { id: 'single', label: 'Single' },
    { id: 'married', label: 'Married Filing Jointly' },
    { id: 'married-separate', label: 'Married Filing Separately' },
    { id: 'head', label: 'Head of Household' }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };
  
  return (
    <div className="calculator-container">
      <form onSubmit={handleCalculate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="form-group">
              <Label htmlFor="payRate">Pay Rate ($/hour or $/year)</Label>
              <Input
                id="payRate"
                type="number"
                placeholder="Enter your pay rate"
                step="0.01"
                value={formData.payRate}
                onChange={(e) => handleChange('payRate', e.target.value)}
                className="mt-1"
                required
              />
            </div>
            
            <div className="form-group">
              <Label htmlFor="payFrequency">Pay Frequency</Label>
              <Select 
                value={formData.payFrequency} 
                onValueChange={(value) => handleChange('payFrequency', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select pay frequency" />
                </SelectTrigger>
                <SelectContent>
                  {payFrequencies.map((frequency) => (
                    <SelectItem key={frequency.id} value={frequency.id}>
                      {frequency.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="form-group">
              <Label htmlFor="hoursPerWeek">Hours Per Week</Label>
              <Input
                id="hoursPerWeek"
                type="number"
                placeholder="Hours per week"
                value={formData.hoursPerWeek}
                onChange={(e) => handleChange('hoursPerWeek', e.target.value)}
                className="mt-1"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="form-group">
              <Label htmlFor="filingStatus">Filing Status</Label>
              <Select 
                value={formData.filingStatus} 
                onValueChange={(value) => handleChange('filingStatus', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select filing status" />
                </SelectTrigger>
                <SelectContent>
                  {filingStatuses.map((status) => (
                    <SelectItem key={status.id} value={status.id}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="form-group">
              <Label htmlFor="allowances">Allowances/Withholding Allowances</Label>
              <Input
                id="allowances"
                type="number"
                placeholder="Number of allowances"
                value={formData.allowances}
                onChange={(e) => handleChange('allowances', e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div className="form-group">
              <Label htmlFor="additionalWithholding">Additional Withholding ($)</Label>
              <Input
                id="additionalWithholding"
                type="number"
                step="0.01"
                placeholder="Additional withholding amount"
                value={formData.additionalWithholding}
                onChange={(e) => handleChange('additionalWithholding', e.target.value)}
                className="mt-1"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            type="submit"
            className="bg-finance-primary hover:bg-finance-secondary"
            size="lg"
          >
            <Calculator className="mr-2" size={18} />
            Calculate {stateName} Paycheck
          </Button>
        </div>
      </form>

      {results && (
        <Card className="mt-10">
          <CardHeader className="bg-finance-light border-b border-gray-200">
            <CardTitle className="text-finance-primary flex items-center">
              <Calculator className="mr-2" size={20} />
              {stateName} Paycheck Results
            </CardTitle>
            <CardDescription>
              Based on your inputs, here is your estimated {formData.payFrequency} paycheck breakdown
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-md">
                <p className="text-sm font-medium text-gray-500">Gross Pay</p>
                <p className="text-2xl font-bold text-finance-primary">{formatCurrency(results.grossPay)}</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-md">
                <p className="text-sm font-medium text-gray-500">Net Pay</p>
                <p className="text-2xl font-bold text-finance-success">{formatCurrency(results.netPay)}</p>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="space-y-4">
              <h3 className="font-medium text-lg text-finance-primary">Tax Withholdings</h3>
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm text-gray-500">Federal Income Tax</p>
                  <p className="font-medium">{formatCurrency(results.federalTax)}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">{stateName} State Tax</p>
                  <p className="font-medium">{formatCurrency(results.stateTax)}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Social Security</p>
                  <p className="font-medium">{formatCurrency(results.socialSecurity)}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Medicare</p>
                  <p className="font-medium">{formatCurrency(results.medicare)}</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 text-sm text-gray-500">
            This is an estimate. Actual amounts may vary.
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default PaycheckCalculator;
