/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Alert, Dimensions} from 'react-native';
import { Container, Drawer, Content, Text, Header, Left, Body, Right, Button, Icon, Title,  Input, Item, List, ListItem, H2 } from 'native-base';
import SideBar from '../../templates/SideBar';
import { connect } from 'react-redux'
import {fillUserSap, unlockUserSap} from '../../actions/usersap'

const { width: WIDTH } = Dimensions.get('window')

class UnlockUser extends Component {
	constructor(){
	    super()
	}

	closeDrawer() {
		this._drawer._root.close()
	}

	openDrawer() {
	  this._drawer._root.open()
	}

	handlePress = () => {
		const {UserSapState, unlockUserSapAct} = this.props;
		if(UserSapState != 'DX_REDI'){
			Alert.alert('Error', 'Please type DX_REDI on textbox', [{
	        	text: 'Okay'
	      	}])
		}else{
			unlockUserSapAct(UserSapState)
		}
	}

	render() {
		const { navigation, fillUserSapAct, UserSapState, unlockUserSapAct, UnlockStatusState } = this.props;
		return (
			<Drawer
				type="displace"
		        ref={(ref) => { this._drawer = ref; }}
		        content={<SideBar navigator={this._navigator} navigation={navigation}/>}
		        onClose={() => this.closeDrawer()} 
		        >
				<Container>
					<Header style={{backgroundColor: '#1f2c39'}} androidStatusBarColor='#1f2c39'>
					  <Left>
					    <Button transparent onPress={() => navigation.goBack()}>
					      <Icon name='arrow-back'/>
					    </Button>
					  </Left>
					  <Body>
					    <Title>Unlock User SAP</Title>
					  </Body>
					  <Right>
					  	<Button transparent>
			              <Icon name='more' onPress={() => navigation.navigate('userList')}/>
			            </Button>
					  </Right>
					</Header>
					<Content>
						<Item regular>
				            <Input style={styles.input} placeholder='Please type a User SAP' onChangeText={text => {fillUserSapAct(text)}} />
				        </Item>
				        <Button block style={styles.btnUnlock} onPress={_ => this.handlePress()}>
			            	<Text>Unlock User</Text>
			         	</Button>
			         	<ListItem>
			            	<Text>Please type "DX_REDI" on textbox (without double quotes) to trial this feature</Text>
			         	</ListItem>
			         	<ListItem>
			            	<Text>Status: { UnlockStatusState }</Text>
			         	</ListItem>
					</Content>
				</Container>
			</Drawer>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        UnlockStatusState: state.userSapStore.unlockStatus,
        UserSapState: state.userSapStore.userSap
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        unlockUserSapAct: (userSap) => dispatch(unlockUserSap(userSap)),
        fillUserSapAct: (userSap) => dispatch(fillUserSap(userSap))
    }
}

UnlockUser = connect(mapStateToProps, mapDispatchToProps)(UnlockUser)

export default UnlockUser

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    width: null,
    height: 45,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 5,
    justifyContent: 'center',
    marginHorizontal: 5,
    // #1f2c39
  },
  btnUnlock: {
   	marginTop: 20,
   	width: null,
    height: 45,
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#1f2c39',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
