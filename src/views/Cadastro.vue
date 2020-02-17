<template>
    <section class="layout-content">
        <div class="container">
            <nav class="navbar navbar-expand-md bg-light col-lg-6">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <i class="fas fa-caret-right"></i>
                        <span> Cadastrar Usuário</span>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="container">

            <ul>
                <li v-for="(erro, index) of errors" :key="index">
                    campo <b>{{ erro.field }}</b> - {{ erro.defaultMessage }}
                </li> 
            </ul>

             <form class="col col-lg-6" @submit.prevent="salvar">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Nome Completo" v-model="usuario.nome">
                </div>
                <div class="form-group">
                    <input type="text" id="login" class="form-control" placeholder="Login" v-model="usuario.login">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="E-mail" v-model="usuario.email">
                    <small class="text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Senha" v-model="usuario.senha">
                </div>
                <button type="submit" class="btn btn-outline-success mb-2">Cadastrar <i class="fas fa-check-circle"></i></button>
             </form>
        </div>
    </section>
</template>

<script>

import Usuario from '@/services/usuarios'

import Swal from 'sweetalert2'

export default {

    data(){
        return {
            usuarios: [],
            usuario: {
                nome: '',
                login: '',
                email: '',
                senha: ''
            },
            errors: []
        }
    },

    mounted(){
        this.lista()
    },

    methods:{

        lista(){
        Usuario.listar().then(resposta => {
            this.usuarios = resposta.data
        }).catch(e => {
            console.log(e)
        })
        },

        salvar(){
            var existeLogin = false;
            var login = document.getElementById('login');
            for (var u in this.usuarios) {
                if(this.usuarios[u].login == login.value){
                    existeLogin = true;
                }
            }
            if(!existeLogin){
                // eslint-disable-next-line no-unused-vars
                Usuario.salvar(this.usuario).then(resposta => {
                    this.usuario = {}
                    Swal.fire('Cadastrado', '', 'success')
                    this.lista()
                    this.errors = []
                }).catch(e => {
                    this.errors = e.response.data.errors
                })
            }
            else{
                Swal.fire('Login já existente.', 'Por favor, escolha outro', 'warning')
            }
        }
    }

}

</script>