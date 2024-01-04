import { Button, Image, Text, View } from "react-native";
import { Container } from "./cardSimple.styled";
import IProfile from "../../pages/interfaces/IProfile";

export const CardSimple = (profile : IProfile) => {

    return (
        <Container>
            <Image source={{ uri: profile.photo }}  />
            <View>
                <Text>{profile.name}</Text>
                <View>
                    <Text>Login: {profile.login}</Text>
                    <Text>Localização: {profile.location}</Text>
                </View>
            </View>
        </Container>
    );
}

export default CardSimple;