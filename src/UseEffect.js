import React, {useEffect, useState} from 'react';

const UseEffect = () => {

    const [value, setValue] = useState(false);

    useEffect(() => {
        console.log('useEffect');
    }, [value]);

    return (
        <div>
            <button onClick={() => setValue(!value)}>
                {value ? 'ON' : 'OFF'}
            </button>
            <h1>{value ? 'ON' : 'OFF'}</h1>
        </div>
    );
};

export default UseEffect;