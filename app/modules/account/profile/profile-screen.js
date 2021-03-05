import React from 'react'
import { Alert, ScrollView, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import t from 'tcomb-form-native'

import AccountActions from '../../../shared/reducers/account.reducer'
// Styles
import styles from './profile-screen-styles'
import { Container, Content, Thumbnail, Card, Left, Right,CardItem,Body } from 'native-base'
import { Avatar ,Badge} from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { color } from '@storybook/theming'
import { createAnimatableComponent, View } from 'react-native-animatable';
import { updateProfileScreen } from '../../../navigation/layouts'
import { Navigation } from 'react-native-navigation'

const Form = t.form.Form

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    Navigation.events().bindComponent(this)

  }
  navigationButtonPressed({ buttonId }) {
    const { account } = this.props;

    updateProfileScreen(account)
  }
  render() {
      const { account } = this.props;
      if(!account){
        return null
      }
    return (
      <Container style={styles.container}>
        <View style={styles.profile}>
          <Thumbnail style={styles.thumbnail} source={{uri: account ? account.avatars ? account.avatars[0] ? account.avatars[0].downloadUrl:'https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png'  :'https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png':'https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png'}} />
             <Text style={styles.fullname} >{account.fullName}</Text>
              <Text style={styles.id} >{account.email}</Text>
             </View>
                 <Card style={styles.card}>
                    
                 </Card>

      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.account.account,
    updating: state.account.updating,
    error: state.account.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
