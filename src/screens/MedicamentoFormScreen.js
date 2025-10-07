import React, { useState } from "react";
import { createMedicamento } from "../services/MedicamentoService";
import { Alert, View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MedicamentosFormScreen() {
    const [nome, setNome] = useState("");
    const [dosagem, setDosagem] = useState("");
    const [horario, setHorario] = useState("");
    const [observacoes, setObservacoes] = useState("");
    const navigation = useNavigation();


    const handleSave = async () => {
        if (!nome || !horario || !dosagem) {
            Alert.alert("Preencha pelo menos os campos de Nome, Dosagem e Horário!");
            return;
        }
        try {
            await createMedicamento({ nome, dosagem, horario, observacoes });
            Alert.alert("OK", "Medicamento criado com sucesso", [
                { text: "OK", onPress: () => navigation.navigate("MedicamentoList") },
            ]);
        } catch {
            Alert.alert("Erro", "Não foi possivel criar o Medicamento");
        }
    }

    return (
        <View style={{ flex: 1, padding: 16, gap: 12 }}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>Novo Medicamento</Text>
            <TextInput placeholder="Nome" value={nome} onChangeText={setNome}
                style={{ borderWidth: 1, borderRadius: 8, padding: 12 }} />
            <TextInput placeholder="Dosagem" value={dosagem} onChangeText={setDosagem}
                autoCapitalize="none"
                style={{ borderWidth: 1, borderRadius: 8, padding: 12 }} />
            <TextInput placeholder="Horário" value={horario} onChangeText={setHorario}
                style={{ borderWidth: 1, borderRadius: 8, padding: 12 }} />
            <TextInput placeholder="Observações" value={observacoes} onChangeText={setObservacoes}
                style={{ borderWidth: 1, borderRadius: 8, padding: 12 }} />
            <Button title="Salvar" onPress={handleSave} />
        </View>
    );
}