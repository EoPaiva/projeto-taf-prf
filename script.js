window.addEventListener('load', () => {
    // Definição das perguntas e palavras-chave
    const questions = [
        {
            question: "Qual o seu intuito de estar adentrando para a polícia?",
            answer: "Meu intuito é servir e proteger a cidade, aplicando a lei e mantendo a ordem, contribuindo para um ambiente mais justo e seguro para todos. Busco também o desenvolvimento pessoal e profissional dentro da corporação.",
            keywords: ["servir", "proteger", "lei", "ordem", "desenvolvimento pessoal", "profissional"]
        },
        {
            question: "Qual a importância da hierarquia para você, explique?",
            answer: "A hierarquia é fundamental para a organização e o bom funcionamento de qualquer força policial. Ela garante a disciplina, a clareza nas tomadas de decisão e a eficiência nas operações. Respeitar a hierarquia é essencial para a coesão da equipe e para o cumprimento das missões.",
            keywords: ["hierarquia", "disciplina", "organização", "clareza", "decisão", "eficiência"]
        },
        {
            question: "Cite 7 códigos Q e seus significados.",
            answer: "Q.T.X. - Saindo de Serviço, Q.R.V. - Estou Disponível, Q.T.I. - Estou a caminho, Q.A.P. - Na Escuta?, Q.R.L. - Estou ocupado, Q.R.A. - Nome e patente, Q.T.A. - Parar o que está fazendo, Q.S.M. - Pode Repetir?, Q.T.H. - Localização, Q.S.V. - Viatura, T.K.S. - Obrigado, Q.S.L. - Entendido.",
            keywords: ["Q.T.X.", "Q.R.V.", "Q.T.I.", "Q.A.P.", "Q.R.L.", "Q.R.A.", "Q.T.A.", "Q.S.M.", "Q.T.H.", "Q.S.V.", "T.K.S.", "Q.S.L."]
        },
        {
            question: "Module uma QRU de vendas de drogas de um Silvia preto com 2 indivíduos se evadindo da praia sentido cemitério.",
            answer: "'QAP Central, iniciando acompanhamento a um Silvia preto, tripulado X2, se evadindo de uma QRU de tráfico de drogas na praia sentido cemitério, solicito apoio no meu QTH, vaga para 2 QSVs e 1 aéreo.'",
            keywords: ["QAP Central", "Silvia preto", "tráfico de drogas", "apoio", "QSVs", "aéreo"]
        },
        {
            question: "Cite os códigos de patrulhamento e seus significados.",
            answer: "Código 0: Iniciando patrulha / Retornando a patrulha. Código 1: Baixa intensidade. Código 2: Média intensidade. Código 3: Alta intensidade. Código 4: Sob controle / Área limpa. Código 5: Fogo Aberto. Código 6: Área em investigação (360).",
            keywords: ["Código 0", "Código 1", "Código 2", "Código 3", "Código 4", "Código 5", "Código 6"]
        },
        {
            question: "Cite a diferença do P1, P2, P3 e suas funções.",
            answer: "P1 (Primeiro Patrulheiro): Responsável pela condução da viatura de forma segura e responsável. P2 (Segundo Patrulheiro): Responsável pela modulação na rede, e também o responsável pela abordagem nos indivíduos. P3 (Terceiro Patrulheiro): Responsável por fazer o perímetro durante as abordagens, informando qualquer atitude ou movimentação suspeita no local.",
            keywords: ["P1", "condução", "P2", "modulação", "abordagem", "P3", "perímetro"]
        },
        {
            question: "Cite os níveis de abordagem, seus significados e quando usá-los.",
            answer: "COD 1: Abordagem de código 1 é uma abordagem geralmente com objetivo instrucional, principalmente quando há infrações de trânsito. Nesse tipo de abordagem o diálogo é primordial. A princípio não é realizado nenhum tipo de revista no abordado. COD 2: A abordagem de código 2 é quando há algum tipo de suspeita, porém não há confirmação visual, ou seja, não houve flagrante. Obs: Em QRU de COD 5 sem flagrante é obrigatório passar o kit residual, ou em caso de tráfico de drogas, utilizar o kit químico. COD 3: A abordagem de código 3 é quando há confirmação visual do delito, ou seja, o flagrante. Na abordagem de código 3 solicita-se que o(s) abordado(s) mantenham as mãos na cabeça, posteriormente serão algemados e revistados. Tudo que fizer durante a abordagem, INDIQUE o que está fazendo. Exemplo: Vou revistar o senhor / Vou pegar o documento do senhor.",
            keywords: ["COD 1", "instrucional", "trânsito", "diálogo", "COD 2", "suspeita", "sem flagrante", "COD 3", "flagrante", "algemados", "revistados"]
        },
        {
            question: "Cite os níveis de progressão da força e o que fazer durante cada uma delas.",
            answer: "Ação do suspeito | Postura do oficial. Normalidade | Presença Policial. Cooperativo | Verbalização (Conversar). Resistência Passiva | Controle de Contato (Segurar a pessoa). Resistência Ativa | Controle Físico (Algemar ou Segurar). Agressão Não Letal | Técnicas defensivas (Taser ou algemar). Agressão Letal | Força Letal (Código 5).",
            keywords: ["Presença Policial", "Verbalização", "Controle de Contato", "Controle Físico", "Técnicas defensivas", "Força Letal"]
        },
        {
            question: "Cite a Lei de Miranda e quando usá-la.",
            answer: "A Lei de Miranda (Miranda Rights) é o direito do indivíduo de permanecer em silêncio e de ter um advogado presente durante o interrogatório. Deve ser usada sempre que um suspeito for detido e antes de qualquer interrogatório, informando-o de seus direitos na condução.",
            keywords: ["Lei de Miranda", "permanecer em silêncio", "advogado", "detido", "interrogatório"]
        },
        {
            question: "Você está em PTR sozinho e é parado por 4 pessoas armadas, o que fazer?",
            answer: "Não posso patrulhar sozinho se não for SPEED, GTM (Batedor) ou DOA, mas se por algum motivo estivesse o que seria errado, eu me renderia.",
            keywords: ["sozinho", "renderia"]
        },
        {
            question: "Você está como primária em um acompanhamento e sem querer você atropela um cidadão. O que você faz?",
            answer: "Pararia imediatamente o acompanhamento, e prestaria os primeiros socorros ao cidadão.",
            keywords: ["pararia", "primeiros socorros"]
        },
        {
            question: "Você avista um cidadão armado de longe entrando em um carro, qual sua atitude perante esta situação?",
            answer: "Manteria a distância segura, informaria a central sobre a situação e solicitaria apoio para iniciar a abordagem 'QAP Central, visual de X indivíduos em um carro X cor X no QTH da X, visual deles armados, solicito apoio para iniciar abordagem'.",
            keywords: ["manteria a distância", "informaria a central", "solicitaria apoio"]
        },
        {
            question: "É correto deixar um acompanhamento para prestar QRR em um código 5?",
            answer: "Não, não é correto. A prioridade é sempre o acompanhamento em andamento. O QRR (apoio) em um Código 5 deve ser prestado por outras viaturas disponíveis, a menos que o comando determine o contrário devido a uma situação de extrema urgência ou risco iminente.",
            keywords: ["Não", "não é correto", "prioridade", "acompanhamento", "outras viaturas"]
        },
        {
            question: "Você como aluno, qual seria sua conduta dentro da guarnição?",
            answer: "Como aluno, minha conduta seria de total respeito à hierarquia, disciplina e proatividade. Buscaria aprender com os mais experientes, seguiria todas as ordens e procedimentos, e me dedicaria ao máximo para absorver o conhecimento e as práticas necessárias para me tornar um policial exemplar. Evitaria qualquer tipo de brincadeira ou conduta inadequada que pudesse comprometer a imagem da corporação.",
            keywords: ["respeito à hierarquia", "disciplina", "proatividade", "aprender", "evitaria brincadeiras"]
        },
        {
            question: "Você está numa abordagem e o indivíduo começa a se descontrolar e xingar perante a sua presença e do seu parceiro, qual vai ser sua atitude?",
            answer: "Manteria a calma e a postura profissional. Utilizaria a verbalização para tentar acalmar o indivíduo e reiterar os comandos. Se a situação escalasse para agressão física ou ameaça, aplicaria os níveis de progressão da força necessários para conter o indivíduo e garantir a segurança de todos, sempre comunicando a central e solicitando apoio se necessário.",
            keywords: ["manteria a calma", "postura profissional", "verbalização", "progressão da força", "comunicando a central"]
        },
        {
            question: "Você está em um acompanhamento e aparece no chat da polícia uma escalação da ação blipada fleeca praia, o que você faz?",
            answer: "Manteria o foco no acompanhamento em andamento, pois é a minha prioridade.",
            keywords: ["foco no acompanhamento", "prioridade"]
        },
        {
            question: "Você está na rua em um acompanhamento numa QRU, o comando pede formação urgente no departamento para uma joalheria. Você como parte da unidade tática qual a sua atitude?",
            answer: "Comunicaria imediatamente ao comando a minha posição e a situação do acompanhamento. Se o comando confirmasse a necessidade da minha presença na formação urgente, desengajaria do acompanhamento de forma segura e me deslocaria o mais rápido possível para o departamento, informando o status da minha chegada.",
            keywords: ["comunicaria ao comando", "confirmasse", "desengajaria", "deslocaria"]
        },
        {
            question: "Qual a conduta correta durante uma formação pré-ação, como você agiria?",
            answer: "Durante uma formação pré-ação, minha conduta seria de total atenção e disciplina. Manteria o silêncio, ouviria atentamente as instruções do comando, faria perguntas apenas se necessário e de forma objetiva, e me prepararia mentalmente e fisicamente para a missão. Evitaria distrações e manteria o foco na operação.",
            keywords: ["atenção", "disciplina", "silêncio", "ouviria", "evitaria distrações", "foco"]
        },
        {
            question: "Um superior da ordem para você abater um suspeito em uma QRU de roubo ATM, o que você faria em tal situação?",
            answer: "Avaliaria a situação de acordo com os níveis de progressão da força e a legislação vigente. Se o suspeito representasse uma ameaça iminente à vida de inocentes ou de policiais, e todas as outras opções de contenção tivessem sido esgotadas, eu agiria para neutralizar a ameaça. Caso contrário, questionaria a ordem, buscando alternativas que não envolvessem força letal, e registraria a ordem recebida.",
            keywords: ["avaliaria a situação", "ameaça iminente", "neutralizar a ameaça", "questionaria a ordem", "força letal"]
        },
        {
            question: "Você está em uma formação e os comandos ainda não chegaram no local, seus colegas de guarnição começam a fazer brincadeiras indevidas ferindo a conduta necessária. Qual seria a sua postura diante ao ocorrido? Por que?",
            answer: "Minha postura seria de repreensão imediata e discreta aos colegas, lembrando-os da importância da disciplina e do profissionalismo, especialmente em uma formação. Se a conduta inadequada persistisse, eu me afastaria do grupo e, se necessário, reportaria a situação a um superior assim que possível.",
            keywords: ["repreensão", "discreta", "disciplina", "profissionalismo", "reportaria a situação"]
        }
    ];

    // Elementos do DOM
    const introContainer = document.getElementById('intro-container');
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const questionText = document.getElementById('question-text');
    const answerInput = document.getElementById('answer-input');
    const nextButton = document.getElementById('next-button');
    const timerText = document.getElementById('timer-text');
    const timerRing = document.getElementById('ring');
    const progressBar = document.getElementById('progress-bar');
    const downloadLogButton = document.getElementById('download-log');
    const startButton = document.getElementById('start-button');
    const showAnalysisButton = document.getElementById('show-analysis-button');
    const analysisContainer = document.getElementById('analysis-container');
    const logFileInput = document.getElementById('log-file-input');
    const analysisResults = document.getElementById('analysis-results');

    // Variáveis de estado
    let currentQuestionIndex = 0;
    let score = 0;
    let timer = 20;
    let timerInterval;
    const logData = [];
    let conscriptInfo = {};

    // Event Listeners
    startButton.addEventListener('click', () => {
        conscriptInfo = {
            name: document.getElementById('conscript-name').value.trim(),
            passport: document.getElementById('conscript-passport').value.trim(),
            discordId: document.getElementById('conscript-discord').value.trim(),
            age: document.getElementById('conscript-age').value.trim()
        };

        if (!conscriptInfo.name || !conscriptInfo.passport || !conscriptInfo.discordId || !conscriptInfo.age) {
            alert("Por favor, preencha todos os campos para iniciar o teste.");
            return;
        }

        const discordRegex = /^.+#\d{4}$/;
        if (!discordRegex.test(conscriptInfo.discordId)) {
            alert("O ID do Discord deve estar no formato NomeDeUsuário#1234. Por favor, corrija.");
            return;
        }

        introContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        showQuestion();
    });

    nextButton.addEventListener('click', () => handleNextQuestion(false));
    downloadLogButton.addEventListener('click', generateLogFile);
    showAnalysisButton.addEventListener('click', showAnalysisSection);
    logFileInput.addEventListener('change', handleLogFile);

    // Funções do Quiz
    function startTimer() {
        timer = 20;
        const initialOffset = 100.04;
        timerRing.style.strokeDashoffset = initialOffset;
        timerText.textContent = timer;

        timerInterval = setInterval(() => {
            timer--;
            timerText.textContent = timer;
            const offset = initialOffset - (timer / 20) * initialOffset;
            timerRing.style.strokeDashoffset = offset;

            if (timer <= 0) {
                clearInterval(timerInterval);
                handleNextQuestion(true);
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function showQuestion() {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            typeWriterEffect(currentQuestion.question);
            answerInput.value = '';
            answerInput.disabled = false;
            nextButton.disabled = false;
            startTimer();
            updateProgressBar();
        } else {
            showResults();
        }
    }

    function typeWriterEffect(text) {
        questionText.textContent = '';
        let i = 0;
        const speed = 25; // Velocidade da digitação
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                questionText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);
    }

    function handleNextQuestion(timedOut = false) {
        stopTimer();
        const currentQuestion = questions[currentQuestionIndex];
        const userAnswer = answerInput.value.trim();
        const result = analyzeAnswer(userAnswer, currentQuestion.keywords);

        logData.push({
            question: currentQuestion.question,
            userAnswer: userAnswer,
            expectedAnswer: currentQuestion.answer,
            timeSpent: timedOut ? "Tempo Esgotado" : (20 - timer) + "s",
            score: result.score,
            status: result.status
        });

        score += result.score;

        currentQuestionIndex++;
        showQuestion();
    }

    function analyzeAnswer(userAnswer, keywords) {
        const userLower = userAnswer.toLowerCase();
        let correctKeywordsCount = 0;
        
        keywords.forEach(keyword => {
            if (userLower.includes(keyword.toLowerCase())) {
                correctKeywordsCount++;
            }
        });

        const keywordPercentage = correctKeywordsCount / keywords.length;
        let score = 0;
        let status = "Incorreta";

        if (keywordPercentage >= 0.75) {
            score = 1;
            status = "Correta";
        } else if (keywordPercentage >= 0.4) {
            score = 0.5;
            status = "Parcial";
        }

        return { score, status };
    }

    function updateProgressBar() {
        const progress = (currentQuestionIndex / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function showResults() {
        quizContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
    }

    function generateLogFile() {
        let logContent = "--- Relatório TAF Teórico - PRF ---\n\n";
        logContent += `Data do Teste: ${new Date().toLocaleString()}\n`;
        logContent += `Nome do Conscrito: ${conscriptInfo.name}\n`;
        logContent += `Passaporte: ${conscriptInfo.passport}\n`;
        logContent += `ID do Discord: ${conscriptInfo.discordId}\n`;
        logContent += `Idade: ${conscriptInfo.age}\n\n`;
        logContent += `Pontuação Total (análise): ${score.toFixed(2)} / ${questions.length}\n\n`;

        logData.forEach((entry, index) => {
            logContent += `--- Pergunta ${index + 1} ---\n`;
            logContent += `Pergunta: ${entry.question}\n`;
            logContent += `Resposta do Conscrito: ${entry.userAnswer || "Nenhuma resposta"}\n`;
            logContent += `Pontuação na Pergunta: ${entry.score.toFixed(2)}\n`;
            logContent += `Status: ${entry.status}\n`;
            logContent += `Tempo Gasto: ${entry.timeSpent}\n`;
            logContent += `--- Fim da Pergunta ${index + 1} ---\n\n`;
        });

        const blob = new Blob([logContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `TAF_PRF_Relatorio_${conscriptInfo.name.replace(/\s/g, '_')}.log`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Funções de Análise de Log
    function showAnalysisSection() {
        introContainer.style.display = 'none';
        quizContainer.style.display = 'none';
        resultsContainer.style.display = 'none';
        analysisContainer.style.display = 'block';
    }

    function handleLogFile(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target.result;
            displayLogAnalysis(content);
        };
        reader.readAsText(file);
    }

    function displayLogAnalysis(logContent) {
        const lines = logContent.split('\n');
        let conscriptInfo = {};
        const testResults = [];
        let currentEntry = {};
        let isParsingTestResults = false;

        lines.forEach(line => {
            if (line.includes("--- Relatório TAF Teórico - PRF ---")) {
                isParsingTestResults = false;
            } else if (line.includes("--- Pergunta")) {
                if (Object.keys(currentEntry).length > 0) {
                    testResults.push(currentEntry);
                }
                currentEntry = {};
                isParsingTestResults = true;
            } else if (isParsingTestResults) {
                if (line.includes("Pergunta:")) {
                    currentEntry.question = line.replace("Pergunta: ", "").trim();
                } else if (line.includes("Resposta do Conscrito:")) {
                    currentEntry.userAnswer = line.replace("Resposta do Conscrito: ", "").trim();
                } else if (line.includes("Pontuação na Pergunta:")) {
                    currentEntry.score = parseFloat(line.replace("Pontuação na Pergunta:", "").trim());
                } else if (line.includes("Tempo Gasto:")) {
                    currentEntry.timeSpent = line.replace("Tempo Gasto:", "").trim();
                } else if (line.includes("Status:")) {
                    currentEntry.status = line.replace("Status:", "").trim();
                }
            } else {
                if (line.includes("Nome do Conscrito:")) {
                    conscriptInfo.name = line.replace("Nome do Conscrito: ", "").trim();
                } else if (line.includes("Pontuação Total (análise):")) {
                    conscriptInfo.totalScore = line.replace("Pontuação Total (análise): ", "").trim();
                }
            }
        });

        if (Object.keys(currentEntry).length > 0) {
            testResults.push(currentEntry);
        }

        let html = `<h3>Análise do Teste de ${conscriptInfo.name}</h3>`;
        html += `<p><strong>Pontuação Final:</strong> ${conscriptInfo.totalScore}</p>`;
        html += `<table>`;
        html += `<thead><tr><th>Pergunta</th><th>Resposta do Conscrito</th><th>Pontuação</th><th>Status</th><th>Tempo</th></tr></thead>`;
        html += `<tbody>`;

        testResults.forEach(result => {
            let statusClass = '';
            if (result.status === 'Correta') {
                statusClass = 'correct';
            } else if (result.status === 'Parcial') {
                statusClass = 'partial';
            } else {
                statusClass = 'incorrect';
            }
            
            html += `<tr class="${statusClass}">`;
            html += `<td>${result.question}</td>`;
            html += `<td>${result.userAnswer}</td>`;
            html += `<td>${result.score.toFixed(2)}</td>`;
            html += `<td>${result.status}</td>`;
            html += `<td>${result.timeSpent}</td>`;
            html += `</tr>`;
        });

        html += `</tbody></table>`;
        analysisResults.innerHTML = html;
    }
});