const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll("aba-conteudo")

for(let i=0;1 <botoes.length;+++){
    botoes[i].onclick function(){

for(let j=0; <botoes.length;j+++){
  botoes(j).classlist.remove("ativo");
  textos(j).classlist.remove("ativo");
}
   
botoes(i).classlist.add("ativo");
textos(i).classlist.add("ativo");
}
}      
  
const constadores=document.querySelectorAll(".contador");
const tempoObjetivos1=new Date("2010-10-05T00:00:00");
const tempoObjetivos2=new Date("2024-12-05T00:00:00");
 const tempoObjetivos3=new date("2024-12-30T00:00:00");
 const tempoObjetivos4=new date("2025-10-05T00:00:00");

 const tempos =(tempoObjetivos1, tempoObjetivos2, tempoObjetivos3, tempoObjetivos4,);


 function calculatempo(tempoObjetivos){
    let tempoAtual =new date();
    let tempoFinal =tempoObjetivo- tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %= 60
    minutos  %= 60;
    horas %= 24;
    if (tempoFinal > 0){
      return (dias,horas,minutos,segundos);
    } else
      return [0,0,0,01];
    }
  }

  function atualizarCronometro(){
     for( let i=0; i<constadores.length;i++){
      document.getElementById("dias"+i).textoContent= calculatempo(tempos[i]) [0];
      document.getElementById("horass"+i).textContent=calculatempo(tempos[i]) [1];
      document.getElementById("min"+i).textContent=calculatempo(tempos[i]) [2];
      document.getElementById("seg"+i).textContent=calculatempo(tempos[1]) [3];
    }
}

function comecacronometro(){
  atualizarCronometro();
   setInterval(atualizarCronometro,  1000)
    }

    comecacronometro();










 
