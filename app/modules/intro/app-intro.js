import React, { Component } from 'react'
import { ScrollView, StatusBar, Text, Image, View } from 'react-native'
import {Colors,  Images } from '../../shared/themes'
import { Container, Header, Content, Button } from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/AntDesign'
import LottieView from 'lottie-react-native';
import Animation from '../animation';
import { appStack, loginScreen, registerScreen, verificationScreen } from '../../navigation/layouts';
import { connect } from 'react-redux'
import { Navigation } from 'react-native-navigation'

// Styles
import styles from './app-intro-style'
const slides = [
  {
    key: '1',
    title: 'QAAMUUS',
    text: 'Ka qayb Qaado turjumidda afka hooyo',
     
    animation: Animation.Book,
    imageStyle: {
      width: 450,
      height: 450,
      resizeMode:'contain',
    },
    colors: ['#63E2FF', '#B066FE'],
  },
  {
    key: '2',
    title: 'QAAMUUS',
    text: 'Ka qayb Qaado turjumidda afka hooyo',
    animation: Animation.phone,
    imageStyle: {
      width: 300,
     height: 300,
     resizeMode:'contain',

    },
    colors: ['#63E2FF', '#B066FE'],


  },
  {
    key: '3',
    title: 'QAAMUUS',
    text: 'Ka qayb Qaado turjumidda afka hooyo',
    animation: Animation.Elearning2,
    imageStyle: {
      width: 300,
     height: 300,
     resizeMode:'contain',

    },
    colors: ['#63E2FF', '#B066FE'],


  },
  {
    key: '4',
    title: 'QAAMUUS',
    text: 'Ka qayb Qaado turjumidda afka hooyo',
    animation: Animation.share,
    imageStyle: {
      width: 400,
     height: 400,
     resizeMode:'contain',

    },
    colors: ['#63E2FF', '#B066FE'],
    button: {
      flex: 1,
      width: 200,
      background: Colors.background
    }

  },
];


class IntoAppScreen extends Component {
    constructor(props) {
        super(props)
        Navigation.events().bindComponent(this)
        this.state = {
         
        }
      }
      
   componentDidUpdate(Props){
        const {  account, authToken } = this.props;
        if(authToken){
          Navigation.setRoot(appStack)
        }
      }

  _renderNextButton = () => {
    return (
      <View style={styles.buttonView} >
         <Button transparent style={[styles.button, { borderWidth:1, borderColor: Colors.primary }]} onPress={this.handlePressSignupScreen} >
          <Text style={[styles.buttonText,{color:Colors.primary}]}>Sing Up</Text>
        </Button>
        <Button style={[styles.button, { backgroundColor: Colors.primary }]} onPress={this.handlePressloginScreen} >
          <Text style={styles.buttonText}>Sign In</Text>
        </Button>
      </View>
    );
  }
  _skippingButton = () => {
    return (
      <View >
      </View>
    );
  }
  _renderDoneButton = () => {
    return (
      <View>
        <Icon name="check" size={30} color={Colors.primary} />
      </View>
    );
  }
  handlePressloginScreen = () => {
    loginScreen()
  }
  handlePressSignupScreen = () => {
    registerScreen()
  }
  _renderItem = (items) => {
    const item = items ? items.item :null
    console.tron.log('items', item.text, items)
     return(
      <View style={styles.content} animation="fadeInRight" delay={300}>
       <LottieView source={item.animation} key={item} autoPlay loop style={item.imageStyle} />
        <Text  animation="fadeInRight" delay={700} style={styles.title}>{item.title}</Text>
        <Text  animation="fadeInRight" delay={700} style={styles.text}>{item.text}</Text>
      </View>
    )
  };
  render () {
    return (
      <View style={styles.mainContent}>
        <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />

        <AppIntroSlider
         dotStyle={{ backgroundColor: Colors.primary, width:20,height:10 }}
         style={styles.background}
         renderItem={this._renderItem} 
         data={slides} 
         renderDoneButton={this._renderNextButton}
         renderNextButton={this._renderNextButton}
         onDone={this._onDone}
         bottomButton
         />

      </View>
    )
  }
}



const mapStateToProps = (state) => {
    return {
      account: state.account.account,
      fetching: state.login.fetching,
      user: state.login.user,
      authToken: state.login.authToken,
      error: state.login.error,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(IntoAppScreen)
  