/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View, Dimensions, Alert} from 'react-native';
import { Container, Drawer, Content, Text, Header, Left, Body, Right, Button, Icon, Title, Card, CardItem, Thumbnail } from 'native-base';
import SideBar from '../../templates/SideBar';
import {connect} from 'react-redux'
import HTML from 'react-native-render-html'
import {fetchArticleList} from '../../actions/article'

const { width: WIDTH } = Dimensions.get('window')

class Dashboard extends Component {
	closeDrawer() {
		this._drawer._root.close()
	}

	openDrawer() {
	  this._drawer._root.open()
	}

	componentDidMount(){
        this.props.fetchArticleList();
    }

    handleReadMore = (param) => {
    	this.props.navigation.navigate('articleDetail',{ 
    		articleId : param 
    	});
    }

	render() {
		const { navigation, ArticleListState } = this.props;
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
					    <Button transparent onPress={() => this.openDrawer()}>
					      <Icon name='menu'/>
					    </Button>
					  </Left>
					  <Body>
					    <Title>Home</Title>
					  </Body>
					  <Right>
					  </Right>
					</Header>
					<Content>
						{
                            ArticleListState.map((data, index) => (
								<Card style={{marginLeft:10, marginRight:10, marginBottom: 15}}>
						            <CardItem>
						              	<Body>
						                  <Text>{data.articletitle}</Text>
						                  <Text note>Category: {data.articlecategory}</Text>
						                </Body>
						            </CardItem>
						            <CardItem cardBody>
						              <Image source={{uri: data.image}} style={{height: 200, width: null, flex: 1}}/>
						            </CardItem>
						            <CardItem>
						              <Body>
						              	<HTML html={data.content} imagesMaxWidth={Dimensions.get('window').width} />
						              </Body>
						            </CardItem>
						            <CardItem>
						              <Left>
						                <Button transparent onPress={() => {
						                	let readmore = data.readmore.toString()
						                	this.handleReadMore(readmore)
						                }}>
						                  <Text style={{color: '#1f2c39'}}>Read More </Text>
						                  <Icon type="Entypo" name="chevron-right" style={{color: '#1f2c39'}}/>
						                </Button>
						              </Left>
						              <Right>
						                <Text>{data.date}</Text>
						              </Right>
						            </CardItem>
						        </Card>
                            ))
                        }
					</Content>
				</Container>
			</Drawer>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        ArticleListState: state.articleStore.articleList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchArticleList: () => dispatch(fetchArticleList()),
    }
}

Dashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard)
export default Dashboard
