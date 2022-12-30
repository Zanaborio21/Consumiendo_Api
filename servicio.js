const servis_api='http://127.0.0.1:8000/servis/servicio/';
const palhtml=document.querySelector("#servicios")

fetch(`${servis_api}`)
    .then((response) => response.json())
    .then((servicios) => {
        const tpl = servicios.map((servicio)=>
        `<div class="card w-50"><div class="card-body"><h5 class="card-title">${servicio.name}</h5> 
        <p>${servicio.description}</p> <a href="${servicio.logo}" class="btn btn-primary">logo</a></div></div> `);
        palhtml.innerHTML=`${tpl}`
    });

console.log(palhtml)