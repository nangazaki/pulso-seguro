import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logotipo() {
    return <Image source={'../assets/logotipo-type.png'} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        width: 110,
        height: 110,
        marginBottom: 8,
    },
})