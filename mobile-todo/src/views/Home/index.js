import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

// COMPONENTES
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Home() {
  const [filter, setFilter] = useState('today')

  return (
    <View style={styles.container}>
      <Header showNotification={true} showBack={false} />

      <View style={styles.filter}>
        <TouchableOpacity onPress={() => setFilter('all')}>
          <Text
            style={
              filter == 'all'
                ? styles.filterTextActive
                : styles.filterTextInactive
            }
          >
            Todos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter('today')}>
          <Text
            style={
              filter == 'today'
                ? styles.filterTextActive
                : styles.filterTextInactive
            }
          >
            Hoje
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter('week')}>
          <Text
            style={
              filter == 'week'
                ? styles.filterTextActive
                : styles.filterTextInactive
            }
          >
            Semana
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter('month')}>
          <Text
            style={
              filter == 'month'
                ? styles.filterTextActive
                : styles.filterTextInactive
            }
          >
            Mês
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter('year')}>
          <Text
            style={
              filter == 'year'
                ? styles.filterTextActive
                : styles.filterTextInactive
            }
          >
            Ano
          </Text>
        </TouchableOpacity>
      </View>

      <Footer icon={'add'} />
    </View>
  )
}
