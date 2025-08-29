import { StyleSheet } from "react-native";


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "lightgreen",
        padding: 8,
        alignItems: "center",
        borderRadius: 20,
    },

    titulo: {
        fontSize: 30,
        color: "#EB603B",
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
        fontSize: 20,
        color: 'purple',        
    }
});

export default styles;