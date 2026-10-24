import React, { useState } from 'react';
import { X, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/storeData';
import { ToyArtwork } from './ToyArtwork';

interface GalleryLightboxProps {
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  currentIndex,
  onClose,
  onSelectIndex,
}) => {
  const [imgError, setImgError] = useState(false);

  if (currentIndex === null || !GALLERY_ITEMS[currentIndex]) return null;

  const current = GALLERY_ITEMS[currentIndex];

  const galleryPhotos = [
    'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1200&q=85',
  ];

  const gallerySvgTypes: Array<'galleryHotWheels' | 'galleryBuilding' | 'galleryStem' | 'galleryPlush' | 'galleryGames' | 'galleryWrapping'> = [
    'galleryHotWheels',
    'galleryBuilding',
    'galleryStem',
    'galleryPlush',
    'galleryGames',
    'galleryWrapping',
  ];

  const handlePrev = () => {
    setImgError(false);
    onSelectIndex((currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  const handleNext = () => {
    setImgError(false);
    onSelectIndex((currentIndex + 1) % GALLERY_ITEMS.length);
  };

  const photoUrl = galleryPhotos[currentIndex % galleryPhotos.length];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/90 text-[#111827] hover:bg-white shadow-lg transition-transform active:scale-95 cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/90 text-[#111827] hover:bg-white shadow-lg transition-transform active:scale-95 cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Visual Showcase */}
        <div className="h-80 sm:h-[420px] w-full relative bg-[#FAF9F7] flex items-center justify-center overflow-hidden">
          {!imgError && photoUrl ? (
            <img
              src={photoUrl}
              alt={current.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <ToyArtwork type={gallerySvgTypes[currentIndex % gallerySvgTypes.length]} className="w-full h-full" />
          )}
        </div>

        {/* Content details */}
        <div className="p-6 md:p-8 bg-white">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#1F3A8A] mb-1 uppercase tracking-wider">
            <span>{current.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#6B7280] flex items-center gap-1 font-normal lowercase tracking-normal">
              <MapPin className="w-3.5 h-3.5 text-[#FF6B35]" /> Ambernath Flagship Showroom
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#111827]">{current.title}</h3>
          <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">{current.description}</p>

          <div className="mt-4 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#6B7280]">
            <span>Photo {currentIndex + 1} of {GALLERY_ITEMS.length}</span>
            <span className="text-[#1F3A8A] font-medium">Anjrich The Toy Store · Ambernath, Maharashtra</span>
          </div>
        </div>
      </div>
    </div>
  );
};
