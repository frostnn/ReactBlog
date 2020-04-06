import React from 'react';
import './styles/global.scss'
import AuthPage from './componetns/pages/AuthPage/index';
import HomePage from './componetns/pages/HomePage/index';
import preStorageProcessing from './utils/preStorageProcessing'

class App extends React.Component {

  constructor(props){
    super(props);
    const userFromStorage = localStorage.getItem('user')
    this.state = {
      user: (userFromStorage && preStorageProcessing.fromString(userFromStorage)) || 
      null
    }
  }

  

  setLoggedUser = user => {
    localStorage.setItem('user', preStorageProcessing.toString(user));
    this.setState({user})
  }

  unsetLoggedUser = () => {
    localStorage.removeItem('user');
    this.setState({user: null})
  }
  render() { 
  return (
    <div className="App">
    {
      (this.state.user && <HomePage user={this.state.user} unsetLoggedUser={this.unsetLoggedUser}/>) || (  
      <AuthPage setLoggedUser={this.setLoggedUser}/>)
    }
     
    </div>
  );
  }
}

export default App;
