import styled from 'styled-components/native'
//STYLED COMPONENTS
export const Container = styled.View`
    padding: 20px;
    margin: auto;
    min-height: 400px;
    width: 100%;
`;

export const InputControl = styled.View`
    margin-top: 15px;
`;
export const Label = styled.Text`
    font-size: 13px;
    letter-spacing: 1.2px;
    color: #949494;
    border-color: #ebebeb;
    margin-bottom: 5px;
`;
export const Input = styled.TextInput`
   background: #fff;
    border: 1px;
    border-radius: 5px;
    height: 40px;
`;
export const Button = styled.Button`
   margin-top: 30px;
   color: #841584;
`;
export const Error = styled.Text`
   font-size: 10px;
   font-weight: bold;
   color: #f00;
`;



