import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Input, Text, Button } from "@rneui/base";
import { validarEmail } from '../src/helpers/validarEmail';
import { validarSenha } from '../src/helpers/validarSenha';

export default function Entrar({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const entrar = () => {
    const emailError = validarEmail(email.value)
    const passwordError = validarSenha(password.value)

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'Index' }],
    })
  }

  return (
    <View style={styles.container}>
      <Image source={require('../src/assets/logotipo-type.png')} style={styles.image} />
      <Text h1>Entrar</Text>
      <Input
        label="E-mail"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <Input
        label="Senha"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button
        title="Entrar"
        buttonStyle={{
          backgroundColor: '#51B58D',
          borderRadius: 4,
        }}
        containerStyle={{
          width: '90%',
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={entrar}
      />

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    maxWidth: 360,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 64,
  },
})