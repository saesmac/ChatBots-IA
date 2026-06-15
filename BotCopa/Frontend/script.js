const chat = document.getElementById("chat");
const mensagem = document.getElementById("mensagem");
const btnEnviar = document.getElementById("btnEnviar");
const btnLimpar = document.getElementById("btnLimpar");

const API_URL = "https://chatbots-ia-copa.onrender.com/chat";

const mensagemInicial =
  "Olá! Sou um assistente especializado em Copa do Mundo de Futebol! Posso te ajudar com história das edições, campeões, artilheiros, recordes, curiosidades e tudo sobre a Copa do Mundo 2026. O que você quer saber?";

function adicionarMensagem(texto, tipo) {
  const div = document.createElement("div");

  div.classList.add("message");
  div.classList.add(tipo);

  div.textContent = texto;

  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

async function enviarMensagem() {
  const texto = mensagem.value.trim();

  if (texto === "") {
    alert("Digite uma pergunta antes de enviar.");
    return;
  }

  adicionarMensagem(texto, "user");
  mensagem.value = "";

  adicionarMensagem("Analisando sua pergunta...", "bot");

  const mensagensBot = document.querySelectorAll(".bot");
  const mensagemCarregando = mensagensBot[mensagensBot.length - 1];

  try {
    const resposta = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mensagem: texto
      })
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      mensagemCarregando.textContent =
        dados.erro || "Erro ao processar a mensagem.";
      return;
    }

    mensagemCarregando.textContent = dados.resposta;

  } catch (erro) {
    mensagemCarregando.textContent =
      "Erro ao conectar com o backend. Verifique se o servidor Python está em execução.";
    console.error(erro);
  }
}

btnEnviar.addEventListener("click", enviarMensagem);

mensagem.addEventListener("keydown", function(event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    enviarMensagem();
  }
});

btnLimpar.addEventListener("click", function() {
  chat.innerHTML = "";
  adicionarMensagem(mensagemInicial, "bot");
});