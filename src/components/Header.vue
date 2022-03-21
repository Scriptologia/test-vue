<template>
    <header>
        <div class="bg-light">
            <div class="container-lg">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand d-flex align-items-center" href="#">
                        <img src="@/assets/logo.png" alt="" class="d-inline-block align-text-top avatar">
                        Test-vue
                    </a>
                    <span class="navbar-toggler navbar-toggler-icon" data-bs-toggle="collapse"
                          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                          aria-label="Toggle navigation"></span>
                    <div class="collapse navbar-collapse justify-content-end px-3 mobile-menu" id="navbarNav">
                        <div class="navbar-nav">
                            <!--<router-link to="/home" class="nav-link">Home</router-link>-->
                            <!--<router-link to="/login" class="nav-link">Login</router-link>-->
                            <a class="nav-link" href="#">Link 1</a>
                            <a class="nav-link" href="#">Link 2</a>
                            <a class="nav-link" href="#">Link 3</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown" v-if="user">
                        <a class="navbar-nav nav-link dropdown-toggle d-inline-flex align-items-center" href="#"  data-bs-toggle="dropdown" role="button" aria-expanded="false">
                            <a class="nav-link d-none d-lg-inline" href="#">{{user.email}}</a>
                            <div class="border border-info rounded-circle d-flex justify-content-center align-items-center overflow-hidden avatar">
                               <img src="@/assets/avtar.png" class="img-fluid img-back" alt="">
                            </div>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" @click="Exit">
                            logout
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    import {mapState} from 'pinia'
    import {useUserStore} from '@/stores/user'
    export default {
        name: "Header",
        data(){
            return {
            }
        },
        methods: {
            Exit(){
                this.logout()
                if(!this.user) this.$router.push({name: 'Login'});
            }
        },
        computed: {
            ...mapState(useUserStore,['user', 'logout'])
        }
    }
</script>

<style lang="scss">
    .avatar {width:50px;height:50px;}
    @media screen and (max-width: 992px) {
        .mobile-menu {
            position: absolute;
            top: 87px;
            background-color: rgb(248, 249, 250);
            width: 100%;
        }
    }
</style>