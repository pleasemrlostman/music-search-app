import { dbService } from "fbase";
import React, { useState } from "react";

const Reply = ({ id, user, todayDate, text, userName, album }) => {
    const [editing, setEditing] = useState(false);
    const [newText, setNewText] = useState(text);
    const toggleEditing = () => {
        setEditing((prev) => !prev);
    };
    const onChange = (e) => {
        const {
            target: { value },
        } = e;
        setNewText(value);
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await dbService.doc(`${album}/${id}`).update({
            text: newText,
        });
        setEditing(false);
    };
    const onDeleteClick = async () => {
        const ok = window.confirm("정말로 삭제하시겠습니까?");
        if (ok) {
            await dbService.doc(`${album}/${id}`).delete();
            alert("삭제가 완료되었습니다!");
        } else {
        }
    };
    return (
        <>
            <div className="detail-reply__replys">
                <div className="detail-reply__name-wraps">
                    <div className="detail-reply__name-user">
                        <span className="detail-reply__name-text">작성자:</span>
                        <h3 className="detail-reply__name">{userName}</h3>
                    </div>
                    <div className="detail-reply__date">{todayDate}</div>
                </div>
                {editing ? (
                    <form
                        onSubmit={onSubmit}
                        className="detail-reply__modi-wrap"
                    >
                        <input
                            value={newText}
                            onChange={onChange}
                            className="detail-reply__modi"
                        ></input>
                    </form>
                ) : (
                    <h4 className="detail-reply__text">{text}</h4>
                )}{" "}
                {user === userName ? (
                    <div className="detail-reply__change">
                        <button
                            onClick={toggleEditing}
                            className="detail-reply__btn detail-reply__update"
                        >
                            {editing ? "취소" : "수정"}
                        </button>
                        <button
                            onClick={onDeleteClick}
                            className="detail-reply__btn detail-reply__delete"
                        >
                            삭제
                        </button>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default Reply;
