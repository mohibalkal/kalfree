
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { searchAll, getStreamUrl } from './hifiService';
import { storageService } from './storageService';

// Mock fetch
global.fetch = vi.fn();

describe('hifiService', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('searchAll', () => {
        it('should return empty results for empty query', async () => {
            const result = await searchAll('');
            expect(result).toEqual({ tracks: [], albums: [], artists: [], playlists: [] });
        });

        it('should parse tracks correctly from API response', async () => {
            const mockData = {
                data: {
                    tracks: {
                        items: [
                            {
                                id: 'track1',
                                title: 'Song 1',
                                artist: { id: 'a1', name: 'Artist 1' },
                                album: { id: 'alb1', title: 'Album 1', cover: 'cover1.jpg' },
                                duration: 200,
                                audioQuality: 'LOSSLESS'
                            }
                        ]
                    }
                }
            };

            (fetch as any).mockResolvedValue({
                ok: true,
                json: async () => mockData
            });

            const result = await searchAll('test');
            expect(result.tracks).toHaveLength(1);
            expect(result.tracks[0].title).toBe('Song 1');
            expect(result.tracks[0].artist.name).toBe('Artist 1');
        });
    });

    describe('getStreamUrl', () => {
        it('should resolve direct URL from API', async () => {
            const mockData = {
                url: 'https://stream.tidal.com/test.flac'
            };

            (fetch as any).mockResolvedValue({
                ok: true,
                json: async () => mockData
            });

            const url = await getStreamUrl('track123');
            expect(url).toBe('https://stream.tidal.com/test.flac');
        });

        it('should fail when all instances fail', async () => {
            (fetch as any).mockRejectedValue(new Error('Network error'));

            await expect(getStreamUrl('track123')).rejects.toThrow('Failed to resolve a playable stream URL.');
        });
    });
});
