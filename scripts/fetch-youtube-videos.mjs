import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function fetchYouTubeVideos() {
  const feedUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCMN5bRpid3A09cIrkz97H2A';
  
  console.log('Fetching YouTube videos from RSS feed...');
  
  try {
    const response = await fetch(feedUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
    }
    
    const xml = await response.text();
    const { Parser } = await import('xml2js');
    const parser = new Parser();
    const result = await parser.parseStringPromise(xml);
    
    const videos = result.feed.entry.map((entry) => {
      const videoId = entry.id[0].split('yt:video:')[1];
      const title = entry.title[0];
      const link = entry.link[0].$.href;
      const thumbnail = entry['media:thumbnail'][0].$.url;
      
      return {
        id: videoId,
        title,
        thumb: thumbnail,
        link,
      };
    });
    
    // Create data directory if it doesn't exist
    const dataDir = path.join(__dirname, '../src/data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Write to JSON file
    const outputPath = path.join(dataDir, 'youtube-videos.json');
    fs.writeFileSync(outputPath, JSON.stringify(videos, null, 2));
    
    console.log(`✓ Successfully fetched ${videos.length} videos`);
    console.log(`✓ Saved to ${outputPath}`);
    
    return videos;
  } catch (error) {
    console.error('✗ Failed to fetch YouTube videos:', error.message);
    process.exit(1);
  }
}

fetchYouTubeVideos();
