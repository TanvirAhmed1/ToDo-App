import React, {Component} from "react";
// import showInvalidCredintials from "./showInvalidCredintials";
class TodoApp extends Component{
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent/>
            </div>
        )
    }
}
class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Tanvir',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUserNameChange = this.handleUserNameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState({
                [event.target.name]: event.target.value
            }
        )
    }
    // handleUserNameChange(event){
    //     console.log(event.target.value)
    //     this.setState({[event.target.name]: event.target.value})
    // }
    // handlePasswordChange(event){
    //     console.log(event.target.value)
    //     this.setState({password: event.target.value})
    // }
    loginClicked() {
        if (this.state.username === 'Tanvir' && this.state.password === 'best') {
            console.log('success')
            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed: false})
        } else {
            console.log('fali')
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }
    }

    render() {
        return (

            <div>

                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password}
                                 onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
                <showInvalidCredintials hasLoginFailed={this.state.hasLoginFailed}/>
            </div>
        )
    }
    showInvalidCredintials(props) {
        if(props.hasLoginFailed === true){
            return <div>Invalid Credintials</div>
        }else {
            return null
        }
    }
}

// class showInvalidCredintials extends Component{
//     render(props) {
//
//             if(props.hasLoginFailed){
//                 return <div>Invalid Credintials</div>
//             }else {
//                 return null
//             }
//     }
// }

export default TodoApp