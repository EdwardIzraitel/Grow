import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated
} from "react-native";
import styled from "styled-components";
import { MonoText } from "../components/StyledText";
import History from "../components/History";
import Slider from "react-native-slider";
import * as Font from "expo-font";
export default class ProfileScreen extends React.Component {
  state = {
    slideValue: 100,
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Abril-Fatface": require("../assets/fonts/AbrilFatface-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Container>
        <TitleBar>
          <ProfileImg source={require("../assets/images/Andy.png")} />
          <TextContainer>
            {this.state.fontLoaded ? (
              <ColoredText
                style={{ fontFamily: "Abril-Fatface", color: "black" }}
              >
                Andy
              </ColoredText>
            ) : null}
            <Slider
              style={{ width: 154 }}
              value={this.state.slideValue}
              step={20}
              maximumValue={500}
              minimumValue={20}
              thumbTintColor="white"
              minimumTrackTintColor="#38d39f"
              onValueChange={slideValue => this.setState({ slideValue })}
              trackStyle={{ height: 25, borderRadius: 15 }}
              thumbStyle={{ height: 30, width: 30, borderRadius: 15 }}
            />
          </TextContainer>
        </TitleBar>
        <Cards>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            disableIntervalMomentum={false}
            directionalLockEnabled={true}
            style={{
              top: 25
            }}
          >
            <ImageContainer>
              <Card style={{ left: 15, alignItems: "center" }}>
                <Image
                  source={require("../assets/images/pablo.png")}
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 15
                  }}
                />
                <Box />
                <MonoText
                  style={{
                    fontSize: 20
                  }}
                >
                  **** **** **** 2338
                </MonoText>
              </Card>
              {this.state.fontLoaded ? (
                <Card>
                  <Image source={require("../assets/images/styledCard.png")} />
                  <Texts style={{ position: "absolute", top: 51, left: 20 }}>
                    <LargeText style={{ fontFamily: "Abril-Fatface" }}>
                      $600
                    </LargeText>

                    <SmallText
                      style={{ color: "#38d39f", fontFamily: "Avenir" }}
                    >
                      Total Invested
                    </SmallText>
                  </Texts>
                  <Texts style={{ top: 51, right: 20, position: "absolute" }}>
                    <LargeText
                      style={{
                        textAlign: "center",
                        fontFamily: "Abril-Fatface"
                      }}
                    >
                      5
                    </LargeText>
                    <SmallText style={{ color: "white", fontFamily: "Avenir" }}>
                      People Helped
                    </SmallText>
                  </Texts>
                </Card>
              ) : null}
            </ImageContainer>
          </ScrollView>
        </Cards>
        <Funding>
          {this.state.fontLoaded ? (
            <Text style={{ fontFamily: "Abril-Fatface" }}>Funding History</Text>
          ) : null}
        </Funding>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <History />
        </ScrollView>
      </Container>
    );
  }
}

ProfileScreen.navigationOptions = {
  header: null
};
const ImageContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 20px;
`;
const Col = styled.View`
  flex-direction: column;
`;
const TextCol = styled.View`
  margin-left: 20px;
`;
const PersonHistory = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;
const Cards = styled.View`
  height: 240px;
`;
const Text = styled.Text`
  font-size: 25px;
`;
const Funding = styled.View`
  margin-left: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Texts = styled.View``;
const LargeText = styled.Text`
  font-size: 35px;
`;
const SmallText = styled.Text`
  font-size: 18px;
`;
const Box = styled.View`
  height: 35;
  width: 56px;
  border-radius: 2px;
  background: #f7d075;
  position: absolute;
  top: 20px;
  right: 20px;
`;
const Card = styled.View`
  height: 174px;
  width: 295px;
  box-shadow: 0 0 5px #c2c2c2;
  margin-right: 40px;
  top: 15px;
`;
const Image = styled.Image``;
const Container = styled.View`
  flex: 1;
  background: #fff;
`;
const TitleBar = styled.View`
  flex-direction: row;
  margin-top: 30px;
  align-items: baseline;
`;
const TextContainer = styled.View`
  margin-left: 60px;
  justify-content: center;
  /* align-items: center; */
`;

const ColoredText = styled.Text`
  font-size: 35px;
  color: #38d39f;
`;
const ProfileImg = styled.Image`
  height: 102px;
  width: 102px;
  border-radius: 51px;
  left: 40px;
  top: 40px;
`;
