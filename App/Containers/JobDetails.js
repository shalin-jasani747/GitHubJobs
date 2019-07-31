import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, ActivityIndicator, FlatList } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
// external libs
import HTML from 'react-native-render-html';

// Styles
import styles from './Styles/JobDetailsStyle'
import { Container, Content, Header, Left, Button, Icon, Right, Title, Body, Card, CardItem, Image, Thumbnail } from 'native-base'

class JobDetails extends React.Component {

  render () {
    let job = this.props.navigation.getParam('job', {})
    let uri = {
      uri: job.company_logo
    }
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Job Details</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem bordered>
              <Left>
                <Thumbnail source={uri} />
                <Body>
                  <Text>{job.company}</Text>
                  <Text note>{job.location}</Text>
                  <HTML html={job.how_to_apply} />
                </Body>
              </Left>
            </CardItem>
            <CardItem header bordered>
              <Text>Job Title</Text>
            </CardItem>
            <CardItem bordered>
              <Text>{job.title}</Text>
            </CardItem>
            <CardItem header bordered>
              <Text>Job Description</Text>
            </CardItem>
            <CardItem>
              <HTML html={job.description} />
            </CardItem>
          </Card>

        </Content>
      </Container>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    job: state.github.job
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails)
