import { StyleSheet } from 'react-native';
import  {Colors}  from '../../../shared/themes'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    form:{
      marginTop:hp('20%'),
      flex:1,
      alignContent:'center',
      justifyContent:'flex-end',
      padding:10,
    },
    group:{
        marginBottom:20,
        paddingLeft:15,
        backgroundColor:Colors.card,
        borderRadius:2,
    },
    title:{
        fontSize:25,
        textAlign:'center',
        color:Colors.primary,
        marginBottom:20,
    },
    error:{
        marginTop:5,
        alignSelf:'center',
        color:'red',
        textAlign:'center'
 

    },
    button:{
        backgroundColor:Colors.primary
    }
     
})

