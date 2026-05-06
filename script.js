/**
 * Sistema Avançado de Avaliação Teórica TAF - PRF
 * @author Desenvolvedor (Seu Nome para o Portfólio)
 * @version 2.0.0
 * @description Refatoração Profissional com ES6+, Design Patterns e Tratamento de Erros.
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Dados do Sistema ---
    const QUESTIONS = [
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
            keywords: ["QAP Central", "Silvia", "tráfico", "apoio", "QSVs", "aéreo"]
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
            keywords: ["distância", "informaria a central", "apoio"]
        },
        {
            question: "É correto deixar um acompanhamento para prestar QRR em um código 5?",
            answer: "Não, não é correto. A prioridade é sempre o acompanhamento em andamento. O QRR (apoio) em um Código 5 deve ser prestado por outras viaturas disponíveis, a menos que o comando determine o contrário devido a uma situação de extrema urgência ou risco iminente.",
            keywords: ["Não", "prioridade", "acompanhamento", "outras viaturas"]
        },
        {
            question: "Você como aluno, qual seria sua conduta dentro da guarnição?",
            answer: "Como aluno, minha conduta seria de total respeito à hierarquia, disciplina e proatividade. Buscaria aprender com os mais experientes, seguiria todas as ordens e procedimentos, e me dedicaria ao máximo para absorver o conhecimento e as práticas necessárias para me tornar um policial exemplar. Evitaria qualquer tipo de brincadeira ou conduta inadequada que pudesse comprometer a imagem da corporação.",
            keywords: ["respeito", "hierarquia", "disciplina", "proatividade", "aprender"]
        },
        {
            question: "Você está numa abordagem e o indivíduo começa a se descontrolar e xingar perante a sua presença e do seu parceiro, qual vai ser sua atitude?",
            answer: "Manteria a calma e a postura profissional. Utilizaria a verbalização para tentar acalmar o indivíduo e reiterar os comandos. Se a situação escalasse para agressão física ou ameaça, aplicaria os níveis de progressão da força necessários para conter o indivíduo e garantir a segurança de todos, sempre comunicando a central e solicitando apoio se necessário.",
            keywords: ["calma", "postura profissional", "verbalização", "progressão da força"]
        },
        {
            question: "Você está em um acompanhamento e aparece no chat da polícia uma escalação da ação blipada fleeca praia, o que você faz?",
            answer: "Manteria o foco no acompanhamento em andamento, pois é a minha prioridade.",
            keywords: ["foco", "acompanhamento", "prioridade"]
        },
        {
            question: "Você está na rua em um acompanhamento numa QRU, o comando pede formação urgente no departamento para uma joalheria. Você como parte da unidade tática qual a sua atitude?",
            answer: "Comunicaria imediatamente ao comando a minha posição e a situação do acompanhamento. Se o comando confirmasse a necessidade da minha presença na formação urgente, desengajaria do acompanhamento de forma segura e me deslocaria o mais rápido possível para o departamento, informando o status da minha chegada.",
            keywords: ["comunicaria", "comando", "desengajaria", "deslocaria"]
        },
        {
            question: "Qual a conduta correta durante uma formação pré-ação, como você agiria?",
            answer: "Durante uma formação pré-ação, minha conduta seria de total atenção e disciplina. Manteria o silêncio, ouviria atentamente as instruções do comando, faria perguntas apenas se necessário e de forma objetiva, e me prepararia mentalmente e fisicamente para a missão. Evitaria distrações e manteria o foco na operação.",
            keywords: ["atenção", "disciplina", "silêncio", "ouviria", "foco"]
        },
        {
            question: "Um superior da ordem para você abater um suspeito em uma QRU de roubo ATM, o que você faria em tal situação?",
            answer: "Avaliaria a situação de acordo com os níveis de progressão da força e a legislação vigente. Se o suspeito representasse uma ameaça iminente à vida de inocentes ou de policiais, e todas as outras opções de contenção tivessem sido esgotadas, eu agiria para neutralizar a ameaça. Caso contrário, questionaria a ordem, buscando alternativas que não envolvessem força letal, e registraria a ordem recebida.",
            keywords: ["avaliaria", "ameaça iminente", "neutralizar", "questionaria", "força letal"]
        },
        {
            question: "Você está em uma formação e os comandos ainda não chegaram no local, seus colegas de guarnição começam a fazer brincadeiras indevidas ferindo a conduta necessária. Qual seria a sua postura diante ao ocorrido? Por que?",
            answer: "Minha postura seria de repreensão imediata e discreta aos colegas, lembrando-os da importância da disciplina e do profissionalismo, especialmente em uma formação. Se a conduta inadequada persistisse, eu me afastaria do grupo e, se necessário, reportaria a situação a um superior assim que possível.",
            keywords: ["repreensão", "discreta", "disciplina", "profissionalismo", "reportaria"]
        }
    ];

    // --- State Management ---
    const state = {
        conscriptInfo: null,
        currentQuestionIndex: 0,
        score: 0,
        timer: 20,
        timerInterval: null,
        logData: [],
        isTyping: false
    };

    const CONSTANTS = {
        TIME_LIMIT: 20,
        TYPING_SPEED: 25,
        PASS_THRESHOLD: 0.75,
        PARTIAL_THRESHOLD: 0.40
    };

    // --- DOM Elements ---
    const DOM = {
        forms: {
            auth: document.getElementById('auth-form')
        },
        containers: {
            intro: document.getElementById('intro-container'),
            quiz: document.getElementById('quiz-container'),
            results: document.getElementById('results-container'),
            analysis: document.getElementById('analysis-container'),
            toast: document.getElementById('toast-container')
        },
        quiz: {
            questionText: document.getElementById('question-text'),
            answerInput: document.getElementById('answer-input'),
            nextButton: document.getElementById('next-button'),
            timerText: document.getElementById('timer-text'),
            timerRing: document.getElementById('ring'),
            progressBar: document.getElementById('progress-bar'),
            counter: document.getElementById('question-counter')
        },
        buttons: {
            downloadLog: document.getElementById('download-log')
        },
        admin: {
            fileInput: document.getElementById('log-file-input'),
            resultsArea: document.getElementById('analysis-results')
        }
    };

    // --- Utility Functions ---
    const Utils = {
        showToast(message, type = 'success') {
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            
            const icon = type === 'success' 
                ? `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>`
                : `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
                
            toast.innerHTML = `${icon} <span>${message}</span>`;
            DOM.containers.toast.appendChild(toast);
            
            // Trigger animation
            setTimeout(() => toast.classList.add('show'), 10);
            
            // Remove after 3s
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        },

        switchView(hideElement, showElement) {
            hideElement.style.display = 'none';
            hideElement.classList.remove('slide-up');
            
            showElement.style.display = 'block';
            showElement.classList.add('fade-in');
        },

        calculateScore(userAnswer, keywords) {
            const normalizedAnswer = userAnswer.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
            let matches = 0;
            
            keywords.forEach(kw => {
                const normalizedKW = kw.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
                if (normalizedAnswer.includes(normalizedKW)) matches++;
            });

            const ratio = matches / keywords.length;
            
            if (ratio >= CONSTANTS.PASS_THRESHOLD) return { points: 1, status: "Correta", cssClass: "badge-correct" };
            if (ratio >= CONSTANTS.PARTIAL_THRESHOLD) return { points: 0.5, status: "Parcial", cssClass: "badge-partial" };
            return { points: 0, status: "Incorreta", cssClass: "badge-incorrect" };
        }
    };

    // --- Core Application Logic ---
    const App = {
        init() {
            this.bindEvents();
        },

        bindEvents() {
            // Formulário de Início
            DOM.forms.auth.addEventListener('submit', (e) => {
                e.preventDefault();
                this.startTest();
            });

            // Atalho Shift+Enter
            DOM.quiz.answerInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && e.shiftKey) {
                    e.preventDefault();
                    if (!DOM.quiz.nextButton.disabled && !state.isTyping) {
                        this.processAnswer(false);
                    }
                }
            });

            // Botão de Próxima Questão
            DOM.quiz.nextButton.addEventListener('click', () => {
                if (!state.isTyping) this.processAnswer(false);
            });

            // Download de Log
            DOM.buttons.downloadLog.addEventListener('click', () => this.generateAndDownloadLog());

            // Admin File Upload
            DOM.admin.fileInput.addEventListener('change', (e) => this.handleFileUpload(e));
        },

        startTest() {
            const discordId = document.getElementById('conscript-discord').value.trim();
            // Optional regex validation for discord (relaxed for new usernames without #)
            
            state.conscriptInfo = {
                name: document.getElementById('conscript-name').value.trim(),
                passport: document.getElementById('conscript-passport').value.trim(),
                discord: discordId,
                age: document.getElementById('conscript-age').value.trim(),
                date: new Date().toLocaleString()
            };

            Utils.showToast('Autenticação confirmada. Iniciando protocolo.', 'success');
            Utils.switchView(DOM.containers.intro, DOM.containers.quiz);
            
            setTimeout(() => this.renderQuestion(), 500);
        },

        renderQuestion() {
            if (state.currentQuestionIndex >= QUESTIONS.length) {
                return this.finishTest();
            }

            const qData = QUESTIONS[state.currentQuestionIndex];
            
            // Update UI
            DOM.quiz.counter.textContent = `${state.currentQuestionIndex + 1}/${QUESTIONS.length}`;
            DOM.quiz.progressBar.style.width = `${((state.currentQuestionIndex) / QUESTIONS.length) * 100}%`;
            
            // Reset input
            DOM.quiz.answerInput.value = '';
            DOM.quiz.answerInput.disabled = true;
            DOM.quiz.nextButton.disabled = true;
            
            // Typewriter effect
            this.typeQuestion(qData.question, () => {
                DOM.quiz.answerInput.disabled = false;
                DOM.quiz.nextButton.disabled = false;
                DOM.quiz.answerInput.focus();
                this.startTimer();
            });
        },

        typeQuestion(text, callback) {
            state.isTyping = true;
            DOM.quiz.questionText.textContent = '';
            let i = 0;
            
            const interval = setInterval(() => {
                if (i < text.length) {
                    DOM.quiz.questionText.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                    state.isTyping = false;
                    if (callback) callback();
                }
            }, CONSTANTS.TYPING_SPEED);
        },

        startTimer() {
            state.timer = CONSTANTS.TIME_LIMIT;
            const fullDashArray = 100.04; // SVG Circle logic
            
            // Reset timer visuals
            DOM.quiz.timerText.textContent = state.timer;
            DOM.quiz.timerRing.style.strokeDasharray = `${fullDashArray} ${fullDashArray}`;
            DOM.quiz.timerRing.style.strokeDashoffset = 0;
            DOM.quiz.timerRing.style.stroke = 'var(--success)';

            state.timerInterval = setInterval(() => {
                state.timer--;
                DOM.quiz.timerText.textContent = state.timer;
                
                // Calculate offset
                const offset = fullDashArray - (state.timer / CONSTANTS.TIME_LIMIT) * fullDashArray;
                DOM.quiz.timerRing.style.strokeDashoffset = offset;
                
                // Color warnings
                if (state.timer <= 10 && state.timer > 5) DOM.quiz.timerRing.style.stroke = 'var(--warning)';
                if (state.timer <= 5) DOM.quiz.timerRing.style.stroke = 'var(--danger)';

                if (state.timer <= 0) {
                    clearInterval(state.timerInterval);
                    Utils.showToast('Tempo esgotado para esta questão!', 'error');
                    this.processAnswer(true);
                }
            }, 1000);
        },

        processAnswer(isTimeout) {
            clearInterval(state.timerInterval);
            
            const qData = QUESTIONS[state.currentQuestionIndex];
            const answer = isTimeout ? "[TEMPO ESGOTADO]" : DOM.quiz.answerInput.value.trim();
            const evalResult = isTimeout ? { points: 0, status: "Incorreta" } : Utils.calculateScore(answer, qData.keywords);

            // Register Log
            state.logData.push({
                question: qData.question,
                userAnswer: answer || "[EM BRANCO]",
                timeSpent: isTimeout ? "20s (Timeout)" : `${CONSTANTS.TIME_LIMIT - state.timer}s`,
                score: evalResult.points,
                status: evalResult.status
            });

            state.score += evalResult.points;
            state.currentQuestionIndex++;
            
            this.renderQuestion();
        },

        finishTest() {
            Utils.switchView(DOM.containers.quiz, DOM.containers.results);
            // Hide Admin panel if it was visible
            DOM.containers.analysis.style.display = 'none'; 
            Utils.showToast('Avaliação concluída com sucesso.', 'success');
        },

        generateAndDownloadLog() {
            const rawData = {
                metadata: state.conscriptInfo,
                totalScore: state.score,
                maxScore: QUESTIONS.length,
                answers: state.logData
            };

            // Format as readable log but structured so parser can read it
            let logStr = `=== TAF PRF: RELATORIO CRIPTOGRAFADO ===\n`;
            logStr += `[META] NOME: ${rawData.metadata.name}\n`;
            logStr += `[META] PASSAPORTE: ${rawData.metadata.passport}\n`;
            logStr += `[META] DISCORD: ${rawData.metadata.discord}\n`;
            logStr += `[META] IDADE: ${rawData.metadata.age}\n`;
            logStr += `[META] DATA: ${rawData.metadata.date}\n`;
            logStr += `[META] NOTA_FINAL: ${rawData.totalScore}\n`;
            logStr += `==========================================\n\n`;

            rawData.answers.forEach((ans, idx) => {
                logStr += `--- Q${idx + 1} ---\n`;
                logStr += `PERGUNTA: ${ans.question}\n`;
                logStr += `RESPOSTA: ${ans.userAnswer}\n`;
                logStr += `TEMPO: ${ans.timeSpent}\n`;
                logStr += `PONTOS: ${ans.score}\n`;
                logStr += `STATUS: ${ans.status}\n\n`;
            });

            // Blob download
            const blob = new Blob([logStr], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `LOG_PRF_${rawData.metadata.passport}_${Date.now()}.log`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            Utils.showToast('Download do relatório iniciado.', 'success');
        },

        // --- Admin Module ---
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => this.parseAndDisplayLog(e.target.result);
            reader.readAsText(file);
        },

        parseAndDisplayLog(content) {
            try {
                const lines = content.split('\n');
                let meta = {};
                let items = [];
                let currentItem = {};

                lines.forEach(line => {
                    if(line.startsWith('[META]')) {
                        const parts = line.replace('[META] ', '').split(': ');
                        if(parts.length >= 2) meta[parts[0]] = parts[1];
                    }
                    else if (line.startsWith('--- Q')) {
                        if(Object.keys(currentItem).length > 0) items.push(currentItem);
                        currentItem = {};
                    }
                    else if (line.startsWith('PERGUNTA:')) currentItem.q = line.replace('PERGUNTA: ', '');
                    else if (line.startsWith('RESPOSTA:')) currentItem.a = line.replace('RESPOSTA: ', '');
                    else if (line.startsWith('TEMPO:')) currentItem.t = line.replace('TEMPO: ', '');
                    else if (line.startsWith('PONTOS:')) currentItem.p = line.replace('PONTOS: ', '');
                    else if (line.startsWith('STATUS:')) currentItem.s = line.replace('STATUS: ', '');
                });
                
                // push last item
                if(Object.keys(currentItem).length > 0) items.push(currentItem);

                this.renderAdminTable(meta, items);
                Utils.showToast('Log processado com sucesso!', 'success');
                
            } catch (error) {
                console.error(error);
                Utils.showToast('Erro ao ler o arquivo .log. Arquivo corrompido?', 'error');
            }
        },

        renderAdminTable(meta, items) {
            let html = `
                <div class="panel-header">
                    <h3>Análise de Desempenho</h3>
                    <p>Candidato: <strong class="highlight">${meta['NOME']}</strong> | Passaporte: <strong>${meta['PASSAPORTE']}</strong> | Nota: <strong class="highlight">${meta['NOTA_FINAL']} / 20</strong></p>
                </div>
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Pergunta / Resposta</th>
                            <th width="10%">Tempo</th>
                            <th width="15%">Avaliação</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            items.forEach((item, idx) => {
                let badgeClass = item.s === 'Correta' ? 'badge-correct' : (item.s === 'Parcial' ? 'badge-partial' : 'badge-incorrect');
                
                html += `
                    <tr>
                        <td>${idx + 1}</td>
                        <td>
                            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 5px;">${item.q}</div>
                            <div style="color: var(--text-main); font-family: var(--font-mono); font-size: 0.9rem;">${item.a}</div>
                        </td>
                        <td style="font-family: var(--font-mono);">${item.t}</td>
                        <td>
                            <span class="badge ${badgeClass}">${item.s} (${item.p} pts)</span>
                        </td>
                    </tr>
                `;
            });

            html += `</tbody></table>`;
            DOM.admin.resultsArea.innerHTML = html;
        }
    };

    // Inicializar Aplicação
    App.init();
});
