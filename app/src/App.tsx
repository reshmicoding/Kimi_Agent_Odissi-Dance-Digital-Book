import { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, BookOpen, Hand, GitBranch, Search, X } from 'lucide-react';
import { singleHandMudras, doubleHandMudras, allMudras, type Mudra } from './data/mudras';
import './App.css';

type PageType = 'cover' | 'chapter' | 'mudra';

interface Page {
  type: PageType;
  mudra?: Mudra;
  chapterTitle?: string;
  chapterSubtitle?: string;
  chapterIcon?: 'single' | 'double';
}

function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const [visitedPages, setVisitedPages] = useState<Set<number>>(new Set([0]));
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Mudra[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const pages: Page[] = [
    { type: 'cover' },
    {
      type: 'chapter',
      chapterTitle: 'Asamyuta Hasta',
      chapterSubtitle: 'Single Hand Movements',
      chapterIcon: 'single'
    },
    ...singleHandMudras.map(mudra => ({ type: 'mudra' as PageType, mudra })),
    {
      type: 'chapter',
      chapterTitle: 'Samyuta Hasta',
      chapterSubtitle: 'Double Hand Movements',
      chapterIcon: 'double'
    },
    ...doubleHandMudras.map(mudra => ({ type: 'mudra' as PageType, mudra })),
  ];

  const totalPages = pages.length;

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    setPlayingAudio(null);
  }, []);

  const playAudio = useCallback((audioUrl: string, mudraId: string) => {
    stopAudio();
    const audio = new Audio(audioUrl);
    audioRef.current = audio;
    setPlayingAudio(mudraId);
    audio.play().catch(() => setPlayingAudio(null));
    audio.onended = () => setPlayingAudio(null);
  }, [stopAudio]);

  const goToPage = useCallback((direction: 'next' | 'prev') => {
    if (isAnimating) return;
    const newIndex = direction === 'next'
      ? Math.min(currentPageIndex + 1, totalPages - 1)
      : Math.max(currentPageIndex - 1, 0);
    if (newIndex === currentPageIndex) return;
    setIsAnimating(true);
    setFlipDirection(direction);
    setTimeout(() => {
      setCurrentPageIndex(newIndex);
      setVisitedPages(prev => new Set([...prev, newIndex]));
      setIsAnimating(false);
      setFlipDirection(null);
    }, 400);
  }, [currentPageIndex, totalPages, isAnimating]);

  const goToMudraPage = useCallback((mudra: Mudra) => {
    const pageIndex = pages.findIndex(p => p.type === 'mudra' && p.mudra?.id === mudra.id);
    if (pageIndex === -1) return;
    setShowSearch(false);
    setSearchQuery('');
    setSearchResults([]);
    setFlipDirection(pageIndex > currentPageIndex ? 'next' : 'prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPageIndex(pageIndex);
      setVisitedPages(prev => new Set([...prev, pageIndex]));
      setIsAnimating(false);
      setFlipDirection(null);
    }, 400);
  }, [pages, currentPageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showSearch) return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToPage('next');
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPage('prev');
      } else if (e.key === '/') {
        e.preventDefault();
        setShowSearch(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPage, showSearch]);

  useEffect(() => {
    if (showSearch && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const q = searchQuery.toLowerCase();
    const results = allMudras.filter(m =>
      m.name.toLowerCase().includes(q) ||
      m.meaning.toLowerCase().includes(q) ||
      m.bengali.includes(q) ||
      m.description.toLowerCase().includes(q)
    );
    setSearchResults(results);
  }, [searchQuery]);

  useEffect(() => {
    return () => stopAudio();
  }, [stopAudio]);

  const currentPage = pages[currentPageIndex];
  const progress = ((currentPageIndex + 1) / totalPages) * 100;

  return (
    <div className="min-h-screen bg-[#1a1612] flex flex-col items-center justify-center p-4 md:p-8">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#2a2420] z-50">
        <div
          className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Search Button */}
      <button
        onClick={() => setShowSearch(true)}
        className="fixed top-4 right-4 z-40 flex items-center gap-2 px-4 py-2 bg-[#0A4F46] text-[#D4AF37] rounded-full hover:bg-[#0d6358] transition-all duration-300 shadow-lg"
      >
        <Search size={16} />
        <span className="text-sm hidden md:inline">Search Mudra</span>
      </button>

      {/* Search Modal */}
      {showSearch && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => { setShowSearch(false); setSearchQuery(''); setSearchResults([]); }} />
          <div className="relative w-full max-w-lg bg-[#1e1a16] border border-[#D4AF37]/30 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 p-4 border-b border-[#D4AF37]/20">
              <Search size={18} className="text-[#D4AF37]" />
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search by name, meaning or description..."
                className="flex-1 bg-transparent text-[#f0ebe3] placeholder-[#8B7355] outline-none text-base"
              />
              <button onClick={() => { setShowSearch(false); setSearchQuery(''); setSearchResults([]); }} className="text-[#8B7355] hover:text-[#D4AF37]">
                <X size={18} />
              </button>
            </div>
            {searchResults.length > 0 && (
              <div className="max-h-80 overflow-y-auto">
                {searchResults.map(mudra => (
                  <button
                    key={mudra.id}
                    onClick={() => goToMudraPage(mudra)}
                    className="w-full flex items-center gap-4 px-4 py-3 hover:bg-[#0A4F46]/30 transition-colors text-left border-b border-[#2a2420]"
                  >
                    {mudra.image ? (
                      <img src={mudra.image} alt={mudra.name} className="w-12 h-12 object-cover rounded-lg flex-shrink-0" style={{ objectPosition: 'right center' }} />
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-[#0A4F46]/20 flex items-center justify-center flex-shrink-0">
                        <Hand size={20} className="text-[#D4AF37]/40" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="text-[#f0ebe3] font-serif text-base">{mudra.name}</div>
                      <div className="text-[#8B7355] text-sm">{mudra.bengali} · {mudra.meaning}</div>
                      <div className="text-[#D4AF37]/60 text-xs mt-0.5">{mudra.category === 'single' ? 'Asamyuta Hasta' : 'Samyuta Hasta'}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
            {searchQuery && searchResults.length === 0 && (
              <div className="p-8 text-center text-[#8B7355]">No mudras found for "{searchQuery}"</div>
            )}
            {!searchQuery && (
              <div className="p-6 text-center text-[#8B7355] text-sm">
                Type to search among {allMudras.length} mudras
              </div>
            )}
          </div>
        </div>
      )}

      {/* Book Container */}
      <div className="w-full max-w-[1100px] flex flex-col items-center">
        <div
          className={`relative w-full max-w-[900px] aspect-[4/3] md:aspect-[3/2] perspective-[2000px] ${
            isAnimating ? 'pointer-events-none' : ''
          }`}
        >
          <div
            className={`book-page ${
              flipDirection === 'next' ? 'flip-out-left' :
              flipDirection === 'prev' ? 'flip-out-right' :
              'flip-in'
            }`}
          >
            <div className="book-inner">
              {currentPage.type === 'cover' && <CoverPage onEnter={() => goToPage('next')} />}
              {currentPage.type === 'chapter' && (
                <ChapterPage
                  title={currentPage.chapterTitle || ''}
                  subtitle={currentPage.chapterSubtitle || ''}
                  icon={currentPage.chapterIcon || 'single'}
                />
              )}
              {currentPage.type === 'mudra' && currentPage.mudra && (
                <MudraPage
                  mudra={currentPage.mudra}
                  playingAudio={playingAudio}
                  onPlayAudio={playAudio}
                  onStopAudio={stopAudio}
                />
              )}
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-[#8B7355] to-transparent opacity-30 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-[#8B7355] to-transparent opacity-30 pointer-events-none" />
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 flex items-center gap-6">
          <button
            onClick={() => goToPage('prev')}
            disabled={currentPageIndex === 0 || isAnimating}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentPageIndex === 0
                ? 'bg-[#2a2420] text-[#5a5440] cursor-not-allowed'
                : 'bg-[#0A4F46] text-[#D4AF37] hover:bg-[#0d6358] hover:scale-110 shadow-lg shadow-black/30'
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="text-center">
            <div className="text-[#D4AF37] font-serif text-lg tracking-wider">
              {String(currentPageIndex + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
            </div>
            <div className="text-[#8B7355] text-xs mt-1 tracking-widest uppercase">
              {currentPage.type === 'cover' ? 'Cover' :
               currentPage.type === 'chapter' ? 'Chapter' :
               currentPage.mudra?.name || 'Mudra'}
            </div>
          </div>

          <button
            onClick={() => goToPage('next')}
            disabled={currentPageIndex === totalPages - 1 || isAnimating}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentPageIndex === totalPages - 1
                ? 'bg-[#2a2420] text-[#5a5440] cursor-not-allowed'
                : 'bg-[#0A4F46] text-[#D4AF37] hover:bg-[#0d6358] hover:scale-110 shadow-lg shadow-black/30'
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Page dots */}
        <div className="mt-6 flex flex-wrap justify-center gap-1.5 max-w-[600px]">
          {pages.map((_page, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating && index !== currentPageIndex) {
                  setFlipDirection(index > currentPageIndex ? 'next' : 'prev');
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentPageIndex(index);
                    setVisitedPages(prev => new Set([...prev, index]));
                    setIsAnimating(false);
                    setFlipDirection(null);
                  }, 400);
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPageIndex
                  ? 'bg-[#D4AF37] w-6'
                  : visitedPages.has(index)
                  ? 'bg-[#8B7355]'
                  : 'bg-[#3a3530]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CoverPage({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-8 relative overflow-hidden">
      <div className="absolute inset-4 border-2 border-[#D4AF37]/30 pointer-events-none" />
      <div className="absolute inset-6 border border-[#D4AF37]/20 pointer-events-none" />
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#D4AF37]" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#D4AF37]" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]" />

      <div className="relative z-10">
        <div className="text-[#8B7355] text-sm tracking-[0.4em] uppercase mb-4">
          A Treatise on Odissi Dance
        </div>
        <h1 className="font-serif text-5xl md:text-7xl text-[#0A4F46] mb-2 leading-tight">
          Abhinaya<br/>Chandrika
        </h1>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-6" />
        <p className="text-[#6B6B6B] text-lg max-w-md mx-auto mb-8 leading-relaxed">
          An illustrated guide to the sacred hand gestures of Odissi classical dance
        </p>
        <div className="flex items-center justify-center gap-8 mb-8">
          <div className="flex flex-col items-center">
            <Hand size={24} className="text-[#D4AF37] mb-1" />
            <span className="text-xs text-[#8B7355]">28 Single Hand</span>
          </div>
          <div className="w-px h-8 bg-[#D4AF37]/30" />
          <div className="flex flex-col items-center">
            <GitBranch size={24} className="text-[#D4AF37] mb-1" />
            <span className="text-xs text-[#8B7355]">23 Double Hand</span>
          </div>
        </div>
        <button
          onClick={onEnter}
          className="group inline-flex items-center gap-3 px-8 py-3 bg-[#0A4F46] text-[#D4AF37] rounded-full hover:bg-[#0d6358] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20 hover:scale-105"
        >
          <BookOpen size={20} />
          <span className="font-serif tracking-wider">Enter the Book</span>
        </button>
      </div>
      <div className="absolute bottom-8 text-[#D4AF37]/20 text-2xl font-serif tracking-widest">
        अभिनय चन्द्रिका
      </div>
    </div>
  );
}

function ChapterPage({ title, subtitle, icon }: {
  title: string;
  subtitle: string;
  icon: 'single' | 'double';
}) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#0A4F46] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-[#0A4F46] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#0A4F46] rounded-full" />
      </div>
      <div className="relative z-10">
        <div className="text-[#8B7355] text-sm tracking-[0.3em] uppercase mb-6">
          Chapter {icon === 'single' ? 'One' : 'Two'}
        </div>
        <div className="w-20 h-20 rounded-full bg-[#0A4F46] flex items-center justify-center mx-auto mb-6 shadow-lg">
          {icon === 'single' ? (
            <Hand size={36} className="text-[#D4AF37]" />
          ) : (
            <GitBranch size={36} className="text-[#D4AF37]" />
          )}
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-[#0A4F46] mb-3">{title}</h2>
        <p className="text-[#6B6B6B] text-xl">{subtitle}</p>
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-8" />
        <p className="text-[#8B7355] max-w-md mx-auto leading-relaxed">
          {icon === 'single'
            ? 'Single hand gestures performed with one hand, each carrying its own symbolic meaning in the language of dance.'
            : 'Combined hand gestures using both hands together, creating more complex expressions and narratives.'
          }
        </p>
        <div className="mt-8 flex items-center justify-center gap-2 text-[#8B7355]">
          <div className="w-8 h-px bg-[#D4AF37]/50" />
          <span className="text-xs tracking-widest">
            {icon === 'single' ? '28 Mudras' : '23 Mudras'}
          </span>
          <div className="w-8 h-px bg-[#D4AF37]/50" />
        </div>
      </div>
    </div>
  );
}

function MudraPage({
  mudra,
  playingAudio,
  onPlayAudio,
  onStopAudio
}: {
  mudra: Mudra;
  playingAudio: string | null;
  onPlayAudio: (url: string, id: string) => void;
  onStopAudio: () => void;
}) {
  const hasImage = !!mudra.image;
  const hasAudio = !!mudra.audio;
  const isPlaying = playingAudio === mudra.id;

  return (
    <div className="h-full flex flex-col md:flex-row relative">
      {/* Image Area */}
      <div className={`${hasImage ? 'md:w-2/5' : 'md:w-1/3'} h-48 md:h-full bg-gradient-to-br from-[#f0ebe3] to-[#e8e0d4] flex items-center justify-center relative overflow-hidden`}>
        {hasImage ? (
          <div className="relative w-full h-full">
            <img
              src={mudra.image}
              alt={mudra.name}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'right center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#F9F7F2]/80 hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#F9F7F2]/80 md:hidden" />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-6">
            <div className="w-24 h-24 rounded-full bg-[#0A4F46]/10 flex items-center justify-center mb-4">
              <Hand size={40} className="text-[#0A4F46]/40" />
            </div>
            <p className="text-[#8B7355] text-sm italic">Illustration coming soon</p>
          </div>
        )}
        <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent hidden md:block" />
      </div>

      {/* Content Area */}
      <div className={`${hasImage ? 'md:w-3/5' : 'md:w-2/3'} flex-1 p-6 md:p-10 flex flex-col justify-center`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">
            {mudra.category === 'single' ? 'Asamyuta Hasta' : 'Samyuta Hasta'}
          </span>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-[#0A4F46] mb-1 leading-tight">{mudra.name}</h2>
        <p className="text-2xl text-[#8B7355] mb-2 font-serif">{mudra.bengali}</p>
        <p className="text-[#6B6B6B] text-lg italic mb-6">{mudra.meaning}</p>
        <div className="w-16 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent mb-6" />
        <p className="text-[#4a4a4a] leading-relaxed mb-6">{mudra.description}</p>
        {hasAudio && (
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                if (isPlaying) onStopAudio();
                else onPlayAudio(mudra.audio!, mudra.id);
              }}
              className={`group flex items-center gap-3 px-5 py-2.5 rounded-full transition-all duration-300 ${
                isPlaying
                  ? 'bg-[#D4AF37] text-[#0A4F46] shadow-lg shadow-[#D4AF37]/30'
                  : 'bg-[#0A4F46] text-[#D4AF37] hover:bg-[#0d6358] hover:scale-105'
              }`}
            >
              {isPlaying ? <VolumeX size={18} /> : <Volume2 size={18} />}
              <span className="text-sm font-medium tracking-wider">{isPlaying ? 'Stop' : 'Listen'}</span>
              {isPlaying && (
                <span className="flex gap-0.5">
                  <span className="w-1 h-3 bg-[#0A4F46] rounded-full animate-pulse" />
                  <span className="w-1 h-4 bg-[#0A4F46] rounded-full animate-pulse delay-75" />
                  <span className="w-1 h-2 bg-[#0A4F46] rounded-full animate-pulse delay-150" />
                </span>
              )}
            </button>
            {isPlaying && <span className="text-[#8B7355] text-sm animate-pulse">Playing...</span>}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
