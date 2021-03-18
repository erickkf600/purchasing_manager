import React, { useEffect, useState } from 'react'
import realmList from './../OfflineFirst/Services/ListService'

export const ActiveIndexContext = React.createContext({});

export const ActiveIndexProvider = (props) =>{
    const [list, setCartList] = useState([])

    useEffect(() =>{
        async function loadList(){
            let response = [];
            const realm = await realmList()
           const data = Array.from(realm.objects('List').filtered(`type == 1`))

           data.map((res) =>{
               response.push({id:res.id, product: res.product, value: res.value, type: res.type, checked: res.checked})
            })
        setCartList(response)
    }
    loadList()
}, [])  
    return (
        <ActiveIndexContext.Provider value={{list, setCartList}}>
            {props.children}
        </ActiveIndexContext.Provider>
    ) 
}

export const useActiveIndex = () => React.useContext(ActiveIndexContext)


