/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Container, Drawer, Content, Text, Header, Left, Body, Right, Button, Icon, Title, List, ListItem, Thumbnail, Item, Input } from 'native-base';
import SideBar from '../../templates/SideBar';
import {connect} from 'react-redux'
import {fetchListUser} from '../../actions/usersap'


class UserList extends Component {
	closeDrawer() {
		this._drawer._root.close()
	}

	openDrawer() {
	  this._drawer._root.open()
	}

	componentDidMount(){
        this.props.fetchListUser();
    }

	render() {
		const { navigation, UserListState } = this.props;
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
							<Title>User List (SAP)</Title>
						</Body>
						<Right>
						</Right>
					</Header>
					<Content>
						<List>
							{
                                UserListState.map((data, index) => (
									<ListItem thumbnail>
									  <Left>
									    <Thumbnail round source={{ uri: 'https://picsum.photos/200/300/?random' }} />
									  </Left>
									  <Body>
									    <Text>{data}</Text>
									    <Text note numberOfLines={index}>Hello I am {data} </Text>
									  </Body>
									  <Right>
									  </Right>
									</ListItem>
								))
							}
						</List>
					</Content>
				</Container>
			</Drawer>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        UserListState: state.userSapStore.userList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListUser: () => dispatch(fetchListUser()),
    }
}

UserList = connect(mapStateToProps, mapDispatchToProps)(UserList)
export default UserList
