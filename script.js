document.addEventListener('DOMContentLoaded', () =>{
    const inputSenha = document.getElementById("senha");
    const btnSubmit = document.getElementById("btnSubmit");
    const form = document.getElementById("formCadastro");
    
    const reqlength = document.getElementById("req-length");
    const requpper = document.getElementById("req-upper");
    const reqnumber = document.getElementById("req-number");
    const reqspecial = document.getElementById("req-special");

    inputSenha.addEventListener("input", () => {
        const valor = inputSenha.value;

        const hasLength = valor.length >= 8;
        alternarClasse(reqlength,hasLength)

        const hasUpper = /[A-Z]/.test(valor);
        alternarClasse(requpper,hasUpper)

        const hasNumber = /\d/.test(valor);
        alternarClasse(reqnumber,hasNumber)

        const hasSpecial = /[!@#$%&*()_\-=+{}<>,.|]/.test(valor);
        alternarClasse(reqspecial,hasSpecial)

        if(hasLength && hasUpper && hasNumber && hasSpecial){
            btnSubmit.removeAttribute('disabled')
            btnSubmit.style.cursor='pointer'


        }else{
            btnSubmit.setAttribute('disabled','true')
            btnSubmit.style.cursor="not-allowed"

        }
})

function alternarClasse (elemento,estaValido){
    const icone = elemento.querySelector('i');

    if(estaValido){
        elemento.classList.add('valid')
        elemento.classList.remove('invalid')
        icone.classList.remove('ph-circle')
        icone.classList.add('ph-check-circle')
    }
    else{
        elemento.classList.remove('valid')
        elemento.classList.add('invalid')
        icone.classList.remove('ph-check-circle')
        icone.classList.add('ph-circle')
    }
}

form.addEventListener ('submit' , (e) => {
    e.preventDefault()
    alert('Formulário enviado com sucesso')
})

})


