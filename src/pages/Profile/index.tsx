import { Button, Text, View } from "react-native";
import { BoxHor, Content } from "../../defaultStyles";
import IProfile from "../../interfaces/IProfile";
import CardSimple from "../../components/CardSimple";
import { NavigationProp } from "@react-navigation/native";

export const Profile = (props, navigation: NavigationProp<any>) => {

    const user: IProfile = props.route.params;

    return (
        <Content>
            <Button title="Voltar" onPress={() => navigation.navigate('home')} />
            <CardSimple person={user.login} plus={true} />
            <BoxHor>
                <Text>{user.id}</Text>
                <Text>Seguidores: {user.followers}</Text>
            </BoxHor>
        </Content>
    );
}

export default Profile;