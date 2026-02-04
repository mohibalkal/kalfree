
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { storageService } from './storageService';
import { Track, Playlist } from '../types';

describe('storageService', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.clearAllMocks();
    });

    describe('Settings', () => {
        it('should get default quality', () => {
            expect(storageService.getQuality()).toBe('LOSSLESS');
        });

        it('should set and get quality', () => {
            storageService.setQuality('LOW');
            expect(storageService.getQuality()).toBe('LOW');
        });

        it('should get default accent color', () => {
            expect(storageService.getAccentColor()).toBe('#1db954');
        });

        it('should set and get accent color', () => {
            storageService.setAccentColor('#ff0000');
            expect(storageService.getAccentColor()).toBe('#ff0000');
        });
    });

    describe('Liked Songs', () => {
        const mockTrack: Track = {
            id: '123',
            title: 'Test Song',
            artist: { id: 'art1', name: 'Test Artist' },
            album: { id: 'alb1', title: 'Test Album', cover: '' },
            duration: 180,
            quality: 'LOSSLESS'
        };

        it('should start with no liked songs', () => {
            expect(storageService.getLikedSongs()).toEqual([]);
        });

        it('should toggle like song', () => {
            const isLikedNow = storageService.toggleLikeSong(mockTrack);
            expect(isLikedNow).toBe(true);
            expect(storageService.getLikedSongs()).toHaveLength(1);
            expect(storageService.isLiked('123')).toBe(true);

            const isLikedNow2 = storageService.toggleLikeSong(mockTrack);
            expect(isLikedNow2).toBe(false);
            expect(storageService.getLikedSongs()).toHaveLength(0);
        });
    });

    describe('Playlists', () => {
        it('should create a playlist', () => {
            const playlist = storageService.createPlaylist('My Test Playlist');
            expect(playlist.title).toBe('My Test Playlist');
            expect(playlist.isLocal).toBe(true);
            expect(storageService.getPlaylists()).toContainEqual(playlist);
        });

        it('should delete a playlist', () => {
            const playlist = storageService.createPlaylist('Delete Me');
            storageService.deletePlaylist(playlist.uuid);
            expect(storageService.getPlaylists().find(p => p.uuid === playlist.uuid)).toBeUndefined();
        });
    });
});
