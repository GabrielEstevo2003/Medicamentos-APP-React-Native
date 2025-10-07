import React, { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import AppNavigator from "./AppNavegator";
import AuthNavigator from "./AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../contexts/AuthContext";


export default function RootNavigator(){
    const {token, loading} = useContext(AuthContext);

    if(loading){
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }

    return(
        <NavigationContainer>
            {token ? <AppNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    );
}

