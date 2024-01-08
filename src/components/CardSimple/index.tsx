import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { ImgProfile, NameProfile, TextProfile } from "../Card/card.styled";
import IProfile from "../../interfaces/IProfile";
import { useEffect, useState } from "react";

import { nonePerson } from "../../mock/nonePerson";
import { getUserRequire } from "../../services/requires";
import { NavigationProp } from "@react-navigation/native";
import { ContainerCard } from "../../defaultStyles";
import { createUserData } from "../../data/User";

interface Props {
    plus?: boolean,
    findedProfile: IProfile
}

type CardSimpleProps = Props & {
    navigation?: NavigationProp<any>
};

export const CardSimple = ({ navigation, plus, findedProfile }: CardSimpleProps) => {

    const redirect = async () => {
        navigation.navigate('profile', { user: findedProfile, navigation });
    }

    return (
        <ContainerCard>
            <TouchableOpacity onPress={() => redirect() }>
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
        </ContainerCard>
    );
}

export default CardSimple;