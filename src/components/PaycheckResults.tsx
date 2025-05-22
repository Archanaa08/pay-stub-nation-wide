
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Calculator, ChartPie } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

interface PaycheckResultsProps {
  results: {
    grossPay: number;
    federalTax: number;
    stateTax: number;
    socialSecurity: number;
    medicare: number;
    netPay: number;
  };
  stateName: string;
  payFrequency: string;
  activeChart: 'pie' | 'bar';
  setActiveChart: (chart: 'pie' | 'bar') => void;
}

const PaycheckResults: React.FC<PaycheckResultsProps> = ({ 
  results, 
  stateName, 
  payFrequency,
  activeChart,
  setActiveChart
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };
  
  const getChartData = () => {
    return [
      { name: 'Federal Tax', value: results.federalTax, color: '#f87171' },
      { name: 'State Tax', value: results.stateTax, color: '#60a5fa' },
      { name: 'Social Security', value: results.socialSecurity, color: '#fbbf24' },
      { name: 'Medicare', value: results.medicare, color: '#a3e635' },
      { name: 'Net Pay', value: results.netPay, color: '#34d399' }
    ];
  };
  
  const getBarChartData = () => {
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
    <div className="mt-10 space-y-8 animate-fade-in">
      <Card>
        <CardHeader className="bg-finance-light border-b border-gray-200">
          <CardTitle className="text-finance-primary flex items-center">
            <Calculator className="mr-2" size={20} />
            {stateName} Paycheck Results
          </CardTitle>
          <CardDescription>
            Based on your inputs, here is your estimated {payFrequency} paycheck breakdown
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
  );
};

export default PaycheckResults;
