import React from "react";
import { ScrollView } from "react-native";

import styled from "styled-components";

import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";
import { TouchableOpacity } from "react-native-gesture-handler";
import PeopleCard from "../components/PeopleCard";
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <TitleBar>
          <TitleText>
            Hi,
            <ColoredText> Andy</ColoredText>
          </TitleText>
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
            {people.map((person, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  this.props.navigation.push("Cards", {
                    Cards: person
                  })
                }
                style={{ marginRight: 20 }}
              >
                <PeopleCard
                  name={person.name}
                  age={person.age}
                  image={person.image}
                  ambition={person.ambition}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </People>
      </Container>
    );
  }
}

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

const TitleText = styled.Text`
  font-size: 35px;
  color: black;
  left: 40;
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
    img: require("../assets/images/Jordan.png"),
    name: "Hank",
    age: "55",
    ambition: "Online marketing"
  },
  {
    img: require("../assets/images/Jordan.png"),
    name: "Steve",
    age: "38",
    ambition: "Develop cool apps"
  },
  {
    img: require("../assets/images/Jordan.png"),
    name: "Harvey",
    age: "43",
    ambition: "Do social work"
  },
  {
    img: require("../assets/images/Jordan.png"),
    name: "Pat",
    age: "42",
    ambition: "Inspire children"
  },
  {
    img: require("../assets/images/Jordan.png"),
    name: "Joan",
    age: "47",
    ambition: "Work with data"
  },
  {
    img: require("../assets/images/Jordan.png"),
    name: "Fazan",
    age: "44",
    ambition: "Be a pharmacist"
  },
  {
    img: require("../assets/images/Jordan.png"),
    name: "Joaquin",
    age: "37",
    ambition: "Design websites"
  },
  {
    img: require("../assets/images/Jordan.png"),
    name: "Kevin",
    age: "29",
    ambition: "Graphic design"
  }
];
