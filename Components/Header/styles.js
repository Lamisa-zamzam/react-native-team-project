import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 50,
        zIndex: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
    },

    text: {
        fontWeight: "700",
        color: "red",
    },
});

export default styles;
