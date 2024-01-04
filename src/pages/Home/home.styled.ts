import styled from "styled-components/native";

interface Props  {
}

export const Container = styled.View`
    margin-top: 30px;
    padding: 20px;
`

export const MainTitle = styled.Text`
    text-align: center;
    margin-top: 20px;
    font-size: 22px;
    font-weight: 800;
`;

export const ContentInpt = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
`;

export const Inpt = styled.TextInput`
    border-color: green;
    border-bottom-width: .5px;
    width: 70%;
`;