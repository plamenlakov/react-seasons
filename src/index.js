import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoaderSpinner from './LoaderSpinner';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        //call geolocation api and set lat state
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err =>  this.setState({ errorMessage: err.message })
        );
    }

    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>;
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={ this.state.lat }/>;
        }

        return <LoaderSpinner />;
    }

}

ReactDOM.render(<App/>, document.querySelector('#root'));