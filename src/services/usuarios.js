import { http } from './config'

export default {
    listar: () => {
        return http.get('usuario/lista')
    },

    salvar:(usuario) => {
        return http.post('usuario/cadastro', usuario)
    }
}