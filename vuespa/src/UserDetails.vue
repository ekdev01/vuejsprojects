<template>
    <div>
       <h2>Détails de l'utilisateur {{this.$route.params.id}}</h2>
       <p><a href="#">Retour</a></p>
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