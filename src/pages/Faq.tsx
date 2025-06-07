
import React from 'react';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Faq = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Paycheck Calculator</title>
        <meta name="description" content="Find answers to commonly asked questions about paycheck calculations, taxes, deductions, and using our paycheck calculator." />
        <meta name="keywords" content="paycheck calculator FAQ, salary calculator questions, tax withholding FAQ, paycheck deductions, take-home pay questions" />
        <link rel="canonical" href="https://salarycheck.me/faq" />
        
        {/* WebPage Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://salarycheck.me/faq#webpage",
              "url": "https://salarycheck.me/faq",
              "name": "Frequently Asked Questions | Paycheck Calculator",
              "description": "Find answers to commonly asked questions about paycheck calculations, taxes, deductions, and using our paycheck calculator.",
              "isPartOf": {
                "@id": "https://salarycheck.me/#website"
              },
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "url": "https://salarycheck.me/opengraph-image.png"
              },
              "datePublished": "2024-01-01",
              "dateModified": "2024-12-07",
              "author": {
                "@type": "Organization",
                "name": "SalaryCheck.me"
              },
              "publisher": {
                "@type": "Organization",
                "name": "SalaryCheck.me",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://salarycheck.me/favicon.ico"
                }
              }
            }
          `}
        </script>
        
        {/* FAQ Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How accurate is the paycheck calculator?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our paycheck calculator provides estimates based on current tax rates and withholding formulas. While we strive for accuracy, actual paychecks may vary based on specific employer policies, local taxes, or individual circumstances. For the most accurate information, consult a tax professional."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I calculate my hourly rate from an annual salary?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To convert an annual salary to an hourly rate, divide your annual salary by the number of working hours in a year. For a standard 40-hour workweek: Annual Salary ÷ 2,080 (40 hours × 52 weeks) = Hourly Rate."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What deductions are included in the paycheck calculator?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our calculator includes federal income tax, state income tax, Social Security tax (6.2%), Medicare tax (1.45%), and common pre-tax deductions like 401(k) and health insurance premiums. Some local taxes or specialized deductions may not be included."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I adjust my tax withholding?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To adjust your tax withholding, submit a new W-4 form to your employer. Increase withholding by claiming fewer allowances or specifying an additional amount to withhold. Decrease withholding by claiming more allowances or specifying a reduced withholding amount."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is my actual paycheck different from the calculator estimate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Differences may occur due to specific employer policies, additional local taxes, unique benefit programs, or changes in tax laws since our last update. Other factors include supplemental wages, garnishments, or specialized deductions not covered by our calculator."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I save or print my calculation results?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Currently, there is no built-in feature to save or print results directly from the calculator. However, you can take a screenshot of your results or use your browser's print function (usually Ctrl+P or Cmd+P) to print the page."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I calculate take-home pay for multiple jobs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For multiple jobs, we recommend running separate calculations for each job and then combining the results. Keep in mind that having multiple jobs can push you into higher tax brackets, so the combined tax might be higher than calculating each job separately."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if my state isn't listed in the calculator?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We're continuously adding more states to our calculator. If your state isn't currently available, you can check back soon as we regularly update our available states, contact us to request your state be added to our priority list, or use the generic calculator, which will calculate federal taxes accurately but estimate state taxes."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <Layout 
        title="Frequently Asked Questions" 
        description="Find answers to commonly asked questions about paycheck calculations, taxes, and using our calculator."
      >
        <div className="max-w-3xl mx-auto">
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-finance-primary mb-6">General Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="accuracy">
                <AccordionTrigger className="text-lg font-semibold">
                  How accurate is the paycheck calculator?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>Our paycheck calculator provides estimates based on current tax rates and withholding formulas. While we strive for accuracy, actual paychecks may vary based on specific employer policies, local taxes, or individual circumstances. For the most accurate information, consult a tax professional.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="hourly-rate">
                <AccordionTrigger className="text-lg font-semibold">
                  How do I calculate my hourly rate from an annual salary?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>To convert an annual salary to an hourly rate, divide your annual salary by the number of working hours in a year. For a standard 40-hour workweek:</p>
                  <p className="mt-2 font-medium">Annual Salary ÷ 2,080 (40 hours × 52 weeks) = Hourly Rate</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
          
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-finance-primary mb-6">Tax and Deduction Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="deductions">
                <AccordionTrigger className="text-lg font-semibold">
                  What deductions are included in the paycheck calculator?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>Our calculator includes:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Federal income tax</li>
                    <li>State income tax</li>
                    <li>Social Security tax (6.2%)</li>
                    <li>Medicare tax (1.45%)</li>
                    <li>Common pre-tax deductions like 401(k) and health insurance premiums</li>
                  </ul>
                  <p className="mt-2">Some local taxes or specialized deductions may not be included.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="withholding">
                <AccordionTrigger className="text-lg font-semibold">
                  How do I adjust my tax withholding?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>To adjust your tax withholding:</p>
                  <ol className="list-decimal pl-5 mt-2 space-y-1">
                    <li>Submit a new W-4 form to your employer</li>
                    <li>Increase withholding by claiming fewer allowances or specifying an additional amount to withhold</li>
                    <li>Decrease withholding by claiming more allowances or specifying a reduced withholding amount</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="difference">
                <AccordionTrigger className="text-lg font-semibold">
                  Why is my actual paycheck different from the calculator estimate?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>Differences may occur due to:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Specific employer policies</li>
                    <li>Additional local taxes</li>
                    <li>Unique benefit programs</li>
                    <li>Changes in tax laws since our last update</li>
                    <li>Supplemental wages or bonuses</li>
                    <li>Wage garnishments</li>
                    <li>Specialized deductions not covered by our calculator</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
          
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-finance-primary mb-6">Using the Calculator</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="save">
                <AccordionTrigger className="text-lg font-semibold">
                  Can I save or print my calculation results?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>Currently, there is no built-in feature to save or print results directly from the calculator. However, you can:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Take a screenshot of your results</li>
                    <li>Use your browser's print function (usually Ctrl+P or Cmd+P) to print the page</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="multiple-jobs">
                <AccordionTrigger className="text-lg font-semibold">
                  How do I calculate take-home pay for multiple jobs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>For multiple jobs, we recommend running separate calculations for each job and then combining the results. Keep in mind that having multiple jobs can push you into higher tax brackets, so the combined tax might be higher than calculating each job separately.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="state-not-listed">
                <AccordionTrigger className="text-lg font-semibold">
                  What if my state isn't listed in the calculator?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>We're continuously adding more states to our calculator. If your state isn't currently available, you can:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Check back soon as we regularly update our available states</li>
                    <li>Contact us to request your state be added to our priority list</li>
                    <li>Use the generic calculator, which will calculate federal taxes accurately but estimate state taxes</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Faq;
