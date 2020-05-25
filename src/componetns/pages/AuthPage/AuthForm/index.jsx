import React, {useState} from 'react';
import styles from './style.module.scss';
import TextInput from '../../../common/TextInput/';
import PasswordInput from '../../../common/PasswordInput/';
import AcceptButton from '../../../common/AcceptButton/';
import Server from '../../../../mocServer/';
import {connect} from 'react-redux';
import mapActionToProps from '../../../../reducers/mapActionToProps';
import {useSpring, animated} from 'react-spring';
import pushLocation from '../../../../utils/pushLocation'


const AuthForm = (props) => {

  const [password, setPassword] = useState();
  const [login, setLogin] = useState();
  const [user, setUser] = useState();

  const animStyle = useSpring({
    from: {marginTop: 300, transform: "scale(0.1) rotateX(120deg)"},
    to: {marginTop: 0, transform: "scale(1) rotateX(0deg)"},

    config: {
      duration: 3000,
      
    },
    reverse: !!user,
    onRest() {
     user && (()=>{
      props.setUserAction(user);
      pushLocation.push('/home/posts')
     })()
    }
  })

  const tryAuth = () => {
    try {
      const user =  Server.authorization({
        login, 
        password,
      });
      setUser(user);
    } catch (error) {
      alert('Not login and password')
    }
  };

    return (
          <animated.div className={styles.wrapper} style={animStyle}>
            <span className={styles.authTitle}>Авторизация</span>
              <TextInput updateAuthData={setLogin}/>
              <PasswordInput updateAuthData={setPassword}/>
              <AcceptButton text={'Вход'} submit={tryAuth}/>
          </animated.div>
           )
  

}


export default connect(()=>null, mapActionToProps)(AuthForm)