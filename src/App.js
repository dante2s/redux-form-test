import React, {Component} from 'react';
import './App.css';
import Register from "./Register/Register";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Register/>
                </div>
            </Provider>
        );
    }
}

export default App;
