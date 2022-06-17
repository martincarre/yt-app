import axios from 'axios';

const KEY = 'AIzaSyBUbbN4CzN1jpeuNsW5LK97RqXGrg9Vnw8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});