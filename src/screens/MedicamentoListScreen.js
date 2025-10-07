
    import React, { useEffect, useState } from "react";
    import { listMedicamentos, deleteMedicamento } from "../services/MedicamentoService";
    import Medicamentos from "../components/Medicamento";
import { View, Text, FlatList, RefreshControl, Alert } from "react-native";

    export default function MedicamentosListScreen() {
        const [data, setData] = useState([]);
        const [refreshing, setRefreshing] = useState(false);

        async function load() {
            setRefreshing(true);

            try {
                const list = await listMedicamentos();
                setData(list);
            } catch {
                Alert.alert("Erro", "Erro ao listar Medicamentos");
            } finally {
                setRefreshing(false);
            }
        }

        useEffect(() => {
            load();
        }, []);

        const handleDelete = async (id) => {
            try {
                await deleteMedicamento(id);
                setData((prev) => prev.filter((c) => c.id !== id));
            } catch {
                Alert.alert("Erro", "Erro ao deletar o medicaento de Id: " + id);
            }
        };

        return (
            <View style={{ flex: 1, padding: 16 }}>
                <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 12 }}>Medicamentos</Text>
                <FlatList
                    data={data}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <Medicamentos medicamento={item} onDelete={handleDelete} />}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={load} />}
                    ListEmptyComponent={<Text>Nenhum Medicamento cadastrado.</Text>}
                />
            </View>
        );
    }