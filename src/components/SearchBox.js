import React from 'react';

const SearchBox = ({ onSearch }) => {
    return (
        <div className='pa2'>
            <input
                onChange={onSearch}
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots' />
        </div>
    );
}

export default SearchBox;