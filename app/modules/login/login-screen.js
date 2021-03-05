import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Image, StatusBar, ScrollView, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/AntDesign'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './login-screen.styles'
import { Colors, Images, Metrics } from '../../shared/themes'
import LoginActions from './login.reducer'
import { appStack, registerScreen, forgotPasswordScreen } from '../../navigation/layouts';
import { createAnimatableComponent, View } from 'react-native-animatable';
import DropdownAlert from 'react-native-dropdownalert';
import LottieView from 'lottie-react-native';
import Animation from '../animation'


class LoginScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func,
  }

  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      username: '',
      password: '',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth },
    }
  }

  componentDidUpdate(prevProps) {
    const {  account, authToken } = prevProps;

    if (!this.props.fetching) {
      if (prevProps.fetching && this.props.error) {
        this.dropDownAlertRef.alertWithType('error', 'Error', this.props.error);
      }
      if (!authToken && this.props.account) {
        Navigation.setRoot(appStack)
      }
    }
  }

  handlePressLogin = () => {
    const { username, password } = this.state
    if(!username || !password){
      this.dropDownAlertRef.alertWithType('error', 'Error', 'Sorry ! Please Write Your Credential');
    }else{
    // attempt a login - a saga is listening to pick it up from here.
    this.props.attemptLogin(username, password)
    }
  }
  handlePressCancel = () => {
    this.props.logout()
    Navigation.dismissModal(this.props.componentId)
  }

  handleChangeUsername = (text) => {
    this.setState({ username: text })
  }

  handleChangePassword = (text) => {
    this.setState({ password: text })
  }

  render() {
    const { username, password } = this.state
    const { fetching } = this.props
    const editable = true
    const textInputStyle = editable ? styles.textInput : styles.textInputReadonly
    return (
      <>
      <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
      <View
        style={[styles.container, { height: this.state.visibleHeight }]}
        >
         <DropdownAlert ref={ref => this.dropDownAlertRef = ref} />
         <LottieView source={Animation.bike}  autoPlay loop style={styles.animation} />
        <View style={styles.form} animation="fadeInUp" delay={300}>
        <KeyboardAwareScrollView style={{flex:1}} keyboardShouldPersistTaps={'handled'} >
          <View animation="fadeInUp" delay={300}>
            <Text style={styles.titleText}>Sign In</Text>
          </View>
          <View style={styles.row} animation="fadeInUp" delay={300}>
            <Text style={styles.rowLabel}>Phone</Text>
            <View style={styles.input}>
            <Icon name="phone" size={20} color={Colors.primary} style={styles.inputIcon}/>
            <TextInput
              ref={(c) => {
                this.usernameInput = c
              }}
              testID="loginScreenUsername"
              style={textInputStyle}
              value={username}
              editable={editable}
              keyboardType="phone-pad"
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={this.handleChangeUsername}
              underlineColorAndroid="transparent"
              onSubmitEditing={() => this.passwordInput.focus()}
              placeholder="6x xxxxxxx"
            />
            </View>
          </View>

          <View style={styles.row} animation="fadeInUp" delay={300}>
            <Text style={styles.rowLabel}>Password</Text>
            <View style={styles.input}>
            <Icon name="lock" size={20} color={Colors.primary} style={styles.inputIcon}/>
            <TextInput
              ref={(c) => {
                this.passwordInput = c
              }}
              testID="loginScreenPassword"
              style={textInputStyle}
              value={password}
              editable={editable}
              keyboardType="default"
              returnKeyType="go"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              onChangeText={this.handleChangePassword}
              underlineColorAndroid="transparent"
              onSubmitEditing={this.handlePressLogin}
              placeholder="**********"
            />
            </View>
          </View>
          <TouchableOpacity style={styles.forget} onPress={()=>{forgotPasswordScreen()}}>
                     <Text style={styles.forgetText}>Forgot Password ? </Text>
          </TouchableOpacity>
          <View style={[styles.loginRow]} animation="fadeInUp" delay={300}>
            {
              fetching ?
              <TouchableOpacity testID="loginScreenLoginButton" style={styles.loginButtonWrapper} disabled>
                  <View style={[styles.loginButton,{paddingTop:0}]}>
                    <LottieView source={Animation.lodingButton}  autoPlay loop />
                  </View>
              </TouchableOpacity>
              :
              <TouchableOpacity testID="loginScreenLoginButton" style={styles.loginButtonWrapper} onPress={this.handlePressLogin}>
                <View style={styles.loginButton}>
                  <View style={styles.textContainer}>
                  <Text style={styles.loginText}>Sign In</Text>
                  </View>
                  <View style={styles.iconcontainer}>
                  <Icon name="arrowright" size={20} color={Colors.white}/>
                  </View>
                </View>
              </TouchableOpacity>
            }
            
           
          </View>
          <TouchableOpacity testID="signUpScreenLoginButton" style={styles.signUpButtonWrapper} onPress={()=>{registerScreen()}}>
              <View style={styles.signUpButton}>
                <Text style={styles.signUpText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
      </View>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.account.account,
    fetching: state.login.fetching,
    error: state.login.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
    logout: () => dispatch(LoginActions.logoutRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
