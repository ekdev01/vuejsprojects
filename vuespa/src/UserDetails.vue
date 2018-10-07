<template>
    <div>
       <h2>Détails de l'utilisateur {{this.$route.params.id}}</h2>
       <p><router-link to="/users">Retour</router-link></p>
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