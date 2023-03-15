import { View, Text } from 'react-native'
import React from 'react'
import Home from '../pages/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

type Props = {}

const index = (props: Props) => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    )
}

export default index