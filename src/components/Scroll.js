import React from 'react';

const Scroll = (props) => {
    return (
        <div
            className='shadow-5 ba bw1 b--light-red bg-light-blue'
            style={{ overflowY: 'scroll', height: '685px' }}>
            {props.children}
        </div>
    );
}

export default Scroll;