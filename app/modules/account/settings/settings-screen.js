import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux'
import { Container, Header, Title,Badge, Item,Input, Content, Button,Right,List,ListItem, Left, Body,Thumbnail, Card,CardItem } from "native-base";
import Icon from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../../shared/themes'
import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import AccountAction from '../../../shared/reducers/account.reducer'
import styles from './settings-screen.style';
import authAction from '../../login/login.reducer'
import LoadingView from '../../../shared/components/lodingview';
import { Navigation } from 'react-native-navigation'
import { AppIntro  } from '../../../navigation/layouts';
import DropdownAlert from 'react-native-dropdownalert';

class SettingScreen extends Component {
  handleViewRef = ref => this.view = ref;

  constructor(props){
    super(props)
    this.state ={
      oldPassword:'',
      password: '',
      confirmPassword:'',
      fetching:false,
      error:null

    }
  }

  componentWillReceiveProps(Props){
    console.tron.log('rrrrr', Props)
    if(Props.error){
      this.setState({
        fetching: false,
        error:Props.error
       })
       this.dropDownAlertRef.alertWithType('error', 'Error', Props.error);

    }else {
      this.setState({
        fetching: false
       })
       this.dropDownAlertRef.alertWithType('error', 'Error', 'Successfull Changed');
      this.props.LogoutRequest()
      Navigation.setRoot(AppIntro)
    }
  }

  handlePressChange = () => {
    const { oldPassword, password,confirmPassword } = this.state
    const { account } = this.props;
		// attempt a login - a saga is listening to pick it up from here.
    if(!oldPassword  || !confirmPassword  || !password ){
      this.setState({
        fetching: false
       })
       this.dropDownAlertRef.alertWithType('error', 'Error', 'empty Feilds Please Make sure it');

    }else if( confirmPassword != password ){
      this.bounce()
      this.setState({
        fetching: false
       })
       this.dropDownAlertRef.alertWithType('error', 'Error', 'Please Make Sure Your Password, is not same');

    } else{
      const data ={
        oldPassword:oldPassword,
        newPassword:password,
      }
    this.props.accountUpdateRequest(data);
     this.setState({
      fetching: true
     })
    }
  }
  bounce(){ this.view.bounce(800).then(endState => console.tron.log(endState.finished ? 'bounce finished' : 'bounce cancelled'))};

    render() {
        const {fetching } = this.state;
        if(fetching){
          return <LoadingView />
        }
        return (
            <Container>
            <Content style={{flex:1,backgroundColor:Colors.white,}}>
            
             <View style={styles.form}>
             <Text style={styles.title}>Change Your Password</Text>

             <Item regular style={styles.group}>
                      <Icon  name='lock' color={Colors.primary} size={16} />

                          <Input
                                secureTextEntry
                                placeholder="Old Password"
                                style={styles.input}
                                keyboardTdasadype="default"
                                returnKeyType="next"
                                autoCapitalize="none"
                                editable
                                autoCorrect={false}
                                onChangeText={(text) => this.setState({ oldPassword: text })}
                                underlineColorAndroId="transparent"
                                />
                      </Item>
                      <Item regular style={styles.group}>
                      <Icon  name='lock' color={Colors.primary} size={16} />

                          <Input
                                secureTextEntry
                                placeholder="New Password"
                                style={styles.input}
                                keyboardTdasadype="default"
                                returnKeyType="next"
                                autoCapitalize="none"
                                editable
                                autoCorrect={false}
                                onChangeText={(text) => this.setState({ password: text })}
                                underlineColorAndroId="transparent"
                                />
                      </Item>
                      <Item regular style={styles.group}>
                      <Icon  name='lock' color={Colors.primary} size={16} />

                          <Input
                                secureTextEntry
                                placeholder="Confirm New Password"
                                style={styles.input}
                                keyboardTdasadype="default"
                                returnKeyType="next"
                                autoCapitalize="none"
                                editable
                                autoCorrect={false}
                                onChangeText={(text) => this.setState({ confirmPassword: text })}
                                underlineColorAndroId="transparent"
                                />
                      </Item> 
                     
                      <Button block style={styles.button} onPress={() => this.handlePressChange()}>
                      <Icon   name='check' color={Colors.white} size={20} />

                              <Text style={{color:"white"}}>Change</Text>
                      </Button>
                      <DropdownAlert ref={ref => this.dropDownAlertRef = ref} />

                      <View ref={this.handleViewRef} >
                        {this.state.error != null ? 
                        this.state.error.map(item =>{
                           return <Text style={styles.error}>{item}</Text>

                          })
                         : null}
                      </View>
             </View>
            </Content>
          </Container>
        );
    }
}

const mapStateToProps = (state) => ({
  account:state.account.account,
  changed:state.account.changed,
  error: state.account.error
})

const mapDispatchToProps = (dispatch) => ({
  accountUpdateRequest:(data)=>dispatch(AccountAction.accountUpdateRequest(data)),
  LogoutRequest: () => dispatch(authAction.logoutRequest()),

})
export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)
 