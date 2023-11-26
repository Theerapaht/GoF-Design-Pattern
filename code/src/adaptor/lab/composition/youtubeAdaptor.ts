import { MediaProvider } from "./spotifyAPI";
import { Youtube } from "./youtubeAPI";

export class YoutubeAdaptor implements MediaProvider {
    private provider: Youtube
    constructor(provider: Youtube) {
        this.provider = provider;
    }

    connect(): string {
        if (!this.provider) {
            return '';
        }
        return 'Connected to ' + this.provider.connect();
    }

    getPlaylist(): string[] {
        if (!this.provider) {
            return [];
        }
        return this.provider.getMusicLibrary().map(s => s.name);
    }
}