const { createApp } = Vue

    createApp({
        data() {
            return {
                response : '',
                mail: [

                ]
            }
        },
        methods: {
            getMail(){
                for (let i = 0; i < 10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                    this.response = response.data.response;
                    console.log(response.data);
                    this.mail.push(this.response);
                });
                }
            }
        },

        created(){
            this.getMail();
        },
    }).mount('#app')