/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { MainHeroSection } from './components/MainHeroSection';
import { FeaturedItemsSection } from './components/FeaturedItemsSection';
import { SecondaryBanners } from './components/SecondaryBanners';
import { GiftBasketsSection } from './components/GiftBasketsSection';
import { StoreStory } from './components/StoreStory';
import { VisitOurStore } from './components/VisitOurStore';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { GiftBasketModal } from './components/GiftBasketModal';
import { ArticleModal } from './components/ArticleModal';
import { EnquiryBagDrawer, EnquiryItem } from './components/EnquiryBagDrawer';
import { SearchModal } from './components/SearchModal';
import { GalleryLightbox } from './components/GalleryLightbox';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import {
  PRODUCTS,
  Product,
  GIFT_BASKETS,
  GiftBasket,
  Article,
} from './data/storeData';

export default function App() {
  const [enquiryItems, setEnquiryItems] = useState<EnquiryItem[]>([
    {
      product: PRODUCTS[0], // Hallmark Stuffed Snoopy Cuddle Companion Plush
      quantity: 1,
    },
    {
      product: PRODUCTS[5], // Hot Wheels Premium Car Culture Real Riders
      quantity: 1,
    },
  ]);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [selectedBasket, setSelectedBasket] = useState<GiftBasket | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const totalEnquiryCount = enquiryItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = enquiryItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

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

    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1800);
  };

  const handleAddBasketToBag = (basket: GiftBasket) => {
    // Create an ad-hoc product representation for the reservation list
    const basketProduct: Product = {
      id: `basket-${basket.id}`,
      name: `${basket.title} Hamper (${basket.itemCount} Items)`,
      category: 'Curated Gift Hamper',
      categorySlug: 'return-gifts',
      price: basket.price,
      imageUrl: basket.imageUrl,
      age: 'All Ages',
      ageBracket: '6-8',
      occasions: ['birthday', 'return-gifts'],
      availability: 'Custom Showroom Curation',
      description: basket.description,
      highlights: basket.includedItems,
      specs: {
        material: 'Assorted Curated Toys & Gift Box Packaging',
        certification: 'BIS Certified (IS 9873 compliant)',
        inBox: `${basket.itemCount} Curated items with celebration box & satin ribbon`,
      },
      svgType: 'teddy',
    };
    handleAddToEnquiryBag(basketProduct);
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

  // Filter products by category or price
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return PRODUCTS;
    }
    if (selectedCategory === 'under-499') {
      return PRODUCTS.filter((p) => p.price <= 500);
    }
    return PRODUCTS.filter((p) => p.categorySlug === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F7] text-[#202321] selection:bg-[#E98552]/20 selection:text-[#233B63]">
      {/* 1. Header (Top Utility Bar + Brand Highlights + Nav with Active Pill) */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenEnquiryBag={() => setIsBagOpen(true)}
        enquiryCount={totalEnquiryCount}
        totalAmount={totalAmount}
        onSelectCategory={(slug) => {
          setSelectedCategory(slug);
          scrollToSection('featured-items');
        }}
        selectedCategory={selectedCategory}
        onOpenShowroomPhoto={() => setLightboxIndex(0)}
      />

      {/* 2. Main Page Layout: Two-Column Composition matching screenshot */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Left Column: Sidebar with categories, 3 trust badges, promo, articles, and testimonial */}
          <Sidebar
            selectedCategory={selectedCategory}
            onSelectCategory={(slug) => {
              setSelectedCategory(slug);
              scrollToSection('featured-items');
            }}
            onOpenArticle={(article) => setSelectedArticle(article)}
            onExploreTopPicks={() => {
              setSelectedCategory('hot-wheels');
              scrollToSection('featured-items');
            }}
          />

          {/* Right Column: Main Content Area */}
          <div className="flex-1 min-w-0 space-y-10">
            {/* Top Flatlay Hero Banner with Center Floating Box & Dual Promos */}
            <MainHeroSection
              onExploreClick={() => scrollToSection('featured-items')}
              onSaleClick={() => {
                setSelectedCategory('return-gifts');
                scrollToSection('featured-items');
              }}
            />

            {/* "Feature items" Section: 4x2 Grid of 8 toys with cursive title */}
            <FeaturedItemsSection
              products={filteredProducts}
              onSelectProduct={(p) => setQuickViewProduct(p)}
              onAddToBag={handleAddToEnquiryBag}
              addedProductId={justAddedId}
            />

            {/* Secondary Dual Promos: Gifts Under ₹499 & 30% Off Family Games */}
            <SecondaryBanners
              onShopUnder499={() => {
                setSelectedCategory('under-499');
                scrollToSection('featured-items');
              }}
              onShopGames={() => {
                setSelectedCategory('board-games');
                scrollToSection('featured-items');
              }}
            />

            {/* "Gift kits & baskets" Section: 4 Curated Baskets with cursive title */}
            <GiftBasketsSection
              baskets={GIFT_BASKETS}
              onSelectBasket={(b) => setSelectedBasket(b)}
            />
          </div>
        </div>

        {/* Store Information, Story & Hours below the main grid */}
        <div className="mt-16 pt-12 border-t border-[#ECEAE4] space-y-12">
          <StoreStory onOpenShowroomPhoto={() => setLightboxIndex(0)} />
          <VisitOurStore />
          <FAQSection />
        </div>
      </main>

      {/* 3. Footer (4 Columns: Store, Information, Services, Newsletter + Social & Top) */}
      <Footer onOpenShowroomPhoto={() => setLightboxIndex(0)} />

      {/* 4. Interactive Modals & Drawers */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToEnquiryBag={handleAddToEnquiryBag}
      />

      <GiftBasketModal
        basket={selectedBasket}
        onClose={() => setSelectedBasket(null)}
        onAddToBag={handleAddBasketToBag}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
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
