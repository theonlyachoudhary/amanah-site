"use client";

import React, { useState } from 'react';
import ButtonSecondary from './buttonsecondary';
import { db } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from "firebase/firestore";

const packages = [
	{
		icon: '🛠️',
		name: 'Migration Package',
		price: '$2,500',
		features: [
			'A complete migration of existing websites and infrastructure to a modern React + Next.js stack or equivalent -dependent on the client\'s needs.',
			'A permanent cure to chronic bugs and pain points that have failed to be addressed due to the limited capabilities of the existing platform (WordPress, Webflow, etc.).',
			'The establishment of a robust infrastructure that supports future growth and scalability.',
		],
		why: [
			'Allows for the development of custom features and functionalities by leveraging modern web technologies.',
			'Opens opportunities for advanced automations & operational optimization.',
		],
		maintenance:
			'$200/mo retainer (content updates, new pages, emergency changes, phone support)',
	},
	{
		icon: '🌾',
		name: 'Grassroots Package',
		price: 'Starting at $5,000',
		features: [
			'Custom website design & development led by extensive research and vision alignment to deliver a truly unique and personalized solution.',
			'Tailored specifically to communicate your brand’s story, "vibe", and values.',
      'Enterprise level development leveraging modern web technologies like React/Next.js.',
		],
		addons: [
			'Logo development ($500–$1,000)',
			'Brand kit ($1,000)',
			'Google Business profile optimization ($500)',
			'Professional photography & videography ($1,500+)',
			'Social media management & synchronization ($1,000–$2,000/mo)',
			'Flyer & print design ($250–$500 per set)',
		],
		why: [
			'Builds a identifiable brand presence online.',
			'Provides a scalable foundation for future growth.',
      'Freedom from predatory platforms and their limitations.'
		],
		maintenance:
			'$100/mo (content updates, new pages, phone support). Add-ons billed monthly depending on scope.',
	},
  /* Bloom Package removed and added to add-ons section */
	{
		icon: '⚡',
		name: 'Operation Scaling & Optimization Package',
		price: 'Custom Pricing',
		features: [
			'Migration of all operations to scalable infrastructure, to be determined by a personalized consultation.',
			'Elimination of existing blockers & operational inefficiencies.',
			'Opportunity for a permanent external team to manage technical operations, lowering both monetary and skill acquisition costs.',
		],
		why: [
			'Designed specifically as a long-term partnership built upon trust and collaboration.',
			'Helps businesses scale sustainably without tech bottlenecks.',
		],
		maintenance:
			'$2,000–$5,000/mo retainer, required for minimum 12 months. Ongoing support, bug fixes, and scaling optimizations.',
	},
	{
		icon: '🛒',
		name: 'Shopify Commerce (Hydrogen)',
		price: 'Starting at $3,500',
		features: [
			'Custom website design & development led by extensive research and vision alignment to deliver a truly unique and personalized solution.',
			'Built with Shopify Hydrogen for performance & scalability.',
			'Distinguishes your storefront from competitors by providing a higher quality user experience.',
		],
		maintenance: '$250–$500/mo depending on level of support.',
	},
	{
		icon: '🛍️',
		name: 'Custom Commerce (MedusaJS)',
		price: 'Starting at $12,000',
		features: [
			'Full custom eCommerce platform using MedusaJS.',
			'Designed for businesses needing specialized features or independence from Shopify.',
			'Ideal for high-growth stores or businesses needing unique workflows.',
		],
		maintenance:
			'Required for minimum 1 year ($2,000–$4,000/mo depending on complexity). Can be migrated to external team after 12 months.',
	},
];

export default function PricingPackagesTable() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    success: "",
    error: "",
    emailTouched: false,
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, success: "", error: "" }));
    const { name, email, company, message } = formState;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setFormState((prev) => ({ ...prev, error: "Please enter a valid email address" }));
      return;
    }
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        company,
        message,
        createdAt: Timestamp.now(),
      });
      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
        success: "Thank you! Your message has been sent.",
        error: "",
        emailTouched: false,
      });
    } catch (err) {
      setFormState((prev) => ({ ...prev, error: "Something went wrong. Please try again later." }));
    }
  }
	return (
		<section className="w-full max-w-4xl mx-auto py-12 px-4">
			<h2 className="font-black text-4xl sm:text-5xl lg:text-6xl text-center mb-4 text-[var(--primary-color)] leading-tight tracking-tight">
				Packages & Pricing
			</h2>
			<p className="mx-auto mt-4 max-w-2xl text-center text-lg font-semibold text-black/70 sm:text-xl/8">
				We provide modern, scalable web infrastructure and branding solutions for
				small businesses, restaurants, and nonprofits in the US. Our offerings are
				designed to{' '}
				<span className="text-[var(--secondary-color)] font-bold">
					launch, grow, and scale operations
				</span>{' '}
				with a mix of tech, branding, and long-term support.
			</p>
			<div className="flex flex-col gap-8 mt-10">
				{packages.map((pkg, idx) => (
					<div
						key={idx}
						className="bg-[var(--primary-white)] rounded-2xl shadow-lg border-2 border-[var(--primary-color)] p-0 transition-all duration-200 hover:shadow-xl"
					>
						{/* Card header */}
						<div className="bg-[var(--primary-color)] rounded-t-2xl p-6">
							<div className="flex items-center gap-4">
								<span className="text-2xl text-[var(--primary-white)] mr-2">{pkg.icon}</span>
								<h3 className="text-2xl font-black text-[var(--primary-white)] leading-tight tracking-tight">
									{pkg.name}
								</h3>
								<span className="ml-auto text-xl font-bold text-[var(--primary-white)]">
									{pkg.price}
								</span>
							</div>
						</div>
						{/* Card body */}
						<div className="px-8 py-6">
							<div className="overflow-x-auto">
								<table className="w-full border-separate border-spacing-y-2">
									<tbody>
										<tr>
											<td colSpan={2}>
												<p className="text-[var(--primary-color)] font-semibold mb-4 text-lg">
													{pkg.name === 'Migration Package' ? 'For future conscious businesses looking to modernize their existing web technology/infrastructure into a platform that supports growth.' : 
														pkg.name === 'Grassroots Package' ? 'For businesses starting from scratch to establish a strong and recognizable online presence.' :
														pkg.name === 'Operation Scaling & Optimization Package' ? 'Designed for established businesses to overcome technical limitations and scale existing operations.' :
														pkg.name === 'Shopify Commerce (Hydrogen)' ? 'For retailers who want a custom Shopify experience with superior performance.' :
														'For merchants requiring a fully customized e-commerce solution with complete control over features and workflow.'}
												</p>
												<div className="text-[var(--primary-color)] text-base py-3">
													{pkg.features.map((f, i) => (
														<div key={i} className="flex items-start mb-2">
															<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--secondary-color)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
															</svg>
															<span>{f}</span>
														</div>
													))}
												</div>
											</td>
										</tr>
										<tr>
											<td colSpan={2} className="py-2">
												<hr className="border-t border-[var(--primary-color)] opacity-40" />
											</td>
										</tr>
										{/* Add-ons removed from individual cards and placed in a section below */}
										{pkg.why && (
											<>
												<tr>
													<td colSpan={2} className="py-2">
														<h4 className="font-bold text-[var(--primary-color)] mb-3">Why it matters:</h4>
														<div className="pl-1">
															{pkg.why.map((w, i) => (
																<div key={i} className="flex items-start mb-2">
																	<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--secondary-color)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
																		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
																	</svg>
																	<span className="text-[var(--primary-color)] text-base">{w}</span>
																</div>
															))}
														</div>
													</td>
												</tr>
											</>
										)}
										{/* Maintenance section removed */}
									</tbody>
								</table>
							</div>
							<div className="flex justify-end mt-6">
								<ButtonSecondary label="Get in Touch" link="/contact" />
							</div>
						</div>
					</div>
				))}
			</div>
			
			{/* Add-ons Section */}
			<div className="mt-16 bg-[var(--primary-white)] rounded-2xl shadow-lg border-2 border-[var(--primary-color)] p-8">
				<h3 className="text-2xl font-black text-[var(--primary-color)] mb-6">Available Add-ons</h3>
				<p className="text-[var(--primary-color)] mb-6">Enhance your package with these additional services:</p>
				
				<div className="grid md:grid-cols-2 gap-6 mb-8">
					<div>
						<h4 className="font-bold text-[var(--primary-color)] mb-4">Design & Branding</h4>
						<div className="space-y-2">
							{[
								'Logo development',
								'Brand kit',
								'Professional photography & videography',
								'Flyer & print design'
							].map((addon, i) => (
								<div key={i} className="flex items-start">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--secondary-color)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									<span className="text-[var(--primary-color)] text-base">{addon}</span>
								</div>
							))}
						</div>
					</div>
					
					<div>
						<h4 className="font-bold text-[var(--primary-color)] mb-4">Digital Marketing & SEO</h4>
						<div className="space-y-2">
							{[
								'Google Business profile optimization',
								'Social media management & synchronization',
								'SEO audit & implementation',
								'Content strategy development'
							].map((addon, i) => (
								<div key={i} className="flex items-start">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--secondary-color)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									<span className="text-[var(--primary-color)] text-base">{addon}</span>
								</div>
							))}
						</div>
					</div>
					
					<div>
						<h4 className="font-bold text-[var(--primary-color)] mb-4">Feature Development</h4>
						<div className="space-y-2">
							{[
								'Build new features into the existing codebase',
                'Automations and optimizations of existing integrations'
							].map((addon, i) => (
								<div key={i} className="flex items-start">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--secondary-color)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									<span className="text-[var(--primary-color)] text-base">{addon}</span>
								</div>
							))}
						</div>
					</div>
				</div>
				
				<div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
					<p className="text-sm text-[var(--primary-color)]">
						<span className="font-semibold">Note:</span> Add-ons are available with any package and pricing will vary based on specific requirements and scope - <a href="/contact" className="text-[var(--primary-color)] underline">contact us</a> for a customized quote.
					</p>
				</div>
			</div>
			
			
					
				
			
		</section>
	);
}
