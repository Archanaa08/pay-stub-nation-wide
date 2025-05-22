
interface PaycheckInput {
  payRate: number;
  payFrequency: string;
  hoursPerWeek: number;
  allowances: number;
  filingStatus: string;
  additionalWithholding: number;
  state: string;
}

interface PaycheckResult {
  grossPay: number;
  federalTax: number;
  stateTax: number;
  socialSecurity: number;
  medicare: number;
  netPay: number;
}

// State income tax rates (simplified for demo purposes)
const STATE_TAX_RATES: Record<string, number> = {
  MI: 0.0425, // Michigan
  CO: 0.044, // Colorado
  IN: 0.0323, // Indiana
  MD: 0.0575, // Maryland
  MO: 0.054, // Missouri
  NV: 0, // Nevada (no state income tax)
  NC: 0.0525, // North Carolina
  UT: 0.0495, // Utah
  MN: 0.0685, // Minnesota
};

export const calculatePaycheck = (input: PaycheckInput): PaycheckResult => {
  // Calculate gross pay based on pay frequency
  let payPeriodsPerYear: number;
  switch (input.payFrequency) {
    case 'weekly':
      payPeriodsPerYear = 52;
      break;
    case 'bi-weekly':
      payPeriodsPerYear = 26;
      break;
    case 'semi-monthly':
      payPeriodsPerYear = 24;
      break;
    case 'monthly':
      payPeriodsPerYear = 12;
      break;
    default:
      payPeriodsPerYear = 26; // Default to bi-weekly
  }

  // Determine if pay rate is hourly or annual
  let annualSalary: number;
  let grossPay: number;
  
  if (input.payRate < 100) { // Assuming hourly rate if less than $100
    annualSalary = input.payRate * input.hoursPerWeek * 52;
    grossPay = (input.payRate * input.hoursPerWeek * 52) / payPeriodsPerYear;
  } else { // Assuming annual salary
    annualSalary = input.payRate;
    grossPay = input.payRate / payPeriodsPerYear;
  }

  // Calculate federal tax (simplified for demo purposes)
  let federalTaxRate: number;
  
  if (input.filingStatus === 'single') {
    if (annualSalary <= 10275) federalTaxRate = 0.10;
    else if (annualSalary <= 41775) federalTaxRate = 0.12;
    else if (annualSalary <= 89075) federalTaxRate = 0.22;
    else if (annualSalary <= 170050) federalTaxRate = 0.24;
    else if (annualSalary <= 215950) federalTaxRate = 0.32;
    else if (annualSalary <= 539900) federalTaxRate = 0.35;
    else federalTaxRate = 0.37;
  } else { // Simplified for married and others
    if (annualSalary <= 20550) federalTaxRate = 0.10;
    else if (annualSalary <= 83550) federalTaxRate = 0.12;
    else if (annualSalary <= 178150) federalTaxRate = 0.22;
    else if (annualSalary <= 340100) federalTaxRate = 0.24;
    else if (annualSalary <= 431900) federalTaxRate = 0.32;
    else if (annualSalary <= 647850) federalTaxRate = 0.35;
    else federalTaxRate = 0.37;
  }
  
  // Apply allowances (very simplified)
  const allowanceValue = 4300; // Approximate annual value per allowance
  const taxableIncome = Math.max(0, annualSalary - (input.allowances * allowanceValue));
  
  const federalTaxAnnual = taxableIncome * federalTaxRate;
  const federalTax = (federalTaxAnnual / payPeriodsPerYear) + input.additionalWithholding;
  
  // Calculate state tax based on state
  const stateTaxRate = STATE_TAX_RATES[input.state] || 0.05; // Default to 5% if state not found
  const stateTax = grossPay * stateTaxRate;
  
  // Calculate FICA taxes
  const socialSecurityRate = 0.062; // 6.2%
  const medicareRate = 0.0145; // 1.45%
  
  const socialSecurity = grossPay * socialSecurityRate;
  const medicare = grossPay * medicareRate;
  
  // Calculate net pay
  const totalDeductions = federalTax + stateTax + socialSecurity + medicare;
  const netPay = grossPay - totalDeductions;
  
  return {
    grossPay,
    federalTax,
    stateTax,
    socialSecurity,
    medicare,
    netPay
  };
};
