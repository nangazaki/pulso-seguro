import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";

export default function App() {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
}