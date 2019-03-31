import React from 'react';

import './Image.css';

const Image = ({ imgSrc, box}) => {
    
    const boxBoundaries = {
        top: box.topRow, 
        right: box.rightCol, 
        bottom: box.bottomRow, 
        left: box.leftCol
    };

    return (
        <div className='imgContainer'>
            <div className='absolute'>
                <img id='faceImg' src={imgSrc} alt='' />
                <div className='face-recog' style={boxBoundaries}></div>
            </div>
        </div>
    );
};

export default Image;