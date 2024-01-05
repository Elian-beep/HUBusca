import { Button, Image, Text, View } from "react-native";
import { Container, ImgProfile, NameProfile, TextProfile } from "./cardSimple.styled";
import IProfile from "../../pages/interfaces/IProfile";
import { useEffect, useState } from "react";

import { nonePerson } from "../../mock/nonePerson";

interface Props {
    person?: string
}

export const CardSimple = ({ person }: Props) => {
    const [findedProfile, setFindedProfile] = useState<IProfile>(nonePerson);

    useEffect(() => {
        searchProfile();
    }, [person]);

    const searchProfile = async () => {
        
    }

    return (
        <Container>
            <ImgProfile source={{ uri: findedProfile.photo }}  />
            <View>
                <NameProfile>{findedProfile.name}</NameProfile>
                <View>
                    <TextProfile>Login: {findedProfile.login}</TextProfile>
                    <TextProfile>Localização: {findedProfile.location}</TextProfile>
                </View>
            </View>
        </Container>
    );
}

export default CardSimple;