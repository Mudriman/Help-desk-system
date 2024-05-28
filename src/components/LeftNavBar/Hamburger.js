import React from 'react';


const Ham = ({open, handleClick}) => {
    return (
        <div onClick={handleClick} className='hamWrapper'>
            {open ? (
                <i className="fas fa-align-center"></i>
            ):(
                <i className="fa-solid fa-bars"></i>
            )}
        </div>
    );
};

export default Ham;