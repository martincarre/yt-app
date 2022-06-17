import React, { useState, useEffect } from "react";
import useVideos from "../hooks/useVideos";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";


const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const [videos, videoSearch] = useVideos('Buildings');
    
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos])
    return (
        <div className="ui container">
            <SearchBar onTermSubmit={videoSearch} />
            <div className="ui grid">
            <div className="ui row">
                <div className="ten wide column">
                    <VideoDetail video={selectedVideo}/>
                </div>
                <div className="six wide column">
                    <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                </div>
            </div>              
            </div>
        </div>
        );

};

export default App;