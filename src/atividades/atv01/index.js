import { View, Text } from "react-native";

import styles from './styles';

function Exemplo01() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> A T I V I D A D E 1 ! </Text>;
            <Text style={styles.texto}> bom dia </Text>
        </View>
    );
}

export default Exemplo01;