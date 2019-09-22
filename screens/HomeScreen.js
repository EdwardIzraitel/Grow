import React from "react";
import { ScrollView } from "react-native";

import styled from "styled-components";

import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <TitleBar>
          <TextContainer>
            <TitleText>
              Hi,
              <ColoredText> Andy</ColoredText>
            </TitleText>
          </TextContainer>
          <Cover>
            <ProfileImg source={require("../assets/images/Andy.png")} />
          </Cover>
        </TitleBar>
        <FactContainer>
          <Fact>
            <LargeText>$6000</LargeText>
            <SmallText style={{ color: "#38d39f" }}>Total Invested</SmallText>
          </Fact>
          <Fact>
            <LargeText>156</LargeText>
            <SmallText style={{ color: "#38d39f" }}>People Helped</SmallText>
          </Fact>
        </FactContainer>
        <ViewLine></ViewLine>
        <People>
          <SuggestedBar>
            <LargeText>Suggested</LargeText>
            <Text style={{ color: "#38d39f" }}>See All</Text>
          </SuggestedBar>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ left: 40, marginTop: 30 }}
          >
            <PeopleCard>
              <TouchableOpacity
                onPress={() => this.props.navigation.push("Cards")}
              >
                <Image source={require("../assets/images/Jordan.png")} />
              </TouchableOpacity>
              <ImageText>Jordan, 32.</ImageText>
              <InfoText>Ambition: To Teach</InfoText>
            </PeopleCard>
          </ScrollView>
        </People>
      </Container>
    );
  }
}
const InfoText = styled.Text`
  font-size: 20px;
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: white;
`;
const ImageText = styled.Text`
  position: absolute;
  font-size: 35px;
  left: 20px;
  top: 211px;
  color: white;
`;
const Image = styled.Image`
  border-radius: 10px;
  height: 100%;
  width: 100%;
`;
const PeopleCard = styled.View`
  width: 295px;
  height: 300px;
`;
const SuggestedBar = styled.View`
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
`;
const People = styled.View``;
const Container = styled.View`
  flex: 1;
  background: #fff;
`;

const Text = styled.Text`
  font-size: 15px;
`;

const TitleBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
`;

const TextContainer = styled.View`
  left: 40;
`;

const TitleText = styled.Text`
  font-size: 35px;
  color: black;
`;

const ColoredText = styled.Text`
  font-size: 35px;
  color: #38d39f;
`;
const Cover = styled.View`
  width: 56px;
  height: 56px;
  box-shadow: 0px 0px 15px #c2c2c2;
  right: 40px;
`;

const ProfileImg = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 28px;
`;

const FactContainer = styled.View`
  flex-direction: row;
  margin-top: 30px;
  justify-content: space-around;
`;

const Fact = styled.View``;

const LargeText = styled.Text`
  font-size: 35px;
`;

const SmallText = styled.Text`
  font-size: 18px;
`;
const ViewLine = styled.View`
  margin-top: 30px;
  background: #979797;
  width: 293.5px;
  height: 1px;
  left: 40px;
`;
const people = [
  {
    img: "",
    name: "Hank",
    age: "55",
    ambition: "Online marketing"
  },
  {
    img: "",
    name: "Steve",
    age: "38",
    ambition: "Develop cool apps"
  },
  {
    img: "",
    name: "Harvey",
    age: "43",
    ambition: "Do social work"
  },
  {
    img: "",
    name: "Pat",
    age: "42",
    ambition: "Inspire children"
  },
  {
    img: "",
    name: "Joan",
    age: "47",
    ambition: "Work with data"
  },
  {
    img: "",
    name: "Fazan",
    age: "44",
    ambition: "Be a pharmacist"
  },
  {
    img: "",
    name: "Joaquin",
    age: "37",
    ambition: "Design websites"
  },
  {
    img: "",
    name: "Kevin",
    age: "29",
    ambition: "Graphic design"
  }
];
