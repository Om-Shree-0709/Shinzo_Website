import React, { useState } from "react";
import { Card, CardContent, CardHeader, Button, Badge, Switch } from "@/app/components/ui";
import { CheckCircle, Star } from "lucide-react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 29,
      yearlyPrice: 24,
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "Mobile app access",
        "API access",
      ],
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 79,
      yearlyPrice: 65,
      popular: true,
      features: [
        "Up to 25 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "Advanced security",
        "Workflow automation",
        "Custom reports",
      ],
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      monthlyPrice: 199,
      yearlyPrice: 165,
      features: [
        "Unlimited team members",
        "1TB storage",
        "Enterprise analytics",
        "24/7 dedicated support",
        "Custom integrations",
        "SSO & SAML",
        "Advanced compliance",
        "White-label options",
        "Custom onboarding",
        "SLA guarantee",
      ],
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your business. All plans include a
            14-day free trial with full access to features.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`font-medium ${
                !isYearly ? "text-slate-900" : "text-slate-500"
              }`}
            >
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-blue-600"
            />
            <span
              className={`font-medium ${
                isYearly ? "text-slate-900" : "text-slate-500"
              }`}
            >
              Yearly
            </span>
            <Badge className="bg-green-100 text-green-800 border-green-200">
              Save 20%
            </Badge>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular
                  ? "ring-2 ring-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50"
                  : "bg-gradient-to-br from-white to-slate-50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-slate-900">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-slate-500 ml-2">/month</span>
                  </div>
                  {isYearly && (
                    <p className="text-green-600 text-sm font-medium mt-2">
                      Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                    </p>
                  )}
                </div>

                <Button
                  size="lg"
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  Start Free Trial
                </Button>
              </CardHeader>

              <CardContent className="p-8 pt-0">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Can I change plans anytime?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
              },
              {
                question: "Is there a setup fee?",
                answer:
                  "No setup fees. You only pay for your chosen plan, and the first 14 days are completely free.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, PayPal, and can arrange ACH transfers for enterprise customers.",
              },
              {
                question: "Can I cancel anytime?",
                answer:
                  "Absolutely. Cancel anytime with no penalties. Your data remains accessible for 30 days after cancellation.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            For organizations with unique requirements, we offer custom
            enterprise solutions with dedicated support and tailored features.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg font-semibold border-2 border-slate-300 hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
          >
            Contact Sales Team
          </Button>
        </div>
      </div>
    </div>
  );
}
