import React, { useEffect, useState } from 'react'
import realmList from './../OfflineFirst/Services/ListService'
export const ActiveRouteContext = React.createContext({});

export const ActiveRouteProvider = (props) =>{
    const [list, setList] = useState([])

    useEffect(() =>{
        async function loadList(){
            let response = [];
            const realm = await realmList()
           const data = Array.from(realm.objects('List').filtered(`type == 0`))

           data.map((res) =>{
               response.push({id:res.id, product: res.product, value: res.value, type: res.type, checked: res.checked})
            })
        setList(response)
    }
    loadList()
}, [])  

    return (
        <ActiveRouteContext.Provider value={{list, setList}}>
            {props.children}
        </ActiveRouteContext.Provider>
    ) 
}

export const useContext = () => React.useContext(ActiveRouteContext)