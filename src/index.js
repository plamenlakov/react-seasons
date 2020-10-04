import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        //pass props to parent constructor
        super(props); 

        //state initialization
        this.state = { lat: null, errorMessage: '' };

        //call geolocation api and set lat state
        window.navigator.geolocation.getCurrentPosition(
            position => {
                //use setstate to update state
                this.setState({ lat: position.coords.latitude })
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    }

    render() {
        return (
            <div>
                Latitude: {this.state.lat}
                <br />
                Error: {this.state.errorMessage}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));