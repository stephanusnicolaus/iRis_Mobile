
import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View, Dimensions, Alert, ImageBackground} from 'react-native';
import { Container, Item, Input, Icon, Button, Text, List, ListItem } from 'native-base';
import Logo from '../../images/logoirishitamsekunder.png'
import bgImage from '../../images/login-background.jpg'
const { width: WIDTH } = Dimensions.get('window')

export default class Login extends Component {
  constructor(){
    super()
    this.state = {
      showPass: true,
      press: false,
      username: '',
      password: ''
    }
  }

  showPass = () => {
    if(this.state.press == false){
      this.setState({
        showPass: false,
        press: true
      })
    }else{
      this.setState({
        showPass: true,
        press: false
      })
    }
  }

  checkLogin = () => {
    const {username, password} = this.state
    if(username == 'admin' && password == 'admin'){
      this.props.navigation.navigate('dashboard')
    }else{
      Alert.alert('Error', 'Username/Password is wrong!', [{
        text: 'Okay'
      }])
    }
  }

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backGroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} />
          <Item rounded style={styles.input}>
            <Icon type="Ionicons" name="person" style={{fontSize: 20, color: '#adadad'}}/>
            <Input placeholder='Username' onChangeText={text => this.setState({ username: text })}/>
          </Item>
          <Item rounded style={styles.input}>
            <Icon type="Ionicons" name="lock" style={{fontSize: 20, color: '#adadad'}} />
            <Input placeholder='Password' secureTextEntry={this.state.showPass} onChangeText={text => this.setState({ password: text })}/>
            <Button transparent onPress={ this.showPass.bind(this) }>
              <Icon type="Ionicons" name={ this.state.press == false ? "eye-off" : "eye" } style={{fontSize: 22, color: '#adadad'}} />            
            </Button>
          </Item>
          <Button rounded block style={styles.btnLogin} onPress={_ => this.checkLogin()}>
            <Text>Log In</Text>
          </Button>
          <ListItem style={styles.linkForgotSign}>
            <Button transparent info style={styles.btnForgotSign}><Text style={{color: '1f2c39'}}>Forgot Password?</Text></Button>
          </ListItem>
          <ListItem style={styles.linkForgotSign}>
            <Button transparent info style={styles.btnForgotSign}><Text style={{color: '1f2c39'}}>Sign Up</Text></Button>
          </ListItem>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backGroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 80,
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: 'center'
  },
  input: {
    marginTop: 10,
    width: WIDTH - 55,
    height: 45,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 5,
    backgroundColor: '#ece4e4',
    color: '#adadad',
    marginHorizontal: 5,
    // #1f2c39
  },
  btnLogin: {
    marginTop: 20,
    width: WIDTH - 55,
    height: 45,
    backgroundColor: '#1f2c39'
  },
  linkForgotSign: {
    marginTop: 10,
    width: WIDTH - 55,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnForgotSign:{
    paddingBottom: 45
  }
})
