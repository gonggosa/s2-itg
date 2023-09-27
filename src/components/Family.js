import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';
import youtubeLogo from '../assets/logo/youtube.png'

const Family = () => {
    const animatedItem = [
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        // useScrollFadeIn('up', 1, 0)
    ];
    return (
        <div className="content family">
            <div>
                <div>
                    <div {...animatedItem[0]} className="together">
                        초대 영상
                    </div>
                    <div>
                        <div {...animatedItem[1]}>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/nBTfGvBliNE?si=G0ozEqo-o1E1vhgd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div {...animatedItem[2]} className="love">
                            <a href="https://www.youtube.com/channel/UCtjraGBbxmEao9kWmcopVFg/featured">
                                <img alt="youtube-map" className="map-icon" id="youtube-logo" src={youtubeLogo} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Family;
