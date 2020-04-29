import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp/SignUp';
import WelcomeNote from './WelcomeNote/WelcomeNote';


function App() {
  const [isSignedUp, setSignedUp ] = React.useState(false);
  var signUpForm;
  if(!isSignedUp){
    signUpForm = <SignUp/>;
  }
  return (  
    <div className="App"> 
      <WelcomeNote/>
      {signUpForm}
    </div>
  );
}

export default App;
