import React from "react";
import styled from "styled-components";
import {
  Button,
  TouchableOpacity,
  View,
  Switch,
  Image,
  Slider,
  Text
} from "react-native";
export default class SettingsScreen extends React.Component {
  state = {
    value: false,
    fontLoaded: false,
    slideValue: 0
  };

  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({ value: value });
    //state changes according to switch
    //which will result in re-render the text
  };

  render() {
    return (
      <Container>
        <TitleBar>
          <Title style={{ color: "#38d39f" }}>Settings</Title>
        </TitleBar>
        <NameContainer>
          <ViewText style={{ marginTop: 0 }}>
            <Name>Name</Name>
            <TextName>Jacob Tremblay</TextName>
          </ViewText>
          <ViewText>
            <Name>Email</Name>
            <TextName>Jacob.T22@hotmail.com</TextName>
          </ViewText>
          <ViewText>
            <Name>Password</Name>
            <TextName>***************</TextName>
          </ViewText>
          <ViewText>
            <Align>
              <Name>Limit Monthly Transactions</Name>
              <Text style={{ marginRight: 40, color: "#38d39f", fontSize: 18 }}>
                {this.state.slideValue}
              </Text>
            </Align>
          </ViewText>
        </NameContainer>
        <AlertsContainer>
          <TextName style={{ paddingTop: 0 }}>Email Notifications</TextName>
          <View style={{ flex: 1, flexDirection: "row" }}></View>

          <Switch
            style={{ marginRight: 40 }}
            onValueChange={this.toggleSwitch}
            value={this.state.value}
            // thumbColor="#ffd36f"
            trackColor={{ true: "#38d39f" }}
          />
        </AlertsContainer>
        <BtnContainer>
          <TouchableOpacity
            style={{
              width: 280,
              height: 45,
              borderRadius: 22,
              backgroundColor: "#38d39f",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30
            }}
            onPress={() => this.props.navigation.push("LogIn")}
          >
            <BtnText>Log Out</BtnText>
          </TouchableOpacity>
        </BtnContainer>
      </Container>
    );
  }
}
SettingsScreen.navigationOptions = {
  header: null
};

const Container = styled.View`
  margin-left: 40px;
`;
const TitleBar = styled.View`
  margin-top: 100px;
`;
const Title = styled.Text`
  font-size: 40px;
`;
const NameContainer = styled.View`
  margin-top: 40px;
`;
const TextName = styled.Text`
  font-size: 25px;
  color: #38d39f;
  padding-top: 10px;
`;
const Name = styled.Text`
  font-weight: 100;
`;

const AlertsContainer = styled.View`
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
`;
const BtnContainer = styled.View``;
const BtnText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
const ViewText = styled.View`
  margin-top: 30px;
`;
const Align = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
