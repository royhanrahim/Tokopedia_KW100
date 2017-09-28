import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Content, Left, Body, Right, Text, Icon, Item, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class MenuOne extends Component {
  
  handlePress(){
    this.props.pushPage();
  }

  render() {
    return (
      <Container style={{height:350, marginBottom:10}}>
        <View style={{backgroundColor:'#FFF', height:350, marginBottom:10}}>
          <Text style={{fontSize:14, margin:10}}>Gaya Hidup</Text>
          <Grid>
            <Col style={{ backgroundColor: '#FFF', height: 400, paddingLeft:5 }}>
              <Row style={{ backgroundColor: '#FFF', height: 50, padding:2, borderRightWidth:0.5,}}>
                <Button onPress={() => this.handlePress()} transparent style={{width:165}}>
                  <Image style={{width:35, height:35,}} source={require('../img/woman.png')} />
                  <Text style={{fontSize:12, marginLeft:-10}}>Fashion Wanita</Text>
                </Button>
              </Row>
              <Row style={{ backgroundColor: '#FFF', height: 50, padding:2, borderRightWidth:0.5,}}>
                <Button transparent style={{width:165}}>
                  <Image style={{width:35, height:35,}} source={require('../img/muslimah.png')} />
                  <Text style={{fontSize:12,}}>Fashion Muslim</Text>
                </Button>
              </Row>
              <Row style={{ backgroundColor: '#FFF', height: 50, padding:2, borderRightWidth:0.5,}}>
                <Button transparent style={{width:165}}>
                  <Image style={{width:35, height:35,}} source={require('../img/lipstick.png')} />
                  <Text style={{fontSize:12,}}>Kecantikan</Text>
                </Button>
              </Row>
              <Row style={{ backgroundColor: '#FFF', height: 50, padding:2, borderRightWidth:0.5,}}>
                <Button transparent style={{width:165}}>
                  <Image style={{width:35, height:35,}} source={require('../img/medis.png')} />
                  <Text style={{fontSize:12,}}>Kesehatan</Text>
                </Button>
              </Row>
              <Row style={{ backgroundColor: '#FFF', height: 50, padding:2, borderRightWidth:0.5,}}>
                <Button transparent style={{width:165}}>
                  <Image style={{width:35, height:35,}} source={require('../img/perawatan.png')} />
                  <Text style={{fontSize:12,}}>Perawatan Tubuh</Text>
                </Button>
              </Row>
              <Row style={{ backgroundColor: '#FFF', height: 50, padding:2, borderRightWidth:0.5,}}>
                <Button transparent style={{width:165}}>
                  <Image style={{width:35, height:35,}} source={require('../img/bola.png')} />
                  <Text style={{fontSize:12,}}>Olahraga</Text>
                </Button>
              </Row>
            </Col>


            <Col style={{ backgroundColor: '#FFF', height: 400, paddingLeft:5 }}>
              <Row style={{ backgroundColor: '#FFF', height: 50 }}>
                <Button transparent style={{width:165}}>
                  <Image style={{width:35, height:35,}} source={require('../img/man.png')} />
                  <Text style={{fontSize:12, marginLeft:-10}}>Fashion Pria</Text>
                </Button>
              </Row>
              <Row style={{ backgroundColor: '#FFF', height: 50 }}>
                <Button transparent style={{width:165}}>
                  <Image style={{width:35, height:35,}} source={require('../img/anak.png')} />
                  <Text style={{fontSize:12, marginLeft:-10,}}>Fashion Anak</Text>
                </Button>
              </Row>
              <Row style={{ backgroundColor: '#FFF', height: 50 }}>
                <Button transparent style={{width:165}}>
                  <Image style={{width:35, height:35,}} source={require('../img/bangku.png')} />
                  <Text style={{fontSize:12, marginLeft:-10,}}>Rumah Tangga</Text>
                </Button>
              </Row>
              <Row style={{ backgroundColor: '#FFF', height: 50 }}>
                <Button transparent style={{width:165}}>
                  <Image style={{width:35, height:35,}} source={require('../img/dapur.png')} />
                  <Text style={{fontSize:12, marginLeft:-10,}}>Dapur</Text>
                </Button>
              </Row>
              <Row style={{ backgroundColor: '#FFF', height: 50 }}>
                <Button transparent style={{width:165}}>
                  <Image style={{width:35, height:35,}} source={require('../img/stir.png')} />
                  <Text style={{fontSize:12, marginLeft:-10,}}>Otomotif</Text>
                </Button>
              </Row>
            </Col>
          </Grid>
        </View>
      </Container>
    )
  }
}