import { View, Text , Image, Button} from 'react-native'
import React from 'react'
import SignIn from './src/Screens/SignIn/SignIn'
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import ProductPage from './src/Screens/ProductPage/ProductPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logo from './assets/logo.png'

const Stack = createStackNavigator();
function LogoTitle() {
  return (
    <View  >
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/logo.png')}
    />
    </View>
  );
}


const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">

        <Stack.Screen name="HomeScreen" 
        component={HomeScreen}   
        options={{headerTitle: () => (
          <Image source={logo} resizeMode="contain" style={{width: 100, height:100}} />
        ),
        headerTitleAlign: 'center',
        headerLeft: ()=> null,  
         }}
  
   
        />
        <Stack.Screen name="SignIn" component={SignIn} options={{   headerTitle: props => <LogoTitle {...props} /> }} 
        />
        <Stack.Screen name="ProductPage" component={ProductPage}  options={{headerTitle: () => (
           <Image source={logo} resizeMode="contain" style={{width: 100, height:100}} />
           ),
           headerTitleAlign: 'center',
           headerLeft: ()=> null,  
            }}
        />


      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App
