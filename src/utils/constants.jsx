const apiKey = process.env.REACT_APP_GOOGLE_API;
export const YOUTUBE_VIDEO_URL=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&q=Kerala&type=video&regionCode=IN&key=${apiKey}`;

