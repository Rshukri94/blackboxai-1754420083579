import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureHighlights from '@/components/FeatureHighlights';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import AppDownloadBanner from '@/components/AppDownloadBanner';
import Footer from '@/components/Footer';

/**
 * Homepage Component
 * 
 * This is the main landing page that replicates Booksy's homepage structure.
 * It includes all the main sections in the correct order:
 * - Header with navigation and search
 * - Hero section with main CTA
 * - Feature highlights showcasing platform benefits
 * - Customer testimonials
 * - Pricing information for professionals
 * - App download promotion
 * - Footer with links and information
 * 
 * To customize:
 * - Update content in each component
 * - Modify section order if needed
 * - Add or remove sections as required
 */

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header Navigation */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section - Main landing area with search and CTA */}
        <HeroSection 
          title="Book appointments with top-rated professionals"
          subtitle="Discover and book beauty & wellness services near you"
          ctaText="Find Services"
        />
        
        {/* Feature Highlights - Why choose our platform */}
        <FeatureHighlights />
        
        {/* Customer Testimonials - Social proof */}
        <Testimonials />
        
        {/* Pricing Plans - For service providers */}
        <Pricing />
        
        {/* App Download Banner - Mobile app promotion */}
        <AppDownloadBanner />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
