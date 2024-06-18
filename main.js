const root = Vue.createApp({
  data(){
    return{
         menu:'closed',
         iconaMenu:'fas fa-bars',
        socialIcons:[
            {id:1,icona:'fa-brands fa-facebook',etichetta:'Facebook',link:'https://www.facebook.com/sebaminotti'},
            {id:2,icona:'fa-brands fa-instagram',etichetta:'Instagram',link:'https://www.instagram.com/pix_oliver82'},
            {id:3,icona:'fa-brands fa-linkedin',etichetta:'Linkedin',link:'https://linkedin.com/in/sebastiano-minotti-69154b2a8/'},
            {id:4,icona:'fa-brands fa-github',etichetta:'Github',link:'https://github.com/sebaMinotti'},
         ],
         linkNav:[
          {id:1,titolo:'Home',link:''},
          {id:1,titolo:'Servizi',link:''},
          {id:1,titolo:'Contatti',link:''},
          {id:1,titolo:'Di cosa mi occupo',link:''},
         ],
    }
  },
  mounted(){
      let titolo = document.querySelector('#titolo')
      let testoTitolo = document.querySelector('#intestazione')
       
      setTimeout(() => {
              titolo.style.cssText='margin-left:0; transition:3s'
              testoTitolo.style.cssText='color:#ff8c00;transition:6s;'
      }, 3000);
  },
  methods:{
    toggleMenu(){
      let icona = document.querySelector('#iconaMenu');
    if(this.menu=='closed'&&this.iconaMenu=='fas fa-bars'){
      this.menu='open', this.iconaMenu='fa-solid fa-xmark'
    } else if(this.menu=='open' && this.iconaMenu=='fa-solid fa-xmark'){
      this.menu='closed' 
      this.iconaMenu='fas fa-bars'
    }
   
    }
  }

})

root.mount('#root')