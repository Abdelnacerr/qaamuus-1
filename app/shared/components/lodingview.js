import React, { Component } from 'react';
import {View,StatusBar,Text } from 'react-native'
import { Container, Header, Content, Spinner } from 'native-base';
import colors from '../themes/colors';
import LottieView from 'lottie-react-native';
import Animation from '../../modules/animation'

class LoadingView extends Component {

 

  render() {
   
    return (
      <Container >
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
         <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
         <LottieView source={Animation.Loading}  autoPlay loop  />
         <Text style={{color:colors.primary, marginTop:60, fontSize:20}}>Loading !</Text>
        </View>
      </Container>
    );
  }
}

export default LoadingView;