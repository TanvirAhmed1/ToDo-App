import './App.css';
import SecondComponent, {FirstComponent} from "./components/learning-examples/SecondComponent";
import Counter from "./components/counter/Counter";
import React, {Component} from "react";
import TodoApp from "./components/todo/TodoApp";



function App() {
    return (
        <div className="App">
            {/*<Counter/>*/}
            <TodoApp/>
        </div>
    );
}
class LearningComponent extends Component{
    render(){
        return(
            <div className="LearningComponent">
                <FirstComponent/>
                <SecondComponent/>
            </div>
        );
    }
}

export default App;
