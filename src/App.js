import './App.css';
import SecondComponent, {FirstComponent} from "./components/learning-examples/SecondComponent";
import Counter from "./components/counter/Counter";
import {Component} from "react";


function App() {
  return (
    <div className="App">
        <Counter by = {1}/>
        <Counter by = {5}/>
        <Counter by = {10}/>
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
