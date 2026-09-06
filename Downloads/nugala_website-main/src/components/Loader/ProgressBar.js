import React from 'react';
import { ProgressBar as Loader } from 'react-loader-spinner';

function ProgressBar() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', // Full viewport height for vertical centering
            }}
        >
            <Loader
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
}

export default ProgressBar;
