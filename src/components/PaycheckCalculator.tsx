
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, ChartPie } from 'lucide-react';
import { calculatePaycheck } from '@/utils/calculationUtils';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

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
  
  const getChartData = () => {
    if (!results) return [];
    
    return [
      { name: 'Federal Tax', value: results.federalTax, color: '#f87171' },
      { name: 'State Tax', value: results.stateTax, color: '#60a5fa' },
      { name: 'Social Security', value: results.socialSecurity, color: '#fbbf24' },
      { name: 'Medicare', value: results.medicare, color: '#a3e635' },
      { name: 'Net Pay', value: results.netPay, color: '#34d399' }
    ];
  };
  
  const getBarChartData = () => {
    if (!results) return [];
    
    return [
      { name: 'Gross Pay', amount: results.grossPay },
      { name: 'Net Pay', amount: results.netPay },
      { name: 'Deductions', amount: results.grossPay - results.netPay }
    ];
  };
  
  const chartConfig = {
    federalTax: { label: 'Federal Tax', color: '#f87171' },
    stateTax: { label: 'State Tax', color: '#60a5fa' },
    socialSecurity: { label: 'Social Security', color: '#fbbf24' },
    medicare: { label: 'Medicare', color: '#a3e635' },
    netPay: { label: 'Net Pay', color: '#34d399' },
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
            className="bg-finance-primary hover:bg-finance-secondary transition-colors transform hover:scale-105 duration-200"
            size="lg"
          >
            <Calculator className="mr-2" size={18} />
            Calculate {stateName} Paycheck
          </Button>
        </div>
      </form>

      {results && (
        <div className="mt-10 space-y-8 animate-fade-in">
          <Card>
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
                <div className="p-4 bg-gray-50 rounded-md border-l-4 border-finance-primary transition-all hover:shadow-md">
                  <p className="text-sm font-medium text-gray-500">Gross Pay</p>
                  <p className="text-2xl font-bold text-finance-primary">{formatCurrency(results.grossPay)}</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-md border-l-4 border-finance-success transition-all hover:shadow-md">
                  <p className="text-sm font-medium text-gray-500">Net Pay</p>
                  <p className="text-2xl font-bold text-finance-success">{formatCurrency(results.netPay)}</p>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-lg text-finance-primary">Tax Withholdings</h3>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveChart('pie')}
                      className={activeChart === 'pie' ? "border-finance-primary text-finance-primary" : ""}
                    >
                      <ChartPie size={16} className="mr-1" />
                      Pie Chart
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveChart('bar')}
                      className={activeChart === 'bar' ? "border-finance-primary text-finance-primary" : ""}
                    >
                      <ChartPie size={16} className="mr-1" />
                      Bar Chart
                    </Button>
                  </div>
                </div>
                
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

                <div className="mt-6 h-64 sm:h-80">
                  {activeChart === 'pie' ? (
                    <ChartContainer config={chartConfig} className="h-full">
                      <PieChart>
                        <Pie
                          data={getChartData()}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius="80%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {getChartData().map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ChartContainer>
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={getBarChartData()}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis 
                          tickFormatter={(value) => 
                            new Intl.NumberFormat('en-US', { 
                              style: 'currency', 
                              currency: 'USD',
                              maximumFractionDigits: 0
                            }).format(value)
                          }
                        />
                        <Tooltip 
                          formatter={(value) => [formatCurrency(Number(value)), "Amount"]}
                          labelStyle={{ color: "#114275", fontWeight: "bold" }}
                        />
                        <Legend />
                        <Bar dataKey="amount" name="Amount" fill="#114275" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 text-sm text-gray-500">
              This is an estimate. Actual amounts may vary.
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PaycheckCalculator;
