import React, {Component} from "react"
import { authenticateEmployee } from "../action"
import { connect } from "react-redux"
class  Login extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.authenticateEmployee()}>LOGIN</button>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    authenticateEmployee: () => dispatch(authenticateEmployee())
});
const loginContainer = connect(null,mapDispatchToProps)(Login);
export default loginContainer
