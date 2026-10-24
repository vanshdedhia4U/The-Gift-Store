export interface ShowroomPhoto {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  url: string;
  alt: string;
  featuredBadge?: string;
}

export const SHOWROOM_HERO_PHOTOS: ShowroomPhoto[] = [
  {
    id: 'main-showroom',
    title: 'Curated Family Showroom',
    subtitle: 'Silver Arch Commercial Complex, Ambernath (E)',
    category: 'Showroom Interior',
    url: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Modern boutique toy showroom with clean wooden shelves and curated displays',
    featuredBadge: 'Ambernath Flagship',
  },
  {
    id: 'hotwheels-wall',
    title: 'The Die-Cast Collector Wall',
    subtitle: 'Official Mattel Mainlines & Premium Car Culture',
    category: 'Hot Wheels Department',
    url: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=1200&q=85',
    alt: 'Collector die-cast sports car in precision studio lighting',
    featuredBadge: '140+ Castings in Stock',
  },
  {
    id: 'stem-lab',
    title: 'STEM & Construction Gallery',
    subtitle: 'Robotics, Science Labs & Architecture Sets',
    category: 'Educational Department',
    url: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=85',
    alt: 'Children STEM construction bricks and modular engineering kit',
    featuredBadge: 'Ages 3 to 14+',
  },
];

export const CATEGORY_PHOTOS: Record<string, string> = {
  'hot-wheels': 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=800&q=80',
  'building-toys': 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=800&q=80',
  'stem-learning': 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80',
  'rc-vehicles': 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=800&q=80',
  'soft-toys': 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=800&q=80',
  'board-games': 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80',
};

export const PRODUCT_PHOTOS: Record<string, string> = {
  'anj-hw-01': 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=800&q=80',
  'anj-tech-02': 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=800&q=80',
  'anj-stem-03': 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80',
  'anj-rc-04': 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=800&q=80',
  'anj-soft-05': 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=800&q=80',
  'anj-bg-06': 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80',
  'anj-hw-07': 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
  'anj-build-08': 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
  'anj-stem-09': 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
};
