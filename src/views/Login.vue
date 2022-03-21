<template>
    <main>
        <div class="container-lg">
            <section class="d-flex p-2 align-items-center section1 my-4">
                <div class="col-md col-12 p-3 position-relativee d-flex justify-content-center flex-column bg-light bg-opacity-50"
                     data-aos="fade-right"
                     data-aos-offset="300"
                     data-aos-easing="ease-in-sine">
                    <div class="tab-pane fade show" v-if="signUp">
                        <form class="needs-validation" novalidate @submit.prevent="formSubmit">
                            <div class="mb-3">
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">Dropdown
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#">Text 1</a></li>
                                    <li><a class="dropdown-item" href="#">Text 2</a></li>
                                    <li><a class="dropdown-item" href="#">Text 3</a></li>
                                </ul>
                            </div>
                            <div class="mb-3">
                                <label for="username" class="form-label">Username</label>
                                <input type="text" class="form-control" id="username" v-model="username" required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                                       v-model="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" v-model.number="password" required>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="terms_checkbox" v-model="terms_checkbox" required>
                                <label class="form-check-label" for="terms_checkbox">terms checkbox</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Sing up</button>
                        </form>
                    </div>
                    <div class="tab-pane fade show" v-else>
                        <form  class="needs-validation" novalidate @submit.prevent="formSubmit">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email2" aria-describedby="emailHelp2"
                                       v-model="email" required>
                                <div id="emailHelp2" class="form-text">We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="password2" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password2" v-model.number="password" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Sing in</button>
                        </form>
                    </div>
                    <a href="#" @click="signUp = !signUp" v-if="signUp">Already have an account?</a>
                    <a href="#" v-else @click="signUp = !signUp">Sing up?</a>
                </div>
                <div class="p-3 col-md d-flex img-background justify-content-center">
                    <img src="@/assets/logo.png" alt="" class="img-fluid img-back">
                </div>
            </section>
            <section class="p-2 my-4">
                <h1>Title</h1>
                <h3>Subtitle</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quidem?</p>
                <div class="d-flex align-items-center">
                    <div class="p-3 col-md d-flex img-background justify-content-center">
                        <img src="@/assets/logo.png" alt="" class="img-fluid img-back">
                    </div>
                    <div class="col-md col-12 p-3 position-relativee d-flex justify-content-center flex-column bg-warning bg-opacity-25"
                         data-aos="fade-left"
                         data-aos-offset="300"
                         data-aos-duration="500">
                        <ol>
                            <li class="pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
                                doloribus excepturi illo in itaque libero, minus molestiae quos repellendus repudiandae.
                            </li>
                            <li class="pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                                consequuntur dolorum eos harum, labore nesciunt perferendis recusandae rem voluptates
                                voluptatibus.
                            </li>
                            <li class="pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
                                harum minus qui tempore. Ex, illum possimus? Aliquam maiores mollitia nam!
                            </li>
                            <li class="pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores,
                                aut autem cumque ducimus eveniet itaque quam reprehenderit sint sit.
                            </li>
                            <li class="pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto
                                consectetur dicta facilis inventore, porro! Aliquam dignissimos eos nulla veniam.
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
    import Header from '@/components/Header.vue'
    import {mapState, mapActions} from 'pinia'
    import {useUserStore} from '@/stores/user'
    export default {
        name: "Login",
        components: {
            Header
        },
        data(){
            return {
                signUp: true,
                email: '',
                password:'',
                username:'',
                terms_checkbox:false
            }
        },
        methods: {
            ...mapActions(useUserStore,['setUser']),
            formSubmit(){
                let self = this;
                (function () {
                    'use strict'
                    // Fetch all the forms we want to apply custom Bootstrap validation styles to
                    var forms = document.querySelectorAll('.needs-validation')
                    // Loop over them and prevent submission
                    Array.prototype.slice.call(forms)
                        .forEach(function (form) {
                            form.addEventListener('submit', function (event) {
                                if (!form.checkValidity()) {
                                    event.preventDefault()
                                    event.stopPropagation()
                                }
                                else {
                                    const us ={
                                        password: self.password,
                                        username: self.username,
                                        email: self.email,
                                        terms_checkbox: self.terms_checkbox,
                                    }
                                    self.setUser(us)
                                    if(self.user) self.$router.push({name: 'Home'});
                                }
                                form.classList.add('was-validated')
                            }, false)
                        })
                })()
            }
        },
        computed: {
        ...mapState(useUserStore,['getUser', 'user'])
        }
    }
</script>

<style lang="scss">
main {
    flex:1 1 100%;
}
.section1{min-height:500px;}
@media screen and (max-width: 768px) {
    .img-background {
        opacity: .2;
        position: absolute;
        left: 50%;
        width: 100%;
        transform: translate(-50%,0%);
        z-index: -1;
    }
}
</style>