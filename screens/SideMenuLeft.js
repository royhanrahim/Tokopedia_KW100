import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Tabs, Tab, TabHeading, Content, Card, ListItem, CheckBox, CardItem , Body, Left, Right, Radio} from 'native-base';
export default class SideMenuLeft extends React.Component{
	render(){
		return(
			<View style={{backgroundColor:'white', height:650}}>
				<Header style={{height:100, backgroundColor:'#40B648',}}>
				  <View style={{alignItems:'center', justifyContent:'center',}}>
					<Text style={{fontSize:30, color:'white', fontWeight:'bold'}}>Tokopedia</Text>
			   	  </View>
				</Header>
				<Content>
					<Button full transparent style={{marginLeft:20}}>
					  <Left>
					  	<Text style={{fontSize:18, color:'black',}}>Beranda</Text>
					  </Left>
					  <Right />
					</Button>
					<Button full transparent style={{marginLeft:20}}>
					  <Left>
					  	<Text style={{fontSize:18, color:'black',}}>Kategori</Text>
					  </Left>
					  <Right />
					</Button>
					<Button full transparent style={{marginLeft:20}}>
					  <Left>
					  	<Text style={{fontSize:18, color:'black',}}>Masuk</Text>
					  </Left>
					  <Right />
					</Button>
					<Button full transparent style={{marginLeft:20}}>
					  <Left>
					  	<Text style={{fontSize:18, color:'black',}}>Daftar</Text>
					  </Left>
					  <Right />
					</Button>
				</Content>
			</View>
		);
	}
}