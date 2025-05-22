
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <Layout 
      title="Contact Us" 
      description="Have questions about paycheck calculations? Contact our team for assistance with our paycheck calculators and tax information."
      keywords="contact paycheck calculator, salary calculator support, tax calculator help, paycheck questions"
    >
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>
              Fill out the form below to reach our support team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is your message about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-finance-primary hover:bg-finance-secondary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2" size={18} />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow border border-gray-100">
          <h2 className="text-2xl font-bold text-finance-primary mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-finance-secondary">How accurate are the paycheck calculations?</h3>
              <p className="text-gray-700">Our calculators provide estimates based on current tax rates and standard deductions. Actual paychecks may vary based on specific employer policies and additional deductions.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-finance-secondary">Can I calculate bonuses or overtime pay?</h3>
              <p className="text-gray-700">Yes, you can include bonuses or overtime by adjusting your pay rate and hours accordingly when using our calculators.</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-finance-secondary">How often are tax rates updated?</h3>
              <p className="text-gray-700">We update our tax rates annually or when significant tax law changes occur to ensure accuracy in our calculations.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
