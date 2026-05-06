# 🛡️ Sistema de Recrutamento Tático - PRF (FiveM)

![Versão](https://img.shields.io/badge/version-2.0.0-gold)
![Status](https://img.shields.io/badge/status-finalizado-success)
![Tecnologias](https://img.shields.io/badge/tech-HTML5%20|%20CSS3%20|%20JS%20ES6+-blue)

Uma plataforma avançada de avaliação teórica e gestão de processos seletivos desenvolvida especificamente para corporações policiais em servidores **FiveM**. Este sistema automatiza o recrutamento, oferecendo uma interface imersiva "Cyber-Tactical" e um motor de correção inteligente.

---

## 🚀 Funcionalidades

- **Identificação Estruturada:** Registo completo do conscrito (Nome, ID/Passaporte, Discord e Idade).
- **Módulo de Avaliação Dinâmica:** Questões táticas com cronómetro individual por pergunta e barra de progresso visual.
- **Motor de Correção Automática:** Algoritmo em JavaScript que analisa respostas comparando-as com palavras-chave, atribuindo classificações (*Correta*, *Parcial* ou *Incorreta*).
- **Geração de Relatórios (.LOG):** Sistema de exportação de logs codificados para entrega aos instrutores, garantindo a integridade dos resultados.
- **Painel do Instrutor (Admin):** Área administrativa que permite o upload e processamento do ficheiro `.log` para gerar tabelas de desempenho detalhadas.

---

## 🛠️ Stack Tecnológica

- **Frontend:** HTML5 Semântico e CSS3 (Utilização de *CSS Variables* e Design *Glassmorphism*).
- **Lógica:** JavaScript (ES6+) focado em manipulação de DOM, gestão de estado e processamento de ficheiros.
- **UI/UX:** Estética tática de alto contraste, animações otimizadas e tipografia focada em legibilidade (*Inter* & *JetBrains Mono*).

---

## 📐 Estrutura do Projeto

```bash
├── index.html   # Estrutura principal e módulos da aplicação
├── style.css    # Identidade visual, animações e responsividade
└── script.js    # Motor de avaliação, lógica de logs e painel admin
