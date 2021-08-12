import React from "react";
import "./MusicList.css";

const MusicList = (props) => {
    const list = props.musicData.slice(0, 10);
    return (
        <>
            <div className="all-wrap">
                {list.length !== 0 ? (
                    list.map((value) => {
                        return (
                            <div className="search-infor">
                                <img
                                    className="bg-img"
                                    src={
                                        value.image[3]["#text"] !== ""
                                            ? value.image[3]["#text"]
                                            : " https://images.unsplash.com/photo-1602848597239-b63398805e3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=495&q=80"
                                    }
                                ></img>
                                <div className="seq-infor">
                                    <h2 className="one-line-text artist-name">
                                        {value.artist}
                                    </h2>
                                    <h3 className="one-line-text album-name">
                                        {value.name}
                                    </h3>
                                </div>
                            </div>
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
