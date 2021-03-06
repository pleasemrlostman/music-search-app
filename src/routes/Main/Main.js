import axios from "axios";
import React, { useState, useEffect } from "react";
import MusicList from "components/MusicList/MusicList";
import "routes/Main/Main.scss";

const Main = ({ userObj }) => {
    const [musicLoading, setMusicLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [musicData, setMusicData] = useState([]);
    const onSearch = (e) => {
        const {
            target: { name, value },
        } = e;
        if (name === "music") {
            setSearchValue(value);
        }
    };
    useEffect(() => {
        const fetchValue = async (search) => {
            await axios
                .get(
                    `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${search}&api_key=6e11031365646bac0ef720a17b7d5e14&format=json`
                )
                .then((value) => {
                    setMusicData(value.data.results.albummatches.album);
                    setMusicLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        fetchValue(searchValue);
        return fetchValue;
    }, [searchValue]);

    return (
        <>
            {musicLoading ? (
                <h1>로딩중</h1>
            ) : (
                <div className="wrap">
                    <form className="search-form">
                        <input
                            className="music-search-input"
                            name="music"
                            type="text"
                            placeholder="Please Write Artist and Album Name"
                            value={searchValue}
                            onChange={onSearch}
                        />
                    </form>
                    <MusicList musicData={musicData} userObj={userObj} />
                </div>
            )}
        </>
    );
};

export default Main;
