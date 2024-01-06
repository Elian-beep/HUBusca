import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { Container, ImgProfile, NameProfile, TextProfile } from "./cardSimple.styled";
import IProfile from "../../interfaces/IProfile";
import { useEffect, useState } from "react";

import { nonePerson } from "../../mock/nonePerson";
import { getUserRequire } from "../../services/requires";
import { NavigationProp } from "@react-navigation/native";

interface Props {
    person?: string,
    plus?: boolean
}

type CardSimpleProps = Props & {
    navigation?: NavigationProp<any>
};

export const CardSimple = ({ person, navigation, plus }: CardSimpleProps) => {
    const [findedProfile, setFindedProfile] = useState<IProfile>(nonePerson);

    useEffect(() => {
        getUser();
    }, [person]);

    const getUser = async () => {
        const response = await getUserRequire(person);
        if (response["data"]) {
            setFindedProfile({
                id: response["data"].id,
                photo: response["data"].avatar_url,
                name: response["data"].name,
                login: response["data"].login,
                followers: response["data"].followers,
                public_repos: response["data"].public_repos
            });
        }
    }

    return (
        <Container>
            <TouchableOpacity 
                onPress={() => 
                    navigation.navigate('profile', {user: findedProfile, navigation})
                }
            >
                <ImgProfile source={{ uri: findedProfile.photo }} />
            </TouchableOpacity> 
            <View>
                <NameProfile>{findedProfile.name}</NameProfile>
                <View>
                    <TextProfile>Login: {findedProfile.login}</TextProfile>
                    <TextProfile>Localização: {findedProfile.location}</TextProfile>
                    {plus &&
                    <TextProfile>Repositórios públicos: {findedProfile.public_repos}</TextProfile>
                    }
                </View>
            </View>
        </Container>
    );
}

export default CardSimple;