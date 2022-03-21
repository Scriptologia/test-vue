import {defineStore} from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state()  {
        return {
            user: {
                password: 1111,
                username: 'name',
                email: 'aaa@mail.ru',
                terms_checkbox: true
            }
        }
    },
    getters: {
        getUser : (state) =>state.user
    },
    actions: {
        setUser(user) {
            this.user = user
        },
        logout() {
            this.user = false
        }
    }
})