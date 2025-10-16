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
       <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
        <View style={styles.content}>
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
    },
    content:{
        width: WIDTH - 40,
        height: HEIGHT / 2,
        backgroundColor: '#FFF',
        borderRadius: 4,
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