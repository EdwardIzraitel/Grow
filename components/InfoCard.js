import React from "react";
import styled from "styled-components";
import { TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
class InfoCard extends React.Component {
  state = { top: new Animated.Value(900), fontLoaded: false };

  async componentDidMount() {
    Animated.spring(this.state.top, {
      toValue: 0
    }).start();

    await Font.loadAsync({
      "Abril-Fatface": require("../assets/fonts/AbrilFatface-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  toggleInfo = () => {
    Animated.spring(this.state.top, {
      toValue: 900
    }).start();
  };
  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <TopContainer>
          <Image
            source={require("../assets/images/Hank.png")}
            style={{ height: 90, width: 90, borderRadius: 15 }}
          />
          <TextContainer>
            <Text style={{ marginBottom: 10, fontSize: 18 }}>Hank</Text>
            <Text style={{ fontSize: 15, color: "#38d39f" }}>Graduated</Text>
          </TextContainer>
          <Ionicons
            name="ios-close-circle-outline"
            size={45}
            color="#38d39f"
            style={{ position: "absolute", right: 20, top: 20 }}
            // style={{ alignItems: "center" }}
          />
        </TopContainer>
        {this.state.fontLoaded ? (
          <InfoRow>
            <InfoCol>
              <Col>
                <Text style={{ fontSize: 18, fontFamily: "Avenir" }}>Age</Text>
                <Text style={{ fontSize: 35, fontFamily: "Abril-Fatface" }}>
                  63
                </Text>
              </Col>
              <Col style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 18, fontFamily: "Avenir" }}>
                  Funds Required
                </Text>
                <Text style={{ fontSize: 35, fontFamily: "Abril-Fatface" }}>
                  $10,000
                </Text>
              </Col>
            </InfoCol>
            <InfoCol style={{ marginRight: 20 }}>
              <Col>
                <Text style={{ fontSize: 18, fontFamily: "Avenir" }}>
                  You Invested
                </Text>
                <Text style={{ fontSize: 35, fontFamily: "Abril-Fatface" }}>
                  $500
                </Text>
              </Col>
              <Col style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 18, fontFamily: "Avenir" }}>
                  Funds Aquired
                </Text>
                <Text style={{ fontSize: 35, fontFamily: "Abril-Fatface" }}>
                  $10,000
                </Text>
              </Col>
            </InfoCol>
          </InfoRow>
        ) : null}
        <TextCont>
          <Text style={{ color: "#38d39f" }}>Donated by 15 people</Text>
        </TextCont>
      </AnimatedContainer>
    );
  }
}

export default InfoCard;
const Col = styled.View``;
const TextCont = styled.View`
  align-items: center;
  margin-top: 10px;
  font-size: 18px;
`;
const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const InfoCol = styled.View`
  margin-left: 20px;
  margin-top: 30px;
  /* flex-direction: row; */
  /* justify-content: space-between; */
`;
const TextContainer = styled.View`
  margin-left: 20px;
  justify-content: center;
`;
const TopContainer = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  flex-direction: row;
`;
const Text = styled.Text`
  font-size: 18px;
`;
const Container = styled.View`
  background: white;
  height: 370px;
  width: 375px;
  /* right: 20; */
  border-radius: 13px;
`;
const Image = styled.Image``;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
