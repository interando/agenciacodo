const { createApp } = Vue
  createApp({
    data() {
      return {
        candidatos:[],
        //url:'http://localhost:5000/productos', 
   // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
        url:'https://1nterandopa.pythonanywhere.com/candidatos',   // si ya lo subieron a pythonanywhere
        error:false,
        cargando:true,
        disponible:true,
        /*atributos para el guardar los valores del formulario */
        id:0,
        nombre:"", 
        especialidad:"",
        senority:"",
        disponibilidad:"",
        correo:"",
        imagen:"",
    }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.candidatos = data;
                this.cargando=false
            })
            .catch(err => {
                console.error(err);
                this.error=true              
            })
    },
    eliminar(id) {
        const url = this.url+'/' + id;
        var options = {
            method: 'DELETE',
        }
        fetch(url, options)
            .then(res => res.text()) // or res.json()
            .then(res => {
         alert('Candidato Eliminado')
                location.reload(); // recarga el json luego de eliminado el registro
            })
    },
    grabar(){
        let candidato = {
            nombre: this.nombre,
            especialidad: this.especialidad,
            senority: this.senority,
            disponibilidad: this.disponibilidad,
            correo: this.correo,
            imagen: this.imagen
        }

            var options = {
            body:JSON.stringify(candidato),
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow'
        }
        fetch(this.url, options)
            .then(function () {
                alert("Candidato grabado")
                window.location.href = "./candidatos.html";  // recarga candidatos.html
            })
            .catch(err => {
                console.error(err);
                alert("Error al Grabar")  // puedo mostrar el error tambien
            })  
            
        }
},
created() {
    this.fetchData(this.url)
},
}).mount('#app')
