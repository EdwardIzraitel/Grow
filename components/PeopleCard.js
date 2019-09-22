import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
export default class PeopleCard extends React.Component {
  render() {
    return (
      <PeopleCards>
        <Image
          source={require("../assets/images/Jordan.png")}
          resizeMode="contain"
        />
        <ImageText>
          {this.props.name},{this.props.age}
        </ImageText>
        <InfoText>Ambition: {this.props.ambition}</InfoText>
      </PeopleCards>
    );
  }
}

const PeopleCards = styled.View`
  width: 295px;
  height: 300px;
`;
const Image = styled.Image`
  border-radius: 10px;
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
