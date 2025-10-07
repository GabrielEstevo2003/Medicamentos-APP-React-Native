import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { TextInput, View,Button,  Text } from "react-native";

export default function LoginScreen() {
    const { signIn } = useContext(AuthContext);
    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("cityslicka");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        try {
            setLoading(true);
            await signIn(email.trim(), password);
        } catch {
            Alert.alert("Falha no login", "Use as credenciais padrão do ReqRes.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={{ flex: 1, padding: 16, gap: 12, justifyContent: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "600", marginBottom: 8 }}>Login</Text>
            <TextInput placeholder="email" value={email} onChangeText={setEmail}
                autoCapitalize="none" keyboardType="email-address"
                style={{ borderWidth: 1, borderRadius: 8, padding: 12 }} />
            <TextInput placeholder="senha" value={password} onChangeText={setPassword}
                secureTextEntry style={{ borderWidth: 1, borderRadius: 8, padding: 12 }} />
            <Button title={loading ? "Entrando..." : "Entrar"} onPress={handleLogin} disabled={loading} />
        </View>
    );

}