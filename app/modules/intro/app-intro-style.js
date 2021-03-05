import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../shared/themes'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  mainContent: {
    flex: 1,
    backgroundColor: Colors.white
  },
  content: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'flex-start',
    marginTop:hp('10%'),
    alignItems: 'center',

  },
  animation: {
    width:150,
    height: 420,
    resizeMode:'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight:'700',
    color: Colors.primary,
    marginTop:hp('3%'),

  },
  text: {
    marginTop:20,
    fontSize:20,
    fontWeight:'300',
    color: Colors.charcoal,
    textAlign: 'center'


  },
  background: {
    flex:1,
    backgroundColor: Colors.white,
   },
  buttonView: {
    flex: 0.1,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    flexDirection: "row",


  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 190,
    margin: 5,
    color: Colors.primary



  },
  buttonText: {
    color: Colors.white,
    fontSize: 19,
  }
})
