import React, { useState } from "react";
import MusicList from "../components/MusicList";

const Main = () => {
    const [musicLoading, setMusicLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const onSearch = (e) => {
        const {
            target: { name, value },
        } = e;
        if (name === "music") {
            e.preventDefault();
            setSearchValue(value);
        }
    };
    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            {musicLoading ? (
                <h1>로딩중</h1>
            ) : (
                <div>
                    <form>
                        <input
                            name="music"
                            type="text"
                            placeholder="검색어를 입력해주세요"
                            value={searchValue}
                            onChange={onSearch}
                        />
                        <button>검색</button>
                    </form>
                    <MusicList />
                </div>
            )}
        </>
    );
};

export default Main;
