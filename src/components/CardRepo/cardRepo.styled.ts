import styled from "styled-components/native";

interface Props {
}

export const ContentRepo = styled.View`
    margin-top: 30px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-radius: 5px;
`;

export const TitleRepo = styled.Text`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
`;

export const DescriptionRepo = styled.Text`
    margin: 10px 0;
`;

export const LanguagesRepo = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    margin: 5px 0;
`;