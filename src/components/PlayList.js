import '../PlayList.css';
import React, { useState } from 'react';

import useScrollFadeIn from '..//hooks/useScrollFadeIn';


const PlayList = () => {
    const SECTION1 = [{ title: 'Zeitgeist', singer: 'The Koxx', song: 'zei' }, { title: 'Alive', singer: '터치드', song: 'alive' }, { title: 'Villain(빌런)', singer: '스텔라장', song: 'villain' }, { title: '호수', singer: '와인루프', song: 'wine' }, { title: '찬란', singer: '나상현씨밴드', song: 'brilliance' }, { title: 'Cheek To Cheek', singer: '미노이', song: 'cheek' }, { title: '우리의 밤', singer: '유다빈밴드(Feat.유승우)', song: 'ourNight' }]
    const SECTION2 = [{ title: 'Unholy', singer: '유다빈밴드', song: 'unholy' }, { title: '새벽별', singer: '터치드', song: 'star' }, { title: 'Monster', singer: '드렁큰타이거', song: 'monster' }, { title: 'Break + Boogie On And On', singer: '빈지노', song: 'boogie' }, { title: '춘래불사춘', singer: '최예근', song: 'spring' }, { title: 'Rock Likes Stars', singer: '윤하', song: 'rock' }, { title: '크게 라디오를 켜고', singer: 'YB', song: 'yb' }, { title: '몽유병', singer: '로맨틱펀치', song: 'romantic' }, { title: '좋지 아니한가', singer: '유다빈밴드', song: 'good' }]


    const animatedItem = [useScrollFadeIn('up', 1, 0), useScrollFadeIn('up', 1, 0)];

    const [section, secSection] = useState(1);

    function playList() {
        window.location.href = section === 1 ? 'https://www.youtube.com/playlist?list=PLUum4CXJb9mC78KTt_6jpgXjQ6R0Xhl9H' : "https://music.youtube.com/playlist?list=PLUum4CXJb9mDpKsDhRENI2efpXZoRY8yY&si=cZy4oZVLYTcOC0Ju";
    }

    return (
        <div className='content playList'><h2 {...animatedItem[0]} className="title">공연 곡 리스트</h2>
            <div {...animatedItem[1]} className="box__outside">
                <div className="container__status-bar margin">
                    <h1>{section}부 Playlist</h1>
                    <div className="empty"></div>
                </div>
                <div className="container__album margin">
                    <div className="container__album-photo">
                    </div>
                    <div className="container__album-name">
                        <h1>좋지 아니한가</h1>
                        <h5>by 공연이 고픈 사람들</h5>
                    </div>
                </div>
                <div className="container__functions margin">
                    <div className="btn__play" onClick={playList}>
                        <i className="fas fa-play"></i>
                        <h2>Play</h2>
                    </div>
                    <div className={'btn__heart ' + (section === 1 ? 'active' : '')} onClick={() => secSection(1)}>
                        <h2>1부</h2>
                    </div>
                    <div className={"btn__plus " + (section === 2 ? 'active' : '')} onClick={() => secSection(2)}>
                        <h2>2부</h2>
                    </div>
                </div>
                <div className="container__list margin">
                    {(section === 1 ? SECTION1 : SECTION2).map((music, idx) => {
                        console.log()
                        return (<div className="container__music-box" key={idx}>
                            <div className={`box__color ${music.song}`}></div>
                            <div className="container__detail">
                                <h2>{music.title}</h2>
                                <span>{music.singer}</span>
                            </div>
                        </div>)
                    })}
                    {/* <div className="container__music-box">
                        <div className="box__color"></div>
                        <div className="container__detail">
                            <h2>Falling Slowly</h2>
                            <span>Glen Hansard ⋅ Once</span>
                        </div>
                    </div>
                    <div className="container__music-box">
                        <div className="box__color"></div>
                        <div className="container__detail">
                            <h2>I Feel Love</h2>
                            <span>Sam Smith</span>
                        </div>
                    </div>
                    <div className="container__music-box">
                        <div className="box__color"></div>
                        <div className="container__detail">
                            <h2>Smalltown Boy</h2>
                            <span>Bronski Beat ⋅ 120 BPM</span>
                        </div>
                    </div>
                    <div className="container__music-box">
                        <div className="box__color"></div>
                        <div className="container__detail">
                            <h2>I'm so tired...</h2>
                            <span>Lauv & Troye Sivan</span>
                        </div>
                    </div> */}
                </div>
            </div></div>)
}

export default PlayList;