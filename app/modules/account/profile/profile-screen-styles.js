import { StyleSheet } from 'react-native'

import { ApplicationStyles, Colors } from '../../../shared/themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  header:{
    flex:0.5,
    backgroundColor:Colors.blue,
    alignItems:'center',
    justifyContent:'center'


  },
  Thumbnail:{
    borderWidth:4,
    borderColor:Colors.bloodOrange
},
  
thumbnail:{
  width:120,
  borderRadius:100,
  height:120,
  alignSelf:"center"
 },
 name:{
   color:Colors.white,
   marginTop:10,
   fontSize:22,
   fontWeight:'200'
  },
  profile:{
    flex:1,
    justifyContent:'center',
    backgroundColor:Colors.primary,
    padding:20,

  },
  card:{
    flex:2,
  },
  fullname:{
    fontSize:20,
    color:Colors.white,
    marginTop:10,
    textAlign:'center',
    alignSelf:"center"

 },
 id:{
    alignSelf:'center',
    fontWeight:'800',
    marginTop:10,
    fontSize:20,
    color:Colors.white,
    textAlign:'center',
 },
  title:{
    color:Colors.primary,
    marginTop:10,
    fontSize:18,
    fontWeight:'200'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: Colors.jhipsterBlue,
    borderColor: Colors.jhipsterBlue,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
})
