import React, {Component} from "react"
import { authenticateEmployee } from "../action"
import { connect } from "react-redux"
class  Login extends Component{
    render(){
        return(
            <div>
                <button><a href='/login'>LOGIN</a></button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    authenticateEmployee: () => dispatch(authenticateEmployee())
});
const loginContainer = connect(null,mapDispatchToProps)(Login);
export default loginContainer
