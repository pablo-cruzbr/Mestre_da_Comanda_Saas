import React, {useState, useContext}from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from 'react-native';

    import { AuthContext, } from '../contexts/authContext';
    import { colors, radius, spacing } from '../styles/theme';
    import { Logo } from '../components/Logo';

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
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.logo}>
                    <Logo />
                </View>

                <View style={styles.card}>
                    <Text style={styles.welcome}>Bem-vindo de volta</Text>
                    <Text style={styles.subtitle}>Acesse sua conta para continuar</Text>

                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.input}
                        placeholder='Digite seu E-mail'
                        placeholderTextColor={colors.placeholder}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                        />

                        <TextInput
                        style={styles.input}
                        placeholder='Digite a sua senha'
                        placeholderTextColor={colors.placeholder}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                        />

                        {message !== '' && <Text style={styles.message}>{message}</Text>}

                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleLogin}
                            activeOpacity={0.8}
                        >
                            {loadingAuth ? (
                                <ActivityIndicator size={25} color={'#FFF'}/>
                            ) : (
                                <Text style={styles.buttonText}>Acessar</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.background
    },
    scrollContent:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: spacing.xl,
        paddingHorizontal: spacing.md
    },
    logo: {
        marginBottom: spacing.lg,
    },
    card:{
        width: '100%',
        maxWidth: 420,
        backgroundColor: colors.surface,
        borderRadius: radius.lg,
        paddingVertical: spacing.lg,
        paddingHorizontal: spacing.md,
    },
    welcome:{
        fontSize: 20,
        fontWeight: '700',
        color: colors.text,
        textAlign: 'center'
    },
    subtitle:{
        fontSize: 13,
        color: colors.textMuted,
        textAlign: 'center',
        marginTop: spacing.xs,
        marginBottom: spacing.md
    },
    inputContainer:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input:{
        width: '100%',
        height: 48,
        backgroundColor: colors.background,
        marginBottom: spacing.sm,
        borderRadius: radius.sm,
        paddingHorizontal: spacing.md,
        color: colors.text,
        borderWidth: 1,
        borderColor: colors.border
    },
    button:{
        width: '100%',
        height: 48,
        backgroundColor: colors.primary,
        borderRadius: radius.sm,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacing.xs
    },
    buttonText:{
        color: colors.surface,
        fontSize: 16,
        fontWeight: '700'
    },
    message:{
        color: colors.danger,
        marginBottom: spacing.sm,
        fontWeight: 'bold',
    }
})
