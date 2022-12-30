var formulario = document.getElementById('formulario');
var url='http://127.0.0.1:8000/pagis/pago/';
var token=localStorage.getItem("token");
var user_id=localStorage.getItem("id");
var fecha = new Date();
var hoy = fecha.toISOString().slice(0, 10);

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var datos= new FormData (formulario)
    datos.append('user_id',user_id)
    datos.append('fecha_pago',hoy)
    

    fetch('http://127.0.0.1:8000/pagis/pago/',{
        method:'post',
        headers:{
            Authorization: `Bearer ${token}`,},
        body:datos    
    })
        .then(res=>res.json())
        // .then(data=>{console.log(data);})
})

        












// const pagis_api='http://127.0.0.1:8000/pagis/pago/';
// const palhtml=document.querySelector("#pagos")
// const token=localStorage.getItem("token")
//     fetch(`${pagis_api}`,{
//     method:'GET',
//     headers:{
//         "Content-type": "application/json",
//         Authorization: `Bearer ${token}`,}
//     })