import styled from 'styled-components/native'
import { StyleSheet } from "react-native";

export const Container = styled.View`
    padding: 25px 20px;
    flex: 1;
    
    
`;
export const H1 = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #8a8a8a;
    margin: 20px auto;
`;

export const Ul = styled.View``;

export const Li = styled.View`
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-radius: 10px;
    margin-top: 15px;
`;


export const Total = styled.Text`
    font-size: 20px;
    margin-top: 20px;
    text-align: right;
`;
export const Text = styled.Text`

`;
export const Span = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Button = styled.View`
    width: 25px;
    height: 25px;
    border-radius: 30px;
    background: #9C27B0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
`;

export const Checkbox = styled.View`
    width: 30px;
    height: 30px;
    background: #e3e3e3;
    border-radius: 5px; 
    margin-right: 19px;
`;

export const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
  });

