import React from 'react'
import { Alert, Text, Image, StatusBar, ScrollView, TextInput,  TouchableOpacity, ke } from 'react-native'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Navigation } from 'react-native-navigation'
import t from 'tcomb-form-native'
import { createAnimatableComponent, View } from 'react-native-animatable';
import DropdownAlert from 'react-native-dropdownalert';
import { Colors, Images, Metrics } from '../../../shared/themes'
import Icon from 'react-native-vector-icons/AntDesign'
import { Form, Item,Input, Picker, Button,DatePicker } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { v4 as uuidv4 } from 'uuid';

import { loginScreen, verificationScreen } from '../../../navigation/layouts'
import ProfileActions from './Profile.reducer'
import LottieView from 'lottie-react-native';
import Animation from '../../animation'
// Styles
import styles from './Edit-profile-screen.styles'


class EditProfileScreen extends React.Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      visibleHeight: Metrics.screenHeight,
      fullname:'',
      picture:null,
      gender:null,
      email:'',
      Ispicture:false
    }
  }

  handlePressSignUp = () => {
    // call getValue() to get the values of the form
    const { fullname,picture, gender, email } = this.state;
    const {  data,authToken } = this.props
    console.tron.log('picture', picture)
    if(picture && picture.didCancel != true){
    const photos =  {
        uri : picture.uri.replace('file://', ''),
        path: picture.uri.replace('file://', ''),
        type: picture.type,
        name:uuidv4(),
        size: picture.fileSize,
        lastModified: picture.length,
        lastModifiedDate: new Date(),
        id: "userAvatarsProfiles",
        tenantId: data.tenants ? data.tenants[0].tenantId : null
        
      }
    const object = { 
        fullName:fullname ? fullname : data.fullName,
        avatars:[], 
        phoneNumber:data.phoneNumber,
        gender:gender ? gender :data.gender, 
        email:email ? email : data.email, 
     }
    if (object.fullName || object.avatars || object.gender || object.email ) {
            // if validation fails, value will be null
        this.props.updateProfile(object, photos, authToken)
     }else{
            this.dropDownAlertRef.alertWithType('error', 'Error','Empty Fields')
     }
    }else{
        const object = { 
            fullName:fullname ? fullname : data.fullName,
            avatars:data.avatars, 
            phoneNumber:data.phoneNumber,
            gender:gender ? gender :data.gender, 
            email:email ? email : data.email, 
         }
        if (object.fullName || object.avatars || object.gender || object.email ) {
                // if validation fails, value will be null
            this.props.updateProfile(object, null, authToken)
         }else{
          this.dropDownAlertRef.alertWithType('error', 'Error','Empty Fields')
         }
      
    }
    
  }
 
  componentDidUpdate(prevProps) {
    if (prevProps.fetching && !this.props.fetching) {
      if (this.props.error) {
        this.dropDownAlertRef.alertWithType('error', 'Error', this.props.error)
      } else {
        this.dropDownAlertRef.alertWithType('success', 'Success','secuss full upload')
        Navigation.pop(this.props.componentId)
  
    }
      
    } 
  }

  handlePressUpload = () =>{
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
        quality: 0.1,
        maxWidth: 300,
        maxHeight: 300,
      },
    };
    launchImageLibrary(options, (response) => {
      // Same code as in above section!
      if(response){
        this.setState({
          picture:response,
          Ispicture: true
        })
        console.tron.log(response)
      }
  });
}

  

  render() {
    const { fullname,picture, gender ,email} = this.state;
    const { fetching, data } = this.props
    

    return (
      <>
      <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />

      <View
      style={[styles.container, { height: this.state.visibleHeight }]}
      >
      <View style={styles.row}>

      <TouchableOpacity   onPress={()=>this.handlePressUpload()}    style={styles.picker}>
              {this.state.Ispicture  ?
                <Image source={this.state.picture}  style={styles.uploadImage}/>
                :
                data ? data.avatars ? 
                <Image source={{uri:data.avatars[0] ?data.avatars[0].downloadUrl:'' }}  style={styles.uploadImage}/>

                :
                <View  style={styles.pickerView}>
                  <Image source={Images.upload} style={styles.uploadicon} />
                  <Text style={styles.text}>Upload Picture</Text>
                </View>
                :
                <View  style={styles.pickerView}>
                  <Image source={Images.upload} style={styles.uploadicon} />
                  <Text style={styles.text}>Upload Picture</Text>
                </View>
                
              }
         </TouchableOpacity>
         <Text style={styles.title}>Profile Picture</Text>
       </View>
       <DropdownAlert ref={ref => this.dropDownAlertRef = ref} />

      <View style={styles.form} animation="fadeInUp" delay={300}>

      <KeyboardAwareScrollView style={{flex:1}} keyboardShouldPersistTaps={'handled'}>

        <View animation="fadeInUp" delay={300}>
        
        </View>
        <View style={styles.row} animation="fadeInUp" delay={300}>
          <Text style={styles.rowLabel}>Name </Text>
          <View style={styles.input}>
          <Icon name="tag" size={20} color={Colors.primary} style={styles.inputIcon}/>
          <TextInput
            ref={(c) => {
              this.usernameInput = c
            }}
            testID="loginScreenFullname"
            style={styles.textInput}
            value={fullname ? fullname :data ? data.fullName : ''}
            keyboardType="default"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(fullname)=>{this.setState({fullname})}}
            underlineColorAndroid="transparent"
            onSubmitEditing={() => this.passwordInput.focus()}
            placeholder="Full Name"
          />
          </View>
        </View>
        <View style={styles.row} animation="fadeInUp" delay={300}>
          <Text style={styles.rowLabel}>Email </Text>
          <View style={styles.input}>
          <Icon name="user" size={20} color={Colors.primary} style={styles.inputIcon}/>
          <TextInput
            ref={(c) => {
              this.usernameInput = c
            }}
            testID="loginScreenEmail"
            style={styles.textInput}
            value={email ? email : data ? data.email :''}
            keyboardType="default"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(email)=>{this.setState({email})}}
            underlineColorAndroid="transparent"
            onSubmitEditing={() => this.passwordInput.focus()}
            placeholder="Enter Email"
          />
          </View>
        </View>
        <View style={styles.row} animation="fadeInUp" delay={300}>
        <Text style={styles.rowLabel}>Gender</Text>
        <Item style={styles.input}>
        <Icon name="down" size={20} color={Colors.primary} style={styles.inputIcon}/>
          <Picker
           style={styles.textInput}
           mode="dropdown"
           placeholder="Gender"
           placeholderStyle={{ color: Colors.secondary }}
           placeholderIconColor="#007aff"
           selectedValue={gender ? gender : data ? data.gender :null}
           onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}
          >
          <Picker.Item label="Male" value={false} />
          <Picker.Item label="Female" value={true} />
         </Picker>
       </Item> 
       
       </View>
        <View style={[styles.loginRow]} animation="fadeInUp" delay={300}>
          {
            fetching ?
            <TouchableOpacity testID="loginScreenLoginButton" style={styles.loginButtonWrapper} onPress={this.handlePressSignUp}>
                <View style={[styles.loginButton,{paddingTop:0}]}>
                  <LottieView source={Animation.lodingButton}  autoPlay loop style={styles.animation} />
                </View>
            </TouchableOpacity>
            :
            <TouchableOpacity testID="loginScreenLoginButton" style={styles.loginButtonWrapper} onPress={this.handlePressSignUp}>
              <View style={styles.loginButton}>
                <View style={styles.textContainer}>
                <Text style={styles.loginText}>Update</Text>
                </View>
              </View>
            </TouchableOpacity>
          }
          
         
        </View>
          </KeyboardAwareScrollView>
      </View>
    </View>
    </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.profile.fetching,
    error: state.profile.error,
    profile: state.profile.profile,
    authToken: state.login.authToken,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (account, photos, token) => dispatch(ProfileActions.profileUpdateRequest(account,photos, token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileScreen)
