const app = new Vue({
    el:'#app',
    data:{
        titulo:'GYM con Vue',
        tareas:[],
        nuevaTarea:''
    },
    methods: {
        agregarTarea: function(){
            //console.log('diste click', this.nuevaTarea);
            this.tareas.push({
                nombre:this.nuevaTarea,
                estado:false
            });
            this.nuevaTarea='';
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        editarTarea: function(index){
           this.tareas[index].estado=true;
           localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        eliminarTarea: function(index){
            this.tareas.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
         }
    },
    created: function() {
        let datosBD = JSON.parse(localStorage.getItem('gym-vue'));
        if (datosBD === null) {
            this.tareas=[];
        }else{
            this.tareas= datosBD;
        }
    },
});