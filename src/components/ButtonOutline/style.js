import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
    btnOutline:{
        borderWidth:2,
        borderColor: colors.colorCyan,
        paddingVertical: 10,
        width: 350,
        borderRadius: 7
    },
    txtBtnOutline:{
        textAlign: "center",
        fontSize: 18,
        color: colors.colorCyan
    }
})