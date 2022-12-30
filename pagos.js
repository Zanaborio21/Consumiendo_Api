const pagis_api='http://127.0.0.1:8000/pagis/pago/';
const palhtml=document.querySelector("#pagos")
const token=localStorage.getItem("token")
    fetch(`${pagis_api}`,{
    method:'GET',
    headers:{
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,}
    })
    .then((response) => response.json())
    .then(data=>{const tpl=(data.results).map((servicio)=>
        `<ul class="list-group list-group-flush">
        <li class="list-group-item">Id del Pago: ${servicio.id}</li>
        <li class="list-group-item">Monto: ${servicio.monto}</li>
        <li class="list-group-item">Fecha de Expiracion: ${servicio.fecha_expiracion}</li>
        <li class="list-group-item">Id Usuario: ${servicio.service_id}</li>
        </ul>`)
    palhtml.innerHTML=`<div class="card" style="width: 18rem;">${tpl}</div>`});



    // .then(data => console.log(data.results))
    // .then(data => console.log())
    // .then(data=> {const tpl=data.map((elemento)=>`${elemento}`);
    // palhtml.innerHTML=`${tpl}`})
console.log(palhtml)

