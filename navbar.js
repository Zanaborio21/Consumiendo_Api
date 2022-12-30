// const palhtml=document.querySelector("#servicios");

// document.body.appendChild(palhtml.content);


let usuario=localStorage.getItem('username')
    if (usuario === null){
         usuario = '<a class="nav-link active" aria-current="page" href="index.html">index</a>' 
         }
let superuser=localStorage.getItem('superuser')
        if(superuser==null){
        superuser=`
        <a class="nav-link" href="servicios.html">Servicios</a>
        `}
        else if(superuser=='false'){
        superuser=`
        <a class="nav-link" href="servicios.html">Servicios</a>
        <a class="nav-link" href="pagos.html">Pagos</a>
        <a class="nav-link" href="crear_pago.html">Crear_Pago</a>
        <a class="nav-link" href="logout.html">logout</a>
        `}
        else if (superuser='true'){    
        superuser=`
        <a class="nav-link" href="servicios.html">Servicios</a>
        <a class="nav-link" href="pagos.html">Pagos</a>
        <a class="nav-link" href="crear_pago.html">Crear_Pago</a>
        <a class="nav-link" href="crear_servicio.html">Crear_Servicio</a>
        <a class="nav-link" href="logout.html">logout</a>        
        `}
        // else if(superuser='false'){
        // superuser=`
        // <a class="nav-link" href="servicios.html">Servicios</a>
        // <a class="nav-link" href="pagos.html">Pagos</a>
        // `}
        
//<li class="nav-item"><button class="btn btn-outline-warning" id="htmlLogout">Logout</button></li>


class NavBar extends HTMLElement {
     constructor(){
        super();
        
        this.innerHTML=`
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">       
                    <div class="navbar-nav">
                    <a class="nav-link">${usuario}</a>
                    ${superuser}
                    
                        
                    </div> 
                </div>
            </div>
        </nav>
        `
     }
}
// $("borrador").on('click',()=>{
//     localStorage.removeItem('id');
// })

// var htmlLogout = document.getElementById('#botonsito');


// htmlLogout.onclick = function (event) {
//     localStorage.removeItem('id');
//     window.location.reload();
//    }

    // if(views===false){
    //     views=`<a class="nav-link" href="servicios.html">Servicios</a>
    //     <a class="nav-link" href="pagos.html">Pagos</a>`}
    // else if(views=== null){
    //     views=`<a class="nav-link" href="servicios.html">Servicios</a>`}
        

    //  else if(views===true){
    //     views=`<a class="nav-link active" aria-current="page" href="index.html">index</a>
    //     <a class="nav-link" href="servicios.html">Servicios</a>
    //     <a class="nav-link" href="pagos.html">Pagos</a>
    //     <a class="nav-link" href="crear_pago.html">Crear_Pago</a>
    //     <a class="nav-link" href="crear_servicio.html">Crear_Servicio</a>`
    //  }
    //  else if(veiws===false){
    //     views=`<a class="nav-link active" aria-current="page" href="index.html">index</a>
    //     <a class="nav-link" href="servicios.html">Servicios</a>
    //     <a class="nav-link" href="pagos.html">Pagos</a>
    //     <a class="nav-link" href="crear_pago.html">Crear_Pago</a>`
    //  }



// class NavBar extends HTMLElement {
//     constructor(){
//         super();
//         this.innerHTML=
//         `<nav class="navbar navbar-expand-lg bg-body-tertiary">
//         <div class="container-fluid">
//           <a class="navbar-brand" href="#">Navbar</a>
//           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div class="navbar-nav">
//             <a class="nav-link active" aria-current="page" href="index.html">index</a>
//             ${vista}
//             <a class="nav-link">${usuario}</a>
              
//             </div>
            
//           </div>
//         </div>
//     </nav>`
//     }
// }

customElements.define('navbar-component',NavBar);