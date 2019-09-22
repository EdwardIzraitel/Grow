import React from "react";
import { ScrollView, TouchableOpacity, StatusBar } from "react-native";

import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";

import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";

export default class CardsScreen extends React.Component {
  state = {
    fontLoaded: false
  };
  static navigationOptions = {
    header: null,
    tabBarVisible: false
  };
  async componentDidMount() {
    StatusBar.setHidden(true);
    await Font.loadAsync({
      "Abril-Fatface": require("../assets/fonts/AbrilFatface-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const { navigation } = this.props;
    const person = navigation.getParam("Cards");
    return (
      <Container>
        <Cover>
          <ViewImage>
            <Image source={require("../assets/images/Jordan.png")} />
          </ViewImage>
          <TouchableOpacity
            style={{ position: "absolute", right: 20, top: 40 }}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <Ionicons
              name="ios-close-circle-outline"
              size={45}
              color="#38d39f"
            />
          </TouchableOpacity>
        </Cover>
        {this.state.fontLoaded ? (
          <TitleCard>
            <TitleText style={{ fontFamily: "Abril-Fatface" }}>
              {person.name}
            </TitleText>
            <TinyText style={{ fontFamily: "Avenir" }}>
              2k giving this month
            </TinyText>
          </TitleCard>
        ) : null}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 50 }}
        >
          <Desc style={{ fontFamily: "Avenir" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem
            elit, efficitur luctus nulla ac, dignissim placerat justo. Proin id
            tortor at eros laoreet feugiat. Donec suscipit pharetra nibh, at
            ultrices nisi ullamcorper non. Phasellus pulvinar tincidunt ex,
            vitae scelerisque dolor tincidunt sit amet. Duis sollicitudin
            gravida massa a faucibus. Maecenas odio risus, ornare in ultricies
            id, semper eu elit.
          </Desc>
        </ScrollView>
        <TouchableOpacity style={{ marginBottom: 30 }}>
          <SelectBtn>
            {this.state.fontLoaded ? (
              <BtnText style={{ fontFamily: "Abril-Fatface" }}>
                Give to {person.name}
              </BtnText>
            ) : null}
          </SelectBtn>
        </TouchableOpacity>
      </Container>
    );
  }
}
const ViewImage = styled.View`
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  overflow: hidden;
`;
const BtnText = styled.Text`
  color: white;
  font-size: 20px;
`;

const Cover = styled.View`
  width: 375px;
  height: 395px;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
  /* border-radius: 50px; */
  /* border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  */
  /* border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  overflow: hidden; */
`;

const TitleCard = styled.View`
  width: 275px;
  height: 90px;
  background: white;
  box-shadow: 0 0 15px #c2c2c2;
  border-radius: 15px;
  position: absolute;
  left: 50;
  top: 350;
  z-index: 100;
  align-items: center;
`;

const TitleText = styled.Text`
  font-size: 35px;
  /* margin-left: 30px; */
  margin-top: 10px;
`;

const TinyText = styled.Text`
  font-size: 15px;
  /* margin-left: 30px; */
`;

const Desc = styled.Text`
  font-size: 15px;
  width: 275px;
  height: 245px;
  align-items: center;
  margin-top: 23px;
`;

const SelectBtn = styled.View`
  background: #38d39f;
  width: 230px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
`;
