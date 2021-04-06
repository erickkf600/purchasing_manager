import React, { useState } from 'react'
import { Container, H1, Ul, Li, Text, Checkbox, Span, Button } from './home.style'
import { TouchableWithoutFeedback, View } from "react-native"
import { SafeAreaView, ScrollView } from 'react-native'
import { CustomIcon } from './../../assets/Icons/Icons'
import{ useContext } from './../../providers/route-props'
import{ useActiveIndex } from './../../providers/routeContext'
import realmList from './../../OfflineFirst/Services/ListService'
const Home = () =>{
    const { list } = useContext()
    const { index } = useActiveIndex()

    const [qtd, setQtd] = useState(0)

    const qtds = (value) =>{

        return Math.max(0, +value + qtd)
    }

    const changeQtd = async (type, i) =>{
        if(type === 'add'){
            setQtd(qtd+1)
        }else if(type === 'remove'){
            setQtd(qtd-1)
        }

        const realm = await realmList();

        let result = realm.objects('List')
        realm.write(() =>{
            // result.value = qtd.toString();
        })

        console.log(result)
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Container>
                    
                    <H1>Lista de Compras</H1>

                    <Ul>
                    
                    {list.map((item, i) => (
                    <TouchableWithoutFeedback key={i} onPress={() => alert('teste1')}>
                    <Li>
                        <Span>
                            <Checkbox/>  
                            <Text>{item?.product}</Text>
                        </Span>

                        <Span>
                            <TouchableWithoutFeedback onPress={() => changeQtd('remove', item?.id)}>
                                <Button>
                                    <CustomIcon style={{fontSize: 15, color: '#fff'}} name="remove"/>
                                </Button>
                            </TouchableWithoutFeedback>
                            <Text>{qtds(item?.value)}</Text>
                            <TouchableWithoutFeedback onPress={() => changeQtd('add', item?.id)}>
                                <Button>
                                    <CustomIcon style={{fontSize: 15,  color: '#fff'}} name="add"/>
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

export default Home
