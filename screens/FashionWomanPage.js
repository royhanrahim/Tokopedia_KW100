import React, { Component } from 'react';
import {Image, View, ScrollView, Dimensions} from 'react-native';
import { Container, Header, Content, Left, Body, Right, Text, Icon, Item, Button, Input, Card } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window')

const styles = {
  wrapper: {
    height:150,
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

class FashionWomanPage extends Component {
  handleClick(){
    this.props.navigator.pop({
      screen: 'screens.Home',
      animationType: 'fade',
    })
  }

  static navigatorStyle = { 
    navBarButtonColor: '#FFF',
    navBarHidden: true,
    navBarBackgroundColor: '#40B648',
  };

  MenuFashion = [
    {
      id:'0',
      imageMenu: require('../img/atasan.png'),
      textMenu: "Atasan",
    },
    {
      id:'1',
      imageMenu: require('../img/celana.png'),
      textMenu: "Celana",
    },
    {
      id:'2',
      imageMenu: require('../img/rok.png'),
      textMenu: "Rok",
    },
    {
      id:'3',
      imageMenu: require('../img/dress.png'),
      textMenu: "Dress",
    },
    {
      id:'4',
      imageMenu: require('../img/outwear.png'),
      textMenu: "Outwear",
    },
    {
      id:'5',
      imageMenu: require('../img/setelan.png'),
      textMenu: "Setelan",
    },
    {
      id:'6',
      imageMenu: require('../img/batik.png'),
      textMenu: "Batik Wanita",
    },
    {
      id:'7',
      imageMenu: require('../img/bh.png'),
      textMenu: "Pakaian Dalam Wanita",
    },
    {
      id:'8',
      imageMenu: require('../img/tas.png'),
      textMenu: "Tas",
    },
  ];

  render() {
    return (
      <Container style={{marginBottom:10}}>
        <Header style={{backgroundColor:'#40B648'}}>
          <Left>
            <Button icon large transparent onPress={() => this.handleClick()}>
              <Icon style={{width:20, height:20}} name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Text style={{fontSize:20, marginLeft:-15, color:'white'}}>Fashion Wanita</Text>
          </Body>

          <Right>
            <Button transparent>
              <Image style={{width:25, height:25}} source={require('../img/cari.png')} />
            </Button>
          </Right>
      </Header>

      <Content>
        <Swiper style={styles.wrapper} vertical={false} autoplay>
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

        
        <View style={{flexDirection:'row', flexWrap:'wrap', marginTop:10}}>
          {this.MenuFashion.map((menuFashion)=> this.renderRow(menuFashion))}
        </View>
      </Content>
    </Container>
    )
  }

  renderRow(obj){
    return (
        <View key={obj.id} style={{backgroundColor:'#FFF', width:116, height:150, margin:2, justifyContent: 'center', alignItems: 'center',}}>   
          <Image source={obj.imageMenu} style={{width:100, height:100}} />
          <Text style={{fontSize:16, margin:5, alignContent:'center'}}>{obj.textMenu}</Text>
        </View>
    )
  }

}

export default FashionWomanPage;