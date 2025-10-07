import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen.";
import MedicamentosFormScreen from "../screens/MedicamentoFormScreen";
import MedicamentosListScreen from "../screens/MedicamentoListScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Início"}}/>
            <Stack.Screen name="MedicamentoForm" component={MedicamentosFormScreen} options={{ title: "Novo Medicamento"}}/>
            <Stack.Screen name="MedicamentoList" component={MedicamentosListScreen} options={{ title: "Medicamentos"}}/>
        </Stack.Navigator>
    )
}