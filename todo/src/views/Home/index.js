import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

// COMPONENTES
import Header from '../../components/Header'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}
