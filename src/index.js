import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        //pass props to parent constructor
        super(props); 

        //state initialization
        this.state = { lat: null, errorMessage: '' };
    } 

    componentDidMount() {
        //call geolocation api and set lat state
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>;
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: { this.state.lat }</div>;
        }

        return <div>Loading!</div>;
    }

}

ReactDOM.render(<App/>, document.querySelector('#root'));