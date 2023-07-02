console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // producto_update.html?id=1
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        id:0,
        nombre:"", 
        especialidad:"",
        senority:"",
        disponibilidad:"",
        correo:"",
        imagen:"",
        url:'http://1nterandopa.pythonanywhere.com/candidatos/'+id,
   
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id=data.id
                    this.nombre = data.nombre;
                    this.especialidad=data.especialidad
                    this.senority=data.senority
                    this.disponibilidad=data.disponibilidad
                    this.correo=data.correo
                    this.imagen=data.imagen                    
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            let candidato = {
                nombre: this.nombre,
                especialidad: this.especialidad,
                senority: this.senority,
                disponibilidad: this.disponibilidad,
                correo: this.correo,
                imagen: this.imagen
            }
            var options = {
                body: JSON.stringify(candidato),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Candidato modificado")
                    window.location.href = "./candidatos.html"; // navega a productos.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')
