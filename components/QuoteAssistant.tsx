import React, { useState } from 'react';
import { getQuoteEstimate } from '../services/geminiService';
import { QuoteEstimate } from '../types';
import { Loader2, Sparkles, CheckCircle, AlertTriangle } from 'lucide-react';

export const QuoteAssistant: React.FC = () => {
  const [description, setDescription] = useState('');
  const [serviceType, setServiceType] = useState('Tree Removal');
  const [estimate, setEstimate] = useState<QuoteEstimate | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEstimate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    setLoading(true);
    setError('');
    setEstimate(null);

    try {
      const result = await getQuoteEstimate(description, serviceType);
      setEstimate(result);
    } catch (err) {
      setError('Failed to generate estimate. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="quote" className="bg-emerald-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Get an Instant AI Estimate
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Not sure how much a job will cost? Use our AI-powered assistant to get a 
              <span className="font-bold text-emerald-600"> preliminary estimate range</span> and professional advice instantly.
            </p>
            <div className="mt-8 bg-white rounded-xl shadow-xl overflow-hidden border border-emerald-100">
              <div className="p-6 sm:p-8">
                <form onSubmit={handleEstimate} className="space-y-6">
                  <div>
                    <label htmlFor="service-type" className="block text-sm font-medium text-gray-700">
                      Service Needed
                    </label>
                    <select
                      id="service-type"
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md border"
                    >
                      <option>Tree Removal</option>
                      <option>Lawn Maintenance</option>
                      <option>Landscaping</option>
                      <option>Stump Grinding</option>
                      <option>Clean Up</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Describe your project
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        rows={4}
                        className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md border p-3"
                        placeholder="E.g., I have a large Live Oak branch hanging over my roof, or I need sod installation for my front yard..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loading || !description}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                        Analyzing with Gemini...
                      </>
                    ) : (
                      <>
                        <Sparkles className="-ml-1 mr-2 h-5 w-5" />
                        Generate Estimate
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            {estimate ? (
              <div className="bg-white rounded-xl shadow-xl border border-emerald-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="bg-emerald-600 px-6 py-4">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <Sparkles className="mr-2 h-5 w-5 text-emerald-200" />
                    AI Analysis Result
                  </h3>
                </div>
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Estimated Price Range</span>
                    <p className="mt-1 text-3xl font-extrabold text-emerald-600">{estimate.estimatedPriceRange}</p>
                    <p className="text-xs text-gray-400 mt-1">*Final price subject to on-site inspection.</p>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Complexity Level</span>
                    <div className="mt-2 flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium 
                        ${estimate.complexityLevel === 'Low' ? 'bg-green-100 text-green-800' : 
                          estimate.complexityLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'}`}>
                        {estimate.complexityLevel} Complexity
                      </span>
                    </div>
                  </div>

                  <div>
                     <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Recommended Services</span>
                     <div className="mt-2 flex flex-wrap gap-2">
                        {estimate.recommendedServices.map((service, idx) => (
                           <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                              {service}
                           </span>
                        ))}
                     </div>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Professional Advice</span>
                    <ul className="mt-2 space-y-2">
                      {estimate.professionalAdvice.map((advice, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="flex-shrink-0 h-5 w-5 text-emerald-500 mr-2" />
                          <span className="text-gray-600 text-sm">{advice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <a href="#contact" className="w-full block text-center bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                        Book On-Site Visit
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center min-h-[400px] border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 p-12 text-center">
                <div>
                   <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100">
                      <Sparkles className="h-6 w-6 text-emerald-600" />
                   </div>
                   <h3 className="mt-2 text-sm font-medium text-gray-900">No estimate generated yet</h3>
                   <p className="mt-1 text-sm text-gray-500">Fill out the form to get an instant AI analysis of your project.</p>
                </div>
              </div>
            )}
            
            {error && (
               <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4">
                  <div className="flex">
                     <div className="flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-red-400" aria-hidden="true" />
                     </div>
                     <div className="ml-3">
                        <p className="text-sm text-red-700">{error}</p>
                     </div>
                  </div>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};