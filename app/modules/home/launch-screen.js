import React from 'react'
import { ScrollView,StatusBar, Image, View, Platform } from 'react-native'
import { DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen'
import { Navigation } from 'react-native-navigation'

import LearnMoreLinks from './learn-more-links.component.js'
import { Images,Colors } from '../../shared/themes'
import styles from './launch-screen.styles'
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import { Container, Header , Title, Thumbnail, Content, Button,Right, Left, Body, Card,CardItem } from "native-base";
import Icon  from 'react-native-vector-icons/AntDesign';
import { Text } from 'react-native-animatable';
import { connect } from 'react-redux'

class LaunchScreen extends React.Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
  }

  componentDidAppear() {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          enabled: true,
          visible: false,
        },
      },
    })
  }

  showSideMenu() {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    })
  }

  navigationButtonPressed({ buttonId }) {
    this.showSideMenu()
  }

  renderContent = () => {
    const { account } = this.props
    return (
      <View>

      </View>
    );
  };
  renderHeader = () => {
    return (
      <Header iosBarStyle="light-content" androidStatusBarColor={Colors.primary} style={styles.header} transparent>
      <Left>
        <Button transparent onPress={()=>this.showSideMenu()}>
          <Image source={Images.menu} style={styles.icon} />
        </Button>
      </Left>
      <Body>
        <Title style={styles.headertitle}>Qaamuus</Title>
      </Body>
      <Right>
        <Button transparent >
        <Image source={Images.bell} style={styles.icon} />
        </Button>
      </Right>
    </Header>
    );
  };

  render() {
    const { account } = this.props;
    if(!account){
      return null
    }
    return (
      <>
      <Container style={styles.container} testID="launchScreen">
        <StickyParallaxHeader
        headerType="TabbedHeader"
        title={'Salam ! \n'+account.fullName + '\nSoo Dhawow'}
        foregroundImage={Images.logo}
        bounces={true}
        contentContainerStyles={styles.mainCard}
        hasBorderRadius={true}
        header={this.renderHeader}
        backgroundColor={Colors.primary}
        hasBorderRadius
        tabs={[
          {
            title: 'Events',
            content: this.renderContent(),
          },
        ]}
        >
       </StickyParallaxHeader>
       </Container>
      </>
    )
  }
}

 
const mapStateToProps = (state) => {
  return {
    account: state.account.account,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)

