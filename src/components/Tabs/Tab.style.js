import styled from 'styled-components/native'
import { CustomIcon } from './../../assets/Icons/Icons'
import {  StyleSheet } from 'react-native'

//STYLED COMPONENTS
export const Tab = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 65px;
    background: #FFF;
    
`;
export const I = styled(CustomIcon)`
    color: ${props => props.active ? '#9C27B0' : '#998e97'};
    font-size: 27px;   
    padding: 11px 50px;
`;

export const Item = styled.TouchableWithoutFeedback`
     border-radius: 100px;
`;

export const styles = StyleSheet.create({
	iconTabRound: {
        width: 60,
        height: 60,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#9C27B0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        marginBottom: 35,
        
    },
    addIcon: {
        color: "#fff",
        fontSize: 35,
        padding: 0
    }
});
// width: 60,
// height: 60,
// borderRadius: 30,
// flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         elevation: 6,
//         shadowColor: '#9C27B0',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 5,
// marginBottom: 35,