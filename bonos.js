//-----------tela1---------------------------------------------------------------------   
var btn = document.querySelector(".btn")
var h1 = document.querySelector(".h1").textContent;
var fala ="seja bem vindo ao bonos do canal estudo bíblico"
const a1=document.querySelector(".a1")
const a2=document.querySelector(".a2")
const a3=document.querySelector(".a3")
const btn2= document.querySelector(".btn2")
const btn3= document.querySelector(".btn3")
const som = document.querySelector(".som")
const lista = document.querySelector(".lista")




var array=[
/*0*/"boa madrugada",
/*1*/"boa madrugada",
/*2*/"boa madrugada",
/*3*/"boa madrugada",
/*4*/"boa madrugada",
/*5*/"bom dia",
/*6*/"bom dia",
/*7*/"bom dia",
/*8*/"bom dia",
/*9*/"bom dia",
/*10*/"bom dia",
/*11*/"bom dia",
/*12*/"boa tarde",
/*13*/"boa tarde",
/*14*/"boa tarde",
/*15*/"boa tarde",
/*16*/"boa tarde",
/*17*/"boa tarde",
/*18*/"boa noite",
/*19*/"boa noite",
/*20*/"boa noite",
/*21*/"boa noite",
/*22*/"boa noite",
/*23*/"boa noite",
]

var lovor=[
/*0*/"Quando o Mundo Cai ao Meu Redor.mp3",
/*1*/"Vai Valer a Pena.mp3",
/*2*/"Entre a Fé e a Razão.mp3",
/*3*/"Maria Marçal Deserto.mp3",
/*4*/"Rompendo em fé.mp3",
/*5*/"GERSON RUFINO.mp3",
/*6*/"Gratidão.mp3",
/*7*/"ELE PASSOU LÁ EM CASA.mp3",
/*8*/"Com Ele.mp3",
/*9*/"A Melhor Escolha.mp3",
/*10*/"O Amigo.mp3",
/*11*/"Libertação.mp3",
/*12*/"O Rei e o Ladrão.mp3",
/*13*/"Sem Palavras.mp3",
/*14*/"Deus e Eu.mp3",
/*15*/"Geração Florida.mp3",
/*16*/"Quase Morri.mp3",
/*17*/"FRENTE A FRENTE.mp3",
/*18*/"CONFIDENCIA.mp3",
/*19*/"Sabe Filho.mp3",
/*20*/"jo.mp3",
/*21*/"É adorar.mp3",
/*22*/"Sinceridade.mp3",
/*23*/"Paulo e Silas.mp3",
/*24*/"Fica Tranquilo.mp3",
/*25*/"Que amor é esse.mp3",
/*26*/"Minha essência.mp3",
/*27*/"teu amor.mp3",
/*28*/"Tua Presença.mp3",
/*29*/" Além do Que Sonhei.mp3",
/*30*/"Quem Era Eu.mp3",
/*31*/"Liberta Me de Mim.mp3",
/*32*/"Aquieta Minhalma.mp3",
/*33*/"Quero Conhecer Jesus.mp3",
/*34*/"Não Pare.mp3",
/*35*/"ISADORA POMPEO.mp3",
/*36*/"Ninguém Explica Deus.mp3",
/*3837*/"arvore Cortada.mp3",
/*39*/"Me ajude a melhorar.mp3",
/*40*/"",
/*41*/"",
/*42*/"",
/*43*/"",
/*44*/"",
/*45*/"",
/*46*/"",
/*47*/"",
/*48*/"",
/*49*/"",
/*50*/"",
/*5*/"",


]
var dat= new Date()
var horas =""



btn.addEventListener("click",() =>{
var input = document.querySelector(".input").value



document.querySelector(".tela1").style.display="block"


horas = dat.getHours()

var falou= array[horas];

setInterval(() => {

        
       
      
        
        if(horas==0){
          document.body.style.backgroundColor="rgb(48, 65, 75)"
        };
        if(horas==1){
          document.body.style.backgroundColor="rgb(48, 65, 75)"
        };
        if(horas==2){
          document.body.style.backgroundColor="rgb(48, 65, 75)"
        };
        if(horas==3){
          document.body.style.backgroundColor="rgb(48, 65, 75)"
        };
        if(horas==4){
          document.body.style.backgroundColor="rgb(48, 65, 75)" 
        };
        if(horas==5){
          document.body.style.backgroundColor="rgb(20, 128, 191)" 
        };
        if(horas==6){
          document.body.style.backgroundColor="rgb(20, 128, 191)" 
        };
        if(horas==7){
          document.body.style.backgroundColor="rgb(20, 128, 191)" 
        };
        if(horas==8){
          document.body.style.backgroundColor="rgb(46, 175, 250)" 
        };
        if(horas==9){
          document.body.style.backgroundColor="rgb(46, 175, 250))" 
        };
        if(horas==10){
          document.body.style.backgroundColor="rgb(46, 175, 250))"
        };
        if(horas==11){
          document.body.style.backgroundColor="rgb(46, 175, 250)"
        };
        if(horas==12){
          document.body.style.backgroundColor="rgb(46, 175, 250)" 
        };
        if(horas==13){
          document.body.style.backgroundColor="rgb(46, 175, 250)" 
        };
        if(horas==14){
          document.body.style.backgroundColor="rgb(46, 175, 250)" 
        };
        if(horas==15){
          document.body.style.backgroundColor="rgb(55, 55, 132)" 
        };
        if(horas==16){
          document.body.style.backgroundColor="rgb(55, 55, 132)" 
        };
        if(horas==17){
          document.body.style.backgroundColor="rgb(55, 55, 132)"
        };
        if(horas==18){
          document.body.style.backgroundColor="rgb(55, 55, 132)" 
        };
        if(horas==19){
          document.body.style.backgroundColor="rgb(48, 65, 75)"
        };
        if(horas==20){
          document.body.style.backgroundColor="rgb(48, 65, 75)" 
        };
        if(horas==21){
          document.body.style.backgroundColor="rgb(48, 65, 75)" 
        };
        if(horas==22){
          document.body.style.backgroundColor="rgb(48, 65, 75)" 
        };
        if(horas==23){
          document.body.style.backgroundColor="rgb(48, 65, 75)" 
        };
        var setinput= document.querySelector(".input")
        setinput.value=""
       

    }, 1000);
    






if ('speechSynthesis' in window) {
const utterance = new SpeechSynthesisUtterance(falou+" "+input+" "+fala);
utterance.lang = 'pt-BR';

speechSynthesis.speak(utterance);
} else {
alert('Desculpe, seu navegador não suporta a API Web Speech.');
}

document.querySelector(".caixa").style.display="none";
document.querySelector(".menu").style.display="block"

var timer=0
var time = setInterval(() => {
if(timer==0){

const utterance = new SpeechSynthesisUtterance("menu principal volta para o devocional ");
utterance.lang = 'pt-BR';

speechSynthesis.speak(utterance);
a1.style.backgroundColor="gold"
a2.style.backgroundColor=""
a3.style.backgroundColor=""
timer++

}else{
if(timer==1){
a1.style.backgroundColor=""
a2.style.backgroundColor="gold"
a3.style.backgroundColor=""
const utterance = new SpeechSynthesisUtterance("mensagem você tem as opções das mensagem que e a palavra de Deus");
utterance.lang = 'pt-BR';

speechSynthesis.speak(utterance);
timer++
}else{
if(timer==2){
a1.style.backgroundColor=""
a2.style.backgroundColor=""
a3.style.backgroundColor="gold"
const utterance = new SpeechSynthesisUtterance("som gospel você  tem as 40 opções seleção  de escolher os lovores que quer ouvir,  ou escolher auto play pra tocar a lista");
utterance.lang = 'pt-BR';

speechSynthesis.speak(utterance);
timer++
}else{
if(timer==3){
const utterance = new SpeechSynthesisUtterance("este saite não tem laique pois ele foi feito para honra e gloria pra Jesus então da um gloria pra jesus ");
utterance.lang = 'pt-BR';

speechSynthesis.speak(utterance);
a1.style.backgroundColor=""
a2.style.backgroundColor=""
a3.style.backgroundColor=""
timer=0
clearInterval(time)

};

};

};

}



 
}, 7000); 


});




  a2.addEventListener("click", () =>{

    document.querySelector(".tela1").style.display="none"
    document.querySelector(".tela2").style.display="block"

  });
    
  a3.addEventListener("click", () =>{
    document.querySelector(".som").classList.add("show")
    document.querySelector(".primeiro-audio").style.display="none"
    
    
  
  })

// sistema de audio -seleção----tela1---------
var audio = document.querySelector(".audio")
var audio1 = document.querySelector(".audio1")
var l1 = document.querySelector(".l1")
var l2 = document.querySelector(".l2")
var l3 = document.querySelector(".l3")
var l4 = document.querySelector(".l4")
var l5 = document.querySelector(".l5")
var l6 = document.querySelector(".l6")
var l7 = document.querySelector(".l7")
var l8 = document.querySelector(".l8")
var l9 = document.querySelector(".l9")
var l10 = document.querySelector(".l10")
var l11 = document.querySelector(".l11")
var l12 = document.querySelector(".l12")
var l13 = document.querySelector(".l13")
var l14 = document.querySelector(".l14")
var l15 = document.querySelector(".l15")
var l16 = document.querySelector(".l16")
var l17 = document.querySelector(".l17")
var l18 = document.querySelector(".l18")
var l19 = document.querySelector(".l19")
var l20 = document.querySelector(".l20")
var l21 = document.querySelector(".l21")
var l22 = document.querySelector(".l22")
var l23 = document.querySelector(".l23")
var l24 = document.querySelector(".l24")
var l25 = document.querySelector(".l25")
var l26 = document.querySelector(".l26")
var l27 = document.querySelector(".l27")
var l28 = document.querySelector(".l28")
var l29 = document.querySelector(".l29")
var l30 = document.querySelector(".l30")
var l31 = document.querySelector(".l31")
var l32 = document.querySelector(".l32")
var l33 = document.querySelector(".l33")
var l34 = document.querySelector(".l34")
var l35 = document.querySelector(".l35")
var l36 = document.querySelector(".l36")
var l37 = document.querySelector(".l37")
var l38 = document.querySelector(".l38")
var l39 = document.querySelector(".l39")
var l40 = document.querySelector(".l40")
var l41 = document.querySelector(".l41")
var audio2 = document.querySelector(".audio2")
var hor="";
var min="";
var seg="";
var correntTimerhor="";
var correntTimermin="";
var correntTimerseg="";
var time=  setInterval(() => {

var stop = document.querySelector(".stop")
stop.addEventListener("click", () =>{
  audio.src=lovor[0]
    audio.stop()
})



hor= Math.floor(audio2.duration / 3600)
min= Math.floor(audio2.duration / 60)
seg= Math.floor((((audio2.duration / 60) % 1) *60))

correntTimerhor= Math.floor((audio2.currentTime / 3600))
correntTimermin= Math.floor((audio2.currentTime / 60))
correntTimerseg= Math.floor(((((audio2.currentTime)/60)%1)*60) )



var temp= correntTimermin+":"+correntTimerseg
var final= min+":"+seg
if (temp==final) {
 
 audio2.style.display="none"
 clearInterval(time)

}

 

}, 100);




btn2.addEventListener("click",()=>{

document.querySelector(".lista").style.display="block"
som.classList.remove("show")

}) 
l1.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[0]
lista.style.display="none"

})
l2.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[1]
lista.style.display="none"

})
l3.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[2]
lista.style.display="none"

}) 
l4.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[3]
lista.style.display="none"

})
l15.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[4]
lista.style.display="none"

})
l6.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[5]
lista.style.display="none"

})
l7.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[6]
lista.style.display="none"

})
l8.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[7]
lista.style.display="none"

})
l9.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[8]
lista.style.display="none"

})
l10.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[9]
lista.style.display="none"

}) 
l11.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[10]
lista.style.display="none"

}) 
l12.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[11]
lista.style.display="none"

})
l13.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[12]
lista.style.display="none"

}) 
l14.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[13]
lista.style.display="none"

})
l15.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[14]
lista.style.display="none"

})
l16.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[15]
lista.style.display="none"

})
l17.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[16]
lista.style.display="none"

})
l18.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[17]
lista.style.display="none"

})
l19.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[18]
lista.style.display="none"

})
l20.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[19]
lista.style.display="none"

})
l21.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[20]
lista.style.display="none"

})
l22.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[21]
lista.style.display="none"

})
l23.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[22]
lista.style.display="none"

})
l24.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[23]
lista.style.display="none"

})
l25.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[24]
lista.style.display="none"

})
l26.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[25]
lista.style.display="none"

})
l27.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[26]
lista.style.display="none"

})
l28.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[27]
lista.style.display="none"

})
l29.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[28]
lista.style.display="none"

})
l30.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[29]
lista.style.display="none"

})
l31.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[30]
lista.style.display="none"

})
l32.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[31]
lista.style.display="none"

})
l33.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[32]
lista.style.display="none"

})
l34.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[33]
lista.style.display="none"

})
l35.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[34]
lista.style.display="none"

})
l36.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[35]
lista.style.display="none"

})
l37.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[36]
lista.style.display="none"

})
l38.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[37]
lista.style.display="none"

})
l39.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[38]
lista.style.display="none"

})
l40.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[39]
lista.style.display="none"

})
l41.addEventListener("click", ()=>{
audio2.style.display="block"
audio2.src=lovor[40]
lista.style.display="none"

})
// final da seleção de lovores-----------------

var troca=0
const botao =document.querySelector(".PausePlay")
var hor1=""
var min1=""
var seg1=""
var correntTimerhor1=""
var correntTimermin1="";
var correntTimerseg1="";

var duracao =document.querySelector(".duracao")
var corrente= document.querySelector(".corrente")
var voltar= document.querySelector(".voltar")
var proximo = document.querySelector(".proximo")





     var audio,playbtn, seek_bar;
     function initAudioPlayr(){
        audio = new Audio();
        audio.src=""
        audio.loop = true;
        audio.play();
        //mudar objeto referente
        playbtn= document.getElementById("playpausebtn");
        playbtn.addEventListener("click",playPause)
     }
     function playPause(){
        

        if(audio.paused){
            audio.src=lovor[troca]    
            audio.play();
           playbtn.src="pause.jpg"
           var time1=  setInterval(() => {
  
  
   

  hor1= Math.floor(audio.duration / 3600)
  min1= Math.floor(audio.duration / 60)
  seg1= Math.floor((((audio.duration / 60) % 1) *60))

   correntTimerhor1= Math.floor((audio.currentTime / 3600))
   correntTimermin1= Math.floor((audio.currentTime / 60))
var salva= correntTimerseg1= Math.floor(((((audio.currentTime)/60)%1)*60) )

 

 var temp1= correntTimermin1+":"+correntTimerseg1
 var final1= min1+":"+seg1
  if (temp1==final1) {
       
      troca++
      audio.src=lovor[troca]
      audio.play()

  }
  duracao.textContent="/"+min1+":"+seg1
  corrente.textContent=correntTimermin1+":"+salva

  
}, 100);
         
        }else {
             audio.pause();                
            playbtn.src="play.jpg";
            
        
          }  
        


     }

voltar.addEventListener("click", () => {
if (troca==41) {

} else {
troca--
audio.src=lovor[troca]
audio.play()  
}

})
proximo.addEventListener("click", () => {
if (troca==41) {
troca=0
} else {
troca++
audio.src=lovor[troca]
audio.play() 
}

})

// agora sera o auto play lista
btn3.addEventListener("click", () =>{
document.querySelector(".primeiro-audio").style.display="block"
som.classList.remove("show")

playbtn.innerHTML="Play&#9658;";

})


  



//---------------base1 tela 2-----------------------------------------------------------------------------------
var janela1=  document.querySelector(".base1")
var fechar = document.querySelector(".tab")

 

janela1.addEventListener("mouseover",() =>{
  document.querySelector(".tab").classList.add("show")
})
fechar.addEventListener("mouseleave",() =>{
  document.querySelector(".tab").classList.remove("show")
})




var menuPricipal= document.querySelector(".taba10")
menuPricipal.addEventListener("click",() =>{
  document.querySelector(".tela2").style.display="none"
    document.querySelector(".tela1").style.display="block"

})
// ----trabalhando tabela na tela 2----------
var palavra =[
 /*0*/ "á paz seja convosco, venho em Nome do Rei Jesus.",
 /*1*/ "Eis que vêm dias, diz o Senhor DEUS, em que enviarei fome sobre a terra; não fome de pão,",
 /*2*/ "nem sede de água, mas de ouvir as palavras do SENHOR.",
 /*3*/ "o tempo que foi profetizado jas a porta, Porque virá tempo em que não suportarão a sã doutrina;",
 /*4*/ "mas, tendo comichão nos ouvidos,amontoarão para si doutores conforme as suas próprias concupiscências;",
 /*5*/ "E desviarão os ouvidos da verdade, voltando às fábulas.",
 /*6*/ "Os que deixam a lei louvam o ímpio; porém os que guardam a lei contendem com eles.",
 /*7*/ "O que desvia os seus ouvidos de ouvir a lei, até a sua oração será abominável.",
 /*8*/ "Mas tu, sê sóbrio em tudo, sofre as aflições, faze a obra de um evangelista, cumpre o teu ministério.",
 /*9*/ "Hipócritas, bem profetizou Isaías a vosso respeito, dizendo:",
 /*10*/ "Este povo se aproxima de mim com a sua boca e me honra com os seus lábios, mas o seu coração está longe de mim.",
 /*11*/ "Mas, em vão me adoram, ensinando doutrinas que são preceitos dos homens.",
 /*12*/ "Deixai-os; são cegos condutores de cegos. Ora, se um cego guiar outro cego, ambos cairão na cova.",
 /*13*/ "O pecado de Judá está escrito com um ponteiro de ferro, com ponta de diamante, gravado na tábua do seu coração e nas pontas dos vossos altares.",
 /*14*/ "Assim diz o Senhor: Maldito o homem que confia no homem, e faz da carne o seu braço, e aparta o seu coração do Senhor!",
 /*15*/ "Ó Senhor, esperança de Israel, todos aqueles que te deixam serão envergonhados; os que se apartam de mim serão escritos sobre a terra;",
 /*16*/ "porque abandonam o Senhor, a fonte das águas vivas.",
/*17*/ "Mas não escutaram, nem inclinaram os seus ouvidos; antes endureceram a sua cerviz, para não ouvirem, e para não receberem correção.",
/*18*/ "Converte-te, ó Israel, ao SENHOR teu Deus; porque pelos teus pecados tens caído.",
/*19*/ "Tomai convosco palavras, e convertei-vos ao Senhor; dizei-lhe: Tira toda a iniqüidade, e aceita o que é bom;",
/*20*/ "e ofereceremos como novilhos os sacrifícios dos nossos lábios.",
/*21*/ "Tocai a trombeta em Sião, e clamai em alta voz no meu santo monte; tremam todos os moradores da terra, porque o dia do SENHOR vem, já está perto;",
/*22*/ "Ainda assim, agora mesmo diz o Senhor: Convertei-vos a mim de todo o vosso coração; e isso com jejuns, e com choro, e com pranto.",
/*23*/ "E rasgai o vosso coração, e não as vossas vestes, e convertei-vos ao Senhor vosso Deus; porque ele é misericordioso, e compassivo,",
/*24*/ "e tardio em irar-se, e grande em benignidade, e se arrepende do mal.",
/*25*/ "Por que razão me mostras a iniqüidade, e me fazes ver a opressão? Pois que a destruição e a violência estão diante de mim, ",
/*26*/ "havendo também quem suscite a contenda e o litígio.",
/*27*/ "Tu és tão puro de olhos, que não podes ver o mal, e a opressão não podes contemplar. Por que olhas para os que procedem aleivosamente,",
/*28*/ "e te calas quando o ímpio devora aquele que é mais justo do que ele?",
/*29*/ "Porventura por isso esvaziará a sua rede e não terá piedade de matar as nações continuamente?",
/*30*/ "Quem é este, que vem de Edom, de Bozra, com vestes tintas; este que é glorioso em sua vestidura, que marcha com a sua grande força? Eu, que falo em justiça, poderoso para salvar.",
/*31*/ "Por que está vermelha a tua vestidura, e as tuas roupas como as daquele que pisa no lagar?",
/*32*/ "E, depois destas coisas ouvi no céu uma grande voz de uma grande multidão, que dizia: Aleluia! A salvação, e a glória, e a honra, e o poder pertencem ao Senhor nosso Deus;",
/*33*/ "E disse-me: Escreve: Bemaventurados aqueles que são chamados à ceia das bodas do Cordeiro. E disse-me: Estas são as verdadeiras palavras de Deus.",
/*34*/ "E estava vestido de veste tingida em sangue; e o nome pelo qual se chama é A Palavra de Deus.",
/*35*/ "E da sua boca saía uma aguda espada, para ferir com ela as nações; e ele as regerá com vara de ferro; e ele mesmo é o que pisa o lagar do vinho do furor e da ira do Deus Todo-Poderoso.",
/*36*/ "Porque eu já estou sendo oferecido por aspersão de sacrifício, e o tempo da minha partida está próximo.",
/*37*/ "Combati o bom combate, acabei a carreira, guardei a fé.",
/*38*/ "Desde agora, a coroa da justiça me está guardada, a qual o Senhor, justo juiz, me dará naquele dia; e não somente a mim, mas também a todos os que amarem a sua vinda.",
/*39*/"Eu conheço as tuas obras, e o teu amor, e o teu serviço, e a tua fé, e a tua paciência, e que as tuas últimas obras são mais do que as primeiras.",
/*40*/" sela estas palavras pois poucos entenderam pois não são minhas ovelhas minhas ovelhas conhece a minha voz cajado não mata ovelha, lobo sim", 
/*41*/"Quem tem ouvidos, ouça o que o Espírito diz às igrejas.",  



]
var tab1 = document.querySelector(".taba1")


var passador =0;


tab1.addEventListener("click", () => {
  document.querySelector(".opcao1").style.display="block"
  document.querySelector(".t2h1").textContent=" Carregando Arquivo....."
  var pala = setInterval(() => {
    
    document.querySelector(".t2h1").textContent=palavra[passador]
    
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(palavra[passador]);
      utterance.lang = 'pt-BR';

      speechSynthesis.speak(utterance);
     } else {
       alert('Desculpe, seu navegador não suporta a API Web Speech.');
     }
     
     if(palavra==42){
      passador=0
      clearInterval(pala)
    }else{
      passador++
    }
  }, 10000);
  
 
})





window.addEventListener("load",initAudioPlayr);
