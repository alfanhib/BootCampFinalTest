import { StackNavigator } from 'react-navigation';

import IndexHome from '../Profile/screen/index'
import Profile from '../Profile/screen/Profile'

const RootNavigator = StackNavigator({
  
  Index:{
    screen: IndexHome,
    navigationOptions:{
      title:'Home'
    }
  },
  Profile:{
    screen: Profile,
    navigationOptions:{
      title: 'Profile'
    }
  }
})

export default RootNavigator;