import React from 'react';
import axios from 'axios';
import './SignUp.css'
import { connect } from 'react-redux';
import DisplayStatus from '../../src/DisplayStatus/DisplayStatus'
const SignUp = (props) => {

    const [isSending, setIsSending] = React.useState(false);

    const sendRequest = React.useCallback(async () => {
        if (isSending) return;
        setIsSending(true);
        await axios.get('./sign.json')
        .then((data)=>{
            props.onSignUp();
        }).catch((ex)=>{
            console.log('There is an exception');
        });
        setIsSending(false)
    }, [isSending]);

    const handleEmailChange = event => {
        if((event.target.value.length === 0)){
            alert('Please enter email id');
        }
    }
   
    return(
        <form>
        <div className="form-group">
            <div>
                <label>Name: </label><input className="spacer" type="text" placeholder="Input your name" ></input><br />
                *<label>Email: </label><input type="email" placeholder="abc@xyz.com" 
                onChange={handleEmailChange} onBlur={handleEmailChange}></input><br />
            </div>
            <DisplayStatus value={props.isSignedUp}/>
            <button onClick={sendRequest} disabled={isSending} className="buttonStyle spacer">Sign Up</button>
        </div>
        </form>
        
    );
}
//asking which slice of state we want to get
const mapStateToProps = state => {
    return {
        isSignedUp: state.isSignedUp
    }
};

//creating dispatch
const mapDispatchToProps = dispatch => {
    return {
        onSignUp: () => dispatch({type: 'SIGNUP'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);