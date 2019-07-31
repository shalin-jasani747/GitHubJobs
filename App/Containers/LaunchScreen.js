import React, { Component } from 'react'
import { View } from 'react-native'
import SearchForm from '../Components/SearchForm'
import JobsListing from '../Components/JobsListing'
// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <SearchForm />
        <JobsListing navigation={this.props.navigation} />
      </View>
    )
  }
}
