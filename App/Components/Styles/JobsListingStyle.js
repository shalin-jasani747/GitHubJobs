// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  },
  listingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  title: {
    width: 250,
    color: '#1d80be',
    fontSize: 15
  },
  company: {
    color: '#999',
    fontSize: 12
  },
  type: {
    color: '#1d9a00',
    fontSize: 12,
    fontWeight: '700'
  },
  location: {
    width: 80,
    color: '#666'
  },
  created_at: {
    color: '#999'
  }
})
