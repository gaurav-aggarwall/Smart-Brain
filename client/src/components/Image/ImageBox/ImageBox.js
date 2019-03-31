import React from 'react';

import './ImageBox.css';

const ImageBox = props => {

    const boxBoundaries = {
        top: props.box[0], 
        right: props.box[1], 
        bottom: props.box[2], 
        left: props.box[3]
    };

    return( <div className='face-recog' style={boxBoundaries}></div> );
}

export default ImageBox;