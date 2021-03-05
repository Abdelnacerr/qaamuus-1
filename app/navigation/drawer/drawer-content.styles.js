import { Colors } from '../../shared/themes';
import { Dimensions } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Height = Dimensions.get('window').height;
export default {
  container: {
    flex:1,
    backgroundColor: Colors.white,
  },
  content:{
    flex:1,
  },
  header:{
    paddingTop:80,
    paddingHorizontal:20,
    backgroundColor:Colors.primary,
    justifyContent:'center',
    height:hp('30%')
  },
  logo: {
    alignSelf: 'center',
    height: 80,
    width: 80,
    marginBottom:10
  },
}
