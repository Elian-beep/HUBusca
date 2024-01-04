import { Button, Text, View } from "react-native";
import { Container, ContentInpt, Inpt, MainTitle } from "./home.styled";
import CardSimple from "../../components/CardSimple";

export const Home = () => {

    return (
        <Container>
            <MainTitle>HUBusca</MainTitle>
            <ContentInpt>
                <Inpt placeholder="Perfil a ser buscado" />
                <Button title="Buscar" />
            </ContentInpt>
            <CardSimple location="" login="Elian-beep" name="Elian Batista" photo="https://avatars.githubusercontent.com/u/92095951?v=4" id={2} />
        </Container>
    );
}

export default Home;