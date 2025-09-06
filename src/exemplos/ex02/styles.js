import { StyleSheet } from "react-native";
import { RFPencentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 8,
        felx: 1,
        alignItems: "center",
        borderRadius: 20,
    },
    titulo: {
        fontSize: RFPencentage(3),
        color: "deepskyblue",
        fontWeight: "bold",
        borderWidth: 2,
        borderColor: "deepskyblue",
        marginTop: 10,
        marginBotton: 10,
        padding: 8,
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 20,
    },
    imagem: {
        // height: RFPencentage(10),
        // width: RFpencentage(28),
        width: "80%",
        resizeMode: "contain",
    },
});

export default styles;