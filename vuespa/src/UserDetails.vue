<template>
    <div>
        id: {{usr.id}}, ville: {{usr.address.city}}, email: {{usr.email}} 
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
    
</style>