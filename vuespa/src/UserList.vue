<template>
    <div>
        <ul>
            <li v-for="user in data">
                <user-details v-bind:usr="user" v-on:accept="registerUser(user)"></user-details>
            </li>
        </ul>
    </div>
</template>

<script>
    import UserDetails from './UserDetails.vue';
    export default {  
        name: 'user-list',
        components: {
            'user-details': UserDetails
        },
        props: ['data', 'usersComing'],
        methods: {
            registerUser: function (user) {
                console.log(user);
                this.usersComing.push(user);
                console.log(this.usersComing);
            }
        },
        data: function() {
            return {
                usersWhoWillCome: []
            }
        }
    }
</script>

<!-- Optional -->
<style></style>