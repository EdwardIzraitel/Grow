import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { AbrilText } from "../components/StyledText";
import * as Font from "expo-font";

export default class PeopleCard extends React.Component {
  state = {
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
      <PeopleCards>
        <Image source={this.props.image} />

        {this.state.fontLoaded ? (
          <ImageText style={{ fontFamily: "Abril-Fatface" }}>
            {this.props.name}, {this.props.age}
          </ImageText>
        ) : null}
        <InfoText style={{ fontFamily: "Avenir" }}>
          Ambition: {this.props.ambition}
        </InfoText>
      </PeopleCards>
    );
  }
}

const PeopleCards = styled.View`
  width: 295px;
  height: 300px;
`;
const Image = styled.Image`
  border-radius: 15px;
  height: 100%;
  width: 100%;
`;
const ImageText = styled.Text`
  position: absolute;
  font-size: 35px;
  left: 20px;
  top: 211px;
  color: white;
`;
const InfoText = styled.Text`
  font-size: 20px;
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: white;
`;
const images = [
  "../assets/images/Jordan.png",
  "../assets/images/Pat.png",
  "../assets/images/Joan.png",
  "../assets/images/Harvey.png",
  "../assets/images/Jordan.png",
  "../assets/images/Jordan.png",
  "../assets/images/Jordan.png"
];
