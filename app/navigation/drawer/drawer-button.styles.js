import { Metrics, Colors, Fonts } from '../../shared/themes'

export default {
  text: {
    ...Fonts.style.normal,
    color: Colors.primary,
    marginLeft: Metrics.baseMargin,
  },

  button:{
    flexDirection:'row',
    marginVertical: Metrics.baseMargin,
    borderBottomWidth:1,
    borderBottomColor:Colors.text,
    padding:7,

  }
}
