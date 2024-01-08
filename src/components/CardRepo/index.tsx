import { Button, Linking, Text, View } from "react-native";
import { BoxHor, ContainerCard, Content } from "../../defaultStyles";
import IRepos from "../../interfaces/IRepos";
import { ContentRepo, DescriptionRepo, LanguagesRepo, TitleRepo } from "./cardRepo.styled";


export const CardRepo = (repo: IRepos) => {

    const convertDate = (receivedDate) => {
        const date = new Date(receivedDate);
        return `${date.getUTCDate().toString()}/${date.getUTCMonth().toString()}/${date.getUTCFullYear().toString()}`
    }

    return (
        <ContentRepo>
            <TitleRepo>{repo.name}</TitleRepo>
            <Text>Criado em: {convertDate(repo.created_at)}</Text>
            {
                repo.description && <DescriptionRepo>{repo.description}</DescriptionRepo>
            }
            <Text>Último push: {convertDate(repo.pushed_at)}</Text>
            <LanguagesRepo>
                {repo.languages.map((lan, index) => (
                    <Text key={index}>| {lan} |</Text>
                ))}
            </LanguagesRepo>
            <Button title="REPOSITÓRIO" onPress={() => Linking.openURL(repo.html_url)} />
        </ContentRepo>
    );
}

export default CardRepo;