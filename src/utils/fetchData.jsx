export const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/status',
  headers: {
    'x-rapidapi-key': '083692fd50msh4a4041494fcabfbp19f7d9jsna31263c1f428',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  headers: {
    'x-rapidapi-key': '083692fd50msh4a4041494fcabfbp19f7d9jsna31263c1f428',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}