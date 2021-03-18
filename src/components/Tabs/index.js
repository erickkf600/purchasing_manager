import React, { createRef } from 'react'
import { Tab, I, styles  } from './Tab.style'
import { TouchableWithoutFeedback, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { CustomIcon } from './../../assets/Icons/Icons'
import ActionSheet from "react-native-actions-sheet"
import Add from './../Add'
const actionSheetRef = createRef();

const Tabs = (props)=>{
    let actionSheet;
    const handleNavigation = (page) =>{
        props.navigation.navigate(page)
    }

    return(
        <>
        <Tab>
            <TouchableWithoutFeedback  onPress={() => handleNavigation('Home')}>
                <I name="list" active={props.state.index === 0}/>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback  onPress={() => actionSheetRef.current?.setModalVisible()}>
                <LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#D500F9', '#4A148C']}>
                    <CustomIcon name="add" style={styles.addIcon}/>
                </LinearGradient>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback onPress={() => handleNavigation('Cart')}>
                <I name="cart" active={props.state.index === 1}/>
            </TouchableWithoutFeedback>
        </Tab>

        <ActionSheet ref={actionSheetRef} gestureEnabled={true} headerAlwaysVisible={true}indicatorColor="#9C27B0">
            <Add {...props}/>
        </ActionSheet>
        </>
    )
}

export default Tabs;