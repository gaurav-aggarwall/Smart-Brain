import React from 'react';

import './InputForm.css';

const InputForm = ({onInputChange, onSubmitBtn}) => {
    return (
        <div className='container'>
            <p className='f4'>This wil detect faces in the Image. <br/> <span className='f6'>(Use Absolute Paths only for Images)</span></p>
            <div className='res center pa4 shadow-5'>
                <input autoFocus className='f4 pa2 w-70 center' type='text' placeholder='Enter image URL' onChange={onInputChange}/>
                <button className='w-20 grow f4 link ph3 pv2 dib white bg-light-purple pointer' onClick={onSubmitBtn}>Detect</button>
            </div>
        </div>
    );
};

export default InputForm;