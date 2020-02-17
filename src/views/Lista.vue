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
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="usuario of usuarios" :key="usuario.login">
                            <td>{{ usuario.nome }}</td>
                            <td>{{ usuario.login }}</td>
                            <td>{{ usuario.email }}</td>
                            <td>{{ usuario.senha }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>

import Usuario from '@/services/usuarios'

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

        buscar: function (event) {
            if (event) {
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
            }
        }
    }

}

</script>

<style>

</style>