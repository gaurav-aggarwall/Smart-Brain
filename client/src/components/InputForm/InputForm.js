import React from 'react';

import './InputForm.css';

const ImageForm = () => {
    return (
        <div className='container'>
            <p className='f4'>This wil detect faces in the Image.</p>
            <div classNam='center'>
                <div className='center pa4 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' placeholder='Enter image URL'/>
                    <button className='w-20 grow f4 link ph3 pv2 dib white bg-light-purple pointer'>Detect</button>
                </div>
            </div>
        </div>
    );
};

export default ImageForm;