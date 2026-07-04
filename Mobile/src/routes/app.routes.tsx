import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../Pages/Dashboard';
import Order from '../Pages/Order';
import { FinishOrder } from '../Pages/FinishOrder';
import { colors } from '../styles/theme';

export type StackPramsList = {
    Dashboard: undefined;
    Order: {
        number: number | string;
        order_id: string;
    }
    FinishOrder:{
        number: number | string;
        order_id: string
    };
}

const Stack = createNativeStackNavigator<StackPramsList>();

function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Dashboard" 
            component={Dashboard} 
            options={{headerShown:false}}
            />

            <Stack.Screen
            name="Order"
            component={Order}
            options={{headerShown: false}}
            />
             <Stack.Screen
            name="FinishOrder"
            component={FinishOrder}
            options={{
                title: 'Finalizando',
                headerStyle:{
                    backgroundColor: colors.background
                },
                headerTintColor: colors.text,
                headerTitleStyle:{
                    fontSize: 20,
                    fontWeight: '700',
                },
                headerShadowVisible: false,
            }}
            />
        </Stack.Navigator>
    )
}

export default AppRoutes;