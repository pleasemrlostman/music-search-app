import React from "react";

const Reply = ({ user, todayDate, text }) => {
    return (
        <>
            <div className="detail-reply__replys">
                <div className="detail-reply__name-wraps">
                    <div className="detail-reply__name-user">
                        <span className="detail-reply__name-text">작성자:</span>
                        <h3 className="detail-reply__name">{user}</h3>
                    </div>
                    <div className="detail-reply__date">{todayDate}</div>
                </div>
                <h4 className="detail-reply__text">{text}</h4>
            </div>
        </>
    );
};

export default Reply;
