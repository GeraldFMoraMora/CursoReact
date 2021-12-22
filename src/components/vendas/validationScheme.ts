import * as Yup from 'yup'

export const validationScheme = Yup.object().shape({
    cliente: Yup.object().nullable(true).required("Campo Obligatorio."),
    items: Yup.array().min(1, "Debe contener al meno un producto."),
    formaPagamento: Yup.string().trim().required("Campo Obligatorio.")

})