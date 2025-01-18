import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FONTS } from '../../utils/Constants'
import { RFValue } from 'react-native-responsive-fontsize'

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/muneeb244/')}>
        <Text style={styles.text}>Made with 💖</Text>
        <Text style={[styles.text, styles.text2]}>by - Muneeb Ahmad</Text>

      </TouchableOpacity>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },
    text: {
        fontFamily: FONTS.twinkle,
        fontSize: RFValue(12),
        color: '#fff',
        textAlign: 'center',
        textShadowColor: 'rgba(0,0,0,0.75)',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
    },
    text2: {
        fontSize: RFValue(16),
        textShadowRadius: 3,
    }
})