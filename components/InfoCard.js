import React from "react";
import styled from "styled-components";
import { TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
class InfoCard extends React.Component {
  state = { top: new Animated.Value(900) };

  async componentDidMount() {
    Animated.spring(this.state.top, {
      toValue: 220
    }).start();
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
            source={require("../assets/images/Jordan.png")}
            style={{ height: 90, width: 90, borderRadius: 15 }}
          />
          <TextContainer>
            <Text style={{ marginBottom: 10 }}>{this.props.name}</Text>
            <Text style={{ fontSize: 15 }}>saldnasd</Text>
          </TextContainer>
          <Ionicons
            name="ios-close-circle-outline"
            size={45}
            color="#38d39f"
            style={{ position: "absolute", right: 20, top: 20 }}
            // style={{ alignItems: "center" }}
          />
        </TopContainer>
        <InfoRow>
          <InfoCol>
            <Col>
              <Text style={{ fontSize: 18 }}>Age</Text>
              <Text style={{ fontSize: 35 }}>{this.props.age}</Text>
            </Col>
            <Col style={{ marginTop: 30 }}>
              <Text style={{ fontSize: 18 }}>Funds Required</Text>
              <Text style={{ fontSize: 35 }}>{this.props.fReq}</Text>
            </Col>
          </InfoCol>
          <InfoCol style={{ marginRight: 20 }}>
            <Col>
              <Text style={{ fontSize: 18 }}>You Invested</Text>
              <Text style={{ fontSize: 35 }}>{this.props.invested}}</Text>
            </Col>
            <Col style={{ marginTop: 30 }}>
              <Text style={{ fontSize: 18 }}>Funds Aquired</Text>
              <Text style={{ fontSize: 35 }}>{this.props.fAqr}</Text>
            </Col>
          </InfoCol>
        </InfoRow>
        <TextCont>
          <Text>Donated by 15 people</Text>
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
  right: 20;
  border-radius: 13px;
`;
const Image = styled.Image``;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
