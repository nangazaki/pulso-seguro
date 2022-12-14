import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Inicio from './src/pages/Inicio'
import Notificações from './src/pages/Notificações'
import Perfil from './src/pages/Perfil'
import Config from './src/pages/Config'

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={Inicio} />
            <Tab.Screen name="Notificações" component={Notificações} />
            <Tab.Screen name="Perfil" component={Perfil} />
            <Tab.Screen name="Config" component={Config} />
        </Tab.Navigator>
    )
}