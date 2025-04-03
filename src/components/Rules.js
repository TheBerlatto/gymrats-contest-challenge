import React from "react";

const Rules = () => {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">📜 Regras do Desafio GymRats – Contestação no Foco</h1>
      <p className="text-lg text-gray-600 mb-4">
        Bem-vindo ao <strong>Desafio GymRats – Contestação no Foco</strong>! Aqui, a disciplina e a consistência são as chaves para alcançar a vitória. Leia atentamente as regras para garantir que todos tenham uma competição justa e motivadora.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6">🕒 Duração do Desafio</h2>
      <p className="text-lg text-gray-600">O desafio terá um total de <strong>60 dias</strong>, com início em <strong>03/04/2025</strong> e término em <strong>02/05/2025</strong>.</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6">📊 Como Funciona?</h2>
      <ul className="text-lg text-gray-600 list-disc list-inside">
        <li>Todas as atividades serão registradas pelo aplicativo <strong>GymRats</strong>.</li>
        <li>Cada atividade vale uma pontuação específica, de acordo com seu grau de dificuldade.</li>
        <li>O ranking será atualizado diariamente com a pontuação dos participantes.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6">🏆 Pontuação</h2>
      <ul className="text-lg text-gray-600 list-disc list-inside">
        <li>✅ <strong>Treino de musculação</strong> → 15 pontos</li>
        <li>✅ <strong>Alimentação saudável (refeição limpa)</strong> → 3 pontos por refeição (limitado a 4 refeições/dia)</li>
        <li>✅ <strong>Consumo de 500mL de água</strong> → 2 pontos</li>
        <li>✅ <strong>Aeróbica</strong> → 2 pontos a cada 5 minutos</li>
        <li>✅ <strong>Suplementação</strong> → 5 pontos</li>
        <li>✅ <strong>Fruta</strong> → 1 ponto</li>
        <li>✅ <strong>Esporte (ex. Natação, Futebol, Vôlei)</strong> → 10 pontos</li>
      </ul>
      <p className="text-lg text-gray-600 mt-2">📌 <strong>Obs.:</strong> Qualquer atividade não registrada corretamente no app não contará pontos.</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6">🚨 Regras Gerais</h2>
      <ul className="text-lg text-gray-600 list-disc list-inside">
        <li>1️⃣ <strong>Compromisso e honestidade</strong> – O desafio depende da transparência de cada participante ao registrar suas atividades.</li>
        <li>2️⃣ <strong>Nada de "jeitinho"</strong> – Qualquer tentativa de fraude (como marcar treinos inexistentes) resultará em desclassificação.</li>
        <li>3️⃣ <strong>Desistências</strong> – Em caso de desistências, o participante não contará com o ressarcimento do valor, exceto em casos de lesões ou estado de saúde.</li>
        <li>4️⃣ <strong>Dinheiro na mão</strong> – Será recolhido o valor de R$ 50 por pessoa no início do desafio. O vencedor leva tudo.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6">🎯 Premiação</h2>
      <p className="text-lg text-gray-600">No final dos 60 dias, os <strong>3 participantes com maior pontuação</strong> ganharão <strong>R$ 200, R$ 120 e R$ 80, respectivamente.</strong>!</p>

      <p className="text-xl font-bold text-gray-800 mt-6">🚀 Está pronto para desafiar seus limites? Então bora pra cima!</p>
    </div>
  );
};

export default Rules;
