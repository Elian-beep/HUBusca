import styled from "styled-components/native";

interface Props  {
}

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
`

export const Content = styled.View`
margin-top: 30px;
padding: 20px;
`

export const BoxHor = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;