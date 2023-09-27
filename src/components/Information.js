import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';
import choi from '../assets/member/choi.jpg'
import chae from '../assets/member/chae.jpg'
import kimPiano from '../assets/member/kim_piano.jpg'
import kimVocal from '../assets/member/kim_vocal.jpg'
import lim from '../assets/member/lim.jpg'
import choBass from '../assets/member/cho_bass.jpg'
import choDrum from '../assets/member/cho_drum.jpg'
import hyeong from '../assets/member/hyeong.jpg'
import lee from '../assets/member/lee.jpg'
import kimGuitar from '../assets/member/kim_guitar.jpg'
import instagramLogo from '../assets/logo/instagram.png'
import youtubeLogo from '../assets/logo/youtube.png'

const Information = () => {
    const animatedItem = [useScrollFadeIn('up', 1, 0), useScrollFadeIn('up', 1, 0)];
    return (
        <div className="content information">
            <h2 {...animatedItem[0]} className="title">
                멤버 소개
            </h2>
            {/* <div {...animatedItem[1]}>
                <img src={photo} />
            </div> */}
            <div {...animatedItem[1]} className="info">
                <dl className="floor">
                    <dt><img src={kimVocal} /></dt>
                    <dd>
                        <div className='member'>김민주<span>#보컬 #피아노 #._.b</span><span>#연구소막내온탑</span><span>#카페인충전필수</span></div><a href='https://youtube.com/@minju_voice?si=EeKeySwZ36rDIA9z' target="_blank"><img src={youtubeLogo} /></a><a href='https://www.instagram.com/calm_pillar._.mj/' target="_blank"><img src={instagramLogo} /></a>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={kimGuitar} /></dt>
                    <dd>
                        <div className='member'>김하정<span>#클린이 #기린이 #공고사뉴비</span></div><a href='https://www.instagram.com/gnoej.ah/' target="_blank"><img src={instagramLogo} /></a>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={kimPiano} /></dt>
                    <dd>
                        <div className='member'>김현정<span>#피아노 #전완근 #삼각근</span></div><a href='https://www.instagram.com/ella.kim95/' target="_blank"><img src={instagramLogo} /></a>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={lee} /></dt>
                    <dd>
                        <div className='member'>이민수<span>#보컬 #땜빵 #<span style={{ fontFamily: 'sans-serif' }}>등神</span></span></div>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={lim} /></dt>
                    <dd>
                        <div className='member'>임우찬<span>#피아노 #힙찔이</span><span>#아직도20대:)</span></div><a href='https://www.instagram.com/channy__channy/' target="_blank"><img src={instagramLogo} /></a>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={hyeong} /></dt>
                    <dd>
                        <div className='member'>전형경<span>#드럼 #영상요정</span><span>#공고사최장신 #겨울이누나</span></div><a href='https://www.instagram.com/jeon__winter/' target="_blank"><img src={instagramLogo} /></a>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={choBass} /></dt>
                    <dd>
                        <div className='member'>조경업<span>#베이스 #슬랩은처음이라</span><span>#노예2년</span></div><a href='https://www.instagram.com/ub.up_0814/' target="_blank"><img src={instagramLogo} /></a>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={choDrum} /></dt>
                    <dd>
                        <div className='member'>조용호<span>#드럼 #지금도막내</span><span>#앞으로도막내</span></div><a href='https://www.instagram.com/yongho7495/' target="_blank"><img src={instagramLogo} /></a>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={chae} /></dt>
                    <dd>
                        <div className='member'>채수연<span>#보컬 #베이스 #장군이누나</span></div><a href='https://www.instagram.com/ga_suyeon/' target="_blank"><img src={instagramLogo} /></a>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={choi} /></dt>
                    <dd>
                        <div className='member'>최서우<span>#클라이밍 #반70 #무적엘지</span></div><a href='https://www.instagram.com/seociopass/' target="_blank"><img src={instagramLogo} /></a>
                    </dd>
                </dl>
            </div>
        </div>
    );
};

export default Information;
