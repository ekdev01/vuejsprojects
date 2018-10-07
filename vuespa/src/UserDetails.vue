<template>
    <div class="user-details">
        id: {{usr.id}}, ville: {{usr.address.city}}, email: {{usr.email}} <br /> 
        <button v-on:click="acceptInvitation">Accept invit</button>
    </div>
</template>

<script>
    export default {
        name: 'user-detials',
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
    .user-details {
        border: 2px solid grey;
        margin: 10px;
        padding: 15px;
        width: 250px;
        float: left;
    }
</style>