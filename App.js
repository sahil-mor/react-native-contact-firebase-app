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
var firebaseConfig = {
  apiKey: "AIzaSyA-ojkFV0H89sTCdID2Rrd6WPWxa3qOMNY",
  authDomain: "react-bootcamp-1e7c3.firebaseapp.com",
  databaseURL: "https://react-bootcamp-1e7c3.firebaseio.com",
  projectId: "react-bootcamp-1e7c3",
  storageBucket: "react-bootcamp-1e7c3.appspot.com",
  messagingSenderId: "490071011495",
  appId: "1:490071011495:web:a38c38bf15dab5529f6b82",
  measurementId: "G-LQ1EBRY9BP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//FirebaseTODO create firebase real-time database with rules

// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }
export default App;
