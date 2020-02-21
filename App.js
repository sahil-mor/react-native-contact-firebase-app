//TODO: import firebase
import * as firebase from 'firebase'
// set up react navigation
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
//TODO: import four screens
import HomeScreen from './screens/HomeScreen'
import AddNewContact from './screens/AddNewContact'
import ViewContact from './screens/ViewContact'
import EditContact from './screens/EditContact'
const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Add: { screen: AddNewContact },
    View: { screen: ViewContact },
    Edit: { screen: EditContact }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#B83227"
      },
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);

//TODO: Initialize Firebase

// Initialize Firebase
//FirebaseTODO create firebase real-time database with rules

// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }
export default App;
