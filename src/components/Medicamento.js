import React from "react"
import { Button, View, Text } from "react-native"

export default function Medicamentos({ medicamento, onDelete }) {
    return (
        <View style={{
            borderWidth: 1, borderRadius: 8, padding: 12, marginBottom: 8,
            flexDirection: "row", justifyContent: "space-between", alignItems: "center"
        }}>
            <View style={{ flex: 1, paddingRight: 8 }}>
                <Text style={{ fontWeight: "600" }}>{medicamento.nome}</Text>
                <Text>{medicamento.dosagem}</Text>
                <Text>{medicamento.horario}</Text>
                <Text>{medicamento.observacoes}</Text>
            </View>
            <Button title="Excluir" onPress={() => onDelete(medicamento.id)} />
        </View>
    )
}