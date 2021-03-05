import { StyleSheet } from 'react-native'

import { Metrics, ApplicationStyles, Colors } from '../../shared/themes/'
import {Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    backgroundColor:Colors.white,
   },

   foreground:{
     flex:1,
     backgroundColor:Colors.white,
     marginTop:30
    },
    content:{
      backgroundColor:Colors.primary
    },
    header:{
      height:50,
      backgroundColor:Colors.primary, 

    },
    menu:{
    backgroundColor:Colors.white
   },
  mainCard:{
    borderRadius:100,
     
  },
  cardItem:{
    backgroundColor: Colors.transparent,
    alignSelf:'center',

  },
  loadingview:{
    flex:1,
    width:width,
    alignContent:'center',
    backgroundColor:Colors.bloodOrange
  },
  lottieView: {
    height: 100,
    alignSelf: 'center',
  },
  headertitle:{
    color: Colors.white,
    textAlign:'center',
    alignSelf:'center',
    fontSize:20,
   },
  title:{
    color: Colors.primary,
    fontSize:25,
    alignSelf:'center'
  },
  name:{
    color: Colors.greenish,
    fontSize:22,
    paddingTop:20,
    alignSelf:'center'
  },
  describtion:{
    color: Colors.charcoal,
    textAlign:'center',
    fontSize:15,
    paddingTop:20,
    alignSelf:'center'
  },
  mainContent:{
    flex:1,
    marginTop:5,
    paddingTop:10,
    paddingBottom:20,
    backgroundColor:Colors.white
  },
  hairline: {
    color: Colors.bloodOrange,
    alignSelf:'flex-start',
    fontSize:22,
    
  },
  icon:{
    width:20,
    height:20,
  },
  logo: {
    marginTop: Metrics.section,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
  },
  centered: {
    alignItems: 'center',
  },
  scrollView: {
    paddingBottom: Metrics.baseMargin,
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.transparent,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.snow,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.snow,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.snow,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  cards:{
    flex:1,
    flexDirection:'row',
    marginTop:20,
    backgroundColor:Colors.white,
    padding:10,
  
  },
  card:{
    flex:1,
    height:260,
    width:200,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  courseFooter:{
     height:45,
  },
  author:{
    width:20,
    height:20
  },
  courseTitle:{
    fontWeight:'400',
    fontSize:19,
    color:Colors.primary
  },
  courseDesc:{
     marginTop:10,

  },
  courseTime:{
    color:Colors.primary,
    flex:1,
    fontSize:15,
    fontWeight:'bold'
  }
})
