import React from "react";
import "./MusicList.scss";
import { Link } from "react-router-dom";

const MusicList = (props) => {
    const list = props.musicData.slice(0, 10);
    return (
        <>
            <div className="list-wrap">
                {list.length !== 0 ? (
                    list.map((value) => {
                        console.log(value);
                        return (
                            <Link
                                to={{
                                    pathname: `/detail`,
                                    state: {
                                        name: value.name,
                                        artist: value.artist,
                                        image: value.image[3]["#text"],
                                    },
                                }}
                                className="search-infor"
                            >
                                <div
                                    className="music-img"
                                    style={{
                                        backgroundImage: `url(${value.image[3]["#text"]})`,
                                    }}
                                ></div>
                                <div className="seq-infor">
                                    <h2 className="one-line-text artist-name">
                                        {value.artist}
                                    </h2>
                                    <h3 className="one-line-text album-name">
                                        {value.name}
                                    </h3>
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    <div className="no-search">검색결과가 없습니다.</div>
                )}
            </div>
        </>
    );
};

export default MusicList;
