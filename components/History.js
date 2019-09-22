import React from "react";
import styled from "styled-components";
import { FlatList } from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity
} from "react-native-gesture-handler";
import Modal from "react-native-modal";

import InfoCard from "../components/InfoCard";
export default class PeopleCard extends React.Component {
  state = {
    numCol: 0,
    isModalVisible: false
  };
  componentDidMount() {
    this.numCol = people.length / 2;
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    return (
      <FlatList
        data={people}
        numColumns={4}
        renderItem={({ item }) => (
          <Parent>
            <Modal
              isVisible={this.state.isModalVisible}
              coverSceen={false}
              backdropOpacity={0.3}
            >
              <TouchableOpacity onPress={this.toggleModal}>
                <InfoCard
                  age={item.age}
                  donated={item.donated}
                  invested={item.invested}
                  fReq={item.fReq}
                  fAqr={item.fAqr}
                  img={item.img}
                  name={item.name}
                />
              </TouchableOpacity>
            </Modal>
            <TouchableOpacity onPress={this.toggleModal}>
              <Image
                source={require("../assets/images/Jordan.png")}
                style={{ width: 90, height: 90 }}
              />
            </TouchableOpacity>
            <TextContainer>
              <Text>{item.name}</Text>
              <Text>Status: {item.status}</Text>
            </TextContainer>
            <NumContainer>
              <Text>{item.donated}</Text>
            </NumContainer>
          </Parent>
          //   </PeopleCards>
        )}
        ItemSeparatorComponent={() => <View />}
        keyExtractor={item => item.name}
      />
    );
  }
}
const NumContainer = styled.View`
  justify-content: center;
  margin-left: 30px;
`;
const Parent = styled.View`
  margin-left: 40px;
  width: 295px;
  flex-direction: row;
`;
const View = styled.View`
  margin-bottom: 20px;
`;
const TextContainer = styled.View`
  justify-content: center;
  margin-left: 20px;
`;
const PeopleCards = styled.View`
  width: 295px;
  height: 300px;
  margin-left: 40px;
`;
const Text = styled.Text``;
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
const people = [
  {
    img: require("../assets/images/Jordan.png"),
    name: "Hank",
    age: "55",
    ambition: "Online marketing",
    status: "Graduated",
    donated: "$25",
    invested: "$500",
    fReq: "$1223",
    fAqr: "$232"
  },
  {
    img: require("../assets/images/Jordan.png"),
    name: "Steve",
    age: "38",
    ambition: "Develop cool apps",
    status: "Graduated",
    donated: "$25",
    invested: "$500",
    fReq: "$1223",
    fAqr: "$232"
  },
  {
    img: require("../assets/images/Jordan.png"),
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
    img: require("../assets/images/Jordan.png"),
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
    img: require("../assets/images/Jordan.png"),
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
    img: require("../assets/images/Jordan.png"),
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
    img: require("../assets/images/Jordan.png"),
    name: "Joaquin",
    age: "37",
    ambition: "Design websites",
    status: "Graduated",
    donated: "$25",
    invested: "$500",
    fReq: "$1223",
    fAqr: "$232"
  },
  {
    img: require("../assets/images/Jordan.png"),
    name: "Kevin",
    age: "29",
    ambition: "Graphic design",
    status: "Graduated",
    donated: "$25",
    invested: "$500",
    fReq: "$1223",
    fAqr: "$232"
  }
];
