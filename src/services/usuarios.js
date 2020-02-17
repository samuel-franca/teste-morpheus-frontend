import { http } from './config'

export default {
    listar: () => {
        return http.get('lista')
    },

    salvar:(usuario) => {
        return http.post('cadastro', usuario)
    }
}