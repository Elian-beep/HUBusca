import styled from "styled-components/native";

interface Props  {
}

export const Container = styled.View`
    margin-top: 30px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    gap: 35px;
    border: 1px solid gray;
    border-radius: 5px;

`

export const ImgProfile = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 50px;
`;

export const NameProfile = styled.Text`
    font-size: 18px;
    font-weight: 600;
`;

export const TextProfile = styled.Text``;