
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

interface PaycheckFormProps {
  formData: {
    payRate: string;
    payFrequency: string;
    hoursPerWeek: string;
    allowances: string;
    filingStatus: string;
    additionalWithholding: string;
  };
  handleChange: (name: string, value: string) => void;
  handleCalculate: (e: React.FormEvent) => void;
  stateName: string;
}

const PaycheckForm: React.FC<PaycheckFormProps> = ({ 
  formData, 
  handleChange, 
  handleCalculate,
  stateName 
}) => {
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

  return (
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
          className="bg-finance-primary hover:bg-finance-secondary transition-colors transform hover:scale-105 duration-200"
          size="lg"
        >
          <Calculator className="mr-2" size={18} />
          Calculate {stateName} Paycheck
        </Button>
      </div>
    </form>
  );
};

export default PaycheckForm;
