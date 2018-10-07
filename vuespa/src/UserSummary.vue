<template>
    <div class="user-summary">
        id: {{usr.id}}, ville: {{usr.address.city}}, 
        email: <router-link v-bind:to="`/users/${usr.id}`">{{usr.email}}</router-link> <br /> 
        <button v-on:click="acceptInvitation">Accept invit</button>
    </div>
</template>

<script>
    export default {
        name: 'user-summary',
        props: ['usr'],
        methods: {
            // Permet d'emettre un event avec $emit
            acceptInvitation: function () {
                this.$emit('accept');
            }
        }
    }
</script>

<style>
    .user-summary {
        border: 2px solid grey;
        margin: 10px;
        padding: 15px;
        width: 250px;
        float: left;
    }
</style>