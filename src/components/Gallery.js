import React from 'react';
import ImageGallery from 'react-image-gallery';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';
import picture1 from '../assets/gallery/1.jpg';
import picture2 from '../assets/gallery/2.jpg';
import picture5 from '../assets/gallery/5.jpg';
import picture6 from '../assets/gallery/6.jpg';
import picture7 from '../assets/gallery/7.jpg';
import picture8 from '../assets/gallery/8.jpg';
import picture10 from '../assets/gallery/10.jpg';
import picture11 from '../assets/gallery/11.jpg';
import picture12 from '../assets/gallery/12.jpg';
import picture13 from '../assets/gallery/13.jpg';
import picture14 from '../assets/gallery/14.jpg';
import picture15 from '../assets/gallery/15.jpg';
import picture16 from '../assets/gallery/16.jpg';
import picture17 from '../assets/gallery/17.jpg';
import picture18 from '../assets/gallery/18.jpg';
import picture19 from '../assets/gallery/19.jpg';
import picture20 from '../assets/gallery/20.jpg';
import picture21 from '../assets/gallery/21.jpg';
import picture22 from '../assets/gallery/22.jpg';
import picture23 from '../assets/gallery/23.jpg';

const images = [
    { original: picture1, thumbnail: picture1 },
    { original: picture2, thumbnail: picture2 },
    { original: picture5, thumbnail: picture5 },
    { original: picture6, thumbnail: picture6 },
    { original: picture7, thumbnail: picture7 },
    { original: picture8, thumbnail: picture8 },
    { original: picture10, thumbnail: picture10 },
    { original: picture11, thumbnail: picture11 },
    { original: picture12, thumbnail: picture12 },
    { original: picture13, thumbnail: picture13 },
    { original: picture14, thumbnail: picture14 },
    { original: picture15, thumbnail: picture15 },
    { original: picture16, thumbnail: picture16 },
    { original: picture17, thumbnail: picture17 },
    { original: picture18, thumbnail: picture18 },
    { original: picture19, thumbnail: picture19 },
    { original: picture20, thumbnail: picture20 },
    { original: picture21, thumbnail: picture21 },
    { original: picture22, thumbnail: picture22 },
    { original: picture23, thumbnail: picture23 }
];
function Gallery() {
    const animatedItem = useScrollFadeIn('up', 1, 0);
    return (
        <div {...animatedItem} className="content gallery">
            <h2 className="title">갤러리</h2>
            <ImageGallery showPlayButton={false} showFullscreenButton={false} items={images} />
        </div>
    );
}

export default Gallery;
