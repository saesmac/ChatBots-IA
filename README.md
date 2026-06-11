Dois chatbots temáticos desenvolvidos com Python (Flask) no backend e HTML/CSS/JS 
no frontend, integrados a modelos de linguagem via API.

## Projetos

### 🔥 Chatbot Brigada de Incêndio
Assistente virtual especializado em segurança contra incêndio no ambiente corporativo.
Responde dúvidas sobre prevenção, evacuação, extintores, classes de incêndio e 
normas técnicas (NR-23, ITs do Corpo de Bombeiros).

### 🏆 Chatbot Copa do Mundo
Assistente virtual especializado em Copa do Mundo de Futebol. Responde sobre 
história das edições, campeões, artilheiros, recordes, seleções e curiosidades, 
incluindo a Copa do Mundo 2026.

## Tecnologias
- Python + Flask + Flask-CORS
- API Groq (LLaMA 3.3 70B)
- HTML, CSS e JavaScript puro
- python-dotenv

## Como rodar

1. Clone o repositório
2. Entre na pasta do projeto desejado
3. Crie o arquivo `.env` com sua chave: `GROQ_API_KEY=sua_chave`
4. Instale as dependências: `pip install -r requirements.txt`
5. Inicie o backend: `python app.py`
6. Abra o `index.html` no navegador
