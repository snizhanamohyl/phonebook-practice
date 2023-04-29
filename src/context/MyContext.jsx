import { Component } from "react";
import authContext from './authContext';

export default class AuthContext extends Component {
    state = {
        value: 0,
        increment: () => {
            this.setState(prevState => ({value: prevState.value+1}))
        },
        decrement: () => {
            this.setState(prevState => ({value: prevState.value-1}))
        }
    }

    render() {
        return <authContext.Provider value={this.state}>{ this.props.children}</authContext.Provider>
    }
}