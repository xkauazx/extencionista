
        function expand(id) {
            const content = document.getElementById(id);
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        }
        
       
        
        
   
        document.addEventListener('DOMContentLoaded', function() {
            const expandedContents = document.querySelectorAll('.expanded-content');
            expandedContents.forEach(content => {
                content.style.display = 'none';
            });
        });

       let tamanhoFonte = 100;

function aumentarFonte() {
    if (tamanhoFonte < 150) {
        tamanhoFonte += 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
}

function diminuirFonte() {
    if (tamanhoFonte > 80) {
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
}

function alternarContraste() {
    document.body.classList.toggle("contraste");
}