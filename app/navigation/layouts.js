import { AppState, Linking } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import React from 'react'
import { Images } from '../shared/themes'

import createStore from '../shared/reducers'
import Colors from '../shared/themes/colors'
import '../config/reactotron-config'
import AccountActions from '../shared/reducers/account.reducer'

import LoginScreen from '../modules/login/login-screen'
import AppIntroScreen from '../modules/intro/app-intro'
import ProfileScreen from '../modules/account/profile/profile-screen'

import DashboardScreen from '../modules/home/launch-screen'
import DrawerContent from './drawer/drawer-content'

import SettingsScreen from '../modules/account/settings/settings-screen'
import RegisterScreen from '../modules/account/register/register-screen'
import VerificationScreen from '../modules/account/register/verification-screen'

import ForgotPasswordScreen from '../modules/account/password-reset/forgot-password-screen'
import ChangePasswordScreen from '../modules/account/password/change-password-screen'
import UpdateProfileScreen from '../modules/account/profile/Edit-profile-screen'

import EntitiesScreen from '../modules/entities/entities-screen'
import StorybookScreen from '../../storybook'
// ignite-jhipster-navigation-import-needle

export const LOGIN_SCREEN = 'nav.LoginScreen'
export const APP_INTRO_SCREEN = 'nav.AppIntroScreen'
export const PROFILE_SCREEN = 'nav.ProfileScreen'
export const UPDATEPROFILE_SCREEN = 'nav.UpdateProfileScreen'

export const REGISTER_SCREEN = 'nav.RegisterScreen'
export const VERIFICATION_SCREEN = 'nav.VerificationScreen'

export const FORGOT_PASSWORD_SCREEN = 'nav.ForgotPasswordScreen'
export const CHANGE_PASSWORD_SCREEN = 'nav.ChangePasswordScreen'
export const SETTINGS_SCREEN = 'nav.SettingsScreen'
export const DASHBOARD_SCREEN = 'nav.DashboardScreen'
export const DRAWER_CONTENT = 'nav.DrawerContent'
export const ENTITIES_SCREEN = 'nav.EntitiesScreen'
export const STORYBOOK_SCREEN = 'nav.StorybookScreen'
// ignite-jhipster-navigation-declaration-needle

const store = createStore()

export const AppIntro = {
  root: {
    stack: {
      id: 'center',
      children: [
        {
          component: {
            name: APP_INTRO_SCREEN,
            options: {
              topBar: {
                visible: false,
                drawBehind: true,
              },
            },
          },
        },
      ],
    },
  },
}

export const appStack = {
  root: {
    sideMenu: {
      left: {
        component: {
          name: DRAWER_CONTENT,
        },
        
      },
      options: {
        sideMenu: {
          left: {
          }
        }
      },
      center: {
        bottomTabs: {
          options: {
            bottomTabs: {
              backgroundColor:Colors.white
            }
          },
          children: [
            {
              stack: {
                id: 'dashboard',
                children: [
                  {
                    component: {
                      name: DASHBOARD_SCREEN,
                      options: {
                        topBar: {
                          visible: false,
                          drawBehind: true,
                        },
                      },
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    iconColor: 'gray',
                    textColor: 'gray',
                    selectedIconColor: Colors.primary,
                    selectedTextColor: 'black',
                    testID: 'DASHBOARD_SCREEN',
                    icon: Images.home,
                    selectedIcon: Images.selectedhome,
                    iconInsets: { top: 5, bottom: -5 },
                  },
                },
                },
              },
              {
                stack: {
                  id: 'search',
                  children: [
                    {
                      component: {
                        name: PROFILE_SCREEN,
                        options: {
                          topBar: {
                            title: {
                              text: 'Search',
                              color: Colors.snow,
                            },
                            noBorder: true,
                            rightButtons:[
                              {
                                id: 'menuButton',
                                icon: Images.pen,
                                testID: 'menuButton',
                                color: Colors.white,
                              },
                            ],
                          },
                        },
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      iconColor: 'gray',
                      textColor: 'gray',
                      selectedIconColor: Colors.primary,
                      selectedTextColor: 'black',
                      testID: 'PROFILE_SCREEN',
                      icon: Images.search,
                      selectedIcon: Images.selectedSearch,
                      iconInsets: { top: 5 },
                    },
                  },
                  },
                },
                {
                  stack: {
                    id: 'manage',
                    children: [
                      {
                        component: {
                          name: PROFILE_SCREEN,
                          options: {
                            topBar: {
                              title: {
                                text: 'Create New Ticket',
                                color: Colors.snow,
                              },
                              noBorder: true,
                              rightButtons:[
                                {
                                  id: 'menuButton',
                                  icon: Images.pen,
                                  testID: 'menuButton',
                                  color: Colors.white,
                                },
                              ],
                            },
                          },
                        },
                      },
                    ],
                    options: {
                      bottomTab: {
                        iconColor: 'gray',
                        textColor: 'gray',
                        selectedIconColor: Colors.primary,
                        selectedTextColor: 'black',
                        testID: 'PROFILE_SCREEN',
                        icon: Images.plus,
                        selectedIcon: Images.selectedPlus,
                        iconInsets: { top: 5 },
                      },
                    },
                    },
                  },
                  {
                    stack: {
                      id: 'ticket',
                      children: [
                        {
                          component: {
                            name: PROFILE_SCREEN,
                            options: {
                              topBar: {
                                title: {
                                  text: 'Profile',
                                  color: Colors.snow,
                                },
                                noBorder: true,
                                rightButtons:[
                                  {
                                    id: 'menuButton',
                                    icon: Images.pen,
                                    testID: 'menuButton',
                                    color: Colors.white,
                                  },
                                ],
                              },
                            },
                          },
                        },
                      ],
                      options: {
                        bottomTab: {
                          iconColor: 'gray',
                          textColor: 'gray',
                          selectedIconColor: Colors.primary,
                          selectedTextColor: 'black',
                          testID: 'PROFILE_SCREEN',
                          icon: Images.ticket,
                          selectedIcon: Images.selectedTicket,
                          iconInsets: { top: 5 },
                        },
                      },
                      },
                    },

            {
              stack: {
                id: 'profile',
                children: [
                  {
                    component: {
                      name: PROFILE_SCREEN,
                      options: {
                        topBar: {
                          title: {
                            text: 'Profile',
                            color: Colors.snow,
                          },
                          noBorder: true,
                          rightButtons:[
                            {
                              id: 'menuButton',
                              icon: Images.pen,
                              testID: 'menuButton',
                              color: Colors.white,
                            },
                          ],
                        },
                      },
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    iconColor: 'gray',
                    textColor: 'gray',
                    selectedIconColor: 'black',
                    selectedTextColor: 'black',
                    testID: 'PROFILE_SCREEN',
                    icon: Images.profile,
                    selectedIcon: Images.selectedprofile,
                    iconInsets: { top: 5 },
                  },
                },
                },
              },
          ],
        },
      }
    },
    
  }
}



let lastAppState = 'active'
function handleAppStateChange(nextAppState) {
  if (lastAppState.match(/inactive|background/) && nextAppState === 'active') {
    refreshAccount(store)
  }
  lastAppState = nextAppState
}

function refreshAccount() {
  store.dispatch(AccountActions.accountRequest())
}
// for deep linking
function handleOpenURL(event) {
  console.tron.log(event.url)
  let splitUrl = event.url.split('/') // ['https:', '', 'domain', 'route', 'params']
  let importantParameters = splitUrl.splice(3) // ['route', 'params']
  if (importantParameters.length === 0) {
    console.tron.log('Sending to home page')
    return null
  }
  if (importantParameters.length === 1) {
    switch (importantParameters[0]) {
      case 'register':
        console.tron.log('Sending to Register Page')
        registerScreen()
        break
      default:
        console.tron.warn(`Unhandled deep link: ${event.url}`)
      // default code block
    }
  }
}

function registerComponentWithRedux(SCREEN_NAME, Component) {
  Navigation.registerComponent(
    SCREEN_NAME,
    () => (props) => (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    ),
    () => Component,
  )
}

// registers screens (except the launch screen) as lazily loaded
function registerScreensLazily() {
  // note: was using Navigation.setLazyComponentRegistrator but it caused Android crashes
  registerComponentWithRedux(DASHBOARD_SCREEN, DashboardScreen)
  registerComponentWithRedux(APP_INTRO_SCREEN, AppIntroScreen)
  registerComponentWithRedux(PROFILE_SCREEN, ProfileScreen)
  registerComponentWithRedux(UPDATEPROFILE_SCREEN, UpdateProfileScreen)

  Navigation.registerComponent(STORYBOOK_SCREEN, () => StorybookScreen)
  registerComponentWithRedux(LOGIN_SCREEN, LoginScreen)
  registerComponentWithRedux(REGISTER_SCREEN, RegisterScreen)
  registerComponentWithRedux(VERIFICATION_SCREEN, VerificationScreen)

  registerComponentWithRedux(FORGOT_PASSWORD_SCREEN, ForgotPasswordScreen)
  registerComponentWithRedux(CHANGE_PASSWORD_SCREEN, ChangePasswordScreen)
  registerComponentWithRedux(SETTINGS_SCREEN, SettingsScreen)
  registerComponentWithRedux(DRAWER_CONTENT, DrawerContent)
  registerComponentWithRedux(ENTITIES_SCREEN, EntitiesScreen)
  // ignite-jhipster-navigation-registration-needle
}

export function registerScreensAndStartApp() {
  registerScreensLazily()

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
      topBar: {
        topBar: {
          title: {
            color: Colors.snow,
          },
        },
        backButton: {
          showTitle: false,
          testID: 'backButton',
          icon: Images.leftArrow,
          color: Colors.white,
          iconColor: Colors.white,
        },
        background: {
          color: Colors.primary,
        },
      },
      sideMenu: {
        left: {
          enabled: false,
        },
      },
    })

    Navigation.setRoot(AppIntro)
   
    // handle app state and deep links
    AppState.addEventListener('change', handleAppStateChange)
    Linking.addEventListener('url', handleOpenURL)
  })
}

export const loginScreen = () =>
  Navigation.push('center', {
    component: {
      name: LOGIN_SCREEN,
      options: {
        topBar: {
          visible: false,
          drawBehind: true,
        },
      },
    },
  })

export const registerScreen = () =>
  Navigation.push('center', {
    component: {
      name: REGISTER_SCREEN,
      options: {
        topBar: {
          title: {
            text: 'Qaamuus',
            color: Colors.snow,
          },
        },
      },
    },
  })

  export const verificationScreen = () =>
  Navigation.push('center', {
    component: {
      name: VERIFICATION_SCREEN,
      options: {
        topBar: {
          title: {
            text: 'Qaamuus',
            color: Colors.snow,
          },
        },
      },
    },
  })


export const updateProfileScreen = (data) =>
  Navigation.push('profile', {
    component: {
      name: UPDATEPROFILE_SCREEN,
      passProps:{data},
      options: {
        topBar: {
          title: {
            text: 'Qaamuus',
            color: Colors.snow,
          },
        },
      },
    },
  })

export const forgotPasswordScreen = () =>
  Navigation.push('center', {
    component: {
      name: FORGOT_PASSWORD_SCREEN,
      options: {
        topBar: {
          title: {
            text: 'Forgot Password',
            color: Colors.snow,
          },
        },
      },
    },
  })
export const changePasswordScreen = () =>
  Navigation.push('center', {
    component: {
      name: CHANGE_PASSWORD_SCREEN,
      options: {
        topBar: {
          title: {
            text: 'Change Password',
            color: Colors.snow,
          },
        },
      },
    },
  })
export const settingsScreen = () =>
  Navigation.push('dashboard', {
    component: {
      name: SETTINGS_SCREEN,
      options: {
        topBar: {
          title: {
            text: 'Change Password',
            color: Colors.snow,
          },
        },
      },
    },
  })






export const entitiesScreen = () =>
  Navigation.push('center', {
    component: {
      name: ENTITIES_SCREEN,
      options: {
        topBar: {
          title: {
            text: 'Entities',
            color: Colors.snow,
          },
        },
      },
    },
  })
export const storybookScreen = () => {
  Navigation.push('center', {
    component: {
      name: STORYBOOK_SCREEN,
      options: {
        topBar: {
          title: {
            text: 'Storybook',
            color: Colors.snow,
          },
        },
      },
    },
  })
}
// ignite-jhipster-navigation-method-needle
