import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 8,
        alignItems: "center",
        borderRadius: 20,
    },

    titulo: {
        fontSize: 33,
        color: "deepskyblue",
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: 'deepskyble',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: "100%",
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 20,
    },
    txt: {
        fontSize: RFPercentage(2.5),
    },
    botao: {
        backgroundColor: "#671",
        width: "60%",
        borderRadius: RFPercentage(1),
        padding: RFPercentage(1),
        alignItems: "center",
    },
    txtbotao: {
        color: "#269",
        fontSize: RFPercentage(2),
    },
});

export default styles;