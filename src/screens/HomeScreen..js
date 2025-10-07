import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
    const { signOut } = useContext(AuthContext);
    const navigation = useNavigation();


    return (
        <View style={{ flex: 1, padding: 16, gap: 12, justifyContent: "center" }}>
            <Text style={{ fontSize: 22, fontWeight: "600" }}>Bem-vindo 👋</Text>
            <Button title="Medicamentos (listar)" onPress={() => navigation.navigate("MedicamentoList")} />
            <Button title="Novo Medicamento" onPress={() => navigation.navigate("MedicamentoForm")} />
            <View style={{ height: 16 }} />
            <Button title="Sair" color="tomato" onPress={signOut} />
        </View>
    );
}