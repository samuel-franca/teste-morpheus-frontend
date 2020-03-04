<template>
    <section class="layout-content">
        <div class="container">
            <nav class="navbar navbar-expand-md bg-light">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <i class="fas fa-caret-right"></i>
                        <span> Lista de Usuários Cadastrados</span>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="container">
            <form class="form-inline" v-on:submit.prevent="buscar">
                <div class="form-group sm-3 mb-2">
                    <input type="text" class="form-control" id="nome" placeholder="Nome do Usuário">
                </div>
                <button v-on:click="buscar" type="button" class="btn btn-outline-success mx-3 mb-2">Buscar <i class="fas fa-search"></i></button>
            </form>

            <div class="table-responsive">
                <table class="table table-striped table-hover table-sm">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Login</th>
                            <th>E-mail</th>
                            <th>Senha</th>
                            <th class="text-center">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="usuario of usuarios" :key="usuario.login">
                            <td>{{ usuario.nome }}</td>
                            <td>{{ usuario.login }}</td>
                            <td>{{ usuario.email }}</td>
                            <td>{{ usuario.senha }}</td>
                            <td class="text-center">
                                <button @click="excluir(usuario.login)" type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>

import Usuario from '@/services/usuarios'

import Swal from 'sweetalert2'

export default {

    data(){
        return {
            usuarios: []
        }
    },

    mounted(){
        this.listar()
    },

    methods: {
        listar(){
            Usuario.listar().then(resposta => {
                this.usuarios = resposta.data
                // eslint-disable-next-line no-unused-vars
                var usuariosIniciais
                this.usuariosIniciais = this.usuarios
            }).catch(e => {
                console.log(e)
            })
        },

        buscar(){
            this.usuarios = this.usuariosIniciais
            var nome = document.getElementById('nome');
            // eslint-disable-next-line no-unused-vars
            var resultadoUsuarios = []
            var indexOfResultado = 0
            for (var u in this.usuarios) {
                /* se o nome de algum usuario (em minúsculo), tiver pelo menos uma ocorrência no que o usuário buscou (em minúsculo), ele satisfaz a condição */
                if((this.usuarios[u].nome.toString().toLowerCase().indexOf(nome.value.toLowerCase())) >= 0){
                    resultadoUsuarios[indexOfResultado++] = this.usuarios[u]
                }
            }
            this.usuarios = resultadoUsuarios
        },

        excluir(login){
            Swal.fire({
                title: 'Deseja excluir o Usuário?',
                text: "Esta ação não poderá ser desfeita!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim',
                cancelButtonText: 'Cancelar'
                }).then((result) => {
                if (result.value) {
                    // eslint-disable-next-line no-unused-vars
                    Usuario.excluir(login).then(resposta =>{
                        this.listar()
                        this.errors = []
                    }).catch(e => {
                        this.errors = e.response.data.errors
                    })
                    Swal.fire(
                    'Excluído!',
                    'O usuário foi excluído do banco de dados.',
                    'success'
                    )
                }
            })
        }
    }
}

</script>

<style>

</style>