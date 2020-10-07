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
            err => this.setState({ errorMessage: err.message })
        );
    }
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <LoaderSpinner message="Please accept location request"/>;
    }
    render() {
        return this.renderContent();
    }

}

ReactDOM.render(<App />, document.querySelector('#root'));