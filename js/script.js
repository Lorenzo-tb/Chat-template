let checkbox = document.getElementById("checkbox");
let divSenha = document.getElementById("senha");


checkbox.onclick = function(){

    if(checkbox.checked){
        let col3 = document.createElement("div");
        let col6 = document.createElement("div");
        let divInput = document.createElement("div");
        let input = document.createElement("input");
        let divGeral = document.createElement("div");

        col3.setAttribute("class", "col-md-3");
        col6.setAttribute("class", "col-md-6");
        divInput.setAttribute("class", "input-group mb-3");
        input.setAttribute("class", "form-control meu-input");
        input.setAttribute("placeholder", "SENHA");
        input.setAttribute("type", "text");
        divGeral.setAttribute("class", "row m0");


        divInput.appendChild(input);
        col6.appendChild(divInput);
        
        divGeral.appendChild(col3);
        divGeral.appendChild(col6);
        divSenha.appendChild(divGeral);
    }else{
        divSenha.innerHTML = "";
    }
}

/*          <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="input-group mb-3">
                    <input type="text" class="form-control meu-input" placeholder="NOME" aria-label="Username" aria-describedby="basic-addon1">
                </div>
            </div>
            <div class="col-md-3"></div>*/