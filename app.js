

const express = require('express');
const app = express();
const port = 3000;


app.get('/motivational-quotes', (req, res) => {
  const quotes = [
    "Acredite em você mesmo e tudo será possível.",
    "Sua mente é um jardim. Suas pensamentos são as sementes. Você pode cultivar flores ou ervas daninhas.",
    "Não importa o quão devagar você vá, desde que você não pare.",
  ];
  res.json({ quotes });
});


app.get('/relaxation-exercises', (req, res) => {
  const exercises = [
    "Respiração profunda: Inspire por 4 segundos, segure por 4 segundos, expire por 4 segundos. Repita.",
    "Meditação guiada: Encontre um lugar tranquilo, feche os olhos e concentre-se na respiração.",
    "Alongamento suave: Libere a tensão fazendo alongamentos suaves por 5 minutos.",
  ];
  res.json({ exercises });
});


app.get('/self-care-tips', (req, res) => {
  const tips = [
    "Tire um tempo para si mesmo todos os dias.",
    "Pratique gratidão: anote coisas pelas quais você é grato.",
    "Conecte-se com entes queridos, mesmo que seja virtualmente.",
  ];
  res.json({ tips });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
