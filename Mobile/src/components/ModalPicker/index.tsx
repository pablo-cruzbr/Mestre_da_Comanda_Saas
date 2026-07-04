import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Image
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, radius, spacing } from "../../styles/theme";


type ItemBase = {
    id: string;
    name: string;
    description: string; 
}

export interface ProductItem extends ItemBase {
    banner: string;
}


interface ModalPickerProps<T extends ItemBase>{
    options: T[]; 
    handleCloseModal: () => void;
    selectedItem: (item: T) => void; 
}

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')


export function ModalPicker<T extends ItemBase>({options, handleCloseModal, selectedItem}: ModalPickerProps<T>){


    function onPressItem(item: T){
       selectedItem(item)
       handleCloseModal()
    }
    
   
    const option = options.map((item, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={() => onPressItem(item)}>
            
            
           
            {('banner' in item) && ( 
                <Image
                    source={{ uri: (item as ProductItem).banner }}
                    style={styles.bannerImage}
                    resizeMode="cover"
                />
            )}
            
        
            <View style={styles.textContainer}>      
                <Text style={styles.itemName}>
                    {item?.name} 
                </Text>

                <Text style={styles.itemDescription} numberOfLines={3}>
                    {item?.description} 
                </Text>
            </View>
            
        </TouchableOpacity>
    ))

    return(
       <TouchableOpacity style={styles.container} activeOpacity={1} onPress={handleCloseModal}>
        <View style={styles.content}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Selecione uma opção</Text>
                <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                    <Feather name="x" size={22} color={colors.textMuted} />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            {option}
            </ScrollView>
        </View>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.overlay,
    },
    content:{
        width: WIDTH - 40,
        maxHeight: HEIGHT / 2,
        backgroundColor: '#FFF',
        borderRadius: radius.lg,
        overflow: 'hidden',
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        borderBottomWidth: 1,
        borderBottomColor: '#EAEAEA',
    },
    headerTitle:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#101026',
    },
    closeButton:{
        padding: spacing.xs,
    },
    option:{
        borderTopWidth: 0.8,
        borderTopColor: '#8a8a8a',

        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',

    },

    bannerImage: {
        width: 60,
        height: 60,
        borderRadius: 5,
        marginLeft: 17,
        marginRight: 10,
    },


    textContainer: {
        flex: 1,
        paddingHorizontal: 17,
        paddingVertical: 7,
    },


    itemName:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#101026',
        marginBottom: 2,
    },

    itemDescription:{
        fontSize: 14,
        fontWeight: '400',
        color: '#555',
    }
})