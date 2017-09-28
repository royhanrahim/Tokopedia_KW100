import React from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import TabHome from './TabHome';
import { Container, Header, Item, Input, Icon, Button, Text, Tabs, Tab, TabHeading, Content, Card, ListItem, CheckBox, CardItem , Body, Left, Right, Radio} from 'native-base';

export default class Home extends React.Component{
	static navigatorStyle = {	
		navBarHidden: true,
		navBarButtonColor: '#FFF',
  	};

  	handleClick(){
    this.props.navigator.push({
      screen: 'screens.FashionWomanPage',
      title: 'Fashion Wanita',
      animationType: 'fade',
    })
  }

	render(){
		return(
			<Container>
				<Header searchBar rounded style={{backgroundColor:'#40B648'}}>
					<Left>
						<Button icon large transparent onPress={() => this.props.navigator.toggleDrawer({
							side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
  							animated: true,
						})}>
							<Icon style={{width:20, height:20}} name="ios-menu" />
						</Button>
	          		</Left>

	          		<Body>
			            <View style={{backgroundColor:'#FFF', width:250, height:40, marginLeft:-30, borderRadius:2}}>
			            	<Item success>
					            <Input placeholder='Cari produk atau toko ..'/>
					            <Icon name='ios-search' />
          					</Item>
			            </View>
	          		</Body>

	          		<Right>
          				<Button transparent>
            				<Image style={{width:35, height:35}} source={require('../img/cart1.png')} />
          				</Button>
          			</Right>
				</Header>

		        <Tabs>
		          <Tab style={{backgroundColor:'#E0E0E0'}} heading={ <TabHeading style={{backgroundColor:'#40B648'}}><Text style={{color:'#FFF'}}>BERANDA</Text></TabHeading>}>
		            <TabHome editPush={() => this.handleClick()} />
		          </Tab>
		          
		          <Tab style={{backgroundColor:'#E0E0E0'}} heading={ <TabHeading style={{backgroundColor:'#40B648'}}><Text style={{color:'#FFF'}}>HOT LIST</Text></TabHeading>}>
		            
		          </Tab>
        		</Tabs>
      		</Container>
		)
	}
}
