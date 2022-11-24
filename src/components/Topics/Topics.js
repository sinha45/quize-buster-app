import React from 'react';

const Topics = ({ topics }) => {
    const [id, logo,] = topics;
    return (
        <div>
            <img src={logo} alt="" />
        </div>
    );
};

export default Topics; <h2>This is Topics</h2>