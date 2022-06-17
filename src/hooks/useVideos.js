import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        videoSearch(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const videoSearch = term => {
        return youtube.get('/search', { q: term })
            .then(res => {
                setVideos(res.data.items);
                // setSelectedVideo(res.data.items[0]);
            })
            .catch(err => console.log(err));
    };

    return [videos, videoSearch];
};

export default useVideos;