import React from "react";
import {
  ScrollView,
  StyleSheet,
  Slider,
  TouchableOpacity,
  Animated
} from "react-native";
import { ExpoLinksView } from "@expo/samples";
import styled from "styled-components";
import { MonoText } from "../components/StyledText";
import InfoCard from "../components/InfoCard";
import Modal from "react-native-modal";
export default class ProfileScreen extends React.Component {
  state = {
    slideValue: 20,
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    return (
      <Container>
        <Modal
          isVisible={this.state.isModalVisible}
          coverSceen={false}
          backdropOpacity={0.3}
          // onBackdropPress={this.state.isModalVisible}
        >
          <TouchableOpacity onPress={this.toggleModal}>
            <InfoCard />

            {/* <Text>Hiii</Text> */}
          </TouchableOpacity>
        </Modal>
        <TitleBar>
          <ProfileImg source={require("../assets/images/Andy.png")} />
          <TextContainer>
            <ColoredText>Andy</ColoredText>
            <Slider
              style={{ width: 154 }}
              value={this.state.slideValue}
              step={20}
              maximumValue={500}
              minimumValue={20}
              thumbTintColor="#38d39f"
              minimumTrackTintColor="#38d39f"
              onValueChange={slideValue => this.setState({ slideValue })}
            />
          </TextContainer>
        </TitleBar>
        <Cards>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              left: 20,
              top: 25
            }}
          >
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
            <Card>
              <Image source={require("../assets/images/styledCard.png")} />
              <Texts style={{ position: "absolute", top: 51, left: 20 }}>
                <LargeText>$600</LargeText>
                <SmallText style={{ color: "#38d39f" }}>
                  Total Invested
                </SmallText>
              </Texts>
              <Texts style={{ top: 51, right: 20, position: "absolute" }}>
                <LargeText style={{ textAlign: "center" }}>5</LargeText>
                <SmallText style={{ color: "white" }}>People Helped</SmallText>
              </Texts>
            </Card>
          </ScrollView>
        </Cards>
        <Funding>
          <Text>Funding History</Text>
          <PersonHistory>
            <TouchableOpacity onPress={this.toggleModal}>
              <Image
                source={require("../assets/images/Jordan.png")}
                style={{ height: 90, width: 90, borderRadius: 15 }}
              />
            </TouchableOpacity>
            <TextCol>
              <Text style={{ fontSize: 15, paddingBottom: 10 }}>Jordan</Text>
              <Text style={{ fontSize: 15, color: "#38d39f" }}>
                <Text style={{ color: "black", fontSize: 15 }}>Status: </Text>
                Graduated
              </Text>
            </TextCol>
            <Text style={{ paddingLeft: 30, fontSize: 20 }}>$25</Text>
          </PersonHistory>
          <PersonHistory>
            <Image
              source={require("../assets/images/Jordan.png")}
              style={{ height: 90, width: 90, borderRadius: 15 }}
            />

            <TextCol>
              <Text style={{ fontSize: 15, paddingBottom: 10 }}>Jordan</Text>
              <Text style={{ fontSize: 15, color: "#38d39f" }}>
                <Text style={{ color: "black", fontSize: 15 }}>Status: </Text>
                Graduated
              </Text>
            </TextCol>
            <Text style={{ paddingLeft: 30, fontSize: 20 }}>$25</Text>
          </PersonHistory>
        </Funding>
      </Container>
    );
  }
}

ProfileScreen.navigationOptions = {
  header: null
};
const TextCont = styled.View``;
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
  margin-top: 30px;
  margin-left: 40px;
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
