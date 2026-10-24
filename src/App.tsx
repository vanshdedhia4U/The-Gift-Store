/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedCategories } from './components/FeaturedCategories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { BirthdayGiftSection } from './components/BirthdayGiftSection';
import { StoreStory } from './components/StoreStory';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { VisitOurStore } from './components/VisitOurStore';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { EnquiryBagDrawer, EnquiryItem } from './components/EnquiryBagDrawer';
import { SearchModal } from './components/SearchModal';
import { GalleryLightbox } from './components/GalleryLightbox';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PRODUCTS, Product } from './data/storeData';

export default function App() {
  const [enquiryItems, setEnquiryItems] = useState<EnquiryItem[]>([
    {
      product: PRODUCTS[0], // Hot Wheels Car Culture Set
      quantity: 1,
    },
  ]);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>('all');

  const totalEnquiryCount = enquiryItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToEnquiryBag = (product: Product) => {
    setEnquiryItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setEnquiryItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as EnquiryItem[];
    });
  };

  const handleRemoveItem = (productId: string) => {
    setEnquiryItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearBag = () => {
    setEnquiryItems([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#202321] selection:bg-[#E98552]/20 selection:text-[#233B63]">
      {/* 1 & 2. Minimal Announcement Bar + Refined Sticky Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenEnquiryBag={() => setIsBagOpen(true)}
        enquiryCount={totalEnquiryCount}
      />

      <main className="flex-1">
        {/* 3. Photography-led Hero Section with "Little Things. Big Adventures." */}
        <HeroSection
          onExploreClick={() => scrollToSection('products')}
          onVisitClick={() => scrollToSection('visit-store')}
        />

        {/* 4. Shop-by-Category Section */}
        <FeaturedCategories
          onSelectCategory={(slug) => {
            setSelectedCategorySlug(slug);
            scrollToSection('products');
          }}
        />

        {/* 5. Featured Products with Price Sorting & Category Filtering */}
        <FeaturedProducts
          selectedCategorySlug={selectedCategorySlug}
          onSelectCategory={setSelectedCategorySlug}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToEnquiryBag={handleAddToEnquiryBag}
        />

        {/* 6. Useful Gift-Discovery Section */}
        <BirthdayGiftSection
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToEnquiryBag={handleAddToEnquiryBag}
        />

        {/* 7. Authentic Store Photography & Brand Introduction */}
        <StoreStory
          onOpenShowroomPhoto={() => setLightboxIndex(0)}
        />

        {/* 8. Verified Customer Reviews */}
        <GoogleReviewsSection />

        {/* 9. Store Location, Directions, Contact and Opening Hours */}
        <VisitOurStore />

        {/* Functional FAQ Accordion */}
        <FAQSection />
      </main>

      {/* 10. Clean, Informative Footer */}
      <Footer />

      {/* Functional Interactive Modals & Drawers */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToEnquiryBag={handleAddToEnquiryBag}
      />

      <EnquiryBagDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        items={enquiryItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearBag={handleClearBag}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

      <GalleryLightbox
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={setLightboxIndex}
      />

      <FloatingWhatsApp />
    </div>
  );
}
