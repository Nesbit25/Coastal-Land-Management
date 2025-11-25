export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Trees' | 'Scissors' | 'Shovel' | 'Sprout' | 'Droplets' | 'Sun';
}

export interface QuoteEstimate {
  estimatedPriceRange: string;
  complexityLevel: 'Low' | 'Medium' | 'High';
  professionalAdvice: string[];
  recommendedServices: string[];
}

export interface QuoteRequest {
  description: string;
  serviceType: string;
}