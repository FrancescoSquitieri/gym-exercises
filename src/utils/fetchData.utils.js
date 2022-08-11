export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0ed4717a49msh2005c4c67d1c9e0p1b4100jsn3dd7d3a5b0bb',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const exercisesYoutubeVideosOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0ed4717a49msh2005c4c67d1c9e0p1b4100jsn3dd7d3a5b0bb',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};