import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tabs from './../components/Tabs'
import { Home, Cart } from './LazyImport'
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const CartStack = createStackNavigator();


const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }} >
            <HomeStack.Screen name="Home" component={Home}  />
        </HomeStack.Navigator>        
    )
}

const CartStackScreen = () => {
    return (
        <CartStack.Navigator screenOptions={{ headerShown: false }}>
            <CartStack.Screen name="Cart" component={Cart}  />
        </CartStack.Navigator>
    )
}

const MyTheme = {
    dark: false,
    colors: {
        background: '#e8e8e8',
    },
};

const Routing = () => {
    return (
        <SafeAreaProvider>
             <NavigationContainer theme={MyTheme}>
                <Tab.Navigator 
                   initialRouteName="Home" 
                   tabBar={props => <Tabs {...props} />}>
                    <Tab.Screen name="Home" component={HomeStackScreen}/>
                    <Tab.Screen name="Cart" component={CartStackScreen}/>
                 </Tab.Navigator> 
             </NavigationContainer>  
        </SafeAreaProvider>     

    )
}
export default Routing;