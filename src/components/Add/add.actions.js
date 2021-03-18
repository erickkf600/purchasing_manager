import React, { createRef } from 'react'
import realmList from './../../OfflineFirst/Services/ListService'
import { generateRadomString } from './../../components/utils'
import { Keyboard } from 'react-native'
import { useContext } from './../../providers/route-props'

const actionSheetRef = createRef();


async function saveList(data){
    const realm = await realmList();
    realm.write(() =>{
        realm.create('List', data)
    })
}
async function saveCart(data){
    const realm = await realmList();
    realm.write(() =>{
        realm.create('Cart', data)
    })
}

export const submit = async (data, index) =>{
    try {
        let payload = {
            id: generateRadomString(3),
            product: data.product,
            value: data.value,
            type: index,
            checked: false
        }
        await saveList(payload)
        
        Keyboard.dismiss()
        actionSheetRef.current?.hide()
    
        return payload
        
    } catch (error) {
        console.log('erro')
        alert('Ocorreu um erro no cadastro')
        return false
    }
}
