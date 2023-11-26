import { MediaProvider } from "./spotifyAPI";
import { Youtube } from "./youtubeAPI";

export class YoutubeAdaptor extends Youtube implements MediaProvider {

    getPlaylist(): string[] {
        const playlist = super.getMusicLibrary();
        return playlist.map(s => s.name);
    }

}