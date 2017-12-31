import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import {
  Button,
  Container,
  Icon,
  Content,
  Header,
  Title,
  Text,
  Left,
  Right,
  View,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import MenuItem from './MenuItem';
import logoSrc from '../../assets/logo.png';
import bgImage from '../../assets/background-uit.png';
import { VERSION_NUMBER } from '../../config/config';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    return (
      <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} source={bgImage}>
        <Container
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          }}
        >
          <Content padder>
            <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.LogoView}>
              <Image style={styles.Logo} source={logoSrc} />
            </TouchableOpacity>
            <Grid>
              <Row>
                <Col>
                  <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <MenuItem backgroundColor="#2196F3" icon="text" text="Thông báo" />
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity onPress={() => navigation.navigate('Course')}>
                    <MenuItem
                      backgroundColor="#673AB7"
                      icon="calendar"
                      text="Môn học"
                      badgeNumber={this.props.numberOfCourses}
                      badgeColor="info"
                    />
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row>
                <Col>
                  <TouchableOpacity onPress={() => navigation.navigate('Deadline')}>
                    <MenuItem
                      backgroundColor="#E91E63"
                      icon="list-box"
                      text="Deadline"
                      badgeNumber={this.props.numberOfDeadlines}
                      badgeColor="warning"
                    />
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity onPress={() => navigation.navigate('StudentPoint')}>
                    <MenuItem
                      backgroundColor="#4CAF50"
                      icon="body"
                      text="Điểm rèn luyện"
                      badgeNumber={this.props.finalStudentPoint}
                      badgeColor="primary"
                    />
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row>
                <Col>
                  <TouchableOpacity onPress={() => navigation.navigate('Exam')}>
                    <MenuItem backgroundColor="#607D8B" icon="school" text="Lịch thi" />
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity onPress={() => navigation.navigate('User')}>
                    <MenuItem backgroundColor="#009688" icon="contact" text="Tài khoản" />
                  </TouchableOpacity>
                </Col>
              </Row>
            </Grid>
            <TouchableOpacity
              onPress={() => navigation.navigate('About')}
              style={styles.versionView}
            >
              <Text style={{ color: 'white' }}>v{VERSION_NUMBER}</Text>
            </TouchableOpacity>
          </Content>
        </Container>
      </Image>
    );
  }
}
styles = StyleSheet.create({
  LogoView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
  },
  Logo: {
    height: 160,
    width: 160,
  },
  container: {
    flex: 1,
    margin: 15,
  },
  versionView: {
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
