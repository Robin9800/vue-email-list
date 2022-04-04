// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina
// all'interno di una lista.
const app = new Vue({
    el: '#app',
    data: {
        email: '',
        arrayEmail: []
    },
    mounted(){
        //Ciclo che pusha dentro all'array un email generata a caso utilizzando l'axios di boolean per le email
        for(let i=0; i< 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) =>{
                const result = response.data
                this.email = result.response
                this.arrayEmail.push(this.email);
                console.log(this.arrayEmail);
            })
        }
    }
})