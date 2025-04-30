
import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [songData, setSongData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDownload = async () => {
    setLoading(true);
    setError('');
    setSongData(null);

    const encodedUrl = encodeURIComponent(url);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '52b0160510mshc6c4dfaa6bf6186p19190cjsn5f22b4482b60',
        'X-RapidAPI-Host': 'spotify-downloader9.p.rapidapi.com'
      }
    };

    try {
      import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://spotify-downloader9.p.rapidapi.com/downloadSong',
  params: {
    songId: 'https://open.spotify.com/track/7jT3LcNj4XPYOlbNkPWNhU'
  },
  headers: {
    'x-rapidapi-key': '52b0160510mshc6c4dfaa6bf6186p19190cjsn5f22b4482b60',
    'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
  }
};

try {
	const options = {
    method: 'GET',
    url: 'https://spotify-downloader9.p.rapidapi.com/downloadSong',
    params: {
      songId: 'https://open.spotify.com/track/7jT3LcNj4XPYOlbNkPWNhU'
    },
    headers: {
      'x-rapidapi-key': '52b0160510mshc6c4dfaa6bf6186p19190cjsn5f22b4482b60',
      'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
    }
  };
  
  try {
      import axios from 'axios';

      const options = {
        method: 'GET',
        url: ' https://spotify-downloader9.p.rapidapi.com.downloadSong',
        params: {
          songId:'https://open.spotify.com/track/7jT3LcNj4XPYO1bNkPWNhU'
        },
        headers:{
          'x-rapidapi-key':'52b0160510mshc6c4dfaa6bf6186p19190cjsn5f22b4482b60',
          'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
        }
      };
      try {
        const res = await fetch(`https://spotify-downloader9.p.rapidapi.com.downloadSong'=${encodedUrl}`, options);
        const data = await res.json();
  
        if (data && data.download_url) {
          setSongData(data);
        } else {
          setError('Song not found or not downloadable.');
        }
      } catch (err) {
        setError('API error. Please try again.');
      }
      setLoading(false);
    };
  


  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-black flex items-center justify-center text-white">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">🎵 Spotify Song Downloader</h1>
        <input
          type="text"
          className="w-full p-3 rounded mb-4 text-black"
          placeholder="Enter Spotify track URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          onClick={handleDownload}
          className="w-full bg-green-600 hover:bg-green-700 p-3 rounded font-semibold"
        >
          {loading ? 'Searching...' : 'Download'}
        </button>

        {error && <p className="text-red-400 mt-4">{error}</p>}

        {songData && (
          <div className="mt-6 text-center">
            <p className="font-semibold">{songData.title}</p>
            <p className="text-sm text-gray-400">{songData.artist}</p>
            <a
              href={songData.download_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            >
              Click to Download
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
