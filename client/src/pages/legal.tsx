import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, FileText, Cookie, Eye } from "lucide-react";

export default function Legal() {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-electric-violet/10 via-sky-blue/10 to-neon-lime/10 dark:from-electric-violet/20 dark:via-sky-blue/20 dark:to-neon-lime/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6">
            Legal <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Information</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transparency and trust are fundamental to our business. Read our legal policies and terms.
          </p>
        </div>
      </section>

      {/* Legal Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="privacy" className="flex items-center gap-2" data-testid="privacy-tab">
                <Shield className="w-4 h-4" />
                Privacy Policy
              </TabsTrigger>
              <TabsTrigger value="terms" className="flex items-center gap-2" data-testid="terms-tab">
                <FileText className="w-4 h-4" />
                Terms of Service
              </TabsTrigger>
              <TabsTrigger value="cookies" className="flex items-center gap-2" data-testid="cookies-tab">
                <Cookie className="w-4 h-4" />
                Cookie Policy
              </TabsTrigger>
              <TabsTrigger value="disclaimer" className="flex items-center gap-2" data-testid="disclaimer-tab">
                <Eye className="w-4 h-4" />
                Disclaimer
              </TabsTrigger>
            </TabsList>

            <TabsContent value="privacy" data-testid="privacy-content">
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
                <CardContent className="p-8">
                  <h2 className="font-poppins font-bold text-3xl mb-6">Privacy Policy</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    <strong>Last updated:</strong> December 15, 2023
                  </p>

                  <div className="space-y-8">
                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">1. Information We Collect</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Personal information (name, email address, phone number)</li>
                        <li>Business information (company name, industry, project requirements)</li>
                        <li>Communication preferences and marketing consents</li>
                        <li>Payment information (processed securely through third-party providers)</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">2. How We Use Your Information</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We use the information we collect to provide, maintain, and improve our services.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Provide and deliver the services you request</li>
                        <li>Process transactions and send related information</li>
                        <li>Send technical notices, updates, and support messages</li>
                        <li>Respond to comments, questions, and requests</li>
                        <li>Communicate about products, services, and events</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">3. Information Sharing</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described below:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        <li>With service providers who assist us in operating our business</li>
                        <li>To comply with laws, regulations, or legal processes</li>
                        <li>To protect our rights, property, or safety</li>
                        <li>With your explicit consent</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">4. Data Security</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                      </p>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">5. Your Rights</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You have the right to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Access and update your personal information</li>
                        <li>Request deletion of your personal information</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Request portability of your data</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">6. Contact Us</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        If you have any questions about this Privacy Policy, please contact us at privacy@oblivent.com or +1 (555) 123-4567.
                      </p>
                    </section>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="terms" data-testid="terms-content">
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
                <CardContent className="p-8">
                  <h2 className="font-poppins font-bold text-3xl mb-6">Terms of Service</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    <strong>Last updated:</strong> December 15, 2023
                  </p>

                  <div className="space-y-8">
                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">1. Acceptance of Terms</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        By accessing and using Oblivent's services, you accept and agree to be bound by the terms and provision of this agreement.
                      </p>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">2. Services Description</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Oblivent provides digital marketing and design services including:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Website design and development</li>
                        <li>Social media marketing and advertising</li>
                        <li>Video production and content creation</li>
                        <li>Branding and identity design</li>
                        <li>SEO optimization services</li>
                        <li>Digital strategy consulting</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">3. Payment Terms</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Payment terms vary by service and will be outlined in your service agreement:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Project-based work: 50% deposit, 50% upon completion</li>
                        <li>Monthly services: Payment due within 30 days of invoice</li>
                        <li>Rush projects may require full payment upfront</li>
                        <li>Late payments may incur additional fees</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">4. Intellectual Property</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Upon full payment, clients retain ownership of custom work created specifically for them. Oblivent retains the right to use work samples for portfolio and marketing purposes.
                      </p>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">5. Limitation of Liability</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Oblivent's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.
                      </p>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">6. Termination</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Either party may terminate services with 30 days written notice. Completed work and payments are non-refundable.
                      </p>
                    </section>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cookies" data-testid="cookies-content">
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
                <CardContent className="p-8">
                  <h2 className="font-poppins font-bold text-3xl mb-6">Cookie Policy</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    <strong>Last updated:</strong> December 15, 2023
                  </p>

                  <div className="space-y-8">
                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">What Are Cookies?</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
                      </p>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">Types of Cookies We Use</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Essential Cookies</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            These cookies are necessary for the website to function and cannot be switched off. They include authentication and security cookies.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            We use Google Analytics and similar tools to understand how visitors interact with our website, helping us improve user experience.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Marketing Cookies</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            These cookies track your browsing habits to show you relevant advertisements and measure the effectiveness of our marketing campaigns.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Preference Cookies</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            These cookies remember your preferences such as language settings and theme choices to enhance your experience.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">Managing Cookies</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        You can control and manage cookies in various ways:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                        <li>Cookie preferences: Use our cookie banner to manage your preferences</li>
                        <li>Third-party tools: Use privacy tools to block tracking cookies</li>
                        <li>Opt-out links: Many advertising networks provide opt-out mechanisms</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">Third-Party Cookies</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We use third-party services that may set their own cookies, including Google Analytics, social media platforms, and advertising networks. Please refer to their respective privacy policies for more information.
                      </p>
                    </section>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="disclaimer" data-testid="disclaimer-content">
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
                <CardContent className="p-8">
                  <h2 className="font-poppins font-bold text-3xl mb-6">Disclaimer</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    <strong>Last updated:</strong> December 15, 2023
                  </p>

                  <div className="space-y-8">
                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">General Information</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Oblivent excludes all representations, warranties, conditions, and other terms.
                      </p>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">Professional Advice</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        While we strive to provide accurate and up-to-date information, the content on our website should not be considered as professional advice. Always consult with qualified professionals for specific business decisions.
                      </p>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">Results Disclaimer</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        While we have achieved significant results for our clients, we cannot guarantee specific outcomes:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Past performance does not guarantee future results</li>
                        <li>Results may vary based on industry, market conditions, and implementation</li>
                        <li>Success depends on various factors including client cooperation and market dynamics</li>
                        <li>Timeline estimates are approximate and may vary based on project complexity</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">Third-Party Links</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites.
                      </p>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">Testimonials</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Client testimonials and case studies represent individual experiences and results. They should not be considered as guarantees of similar outcomes for all clients.
                      </p>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">Limitation of Liability</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Oblivent will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or website.
                      </p>
                    </section>

                    <section>
                      <h3 className="font-poppins font-semibold text-xl mb-4">Updates</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We reserve the right to update this disclaimer at any time. Please check this page regularly for any changes.
                      </p>
                    </section>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-electric-violet/5 via-sky-blue/5 to-neon-lime/5 dark:from-electric-violet/10 dark:via-sky-blue/10 dark:to-neon-lime/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Have <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Questions?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            If you have any questions about our legal policies or need clarification on any terms, we're here to help.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-electric-violet to-sky-blue text-white px-8 py-4"
            data-testid="contact-legal-team"
          >
            Contact Our Legal Team
          </Button>
        </div>
      </section>
    </div>
  );
}
