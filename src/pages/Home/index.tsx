import { Button, Text, View } from "react-native";
import { ContentInpt, Inpt, MainTitle } from "./home.styled";
import CardSimple from "../../components/CardSimple";
import { useState } from "react";
import IProfile from "../../interfaces/IProfile";
import { Content } from "../../defaultStyles";
import Card from "../../components/Card";

export const Home = ({ navigation }) => {

    const [searchProfile, setSearchProfile] = useState<string>();
    const [strInput, setStrInput] = useState<string>();

    return (
        <Content>
            <MainTitle>HUBusca</MainTitle>
            <ContentInpt>
                <Inpt onChangeText={text => setStrInput(text)} placeholder="Perfil a ser buscado" />
                <Button title="Buscar" onPress={() => setSearchProfile(strInput)} />
            </ContentInpt>
           <Card navigation={navigation} person={searchProfile} plus={false} />
        </Content>
    );
}

export default Home;