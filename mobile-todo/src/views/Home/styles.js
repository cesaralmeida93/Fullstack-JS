import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  filter: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    height: 70,
    alignItems: 'center'
  },
  filterTextActive: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#EE6B26'
  },
  filterTextInactive: {
    color: '#20295F',
    fontWeight: 'bold',
    fontSize: 18,
    opacity: 0.5
  }
})

export default styles
