import React, { Component } from 'react';
import {Image,View} from 'react-native';
import { Container, Header, Content, Left, Body, Right, Text, Icon, Item, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class MenuTwo extends Component {
  render() {
    return (
      <Container style={{height:240, marginBottom:10}}>
        <View style={{backgroundColor:'#FFF', height:350, marginBottom:10}}>
          <Text style={{fontSize:14, margin:10}}>Teknologi</Text>
          <Grid>
            <Col style={{ backgroundColor: '#FFF', height: 400, paddingLeft:5 }}>
              <Row style={{ backgroundColor: '#FFF', height: 50, padding:2, borderRightWidth:0.5,}}>
                <Button transparent style={{width:165}}>
                  <Image style={{width:35, height:35,}} source={require('../img/sat.png')} />
                  <Text style={{fontSize:10, marginLeft:-5}}>Handphone & Tablet</Text>
                </Button>
              </Row>
              <Row style={{ backgroundColor: '#FFF', height: 50, padding:2, borderRightWidth:0.5,}}>
                <Button transparent style={{width:165}}>
                  <Image style={{width:35, height:35,}} source={require('../img/komputer.png')} />
                  <Text style={{fontSize:10, marginLeft:-5}}>Komputer & Aksesoris</Text>
                </Button>
              </Row>
              <Row style={{ backgroundColor: '#FFF', height: 50, padding:2, borderRightWidth:0.5,}}>
                <Button transparent style={{width:165}}>
                  <Image style={{width:35, height:35,}} source={require('../img/camera.png')} />
                  <Text style={{fontSize:12,}}>Kamera</Text>
                </Button>
              </Row>
              <Row style={{ backgroundColor: '#FFF', height: 50, padding:2, borderRightWidth:0.5,}}>
                <Button transparent style={{width:165}}>
                  <Image style={{width:35, height:35,}} source={require('../img/game.png')} />
                  <Text style={{fontSize:12,}}>Gaming</Text>
                </Button>
              </Row>
            </Col>


            <Col style={{ backgroundColor: '#FFF', height: 400, paddingLeft:5 }}>
              <Row style={{ backgroundColor: '#FFF', height: 50 }}>
                <Button transparent style={{width:165}}>
                  <Image style={{width:35, height:35,}} source={require('../img/laptop.png')} />
                  <Text style={{fontSize:11, marginLeft:-10}}>Laptop & Aksesoris</Text>
                </Button>
              </Row>
              <Row style={{ backgroundColor: '#FFF', height: 50 }}>
                <Button transparent style={{width:165}}>
                  <Image style={{width:35, height:35,}} source={require('../img/tv.png')} />
                  <Text style={{fontSize:12, marginLeft:-10,}}>Elektronik</Text>
                </Button>
              </Row>
              <Row style={{ backgroundColor: '#FFF', height: 50 }}>
                <Button transparent style={{width:165}}>
                  <Image style={{width:35, height:35,}} source={require('../img/cd.png')} />
                  <Text style={{fontSize:12, marginLeft:-10,}}>Software</Text>
                </Button>
              </Row>
            </Col>
          </Grid>
        </View>
      </Container>
    )
  }
}
export default MenuTwo;