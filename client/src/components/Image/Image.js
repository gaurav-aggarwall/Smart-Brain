import React from 'react';

import ImageBox from './ImageBox/ImageBox';

import './Image.css';

const Image = ({ imgSrc, box }) => {
    
    let boxes = box.map(coords => {
        return <ImageBox key={coords[0]} box={coords} /> 
    });

    return (
        <div className='imgContainer'>
            <div className='absolute'>
                <img id='faceImg' src={imgSrc} alt='' />
                {boxes}
            </div>
        </div>
    );
};

export default Image;