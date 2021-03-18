import React, { useRef, useEffect, useState } from 'react'
import { Text, Button, View } from "react-native";
import { Container, InputControl, Label, Input, Error } from './add.style'
import { useForm, Controller} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as validation from './add.validations'
import * as actions from './add.actions'
import { useContext } from './../../providers/route-props'
import { useActiveIndex } from './../../providers/routeContext'
const Add = (props) =>{
    const { control, handleSubmit, errors } = useForm({
        resolver: yupResolver(validation.formSchema)
    });
    const {setList} = useContext()
    const { setCartList } = useActiveIndex()

    async function handleListSubmit(data){
        let submit = await actions.submit(data,props.state.index)
        if(submit){
            props.state.index === 0 ? setList(list =>[...list, submit]) :  setCartList(list =>[...list, submit])
        }
    }

    const refInput = useRef(null);
    return (
        <Container>
            <Text style={{textAlign: 'center'}}>{props.state.index === 0 ? 'Adicione um item à lista' : 'Adicione um item ao carrinho'}</Text>

            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <InputControl>
                        <Label>Produto</Label>
                        <Input
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            returnKeyType="next"
                            onSubmitEditing={() => {refInput.current.focus() }}
                        />
                        <Error>{errors.product?.message}</Error>
                    </InputControl>
                )}
                name="product"
                rules={{ required: true }}
                defaultValue="" /> 
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <InputControl>
                        <Label>{props.state.index === 0 ? 'Quantitade' : 'Valor'}</Label>
                        <Input
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            keyboardType="number-pad"
                            ref={refInput}
                            onSubmitEditing={handleSubmit(handleListSubmit)}
                           
                        />
                        <Error>{errors.value?.message}</Error>
                    </InputControl>
                )}
                name="value"
                rules={{ required: true }}
                defaultValue="" /> 

            <View style={{marginTop: 30}}>
                <Button
                    onPress={handleSubmit(handleListSubmit)}
                    title="Salvar"
                    color="#9C27B0"
                />      
            </View>        
        </Container>
    )
}

export default Add
