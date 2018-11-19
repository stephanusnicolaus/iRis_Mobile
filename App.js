/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './app/components/login'
import Dashboard from './app/components/dashboard'
import UnlockUser from './app/components/unlockuser'
import UserList from './app/components/userlist'
import ArticleDetail from './app/components/articledetail'

import { Provider } from 'react-redux'
import myStore from './app/config/store'


const RootStack = createStackNavigator(
  {
    login: Login,
    dashboard: Dashboard,
    unlockUser: UnlockUser,
    userList: UserList,
    articleDetail: ArticleDetail
  },
  {
    initialRouteName: 'login',
    navigationOptions: {
        header: null,
    }
  }
);

export default class App extends Component {
  render() {
    return <Provider store={myStore}><RootStack /></Provider>;
  }
}
