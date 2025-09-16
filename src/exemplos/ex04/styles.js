import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "black",
        padding: 8,
        alignItems: "center",
        borderRadius: 20,
    },

    titulo: {
        fontSize: 30,
        color: "deepskyblue",
        fontWeight: 'condensedBold',
        borderWidth: 2,
        borderColor: 'deepskyble',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: "100%",
        height: 80,
        textAlign: 'right',
        textAlignVertical: 'center',
        borderRadius: 40,
    },

    texto: {
        fontSize: RFPercentage(2.5),       
    },
    
    input: {
        borderWidth: RFPercentage(0.5),
        borderColor: "red",
        width: "80%",
        borderRadius: RFPercentage(1.5),
        padding: RFPercentage(1.5),
        fontSize: RFPercentage(2),
        textAlign: "center",
    },

    botao: {
        backgroundColor: "darkslategrey",
        width: "75%",
        borderRadius: RFPercentage(2),
        padding: RFPercentage(1),
        alignItems: "center",
        justifyContent: "center",
        margin: RFPercentage(2),
    },

    txtBotao: {
        fontSize: RFPercentage(2),
        color: "#fafa",
    },
});

export default styles;