var formulario = document.getElementById('formulario');
var url='http://127.0.0.1:8000/servis/servicio/';
var token=localStorage.getItem("token");


formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var datos= new FormData (formulario)

    fetch(url,{
        method:'post',
        headers:{
            Authorization: `Bearer ${token}`,},
        body:datos    
    })
        .then(res=>res.json())
        // .then(data=>{console.log(data);})
})