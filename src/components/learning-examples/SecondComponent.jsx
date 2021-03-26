import React, {Component} from "react";

export default class SecondComponent extends Component{
    render() {
        return(
            <div className="SecondComponent">
                This is second component
            </div>
        );
    }
}

export function FirstComponent() {
    return (
        <div className="FirstComponent">
            This is first component
        </div>
    );
};
