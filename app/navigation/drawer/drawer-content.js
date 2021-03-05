import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Image,View, BackHandler } from 'react-native'
import { Navigation } from 'react-native-navigation'

import {
  loginScreen,
  registerScreen,
  forgotPasswordScreen,
  changePasswordScreen,
  settingsScreen,
  entitiesScreen,
  storybookScreen,
  AppIntro
} from '../layouts'
import { connect } from 'react-redux'

import styles from './drawer-content.styles'
import { Images } from '../../shared/themes'
import DrawerButton from './drawer-button'
import LoginActions from '../../modules/login/login.reducer'
import { isLoggedIn } from '../../shared/reducers/account.reducer'

class DrawerContent extends Component {
  constructor(context, props) {
    super(context, props)
    Navigation.events().bindComponent(this)
  }

  hideSideMenu() {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: false,
        },
      },
    })
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.hideSideMenu()
    })
  }

  handlePressLogin = () => {
    this.hideSideMenu()
    loginScreen()
  }
  handlePressRegister = () => {
    this.hideSideMenu()
    registerScreen()
  }
  handlePressForgotPassword = () => {
    this.hideSideMenu()
    forgotPasswordScreen()
  }
  handlePressSettings = () => {
    this.hideSideMenu()
    settingsScreen()
  }
  handlePressChangePassword = () => {
    this.hideSideMenu()
    changePasswordScreen()
  }
  handlePressEntities = () => {
    this.hideSideMenu()
    entitiesScreen()
  }
  handlePressLogout = () => {
    this.hideSideMenu()
    this.props.logout()
    Navigation.setRoot(AppIntro)

  }
  handlePressStorybook = () => {
    this.hideSideMenu()
    storybookScreen()
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
        <Image testID="drawerLogo" source={Images.logo} style={styles.logo} />
        </View>
        {this.props.loggedIn && <DrawerButton testID="settingsDrawerButton" text="Habeyn" onPress={this.handlePressSettings} />}
        {this.props.loggedIn && (
          <DrawerButton testID="changePasswordDrawerButton" text="Caawimo"  />
        )}
        {this.props.loggedIn && <DrawerButton testID="logoutDrawerButton" text="Ka bax" onPress={this.handlePressLogout} />}
      </View>
      </View>

    )
  }
}

DrawerContent.contextTypes = {
  drawer: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    loggedIn: isLoggedIn(state.account),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(LoginActions.logoutRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)
