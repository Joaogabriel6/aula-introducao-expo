import { use, useState } from "react";
import { View, Text, Button, Touchable, TouchableOpacity } from "react-native";

import styles from './styles';

function Exemplo03() {

    const [numero, setNumero] = useState(10);

    function handleIncrementar() {
        setNumero(numero + 1);
        // console.log(numero);      
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo03 </Text>;
            <Button
            onPress={() => {alert("Alguem tocou no botão")}}
            title="Alerta"
            color={"#ff5"}
            accessibilityLabel="Botão de Alerta"
            />

            <Text style={styles.txt}>{numero}</Text>

            <TouchableOpacity
                style={styles.botao}
                onPress={() => handleIncrementar()}
            >
                <Text style={styles.txtbotao}>Incrementar número</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Exemplo03;