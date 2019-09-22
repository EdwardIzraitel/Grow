import React from "react";
import { ScrollView } from "react-native";

import styled from "styled-components";

import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";
import { TouchableOpacity } from "react-native-gesture-handler";
import PeopleCard from "../components/PeopleCard";
import LogInScreen from "../screens/LogInScreen";
import * as Font from "expo-font";

export default class HomeScreen extends React.Component {
  state = {
    fontLoaded: false
  };
  static navigationOptions = {
    header: null
  };
  async componentDidMount() {
    //this.props.navigation.push("LogIn");
    await Font.loadAsync({
      "Abril-Fatface": require("../assets/fonts/AbrilFatface-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <Container>
        <TitleBar>
          {this.state.fontLoaded ? (
            <TitleText style={{ fontFamily: "Abril-Fatface" }}>
              Hi,
              <ColoredText> Andy</ColoredText>
            </TitleText>
          ) : null}

          <Cover>
            <ProfileImg source={require("../assets/images/Andy.png")} />
          </Cover>
        </TitleBar>
        <FactContainer>
          {this.state.fontLoaded ? (
            <Fact>
              <LargeText style={{ fontFamily: "Abril-Fatface" }}>
                $6000
              </LargeText>
              <SmallText style={{ color: "#38d39f", fontFamily: "Avenir" }}>
                Total Invested
              </SmallText>
            </Fact>
          ) : null}
          {this.state.fontLoaded ? (
            <Fact>
              <LargeText style={{ fontFamily: "Abril-Fatface" }}>156</LargeText>
              <SmallText style={{ color: "#38d39f", fontFamily: "Avenir" }}>
                People Helped
              </SmallText>
            </Fact>
          ) : null}
        </FactContainer>
        <ViewLine></ViewLine>
        <People>
          {this.state.fontLoaded ? (
            <SuggestedBar>
              <LargeText style={{ fontFamily: "Abril-Fatface" }}>
                Suggested
              </LargeText>
              <Text style={{ color: "#38d39f", fontFamily: "Avenir" }}>
                See All
              </Text>
            </SuggestedBar>
          ) : null}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 30 }}
          >
            <ImageContainer>
              {people.map(
                (person, index) =>
                  console.log("HILO BITCH", person) || (
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
                        image={person.img}
                        ambition={person.ambition}
                      />
                    </TouchableOpacity>
                  )
              )}
            </ImageContainer>
          </ScrollView>
        </People>
      </Container>
    );
  }
}
const ImageContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 40px;
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
    name: "Jordan",
    age: "55",
    ambition: "Online marketing",
    status: "Graduated",
    donated: "$25",
    invested: "$500",
    fReq: "$1223",
    fAqr: "$232"
  },

  {
    img: require("../assets/images/Harvey.png"),
    name: "Harvey",
    age: "43",
    ambition: "Do social work",
    status: "Graduated",
    donated: "$25",
    invested: "$500",
    fReq: "$1223",
    fAqr: "$232"
  },
  {
    img: require("../assets/images/Pat.png"),
    name: "Pat",
    age: "42",
    ambition: "Inspire children",
    status: "Graduated",
    donated: "$25",
    invested: "$500",
    fReq: "$1223",
    fAqr: "$232"
  },
  {
    img: require("../assets/images/Joan.png"),
    name: "Joan",
    age: "47",
    ambition: "Work with data",
    status: "Graduated",
    donated: "$25",
    invested: "$500",
    fReq: "$1223",
    fAqr: "$232"
  },
  {
    img: require("../assets/images/Fazan.png"),
    name: "Fazan",
    age: "44",
    ambition: "Be a pharmacist",
    status: "Graduated",
    donated: "$25",
    invested: "$500",
    fReq: "$1223",
    fAqr: "$232"
  },
  {
    img: require("../assets/images/Joaquin.png"),
    name: "Joaquin",
    age: "37",
    ambition: "Design websites",
    status: "Graduated",
    donated: "$25",
    invested: "$500",
    fReq: "$1223",
    fAqr: "$232"
  }
];
