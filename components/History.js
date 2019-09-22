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
  _keyExtractor = (item, index) => item.key;
  render() {
    return (
      <FlatList
        data={people}
        numColumns={4}
        alwaysBounceVertical={false}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) =>
          console.log(item) || (
            <Parent>
              <Modal
                isVisible={this.state.isModalVisible}
                coverSceen={false}
                backdropOpacity={0.3}
              >
                <Size>
                  <TouchableOpacity onPress={this.toggleModal}>
                    <InfoCard
                      age={item.age}
                      donated={item.donated}
                      invested={item.invested}
                      fReq={item.fReq}
                      fAqr={item.fAqr}
                      img={item.img}
                      name={item.name}
                      ambition={item.ambition}
                      status={item.status}
                    />
                  </TouchableOpacity>
                </Size>
              </Modal>
              <TouchableOpacity onPress={this.toggleModal}>
                <Image source={item.img} style={{ width: 90, height: 90 }} />
              </TouchableOpacity>
              <TextContainer>
                <Text style={{ fontSize: 15 }}>{item.name}</Text>
                <Text style={{ fontSize: 15 }}>
                  Status:{" "}
                  <Text style={{ color: "#38d39f" }}>{item.status}</Text>
                </Text>
              </TextContainer>
              <NumContainer>
                <Text style={{ fontSize: 20 }}>{item.donated}</Text>
              </NumContainer>
            </Parent>
            //   </PeopleCards>
          )
        }
        ItemSeparatorComponent={() => <View />}
        keyExtractor={item => item.name}
      />
    );
  }
}
const Size = styled.View`
  height: 375px;
  width: 400px;
  right: 20px;
  top: 220px;
  /* border-radius: 50px; */
`;
const NumContainer = styled.View`
  /* justify-content: center; */
  position: absolute;
  /* margin-left: 30px; */
  top: 31.5px;
  right: 10px;
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
const Text = styled.Text`
  font-family: "Avenir";
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
const people = [
  {
    img: require("../assets/images/Hank.png"),
    name: "Hank",
    age: "55",
    ambition: "Online marketing",
    status: "Graduated",
    donated: "$500",
    invested: "$500",
    fReq: "$10000",
    fAqr: "$10000"
  },
  {
    img: require("../assets/images/Jordan.png"),
    name: "Steve",
    age: "38",
    ambition: "Develop apps",
    status: "Hired",
    donated: "$250",
    invested: "$500",
    fReq: "$1223",
    fAqr: "$232"
  },
  {
    img: require("../assets/images/Harvey.png"),
    name: "Harvey",
    age: "43",
    ambition: "Do social work",
    status: "Hired",
    donated: "$100",
    invested: "$500",
    fReq: "$1223",
    fAqr: "$232"
  },
  {
    img: require("../assets/images/Pat.png"),
    name: "Pat",
    age: "42",
    ambition: "Inspire children",
    status: "Not Funded",
    donated: "$500",
    invested: "$500",
    fReq: "$1223",
    fAqr: "$232"
  },
  {
    img: require("../assets/images/Joan.png"),
    name: "Joan",
    age: "47",
    ambition: "Work with data",
    status: "Studying",
    donated: "$200",
    invested: "$500",
    fReq: "$1223",
    fAqr: "$232"
  },
  {
    img: require("../assets/images/Fazan.png"),
    name: "Fazan",
    age: "44",
    ambition: "Be a pharmacist",
    status: "Hired",
    donated: "$350",
    invested: "$500",
    fReq: "$1223",
    fAqr: "$232"
  },
  {
    img: require("../assets/images/Joaquin.png"),
    name: "Joaquin",
    age: "37",
    ambition: "Design websites",
    status: "Paid Back",
    donated: "$90",
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
    donated: "$95",
    invested: "$500",
    fReq: "$1223",
    fAqr: "$232"
  }
];
