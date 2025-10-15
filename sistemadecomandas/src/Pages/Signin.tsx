import React, {useState, useContext}from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    Image, 
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

    import { AuthContext, } from '../contexts/authContext';

export default function Signin(){
    //Quero consumir as informações do usuário e o loading 
   const {signIn, loadingAuth} = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('')
    
   async function handleLogin(){
        if(email === ''  || password === ''){
            setMessage('Preencha todos os campos.');

            setTimeout(() => {
              setMessage('');
            }, 1500);
            
            return;
        }
        try {
            await signIn({email, password});
        } catch (err) {
            console.log("Erro no login:", err);
            setMessage('Erro ao fazer login');
        }
    }
    return(
        <View style={styles.container}>
            <Image
            style={styles.logo}
            source={require('../assets/logo3.png')}
            />

            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input}
                placeholder='Digite seu E-mail'
                placeholderTextColor="#F0F0F0"
                value={email}
                onChangeText={setEmail}
                />

                <TextInput 
                style={styles.input}
                placeholder='Digite a sua senha'
                placeholderTextColor="#F0F0F0"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                />

                {message !== '' && <Text style={styles.message}>{message}</Text>}

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    {loadingAuth ? (
                        <ActivityIndicator size={25} color={'#FFF'}/>
                    ) : (
                        <Text style={styles.buttonText}>Acessar</Text>
                    )}
                   
                </TouchableOpacity>
            </View>
       
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1D1D2E"
    },
    text:{
        fontSize: 18,
        color: '#FFFF'
    },
    logo: {
        width: 280,
        height: 100,     
        resizeMode: 'contain', 
        marginBottom: 18,
      },
      
    inputContainer:{
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
       paddingVertical:3        
    },
    input:{
        width: '95%',
        height: 40,
        backgroundColor: '#101026',
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: '#FFFF'

    },
    button:{
        width:'95%',
        height: 40,
        backgroundColor: '#3fffa3',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 17
    },
    buttonText:{
        color: '#FFFFF',
        fontSize: 17,
        fontWeight: 700
    },
    message:{
        color: '#FF3F4B',
        marginBottom: 10,
        fontWeight: 'bold',
    }
})