import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BRAND_RED = "#FF4B4B";

export function Logo() {
    return (
        <View style={styles.container}>
            <Text style={styles.line}>MESTRE DA</Text>
            <Text style={[styles.line, styles.line2]}>COMANDA</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    line: {
        fontSize: 30,
        fontWeight: "900",
        color: BRAND_RED,
        letterSpacing: 1,
        textShadowColor: "rgba(255, 255, 255, 0.5)",
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 4,
    },
    line2: {
        marginTop: -4,
    },
});
