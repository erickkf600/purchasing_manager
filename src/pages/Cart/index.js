import React from 'react'
import { Container, H1, Ul, Li, Text, Checkbox, Span, Button, Total } from './cart.style'
import { TouchableWithoutFeedback, View } from "react-native"
import { SafeAreaView, ScrollView } from 'react-native'
import { CustomIcon } from './../../assets/Icons/Icons'
import{ useActiveIndex } from './../../providers/routeContext'
import realmList from './../../OfflineFirst/Services/ListService'
const Cart = () =>{
    const { list, setCartList } = useActiveIndex()

    const deleteList = async (data) =>{
        const realm = await realmList();

        let result = realm.objects('List').find(row=>{
            return row.id==data.id
        })
        realm.write(() =>{
            realm.delete(result)
        })
        const currentArray = [...list]
        let index = currentArray.findIndex(l => l.id === data.id)
        currentArray.splice(index, 1);
        setCartList(currentArray)
    }
    let total = list.reduce((acc, {value}) =>{
       return acc + Number(value.replace(',', '.'))
    },0)
    return (
        <SafeAreaView>
            <ScrollView>
                <Container>
                    
                <H1>Carrinho de Compras</H1>

                    <Total>Total: R$ {total}</Total>
                    <Ul>
                    
                    {list.map((item, i) => (
                    <TouchableWithoutFeedback key={i} onPress={() => alert('teste1')}>
                    <Li>
                        <Span>
                            <Checkbox/>  
                            <Text>{item?.product}</Text>
                        </Span>

                        <Span>
                            <Text>R${item?.value}</Text>
                            <TouchableWithoutFeedback onPress={() => deleteList(item)}>
                                <Button>
                                    <CustomIcon style={{fontSize: 15, color: '#fff'}} name="remove"/>
                                </Button>
                            </TouchableWithoutFeedback>
                        </Span>
                    </Li>
                    </TouchableWithoutFeedback>
                    ))}
                    </Ul>
                                       
                </Container>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Cart
