import Realm from 'realm'

import ListModel from '../Models/ListModel'

 const realmList= () =>{
    return Realm.open({
        schema: [ListModel],
    })
}

export default realmList