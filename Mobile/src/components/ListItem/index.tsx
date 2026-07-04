import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity} from "react-native";
import {Feather} from '@expo/vector-icons'
import { colors, radius, spacing } from "../../styles/theme";
    interface ItemProps {
       data:{
        id: string;
        name: string;
        product_id: string;
        amount: string | number
       }
    deleteItem: (item_id: string) => void;
    }

export function ListItem({data, deleteItem}: ItemProps){
    function handleDeleteItem(){
        deleteItem(data.id)
    }

    return(
        <View style={styles.container}>
            <View style={styles.qtdBadge}>
                <Text style={styles.qtdText}>{data.amount}</Text>
            </View>

            <Text style={styles.item} numberOfLines={1}>{data.name}</Text>

            <TouchableOpacity onPress={handleDeleteItem} style={styles.deleteButton}>
                <Feather name="trash-2" color={colors.danger} size={20}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#101026',
        alignItems: 'center',
        justifyContent:'space-between',
        flexDirection:'row',
        marginBottom: spacing.sm,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.sm,
        borderRadius: radius.sm,
        borderWidth: 1,
        borderColor: colors.border
    },
    qtdBadge:{
        backgroundColor: colors.background,
        borderRadius: radius.sm,
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        marginRight: spacing.sm
    },
    qtdText:{
        color: colors.primary,
        fontSize: 14,
        fontWeight: '700'
    },
    item:{
        flex: 1,
        color: colors.text,
        fontSize: 16,
        fontWeight:'500'
    },
    deleteButton:{
        padding: spacing.xs,
        marginLeft: spacing.sm
    }
})
