
// htmlSelect.innerHTML += `<option value="${record.id}">${record.name}</option>`

var formulario = document.getElementById('formulario');


var respuesta = document.getElementById('alerta');



formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('clicksaso')
    
    var datos= new FormData (formulario)
    //datos.append('email','zana@gmail.com')
    
    
    
    
    //console.log(datos)
    //console.log(datos.get('email'))
    //console.log(datos.get('password'))

    fetch('http://127.0.0.1:8000/users/login/',{
        method:'POST',
        body: datos
    })
        .then( res => res.json())
        .then( data=> {
            console.log(data);
            localStorage.setItem('token',data.token.access);
            localStorage.setItem('superuser',data.superuser);
            localStorage.setItem('id',data.id); 
            localStorage.setItem('username',data.username);   
            window.location.replace('servicios.html');  
        })
})


// const data = await response.json();
// if (data) {
//     console.log(data);
//     setToken(data.access);
//     localStorage.setItem('token',data.access)
// const data = await response.json();
// if (data) {
//     console.log(data);
//     setToken(data.access);
// }