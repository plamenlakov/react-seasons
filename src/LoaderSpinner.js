import React from 'react';

const LoaderSpinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
}

LoaderSpinner.defaultProps = {
    message: 'Loading...'
};

export default LoaderSpinner;