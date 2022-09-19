const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        output1:"You are learning vue js",
        output2:"You are a master now!!",
        name:'',
        confirmName:'',
        boxActiveA:false,
        boxActiveB:false,
        boxActiveC:false
      };
    },

    methods: {
        outputVue(){
            const randNUmber = Math.random();
            if(randNUmber< 0.6){
                return this.output1
            }else{
                return this.output2
            }
        },
        addButton(num){
            return this.counter =  this.counter + num
        },
        removeButton(num){
            return this.counter = this.counter - num
        },
        setNaame(event,lastName){
            return this.name = event.target.value + lastName
        },
        finalConfirmName(){
          return this.confirmName = this.name 
        },
        clearInput(){
            return this.name = ""
        },
        boxActive(box){
            if(box === 'A'){
                console.log("clicked")
                this.boxActiveA =! this.boxActiveA
            }else if(box === 'B'){
                this.boxActiveB =! this.boxActiveB
            }else if(box === 'C'){
                this.boxActiveC =! this.boxActiveC
            }
        }
    },

    watch:{
        counter(value){
            if(value > 50){
                this.name = "Mr." + this.name;
                this.boxActiveA='true'
            } 
        },

    },

    computed:{
        fullName(){
            if(this.name === ""){
                return ""
            }else{
                return this.name + " " + "Ahamed"
            }
        },
        boxAClasses(){
            return {activea:this.boxActiveA}
        },
        boxBClasses(){
            return {activea:this.boxActiveB}
        },
        boxCClasses(){
            return {activea:this.boxActiveC}
        }
        
        
    }
  });
  
  app.mount('#events');
  