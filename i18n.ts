
import { storageService } from './services/storageService';

export type TranslationKey =
    | 'home' | 'search' | 'library' | 'liked_songs' | 'create_playlist'
    | 'settings' | 'audio_quality' | 'appearance' | 'playback' | 'tweaks'
    | 'trending_albums' | 'top_playlists' | 'more_from'
    | 'search_placeholder' | 'no_results' | 'load_more' | 'recent_searches'
    | 'albums' | 'artists' | 'playlists' | 'connected'
    | 'language' | 'arabic' | 'english'
    | 'accent_color' | 'style_options' | 'show_visualizer' | 'square_avatars' | 'grayscale_mode'
    | 'sleep_timer' | 'minutes' | 'off' | 'custom_min' | 'set'
    | 'stats_for_nerds' | 'compact_mode' | 'reduced_motion' | 'high_performance' | 'disable_glow' | 'dynamic_title';

const translations: Record<'EN' | 'AR', Record<string, string>> = {
    EN: {
        home: 'Home',
        search: 'Search',
        library: 'Your Library',
        liked_songs: 'Liked Songs',
        create_playlist: 'Create Playlist',
        settings: 'Settings',
        audio_quality: 'Audio Quality',
        appearance: 'Appearance',
        playback: 'Playback',
        tweaks: 'Tweaks',
        trending_albums: 'Trending Albums',
        top_playlists: 'Top Playlists',
        more_from: 'More from',
        search_placeholder: 'Songs, Artists, Albums...',
        no_results: 'No results found',
        load_more: 'Load More',
        recent_searches: 'Recent Searches',
        albums: 'Albums',
        artists: 'Artists',
        playlists: 'Playlists',
        connected: 'Hifi API Connected',
        language: 'Language',
        arabic: 'Arabic (العربية)',
        english: 'English',
        accent_color: 'Accent Color',
        style_options: 'Style Options',
        show_visualizer: 'Show Visualizer',
        square_avatars: 'Square Avatars',
        grayscale_mode: 'Grayscale Mode',
        sleep_timer: 'Sleep Timer',
        minutes: 'min',
        off: 'Off',
        custom_min: 'Custom (min)',
        set: 'Set',
        stats_for_nerds: 'Stats for Nerds',
        compact_mode: 'Compact Mode',
        reduced_motion: 'Reduced Motion',
        high_performance: 'High Performance',
        disable_glow: 'Disable Glow',
        dynamic_title: 'Dynamic Title'
    },
    AR: {
        home: 'الرئيسية',
        search: 'بحث',
        library: 'مكتبتك',
        liked_songs: 'الأغاني المفضلة',
        create_playlist: 'إنشاء قائمة تشغيل',
        settings: 'الإعدادات',
        audio_quality: 'جودة الصوت',
        appearance: 'المظهر',
        playback: 'التشغيل',
        tweaks: 'تحسينات',
        trending_albums: 'ألبومات شائعة',
        top_playlists: 'أفضل قوائم التشغيل',
        more_from: 'المزيد من',
        search_placeholder: 'أغاني، فنانين، ألبومات...',
        no_results: 'لا توجد نتائج',
        load_more: 'تحميل المزيد',
        recent_searches: 'عمليات البحث الأخيرة',
        albums: 'الألبومات',
        artists: 'الفنانون',
        playlists: 'قوائم التشغيل',
        connected: 'متصل بـ Hifi API',
        language: 'اللغة',
        arabic: 'العربية',
        english: 'الإنجليزية',
        accent_color: 'لون التمييز',
        style_options: 'خيارات النمط',
        show_visualizer: 'إظهار العارض البصري',
        square_avatars: 'صور رمزية مربعة',
        grayscale_mode: 'وضع التدرج الرمادي',
        sleep_timer: 'مؤقت النوم',
        minutes: 'دقيقة',
        off: 'إيقاف',
        custom_min: 'مخصص (دقيقة)',
        set: 'ضبط',
        stats_for_nerds: 'إحصائيات المتابعين',
        compact_mode: 'الوضع المضغوط',
        reduced_motion: 'تقليل الحركة',
        high_performance: 'الأداء العالي',
        disable_glow: 'تعطيل التوهج',
        dynamic_title: 'عنوان ديناميكي'
    }
};

export const t = (key: TranslationKey): string => {
    const lang = storageService.getLanguage();
    return translations[lang][key] || key;
};

export const isRTL = (): boolean => storageService.getLanguage() === 'AR';
