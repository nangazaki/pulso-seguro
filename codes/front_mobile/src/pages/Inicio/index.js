import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { Text } from "@rneui/base";
import Routes from "../../../routes";

export default function Inicio() {
    const [dados, setDados] = useState(null)

    //** API */


    return (
        <View>
            <View>
                <View>
                    <Text>Olá, PRIMEIRO NOME DO USUÁRIO</Text>
                    <Text>Icone</Text>
                </View>
                <Text>Data</Text>
            </View>
        </View>
    );
}