/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Alert } from 'react-native';
import { Container, Content, Button, List, ListItem, Text, Icon, Left, Body, Right } from 'native-base';
import { StackNavigator } from 'react-navigation';

export default class SideBar extends Component {
  constructor(props){
    super(props)
  }

  goToDashboard = () => {
    this.props.navigation.navigate('dashboard')
  }

  goToUnlockUser = () => {
    this.props.navigation.navigate('unlockUser')
  }

  goToLogin = () => { 
    this.props.navigation.navigate('login')
  }  

  render() {
    return (
      	<Content style={{backgroundColor: '#fff'}}>
      		<ListItem icon onPress={_ => this.goToDashboard()}>
            <Left>
              <Button style={{ backgroundColor: "#1f2c39" }} >
                <Icon active type="MaterialCommunityIcons" name="home" />
              </Button>
            </Left>
            <Body>
              <Text>Home</Text>
            </Body>
          </ListItem>
          <ListItem icon onPress={_ => this.goToUnlockUser()}>
            <Left>
              <Button style={{ backgroundColor: "#1f2c39" }}>
                <Icon active type="MaterialCommunityIcons" name="lock-open-outline"/>
              </Button>
            </Left>
            <Body>
              <Text>Unlock User SAP</Text>
            </Body>
          </ListItem>
          <ListItem icon onPress={_ => this.goToLogin()}>
            <Left>
              <Button style={{ backgroundColor: "#1f2c39" }}>
                <Icon active type="MaterialCommunityIcons" name="logout" />
              </Button>
            </Left>
            <Body>
              <Text>Log Out</Text>
            </Body>
          </ListItem>
      	</Content>
    );
  }
}
