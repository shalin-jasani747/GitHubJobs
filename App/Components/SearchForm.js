import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/SearchFormStyle'
import {
  Body,
  Button,
  CheckBox,
   Container,
  Content,
  Form,
  Header,
  Input,
  Item,
  Label,
  Left,
  ListItem,
  Right
} from 'native-base'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import {connect} from 'react-redux'
import GithubActions from '../Redux/GithubRedux'
import { objectToQueryString } from '../Services/helpers'

class SearchForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      description: '',
      location: '',
      full_time: false,
      page: 1
    }
  }

  toggleCheckbox () {
    this.setState(previousState => {
      return {
        full_time: !previousState.full_time
      }
    })
  }

  search () {
    let { description, location, full_time, page } = this.state

    let queryObject = {
      'page': page
    }

    if (description) {
      queryObject = {...queryObject, description}
    }

    if (location) {
      queryObject = {...queryObject, location}
    }

    if (full_time) {
      queryObject = {...queryObject, full_time}
    }

    let queryString = objectToQueryString(queryObject)

    this.props.searchJobs(queryString)
  }

  render () {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Text>Github Jobs</Text>
          </Body>
          <Right />
        </Header>
        <Content scrollEnabled={false}>
          <Form style={{padding: 10}}>
            <Label style={{paddingBottom: 5}}>Job Description</Label>
            <Item regular style={{paddingLeft: 5}}>
              <MaterialIcon active name='description' size={20} />
              <Input onChangeText={(text) => this.setState({ description: text })} placeholder='Filter by title, benefits, companies, expertise' />
            </Item>
            <Label style={{paddingBottom: 5, paddingTop: 5}}>Location</Label>
            <Item regular style={{paddingLeft: 5}}>
              <EntypoIcon active name='globe' size={20} />
              <Input onChangeText={(text) => this.setState({ location: text })} placeholder='Filter by city, state, zip code or country' />
            </Item>
          </Form>
          <ListItem style={{paddingLeft: 10, paddingRight: 10, paddingTop: 10, marginLeft: 0, borderBottomWidth: 0}}>
            <CheckBox checked={this.state.full_time} onPress={() => this.toggleCheckbox()} />
            <Body style={{paddingLeft: 10}}>
              <Text>Full Time only</Text>
            </Body>
          </ListItem>
          <Button block info style={{marginLeft: 10, marginRight: 10}} onPress={() => this.search()}>
            <Text style={{color: '#fff'}}>Search</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchJobs: (queryString) => dispatch(GithubActions.searchJobRequest(queryString))
  }
}

const mapStateToProps = state => ({
  github: state.github
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
