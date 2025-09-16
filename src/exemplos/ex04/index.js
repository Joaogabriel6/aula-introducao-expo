import { useState } from "react";
import { View, Text, TextInput } from "react-native";

import styles from './styles';

export default function Exemplo04() {

    const [texto, setTexto] = useState("");
    const [txt2, setTxt2] = useState("");

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo04 </Text>;
          
            <Text style={styles.txt}>{txt2}</Text>;
            <TextInput
                value={txt2}
                onChangeText={setTxt2}
                placeholder="digite sua mensagem"
                keyboardType="ascii-capable"
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={() => {}}
            >
                <Text style={styles.txtBotao}>Exibir texto</Text>
            </TouchableOpacity>

        </View>
    );
}