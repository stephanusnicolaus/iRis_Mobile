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
import {fetchArticleDetail} from '../../actions/article'

const { width: WIDTH } = Dimensions.get('window')
class DetailArticle extends Component {
	closeDrawer() {
		this._drawer._root.close()
	}

	openDrawer() {
	  this._drawer._root.open()
	}

	componentDidMount(){
		const { navigation } = this.props;
        const articleId = navigation.getParam('articleId', 'NO-ID');
        this.props.fetchArticleDetail(articleId);
    }

	render() {
		const { navigation, ArticleDetailState } = this.props;
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
					    <Title>Article Detail</Title>
					  </Body>
					  <Right>
					  </Right>
					</Header>
					<Content>
						<Card style={{marginLeft:10, marginRight:10, marginBottom: 15}}>
				            <CardItem>
				              	<Body>
				                  <Text>{ArticleDetailState.articletitle}</Text>
				                  <Text note>Category: {ArticleDetailState.articlecategory}</Text>
				                </Body>
				            </CardItem>
				            <CardItem cardBody>
				              <Image source={{uri: ArticleDetailState.image}} style={{height: 200, width: null, flex: 1}}/>
				            </CardItem>
				            <CardItem>
				              <Body>
				              	<HTML html={ArticleDetailState.content} imagesMaxWidth={Dimensions.get('window').width} />
				              </Body>
				            </CardItem>
				            <CardItem>
				              <Left>
				                <Text>By: {ArticleDetailState.created_by}</Text>
				              </Left>
				              <Right>
				                <Text>{ArticleDetailState.date}</Text>
				              </Right>
				            </CardItem>
				        </Card>
					</Content>
				</Container>
			</Drawer>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        ArticleDetailState: state.articleStore.articleDetail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchArticleDetail: (articleId) => dispatch(fetchArticleDetail(articleId)),
    }
}

DetailArticle = connect(mapStateToProps, mapDispatchToProps)(DetailArticle)
export default DetailArticle
