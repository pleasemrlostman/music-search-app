import React, { useState, useEffect } from "react";
import "components/Detail/Detail.scss";

const Detail = (props) => {
    const [detailMusicData, setDetailMusicData] = useState("");
    useEffect(() => {
        if (props.location.state === undefined) {
            props.history.push("/");
        }
        setDetailMusicData(props.location.state);
    }, []);
    const backPage = () => {
        props.history.push("/");
    };
    return (
        <div className="detail-wrap">
            <div className="detail-nav">
                <button
                    className="detail-nav-btn detail-nav-btn--back"
                    onClick={backPage}
                >
                    뒤로가기
                </button>
                {/* <button className="detail-nav-btn detail-nav-btn--youtube">
                    유투브
                </button> */}
            </div>
            <div className="detail-infor">
                <div
                    className="detail-img"
                    style={{
                        backgroundImage: `url(${detailMusicData.image})`,
                    }}
                ></div>
                <div className="detail-content">
                    <h2 className="detail-artist one-line-text">
                        {detailMusicData.artist}
                    </h2>
                    <h3 className="detail-album one-line-text">
                        {detailMusicData.name}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Detail;
