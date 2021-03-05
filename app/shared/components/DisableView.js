import React, { Component } from 'react';
import {View,StatusBar,Text } from 'react-native'
import { Container, Header, Content, Spinner } from 'native-base';
import colors from '../themes/colors';
import LottieView from 'lottie-react-native';
import Animation from '../../modules/animation'

class DisableView extends Component {

 

  render() {
   
    return (
      <Container >
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
         <View style={{flex:1,alignItems:'center'}} >
         <LottieView source={Animation.Sorry} style={{width:100,height:100}}  autoPlay loop  />
         <Text style={{color:colors.primary, marginTop:20, fontSize:20}}>No Data!</Text>
        </View>
      </Container>
    );
  }
}

export default DisableView;