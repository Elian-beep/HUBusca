import { Alert, Button, Text, View } from "react-native";
import { Content } from "../../defaultStyles";
import { MainTitle } from "../Home/home.styled";
import CardSimple from "../../components/CardSimple";
import { useEffect, useState } from "react";
import IRepos from "../../interfaces/IRepos";
import { getAllUserData, removeAllUserData } from "../../data/User";
import IProfile from "../../interfaces/IProfile";

export const History = ({ navigation }) => {

    const [users, setUsers] = useState<IProfile[]>();

    useEffect(() => {
        getAllUser();
    }, [users]);

    const getAllUser = async () => {
        await getAllUserData()
            .then((newUsers: IProfile[]) => {
                
                setUsers(newUsers)
            })
            .catch(err => console.log("erro: ", err));
    }

    const removeAllUser = async () => {
        Alert.alert(
            "Confirmação",
            "Deseja excluir toda a lista de pesquisa?",
            [
                {
                    text: 'Sim',
                    onPress: async () => {
                        await removeAllUserData()
                            .then(updated => console.log('Histórico removido'))
                            .catch(err => console.log('Erro na remoção: ', err))
                    }
                },
                {
                    text: 'Não',
                    onPress: () => { console.log('Limpeza cancelada') }
                }
            ]
        )
    }

    return (
        <Content>
            <MainTitle>Histórico de pesquisa</MainTitle>
            {users && 
                <>
                    {users.map(user => (
                        <CardSimple key={user.id} plus={false} findedProfile={user} navigation={navigation} />
                    ))}
                    <Button color="red" title="Limpar lista" onPress={() => removeAllUser()} />
                </>
            }
        </Content>
    );
}

export default History;