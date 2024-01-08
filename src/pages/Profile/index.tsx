import { Button, Text, View } from "react-native";
import { BoxHor, Content } from "../../defaultStyles";
import IProfile from "../../interfaces/IProfile";
import CardSimple from "../../components/CardSimple";
import { NavigationProp } from "@react-navigation/native";
import { getLanguagesRequire, getReposRequire } from "../../services/requires";
import { useEffect, useState } from "react";
import IRepos from "../../interfaces/IRepos";
import { ScrollRepos } from "./profile.styled";
import CardRepo from "../../components/CardRepo";
import { createUserData } from "../../data/User";

export const Profile = (props) => {
    const [repos, setRepos] = useState<IRepos[]>([]);

    const user: IProfile = props.route.params.user;
    const navigation = props.route.params.navigation;


    useEffect(() => {
        saveUser();
        getRepos();
    }, []);
    
    const saveUser = async () => {
        await createUserData(user)
            .then(id => console.log('Item criado com o id: ' + id))
            .catch(err => console.log(err))
    }

    const getRepos = async () => {
        const response = await getReposRequire(user.login);
        let languages: string[] = [];
        let tempRepo: IRepos;
        response.forEach(async repoItem => {
            languages = Object.keys(await getLanguagesRequire(repoItem.languages_url));
            tempRepo = {
                id: repoItem.id,
                name: repoItem.name,
                languages: languages,
                description: repoItem.description,
                created_at: repoItem.created_at,
                pushed_at: repoItem.pushed_at,
                html_url: repoItem.html_url
            }
            setRepos(prevRepos => [...prevRepos, tempRepo]);
        });
    }

    return (
        <Content>
            <Button title="Voltar" onPress={() => navigation.navigate('home')} />
            <CardSimple findedProfile={user} plus={true} />
            <BoxHor>
                <Text>{user.id}</Text>
                <Text>Seguidores: {user.followers}</Text>
            </BoxHor>
            <ScrollRepos>
                {repos &&
                    repos.map(repoItem => (
                        <CardRepo
                            key={repoItem.id}
                            created_at={repoItem.created_at}
                            html_url={repoItem.html_url}
                            id={repoItem.id}
                            name={repoItem.name}
                            pushed_at={repoItem.pushed_at}
                            description={repoItem.description}
                            languages={repoItem.languages}
                        />
                    ))
                }
            </ScrollRepos>
        </Content>
    );
}

export default Profile;