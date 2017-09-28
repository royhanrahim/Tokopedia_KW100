import React, { Component } from 'react';
import {View, StyleSheet, TextInput, Dimensions, Image} from 'react-native';
import MenuOne from './MenuOne';
import MenuTwo from './MenuTwo';
import { Container, Header, Item, Input, Icon, Button, Text, Tabs, Tab, TabHeading, Content, Card, ListItem, CheckBox, CardItem , Body, Left, Right, Radio} from 'native-base';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window')

const styles = {
  wrapper: {
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width,
    flex: 1
  }
}

class TabHome extends Component{
	continuePush(){
		this.props.editPush();
	}

	render(){
		return(
			<Content>
				<Swiper style={styles.wrapper} height={150} vertical={false} autoplay>
					<Card style={{marginLeft:15, marginRight:15,}}>
			          <View style={styles.slide1}>
			            <Image style={styles.image} source={require('../img/1.jpg')} />
			          </View>
			        </Card>
			        <Card style={{marginLeft:15, marginRight:15,}}>  
			          <View style={styles.slide2}>
			            <Image style={styles.image} source={require('../img/2.jpg')} />
			          </View>
			        </Card>
			        <Card style={{marginLeft:15, marginRight:15,}}>
			          <View style={styles.slide3}>
			            <Image style={styles.image} source={require('../img/3.jpg')} />
			          </View>
			        </Card>
        		</Swiper>

	         	<Card style={{marginLeft:5, marginRight:5}}>
	             <Tabs>
		          <Tab heading={ <TabHeading style={{backgroundColor:'#FFF'}}><Text style={{fontSize:14, color:'black',}}>Pulsa</Text></TabHeading>}>
	            	<Text style={{marginTop:10, marginBottom:10, marginLeft:10, fontSize:14}}>Nomor Telepon</Text>
			         <View style={{flexDirection:'row'}}>	
				       <TextInput placeholder="Masukan Nomor" style={{width:300, marginLeft:5, marginBottom:15, marginRight:10}} />
				       <Icon name="ios-contact" />
		          	 </View>
		          	 <View style={{marginLeft:175,}}>
		          	  <Button iconRight small transparent>
		          	  	<Text style={{fontSize:12,}}>Lihat semua produk</Text>
		          	  	<Icon name="ios-arrow-forward" />
		          	  </Button>
		          	 </View>
		          </Tab>

		          <Tab heading={ <TabHeading style={{backgroundColor:'#FFF',}}><Text style={{fontSize:14, color:'black',}}>Paket Data</Text></TabHeading>}>
		            <Text style={{marginTop:10, marginBottom:10, marginLeft:10, fontSize:14}}>Nomor Telepon</Text>
			         <View style={{flexDirection:'row'}}>	
				       <TextInput placeholder="Masukan Nomor" style={{width:300, marginLeft:5, marginBottom:15, marginRight:10}} />
				       <Icon name="ios-contact" />
		          	 </View>
		          	 <View style={{marginLeft:175,}}>
		          	  <Button iconRight small transparent>
		          	  	<Text style={{fontSize:12,}}>Lihat semua produk</Text>
		          	  	<Icon name="ios-arrow-forward" />
		          	  </Button>
		          	 </View>
		          </Tab>

		          <Tab heading={ <TabHeading style={{backgroundColor:'#FFF',}}><Text style={{fontSize:14, color:'black',}}>Listrik PLN</Text></TabHeading>}>
					<Item style={{paddingTop:10}}>
			          <Radio selected style={{marginRight:5}} />
			          <Text style={{fontSize:12, marginRight:5}}>Daily Stand Up</Text>
			          <Radio selected style={{marginRight:5}}/>
			          <Text style={{fontSize:12}}>Discussion with Client</Text>
			        </Item>
			        <Text style={{marginTop:10, marginBottom:10, marginLeft:10, fontSize:12}}>No. Meter/ID Pel</Text>
			        <View style={{flexDirection:'row'}}>	
				       <TextInput placeholder="Masukan Nomor" style={{width:340, marginLeft:5, marginBottom:15, marginRight:10}} />
		          	 </View>
		          	 <View style={{marginLeft:175,}}>
		          	  <Button iconRight small transparent>
		          	  	<Text style={{fontSize:12,}}>Lihat semua produk</Text>
		          	  	<Icon name="ios-arrow-forward" />
		          	  </Button>
		          	 </View>
		          </Tab>

			  	 </Tabs>
		  		</Card>

		  		<MenuOne pushPage={() => this.continuePush()} />
		  		<MenuTwo />

		  	</Content>
		)
	}
}

export default TabHome;