import React from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from "react-native";
import { CategoryProps } from "../../Pages/Order"; 

interface ModalPickerProps{
    options: CategoryProps[];
    handleCloseModal: () => void;
    selectedItem: (item: CategoryProps) => void;
}

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')

export function ModalPicker({options, handleCloseModal, selectedItem}: ModalPickerProps){


    //Função para selecionar a categoria e salvar na variável de estado e depois fechar o modal
    function onPressItem(item: CategoryProps){
        //console.log(item)
       selectedItem(item)
       handleCloseModal()
    }

    //Mapear os Itens da categoria
    const option = options.map((item, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={() => onPressItem(item)}>
            <Text style={styles.item}>
                {item?.name}
            </Text>
        </TouchableOpacity>
    ))

    return(
       <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
        <View style={styles.content}>
        <ScrollView showsHorizontalScrollIndicator={false}>
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
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
    },
    item:{
        alignItems: 'flex-start',
        fontSize: 20,
        margin: 17,
        fontWeight: 'bold',
        color: '#101026',
       
    }

})