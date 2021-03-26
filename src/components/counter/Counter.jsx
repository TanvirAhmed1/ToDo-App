import './Counter.css'
import {Component} from "react";
class Counter extends Component{
    constructor() {
        super();
        this.state = {
            counter : 0
        }
        this.Increment = this.Increment.bind(this);
    }
    render() {
        return(
            <div className="Counter">
                <button onClick={this.Increment}>+{this.props.by}</button>
                <span className="span">{this.state.counter}</span>
            </div>
        );
    }
    Increment() {
        return(
            this.setState({
                counter: this.state.counter + this.props.by
            })

        );
    }
}

export default Counter