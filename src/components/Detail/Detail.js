import React, { useState, useEffect } from "react";
import "components/Detail/Detail.scss";
import { dbService } from "fbase";
import Reply from "components/Reply/Reply";

const Detail = (props) => {
    let todayDate = `${new Date().getFullYear()}년 ${new Date().getMonth()}월 ${new Date().getDay()}일`;
    const [user, setUser] = useState(null);
    const [detailMusicData, setDetailMusicData] = useState("");
    const [reply, setReply] = useState("");
    const [replys, setReplys] = useState([]);
    useEffect(() => {
        if (
            props.location.state === undefined ||
            props.location.state.user === undefined
        ) {
            props.history.push("/");
        }
        setUser(props.location.state.user.email);
        setDetailMusicData(props.location.state);
        dbService
            .collection(`${props.location.state.name}`)
            .orderBy("createDate", "desc")
            .onSnapshot((snapshot) => {
                const replyArray = snapshot.docs.map((value) => {
                    return {
                        id: value.id,
                        ...value.data(),
                    };
                });
                setReplys(replyArray);
            });
    }, []);

    const backPage = () => {
        props.history.push("/");
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await dbService.collection(`${detailMusicData.name}`).add({
            text: reply,
            userName: user,
            createDate: Date.now(),
        });
        setReply("");
    };
    const onChange = (e) => {
        const { value } = e.target;
        setReply(value);
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
            <div className="detail-reply">
                <h2 className="detail-reply__title">
                    앨범한줄평을 남겨주세요!
                </h2>
                <div className="detail-reply__replys">
                    {replys.map((value) => {
                        return (
                            <>
                                <Reply
                                    id={value.id}
                                    userName={value.userName}
                                    todayDate={todayDate}
                                    text={value.text}
                                    user={user}
                                    album={detailMusicData.name}
                                />
                            </>
                        );
                    })}
                </div>
                <div className="detail-reply__input-wrap">
                    <form onSubmit={onSubmit}>
                        <input
                            placeholder="앨범에 대한 한줄평을 작성해주세요"
                            className="detail-reply__input"
                            value={reply}
                            onChange={onChange}
                        ></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Detail;
