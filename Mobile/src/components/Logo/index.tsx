import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, spacing } from "../../styles/theme";

type LogoProps = {
    size?: "md" | "lg";
};

export function Logo({ size = "lg" }: LogoProps) {
    const fontSize = size === "lg" ? 30 : 20;
    const iconSize = size === "lg" ? 26 : 18;

    return (
        <View style={styles.container}>
            <View style={[styles.iconBadge, size === "lg" && styles.iconBadgeLg]}>
                <Feather name="file-text" size={iconSize} color={colors.primary} />
            </View>
            <Text style={[styles.line, { fontSize }]}>
                Mestre das <Text style={styles.highlight}>Comandas</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconBadge: {
        marginRight: spacing.xs,
    },
    iconBadgeLg: {
        marginRight: spacing.sm,
    },
    line: {
        fontWeight: "800",
        color: colors.text,
        letterSpacing: 0.2,
    },
    highlight: {
        color: colors.primary,
    },
});
