import { Button, Text, View } from "react-native";
import { Container, ContentInpt, Inpt, MainTitle } from "./home.styled";
import CardSimple from "../../components/CardSimple";
import { useState } from "react";
import IProfile from "../interfaces/IProfile";

export const Home = () => {

    const [searchProfile, setSearchProfile] = useState<string>();

    return (
        <Container>
            <MainTitle>HUBusca</MainTitle>
            <ContentInpt>
                <Inpt onChangeText={text => setSearchProfile(text)} placeholder="Perfil a ser buscado" />
                {/* <Button title="Buscar" /> */}
            </ContentInpt>
           <CardSimple person={searchProfile} />
        </Container>
    );
}

export default Home;