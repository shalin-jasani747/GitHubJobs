import React from 'react'
import { View, Text, FlatList, ActivityIndicator, TouchableWithoutFeedback } from 'react-native'
import styles from './Styles/JobsListingStyle'
import {
  Container,
  Content
} from 'native-base'
import {connect} from 'react-redux'
import moment from 'moment'

class JobsListing extends React.Component {

  renderRow(row, id){
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('JobDetails', {job: row})}>
        <View style={styles.listingView}>
          <View style={{alignItems: 'flex-start'}}>
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.title}>{row.title}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.company}>{row.company} - </Text>
              <Text style={styles.type}>{row.type}</Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.location}>{row.location}</Text>
            <Text style={styles.created_at}>{moment(row.created_at).fromNow()}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  render () {
    let { github } = this.props
    return (
      <Container>
        <Content>
          {(github.fetching) ? (
            <View marginT-20>
              <ActivityIndicator />
            </View>
          ) : (
            <FlatList
              ref='list'
              data={github.jobs}
              renderItem={({ item, index }) => this.renderRow(item, index)}
              keyExtractor={(item, index) => index.toString()}
              ListFooterComponent={(github.fetching) ? (<View style={{marginTop: 10}}>
                <ActivityIndicator />
              </View>) : null}
              onEndReachedThreshold={1}
              onEndReached={() => {
                if (!github.fetching) {
                  // this.submit(true)
                }
              }}
            />)
          }
        </Content>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const mapStateToProps = state => ({
  github: state.github
})
export default connect(mapStateToProps, mapDispatchToProps)(JobsListing)
