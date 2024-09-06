const apiKey = process.env.REACT_APP_GOOGLE_API;
export const YOUTUBE_VIDEO_URL=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&q=Kerala&type=video&regionCode=IN&key=${apiKey}`;

export const YOUTUBE_SEARCH_API="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
// export const YOUTUBE_SEARCH_VIDEO_API=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${}&type=video&key=${apiKey}`

