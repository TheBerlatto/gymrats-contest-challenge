import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto p-6 text-center">
      <p className="text-xl text-gray-700 mb-4">
        Você está pronto para testar sua disciplina e competir com seus amigos para ver quem mantém a rotina mais regrada nos próximos <strong>60 dias</strong>?
      </p>
      <p className="text-lg text-gray-600 mb-6">
        O desafio consiste em registrar cada atividade no aplicativo <strong>GymRats</strong>, acumulando pontos a cada ação saudável realizada. Desde treinos e alimentação até sono e hidratação, cada esforço conta para chegar ao topo do ranking!
      </p>
      
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <Link to="/rules" className="bg-green-600 text-white text-lg font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
          📜 Ver Regras
        </Link>
        <a href="https://gymrats.app.link" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white text-lg font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          📲 Baixar o App
        </a>
      </div>
      
      <h2 className="text-3xl font-bold text-gray-800 mt-10">🏆 Como Funciona?</h2>
      <ul className="text-lg text-gray-600 list-disc list-inside text-left mx-auto max-w-2xl mt-4">
        <li>Registre suas atividades diárias no aplicativo GymRats.</li>
        <li>Acumule pontos a cada treino, alimentação saudável e outros hábitos positivos.</li>
        <li>Acompanhe sua evolução no ranking e dispute a liderança com seus amigos.</li>
        <li>Ao final dos 60 dias, os <strong>3 primeiros colocados</strong> levam R$ 200, R$ 120 e R$ 80, respectivamente.</li>
      </ul>
      
      <h2 className="text-3xl font-bold text-gray-800 mt-10">🚀 Pronto para Começar?</h2>
      <p className="text-lg text-gray-600 mt-2">Junte-se ao desafio e mostre quem tem mais disciplina e determinação! 💥</p>
      
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
        <Link to="/rules" className="bg-green-600 text-white text-lg font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
          📜 Ler as Regras
        </Link>
        <a href="https://gymrats.app.link" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white text-lg font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          📲 Baixar o App Agora
        </a>
      </div>
    </div>
  );
};

export default Home;
