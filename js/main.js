const typed = new Typed('.typed',{
    strings: ["Full Stack", "Front End", "Back End"],

    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    loop:true,
    cursorChar: '|',
})
const form = document.getElementById( 'form' );


function sendMail(e){
    e.preventDefault();
    
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let message = document.getElementById('comentario').value

    if (!name || !email || !message) {
        alert("Por favor llenar los campos")
        return
    }

    let params = {
        name, 
        email, 
        message
    }

    const serviceID = 'service_8n905uh';
    const template = 'template_yk2bsco';

    emailjs.send(serviceID,template,params)
    .then(
        res =>{
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('comentario').value ='';
            console.log(res);
            alert('realizado')
        }
    )
    .catch((err) => console.log(err));
}

form.addEventListener('submit',sendMail)