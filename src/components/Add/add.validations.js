import * as yup from 'yup'


export const formSchema = yup.object().shape({
    product: yup.string().required('Este campo é obrigatório'),
    value: yup.string().required('Este campo é obrigatório')

})