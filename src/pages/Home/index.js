import React from 'react'
import { Container, H1, Ul, Li, Text, Checkbox, Span, Button } from './home.style'
import { TouchableWithoutFeedback, View } from "react-native"
import { SafeAreaView, ScrollView } from 'react-native'
import { CustomIcon } from './../../assets/Icons/Icons'
import{ useContext } from './../../providers/route-props'
import{ useActiveIndex } from './../../providers/routeContext'
const Home = () =>{
    const { list } = useContext()
    const { index } = useActiveIndex()

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
                            <TouchableWithoutFeedback onPress={() => alert('remove')}>
                                <Button>
                                    <CustomIcon style={{fontSize: 15, color: '#fff'}} name="remove"/>
                                </Button>
                            </TouchableWithoutFeedback>
                            <Text>{item?.value}</Text>
                            <TouchableWithoutFeedback onPress={() => alert('add')}>
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
