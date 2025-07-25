import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Heart, User, MapPin, ChevronDown } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState<'MAN' | 'WOMAN'>('MAN');

  // Men's clothing categories
  const menCategories = [
    { id: 'oversized', label: 'Oversized T-shirt', image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'shirts', label: 'Formal Shirts', image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'jeans', label: 'Jeans', image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'cargos', label: 'Cargos & Parachutes', image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'hoodies', label: 'Hoodies', image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'jackets', label: 'Jackets', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'coords', label: 'Co-ords', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'shorts', label: 'Shorts', image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  // Women's clothing categories
  const womenCategories = [
    { id: 'dresses', label: 'Dresses', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'tops', label: 'Tops & Blouses', image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'skirts', label: 'Skirts', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'jeans-women', label: 'Jeans', image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'blazers', label: 'Blazers', image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'coords-women', label: 'Co-ords', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'jumpsuits', label: 'Jumpsuits', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'cardigans', label: 'Cardigans', image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  // Get current categories based on selected gender
  const currentCategories = selectedGender === 'MAN' ? menCategories : womenCategories;

  // Men's iconic looks
  const menIconicLooks = [
    { id: 'street-wear', label: 'STREET WEAR', image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'old-money', label: 'OLD MONEY', image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'casual-chic', label: 'CASUAL CHIC', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  // Women's iconic looks
  const womenIconicLooks = [
    { id: 'y2k', label: 'Y2K', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'boho-chic', label: 'BOHO CHIC', image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'minimalist', label: 'MINIMALIST', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  // Get current iconic looks based on selected gender
  const currentIconicLooks = selectedGender === 'MAN' ? menIconicLooks : womenIconicLooks;

  // Men's latest drops
  const menLatestDrops = [
    { id: 'snitch', brand: 'SNITCH', image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'bg-yellow-600' },
    { id: 'zhms', brand: 'ZHMS', image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'bg-gray-800' },
    { id: 'onemile', brand: 'ON3MILE', image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'bg-purple-400' },
    { id: 'roadster', brand: 'ROADSTER', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'bg-blue-600' },
  ];

  // Women's latest drops
  const womenLatestDrops = [
    { id: 'zara', brand: 'ZARA', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'bg-pink-500' },
    { id: 'hm', brand: 'H&M', image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'bg-red-500' },
    { id: 'forever21', brand: 'FOREVER 21', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'bg-purple-600' },
    { id: 'vero-moda', brand: 'VERO MODA', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400', color: 'bg-green-600' },
  ];

  // Get current latest drops based on selected gender
  const currentLatestDrops = selectedGender === 'MAN' ? menLatestDrops : womenLatestDrops;

  // Carousel data
  const carouselSlides = [
    {
      id: 1,
      brand: 'HOUSE OF KOALA',
      title: 'BUY 2 GET 1 FREE',
      subtitle: 'LIMITED TIME DEAL',
      bgColor: 'bg-gradient-to-br from-gray-100 to-gray-200',
      textColor: 'text-black',
      images: [
        'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300',
        'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300',
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300'
      ]
    },
    {
      id: 2,
      brand: 'SUMMER COLLECTION',
      title: 'UP TO 50% OFF',
      subtitle: 'NEW ARRIVALS',
      bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600',
      textColor: 'text-white',
      images: [
        'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=300',
        'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=300',
        'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300'
      ]
    },
    {
      id: 3,
      brand: 'STREETWEAR',
      title: 'FRESH DROPS',
      subtitle: 'EXCLUSIVE STYLES',
      bgColor: 'bg-gradient-to-br from-orange-400 to-red-500',
      textColor: 'text-white',
      images: [
        'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=300',
        'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300',
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300'
      ]
    }
  ];

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  // Carousel navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Men's offers
  const menOffers = [
    { id: 'starting', title: 'STARTING', price: '₹499', color: 'bg-green-600', image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'flat30', title: 'FLAT', discount: '30%', subtitle: 'OFF', color: 'bg-blue-600', image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'buy2get1', title: 'BUY 2 GET 1', subtitle: 'FREE', color: 'bg-red-600', image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'under1299', title: 'EVERYTHING UNDER', price: '₹1,299', color: 'bg-purple-600', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  // Women's offers
  const womenOffers = [
    { id: 'starting-women', title: 'STARTING', price: '₹399', color: 'bg-pink-600', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'flat40', title: 'FLAT', discount: '40%', subtitle: 'OFF', color: 'bg-purple-600', image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'buy3get2', title: 'BUY 3 GET 2', subtitle: 'FREE', color: 'bg-red-600', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'under899', title: 'EVERYTHING UNDER', price: '₹899', color: 'bg-green-600', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  // Get current offers based on selected gender
  const currentOffers = selectedGender === 'MAN' ? menOffers : womenOffers;

  const trendingBrands = [
    { id: 'souled', name: 'The Souled Store', image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 'onemile', name: 'ON3MILE', image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  const searchSuggestions = [
    'Mini Dress', 'Urban Blazers', 'Tailored trousers',
    'Street Shorts', 'Chinos', 'Relaxed Joggers'
  ];

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/collection?category=${categoryId}&gender=${selectedGender.toLowerCase()}`);
  };

  const handleBrandClick = (brandId: string) => {
    navigate(`/collection?brand=${brandId}`);
  };

  const handleOfferClick = (offerId: string) => {
    navigate(`/collection?offer=${offerId}`);
  };

  const handleSearchSuggestion = (suggestion: string) => {
    navigate(`/collection?search=${encodeURIComponent(suggestion)}`);
  };

  const handleGenderChange = (gender: 'MAN' | 'WOMAN') => {
    setSelectedGender(gender);
    // Add a subtle scroll to categories section to show the change
    setTimeout(() => {
      const categoriesSection = document.querySelector('[data-section="categories"]');
      if (categoriesSection) {
        categoriesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen pb-32">
      {/* Top Header */}
      <div className="px-4 py-3 border-b border-gray-800">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            <MapPin size={16} className="text-blue-400" />
            <span className="text-sm">Delivery in <span className="text-blue-400 font-semibold">60 minutes</span></span>
          </div>
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/search')} className="p-1">
              <Search size={20} className="text-white hover:text-blue-400 transition-colors" />
            </button>
            <button onClick={() => navigate('/wishlist')} className="p-1">
              <Heart size={20} className="text-white hover:text-red-400 transition-colors" />
            </button>
            <button onClick={() => navigate('/profile')} className="p-1">
              <User size={20} className="text-white hover:text-blue-400 transition-colors" />
            </button>
          </div>
        </div>
        

      </div>

      {/* User Selection */}
      <div className="flex items-center justify-center space-x-4 px-4 py-4">
        <button
          onClick={() => handleGenderChange('MAN')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
            selectedGender === 'MAN'
              ? 'bg-white text-black shadow-lg'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          <img
            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100"
            alt="Man"
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-sm font-medium">MAN</span>
        </button>
        <button
          onClick={() => handleGenderChange('WOMAN')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
            selectedGender === 'WOMAN'
              ? 'bg-white text-black shadow-lg'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          <span className="text-sm font-medium">WOMAN</span>
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
            alt="Woman"
            className="w-6 h-6 rounded-full object-cover"
          />
        </button>
      </div>

      {/* Brand Logo */}
      <div className="text-center py-4">
        <div className="flex items-center justify-center space-x-2">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-6 bg-white transform rotate-12"></div>
            ))}
          </div>
          <h1 className="text-2xl font-bold">
            <span className="text-gray-400 text-xs">+ CERTIFIED +</span>
          </h1>
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-6 bg-white transform -rotate-12"></div>
            ))}
          </div>
        </div>
        <h1 className="text-3xl font-bold mt-1">
          <span className="text-blue-400">DRIP</span>
          <span className="text-white">&</span>
          <span className="text-white">TER</span>
        </h1>
        <div className="flex items-center justify-center space-x-2 mt-2">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-6 bg-white transform rotate-12"></div>
            ))}
          </div>
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-6 bg-white transform -rotate-12"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Auto-playing Carousel */}
      <div className="px-4 mb-6">
        <div
          className="relative rounded-3xl overflow-hidden h-96 cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`min-w-full h-full relative ${slide.bgColor} flex items-center justify-center`}
              >
                {/* Brand logo */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center space-x-1">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">🐨</span>
                    </div>
                    <span className={`text-sm font-bold ${slide.textColor}`}>{slide.brand}</span>
                  </div>
                </div>

                {/* Main content */}
                <div className={`text-center z-10 ${slide.textColor}`}>
                  <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-lg font-medium opacity-80">{slide.subtitle}</p>
                </div>

                {/* Product images */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <div className="grid grid-cols-3 gap-6 w-full max-w-lg px-8">
                    {slide.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="aspect-[3/4] transform hover:scale-105 transition-transform">
                        <img
                          src={image}
                          alt={`Product ${imgIndex + 1}`}
                          className="w-full h-full object-cover rounded-xl shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="px-4 mb-8" data-section="categories">
        <h2 className="text-xl font-bold mb-4">
          {selectedGender === 'MAN' ? "Men's" : "Women's"} Categories
        </h2>
        <div className="grid grid-cols-4 gap-3 transition-all duration-500 ease-in-out">
          {currentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="text-center hover:scale-105 transition-transform"
            >
              <div className="bg-gray-800 rounded-2xl p-3 mb-2 aspect-square flex items-center justify-center hover:bg-gray-700 transition-colors">
                <img
                  src={category.image}
                  alt={category.label}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <p className="text-xs font-medium text-white">{category.label}</p>
            </button>
          ))}
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center space-x-2 mt-4">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
      </div>

      {/* What's your next iconic look? */}
      <div className="px-4 mb-8">
        <h2 className="text-xl font-bold mb-4">
          {selectedGender === 'MAN' ? "Men's" : "Women's"} Iconic Looks
        </h2>
        <div className="grid grid-cols-3 gap-3 transition-all duration-500 ease-in-out">
          {currentIconicLooks.map((look) => (
            <button
              key={look.id}
              onClick={() => navigate(`/collection?style=${look.id}`)}
              className="relative rounded-2xl overflow-hidden h-32 hover:scale-105 transition-transform"
            >
              <img
                src={look.image}
                alt={look.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end hover:bg-opacity-30 transition-all">
                <p className="text-white font-bold text-sm p-3">{look.label}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Latest Drops */}
      <div className="px-4 mb-8">
        <h2 className="text-xl font-bold mb-4">
          {selectedGender === 'MAN' ? "Men's" : "Women's"} Latest Drops
        </h2>
        <div className="grid grid-cols-2 gap-3 transition-all duration-500 ease-in-out">
          {currentLatestDrops.map((drop) => (
            <button
              key={drop.id}
              onClick={() => handleBrandClick(drop.id)}
              className={`${drop.color} rounded-2xl p-4 h-48 relative overflow-hidden hover:scale-105 transition-transform`}
            >
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-lg">{drop.brand}</p>
                <div className="flex items-center mt-2">
                  <span className="text-white text-sm mr-2">→</span>
                </div>
              </div>
              <img
                src={drop.image}
                alt={drop.brand}
                className="absolute right-0 top-0 w-24 h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Offers */}
      <div className="px-4 mb-8">
        <h2 className="text-xl font-bold mb-4">
          {selectedGender === 'MAN' ? "Men's" : "Women's"} Offers
        </h2>
        <div className="grid grid-cols-2 gap-3 transition-all duration-500 ease-in-out">
          {currentOffers.map((offer) => (
            <button
              key={offer.id}
              onClick={() => handleOfferClick(offer.id)}
              className={`${offer.color} rounded-2xl p-4 h-32 relative overflow-hidden hover:scale-105 transition-transform`}
            >
              <div className="absolute top-4 left-4 z-10">
                <p className="text-white font-bold text-sm">{offer.title}</p>
                {offer.price && <p className="text-white font-bold text-2xl">{offer.price}</p>}
                {offer.discount && <p className="text-white font-bold text-2xl">{offer.discount}</p>}
                {offer.subtitle && <p className="text-white font-bold text-sm">{offer.subtitle}</p>}
              </div>
              <img
                src={offer.image}
                alt={offer.title}
                className="absolute right-0 bottom-0 w-16 h-20 object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Trending Brands */}
      <div className="px-4 mb-8">
        <h2 className="text-xl font-bold mb-4">Trending Brands</h2>
        <div className="grid grid-cols-2 gap-3">
          {trendingBrands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => handleBrandClick(brand.id)}
              className="bg-gray-800 rounded-2xl overflow-hidden h-48 relative hover:scale-105 transition-transform"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded">
                <p className="text-black font-bold text-sm">{brand.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* No Clue? Start Here! */}
      <div className="px-4 mb-8">
        <h2 className="text-xl font-bold mb-4">No Clue? Start Here!</h2>
        <div className="grid grid-cols-3 gap-2">
          {searchSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSearchSuggestion(suggestion)}
              className="bg-gray-800 text-white px-3 py-2 rounded-full text-xs font-medium hover:bg-gray-700 transition-colors flex items-center space-x-1"
            >
              <Search size={12} />
              <span>{suggestion}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Swipe Products Button */}
      <div className="px-4 mb-6">
        <button
          onClick={() => navigate('/swipe')}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all transform hover:scale-105 shadow-lg"
        >
          <div className="flex items-center justify-center space-x-3">
            <span className="text-2xl">💫</span>
            <div className="text-left">
              <div className="text-lg font-bold">Discover Products</div>
              <div className="text-sm opacity-90">Swipe like Tinder!</div>
            </div>
            <span className="text-2xl">👉</span>
          </div>
        </button>
      </div>

      {/* Quick Test Button */}
      <div className="px-4 mb-6">
        <button
          onClick={() => navigate('/checkout', {
            state: {
              product: {
                id: 'test-1',
                name: 'Test Product',
                brand: 'Test Brand',
                price: '₹999',
                images: ['https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=200'],
                selectedSize: 'M',
                quantity: 1
              },
              directBuy: true
            }
          })}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-colors"
        >
          🛒 Test Checkout (Quick Access)
        </button>
      </div>

      {/* Footer Message */}
      <div className="px-4 mb-8 text-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-300">CURATING CONFIDENCE</h2>
        <h2 className="text-2xl font-bold mb-4 text-gray-300">ONE OUTFIT AT A TIME.</h2>
        <p className="text-gray-400">Always, <span className="font-bold">KNOT</span> Team</p>
      </div>
    </div>
  );
};

export default HomePage;

