/* Supabase Init */
const SUPABASE_URL = 'https://qsibpohhbitqjfwaxqkh.supabase.co';
const SUPABASE_KEY = 'sb_publishable_R5lbrW_qP209bUb89d2UFA_oUUxhwlx';
let supabaseClient = null;
try {
    if (window.supabase) {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    }
} catch (e) {
    console.error("Supabase 초기화 중 에러 발생:", e);
}

/* Data Logic */
const RAW_ELEMENTS = `1=H=수소=1=1=기타 비금속
2=He=헬륨=18=1=비활성 기체
3=Li=리튬=1=2=알칼리 금속
4=Be=베릴륨=2=2=알칼리 토금속
5=B=붕소=13=2=준금속
6=C=탄소=14=2=기타 비금속
7=N=질소=15=2=기타 비금속
8=O=산소=16=2=기타 비금속
9=F=플루오린=17=2=할로젠
10=Ne=네온=18=2=비활성 기체
11=Na=나트륨=1=3=알칼리 금속
12=Mg=마그네슘=2=3=알칼리 토금속
13=Al=알루미늄=13=3=전이후 금속
14=Si=규소=14=3=준금속
15=P=인=15=3=기타 비금속
16=S=황=16=3=기타 비금속
17=Cl=염소=17=3=할로젠
18=Ar=아르곤=18=3=비활성 기체
19=K=칼륨=1=4=알칼리 금속
20=Ca=칼슘=2=4=알칼리 토금속
21=Sc=스칸듐=3=4=전이 금속
22=Ti=티타늄=4=4=전이 금속
23=V=바나듐=5=4=전이 금속
24=Cr=크로뮴=6=4=전이 금속
25=Mn=망가니즈=7=4=전이 금속
26=Fe=철=8=4=전이 금속
27=Co=코발트=9=4=전이 금속
28=Ni=니켈=10=4=전이 금속
29=Cu=구리=11=4=전이 금속
30=Zn=아연=12=4=전이 금속
31=Ga=갈륨=13=4=전이후 금속
32=Ge=저마늄=14=4=준금속
33=As=비소=15=4=준금속
34=Se=셀레늄=16=4=기타 비금속
35=Br=브로민=17=4=할로젠
36=Kr=크립톤=18=4=비활성 기체
37=Rb=루비듐=1=5=알칼리 금속
38=Sr=스트론튬=2=5=알칼리 토금속
39=Y=이트륨=3=5=전이 금속
40=Zr=지르코늄=4=5=전이 금속
41=Nb=나이오븀=5=5=전이 금속
42=Mo=몰리브데넘=6=5=전이 금속
43=Tc=테크네튬=7=5=전이 금속
44=Ru=루테늄=8=5=전이 금속
45=Rh=로듐=9=5=전이 금속
46=Pd=팔라듐=10=5=전이 금속
47=Ag=은=11=5=전이 금속
48=Cd=카드뮴=12=5=전이후 금속
49=In=인듐=13=5=전이후 금속
50=Sn=주석=14=5=전이후 금속
51=Sb=안티모니=15=5=준금속
52=Te=텔루륨=16=5=준금속
53=I=아이오딘=17=5=할로젠
54=Xe=제논=18=5=비활성 기체
55=Cs=세슘=1=6=알칼리 금속
56=Ba=바륨=2=6=알칼리 토금속
57=La=란타넘=3=6=란타넘족
58=Ce=세륨=N/A=6=란타넘족
59=Pr=프라세오디뮴=N/A=6=란타넘족
60=Nd=네오디뮴=N/A=6=란타넘족
61=Pm=프로메튬=N/A=6=란타넘족
62=Sm=사마륨=N/A=6=란타넘족
63=Eu=유로퓸=N/A=6=란타넘족
64=Gd=가돌리늄=N/A=6=란타넘족
65=Tb=터븀=N/A=6=란타넘족
66=Dy=디스프로슘=N/A=6=란타넘족
67=Ho=홀뮴=N/A=6=란타넘족
68=Er=어븀=N/A=6=란타넘족
69=Tm=툴륨=N/A=6=란타넘족
70=Yb=이터븀=N/A=6=란타넘족
71=Lu=루테튬=3=6=란타넘족
72=Hf=하프늄=4=6=전이 금속
73=Ta=탄탈럼=5=6=전이 금속
74=W=텅스텐=6=6=전이 금속
75=Re=레늄=7=6=전이 금속
76=Os=오스뮴=8=6=전이 금속
77=Ir=이리듐=9=6=전이 금속
78=Pt=백금=10=6=전이 금속
79=Au=금=11=6=전이 금속
80=Hg=수은=12=6=전이 금속
81=Tl=탈륨=13=6=전이후 금속
82=Pb=납=14=6=전이후 금속
83=Bi=비스무트=15=6=전이후 금속
84=Po=폴로늄=16=6=전이후 금속
85=At=아스타틴=17=6=할로젠
86=Rn=라돈=18=6=비활성 기체
87=Fr=프랑슘=1=7=알칼리 금속
88=Ra=라듐=2=7=알칼리 토금속
89=Ac=악티늄=3=7=악티늄족
90=Th=토륨=N/A=7=악티늄족
91=Pa=프로트악티늄=N/A=7=악티늄족
92=U=우라늄=N/A=7=악티늄족
93=Np=넵투늄=N/A=7=악티늄족
94=Pu=플루토늄=N/A=7=악티늄족
95=Am=아메리슘=N/A=7=악티늄족
96=Cm=퀴리움=N/A=7=악티늄족
97=Bk=버클륨=N/A=7=악티늄족
98=Cf=캘리포늄=N/A=7=악티늄족
99=Es=아인슈타이늄=N/A=7=악티늄족
100=Fm=페르뮴=N/A=7=악티늄족
101=Md=멘델레븀=N/A=7=악티늄족
102=No=노벨륨=N/A=7=악티늄족
103=Lr=로렌슘=3=7=악티늄족
104=Rf=러더포듐=4=7=전이 금속
105=Db=더브늄=5=7=전이 금속
106=Sg=시보귬=6=7=전이 금속
107=Bh=보륨=7=7=전이 금속
108=Hs=하슘=8=7=전이 금속
109=Mt=마이트너륨=9=7=전이 금속
110=Ds=다름슈타튬=10=7=전이 금속
111=Rg=뢴트게늄=11=7=전이 금속
112=Cn=코페르니슘=12=7=전이 금속
113=Nh=니호늄=13=7=전이후 금속
114=Fl=플레로븀=14=7=전이후 금속
115=Mc=모스코븀=15=7=전이후 금속
116=Lv=리버모륨=16=7=전이후 금속
117=Ts=테네신=17=7=할로젠
118=Og=오가네손=18=7=비활성 기체`;

// 힌트 데이터는 외부 파일(hints.js)인 window.GLOBAL_EXTRA_HINTS 에서 관리합니다.

function generateHintsForElement(el) {
    // 원자 번호 범위를 대략 10 이내로 랜덤하게 주어 유추하게 합니다.
    let randOffset = Math.floor(Math.random() * 6); // 0 ~ 5
    let minZ = Math.max(1, el.z - randOffset);
    let maxZ = Math.min(118, minZ + 9);
    if (maxZ === 118) {
        minZ = Math.max(1, 118 - 9);
    }

    let hints = [
        `원자 번호는 대략 ${minZ}번에서 ${maxZ}번 사이 어딘가에 위치해 있습니다.`,
        `주기율표에서 ${el.period}주기에 위치해 있습니다.`,
        `${el.category}에 속하는 원소입니다.`,
        `원소 기호는 총 ${el.symbol.length}개의 알파벳으로 이루어져 있어요.`,
        `이 원소의 한글 이름은 총 ${el.name.length}글자입니다.`,
        `원소 기호의 첫 글자는 대문자 '${el.symbol[0]}'입니다.`,
        `한글 이름의 첫 글자는 '${el.name[0]}'입니다.`
    ];
    if (el.group !== "N/A") {
        hints.push(`주기율표에서 ${el.group}족에 속합니다.`);
    }

    // --- 새로운 힌트 6종 (양성자, 전자, 상태, 색상, 원자량, 중성자) ---
    // 1 & 2. 양성자, 전자 수 (명확한 사실)
    hints.push(`이 원소의 원자핵 속 양성자 수는 정확히 ${el.z}개입니다.`);
    hints.push(`전기적으로 중성 상태일 때, 전자의 수는 ${el.z}개입니다.`);

    // 3. 상태 (상온 기준)
    const gases = [1, 2, 7, 8, 9, 10, 17, 18, 36, 54, 86];
    const liquids = [35, 80];
    if (gases.includes(el.z)) {
        hints.push(`상온(20℃)에서 '기체' 상태로 존재합니다.`);
    } else if (liquids.includes(el.z)) {
        hints.push(`상온(20℃)에서 '액체' 상태로 존재하는 매우 희귀한 원소입니다.`);
    } else {
        hints.push(`상온(20℃)에서 '고체' 상태로 존재합니다.`);
    }

    // 4. 색상 (명확히 알려진 것만)
    const colorsMap = {
        79: "황금색", 29: "붉은색(적갈색)", 16: "노란색", 17: "황록색",
        35: "적갈색", 53: "보라색을 띤 흑회색", 6: "투명하거나(다이아몬드) 검은색(흑연)",
        15: "동소체에 따라 흰색, 붉은색, 검은색 등", 83: "은백색 바탕에 무지개빛(산화 시)"
    };
    if (colorsMap[el.z]) {
        hints.push(`눈으로 볼 때 '${colorsMap[el.z]}'을 띠는 특징이 있습니다.`);
    } else if (gases.includes(el.z) && el.z !== 17) {
        hints.push(`방 안에 채워져도 눈에 보이지 않는 '무색'입니다.`); // 염소 제외 무색 기체
    } else if (el.category.includes("금속")) {
        hints.push(`보통의 금속들처럼 대체로 '은백색' 또는 '회색' 광택을 띱니다.`);
    }

    // 5 & 6. 원자량, 중성자 수 (자주 쓰이는 주요 원소들만 기입)
    const knownMasses = {
        1: 1.0, 2: 4.0, 3: 6.9, 4: 9.0, 5: 10.8, 6: 12.0, 7: 14.0, 8: 16.0, 9: 19.0, 10: 20.2,
        11: 23.0, 12: 24.3, 13: 27.0, 14: 28.1, 15: 31.0, 16: 32.1, 17: 35.5, 18: 39.9, 19: 39.1, 20: 40.1,
        26: 55.8, 29: 63.5, 30: 65.4, 47: 107.9, 79: 197.0, 80: 200.6, 82: 207.2
    };
    if (knownMasses[el.z]) {
        let mass = knownMasses[el.z];
        hints.push(`이 원소의 평균 원자량은 약 ${mass}입니다.`);
        
        let neutrons = Math.round(mass) - el.z;
        if (el.z === 1) {
            hints.push(`가장 흔한 동위원소의 중성자 수는 0개입니다!`);
        } else {
            hints.push(`가장 비율이 높은 동위원소를 기준으로 중성자 수는 대략 ${neutrons}개입니다.`);
        }
    }

    if (window.GLOBAL_EXTRA_HINTS && window.GLOBAL_EXTRA_HINTS[el.z]) {
        hints.push(...window.GLOBAL_EXTRA_HINTS[el.z]);
    }

    // 무작위로 섞어서 반환
    return hints.sort(() => Math.random() - 0.5);
}

const ELEMENTS = RAW_ELEMENTS.trim().split('\n').map(line => {
    let [z, symbol, name, group, period, category] = line.split('=');
    let obj = { z: parseInt(z), symbol, name, group, period, category };
    obj.hints = generateHintsForElement(obj);
    return obj;
});

/* App State */
const state = {
    problems: [], // Max 30
    currentIndex: 0,
    score: 0,
    hearts: 3,
    hintsRevealed: 1, // Start with 1 hint
    gameActive: false,
    timeLeft: 60,
    timerInterval: null
};

const appDiv = document.getElementById('app');

/* UI Toggles */
window.toggleHelp = function() {
    let modal = document.getElementById('helpModal');
    if (modal) {
        modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
    }
};

window.toggleSoundUI = function() {
    if (window.GameAudio) {
        let isMuted = window.GameAudio.toggleMute();
        let btn = document.getElementById('soundBtn');
        if (btn) btn.innerText = isMuted ? '🔇' : '🔊';
    }
};

/* Views */
function renderHome() {
    state.gameActive = false;
    appDiv.innerHTML = `
        <div class="fade-in">
            <h1>🧪 주기율표 스무고개 🌌</h1>
            <h2>원소를 맞춰라!</h2>
            
            <div class="theme-selector">
                <button class="theme-btn active" onclick="setTheme('theme-space')">🚀 우주선</button>
                <button class="theme-btn" onclick="setTheme('theme-lab')">⚗️ 실험실</button>
                <button class="theme-btn" onclick="setTheme('theme-board')">🏫 칠판</button>
            </div>
            
            <div class="home-menu">
                <button class="btn" onclick="startGame()">▶️ 게임 시작</button>
                <button class="btn btn-secondary" onclick="renderRanking()">🏆 랭킹 확인</button>
            </div>
        </div>
    `;
    updateThemeSelector();
}

function setTheme(theme) {
    document.body.className = theme;
    updateThemeSelector();
}

function updateThemeSelector() {
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(document.body.className)) {
            btn.classList.add('active');
        }
    });
}

function startGame() {
    // 1. 모든 원소를 힌트가 가장 많은 순서(내림차순)로 배열합니다.
    let sortedByHints = [...ELEMENTS].sort((a, b) => b.hints.length - a.hints.length);
    
    // 2. 가장 힌트가 풍부한 상위 30개의 원소들 중에서 무작위로 20개를 뽑아 초반 문제(1~20번)로 배치합니다.
    let topCandidates = sortedByHints.slice(0, 30).sort(() => 0.5 - Math.random());
    let firstPart = topCandidates.slice(0, 20);
    
    // 3. 나머지 원소들 중에서 무작위로 10개를 뽑아 후반 문제(21~30번)로 배치합니다.
    let remainingCandidates = sortedByHints.slice(30).sort(() => 0.5 - Math.random());
    let secondPart = remainingCandidates.slice(0, 10);
    
    // 4. 출제 리스트를 합칩니다.
    let selected = firstPart.concat(secondPart);

    state.problems = selected;
    state.currentIndex = 0;
    state.score = 0;
    state.gameActive = true;
    startProblem();
}

function startProblem() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    if (state.currentIndex >= state.problems.length) {
        return renderGameOver();
    }
    state.hearts = 3;
    state.hintsRevealed = 1;
    state.timeLeft = 60;

    // 무작위로 힌트를 섞은 뒤, 게임 밸런스를 맞추기 위해 최대 20개까지만 끊어서 제공합니다.
    let currentElement = state.problems[state.currentIndex];
    currentElement.gameHints = [...currentElement.hints].sort(() => 0.5 - Math.random());
    if (currentElement.gameHints.length > 20) {
        currentElement.gameHints = currentElement.gameHints.slice(0, 20);
    }
    state.maxHints = currentElement.gameHints.length;

    renderGame();
    startTimer();
}

/* Timer Logic */
function startTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    updateTimerUI();
    state.timerInterval = setInterval(() => {
        state.timeLeft--;
        updateTimerUI();
        if (state.timeLeft <= 0) {
            clearInterval(state.timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function updateTimerUI() {
    let timerBar = document.getElementById('timerBar');
    let timerText = document.getElementById('timerText');
    if (!timerBar || !timerText) return;
    
    timerText.innerText = `${state.timeLeft}초`;
    timerBar.style.width = `${(state.timeLeft / 60) * 100}%`;
    
    if (state.timeLeft <= 10) {
        timerBar.classList.add('warning');
    } else {
        timerBar.classList.remove('warning');
    }
}

function handleTimeout() {
    if (window.GameAudio) window.GameAudio.playSound('timeout');
    let el = state.problems[state.currentIndex];
    alert(`시간 초과! ⏳\n정답은 [${el.name} (${el.symbol})] 였습니다.\n(다음 문제로 넘어갑니다)`);
    state.currentIndex++;
    startProblem();
}

function renderGame() {
    let el = state.problems[state.currentIndex];
    let hintsHtml = '';

    // 이제 무조건 20개가 아니라, 이 원소가 가진 총 힌트 개수(maxHints)까지만 빈칸/힌트를 표시합니다!
    for (let i = 0; i < state.maxHints; i++) {
        if (i < state.hintsRevealed) {
            hintsHtml += `<div class="hint-slot revealed">${el.gameHints[i]}</div>`;
        } else {
            hintsHtml += `<div class="hint-slot empty">힌트 ${i + 1}</div>`;
        }
    }

    appDiv.innerHTML = `
        <div class="fade-in" style="display:flex; flex-direction:column; height: 100%;">
            <div class="game-header">
                <div>
                    <span class="problem-counter">문제 ${state.currentIndex + 1} / 30</span>
                </div>
                <div class="hearts">${'❤️'.repeat(state.hearts)}${'🤍'.repeat(3 - state.hearts)}</div>
                <div class="score">Score: ${state.score}</div>
            </div>
            
            <div class="timer-container" id="timerContainer">
                <div class="timer-bar ${state.timeLeft <= 10 ? 'warning' : ''}" id="timerBar" style="width: ${(state.timeLeft / 60) * 100}%;"></div>
                <div class="timer-text" id="timerText">${state.timeLeft}초</div>
            </div>
            
            <div class="hints-container">
                ${hintsHtml}
            </div>
            
            <div class="controls">
                <div class="input-area" id="inputForm">
                    <input type="text" id="answerInput" placeholder="원소 기호 또는 한글 이름을 입력하세요!" autocomplete="off" />
                </div>
                <button class="btn btn-secondary" onclick="submitAnswer()">정답 🚀</button>
                <button class="btn" onclick="nextHint()">다음 힌트 💡</button>
            </div>
        </div>
    `;

    let input = document.getElementById('answerInput');
    input.focus();
    input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') submitAnswer();
    });
}

function nextHint() {
    if (state.hintsRevealed < state.maxHints) {
        state.hintsRevealed++;
        if (window.GameAudio) window.GameAudio.playSound('hint');
        renderGame();
    } else {
        alert(`저런, 모든 힌트(${state.maxHints}개)를 다 열어버렸어요! 이제 정답을 유추해보세요.`);
    }
}

function submitAnswer() {
    let el = state.problems[state.currentIndex];
    let inputEl = document.getElementById('answerInput');
    let ans = inputEl.value.trim().toLowerCase();

    if (!ans) return;

    if (ans === el.symbol.toLowerCase() || ans === el.name) {
        // Correct 
        if (state.timerInterval) clearInterval(state.timerInterval);
        if (window.GameAudio) window.GameAudio.playSound('correct');
        
        let pScore = 100;
        if (state.maxHints > 1) {
            let deductionPerHint = 95 / (state.maxHints - 1);
            pScore = Math.floor(100 - (state.hintsRevealed - 1) * deductionPerHint);
        }
        if (pScore < 5) pScore = 5;

        state.score += pScore;
        alert(`정답입니다! 🎉 (+${pScore}점) \n원소: ${el.name} (${el.symbol})`);
        state.currentIndex++;
        startProblem();
    } else {
        // Wrong
        if (window.GameAudio) window.GameAudio.playSound('wrong');
        
        state.hearts--;
        document.getElementById('inputForm').classList.add('shake');
        setTimeout(() => document.getElementById('inputForm').classList.remove('shake'), 300);

        if (state.hearts <= 0) {
            if (state.timerInterval) clearInterval(state.timerInterval);
            alert(`아쉽네요! 기회를 모두 사용했습니다. 😢\n정답은 [${el.name} (${el.symbol})] 였습니다.`);
            state.currentIndex++;
            startProblem();
        } else {
            inputEl.value = '';
            inputEl.placeholder = `틀렸습니다! 남은 기회: ${state.hearts}번`;
            renderGameHeaderOnly(); // update hearts
        }
    }
}

function renderGameHeaderOnly() {
    let heartsDiv = document.querySelector('.hearts');
    if (heartsDiv) heartsDiv.innerHTML = `${'❤️'.repeat(state.hearts)}${'🤍'.repeat(3 - state.hearts)}`;
}

function renderGameOver() {
    appDiv.innerHTML = `
        <div class="fade-in" style="text-align: center; margin-top: 50px;">
            <h1>게임 종료! 🏁</h1>
            <h2>최종 점수: ${state.score} 점</h2>
            
            <div style="margin: 30px 0;">
                <input type="text" id="playerName" placeholder="너의 이름을 남겨줘!" style="padding: 15px; font-size: 1.2rem; border-radius: 12px; border: 2px solid var(--primary); outline: none; text-align: center; width: 60%; font-family: inherit;">
            </div>
            
            <button class="btn" onclick="saveScore()">랭킹 등록하기 🌟</button>
            <button class="btn btn-secondary" onclick="renderHome()" style="margin-left: 10px;">홈으로 가기</button>
        </div>
    `;
}

async function saveScore() {
    let name = document.getElementById('playerName').value.trim();
    if (!name) name = "익명";

    if (supabaseClient) {
        try {
            const { error } = await supabaseClient.from('rankings').insert([{ name: name, score: state.score }]);
            if (error) {
                // Ignore error if table doesn't exist yet, just alert
                console.error(error);
                alert("기록 저장 중 문제가 발생했습니다! (Supabase 설정 확인 필요)");
            }
        } catch (e) {
            console.error(e);
        }
    } else {
        alert("Supabase가 연결되지 않아 점수가 저장되지 않았습니다!");
    }
    renderRanking();
}

async function renderRanking() {
    appDiv.innerHTML = `
        <div class="fade-in">
            <h1>🏆 명예의 전당 🏆</h1>
            <h2 id="loadingText">데이터를 불러오는 중...</h2>
            <ul class="ranking-list" id="rankingList"></ul>
            <div style="text-align: center; margin-top: 20px;">
                <button class="btn" onclick="renderHome()">홈으로 가기</button>
            </div>
        </div>
    `;

    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient.from('rankings')
                .select('*')
                .order('score', { ascending: false })
                .limit(10);

            document.getElementById('loadingText').style.display = 'none';
            let list = document.getElementById('rankingList');

            if (error) {
                list.innerHTML = `<li>오류: ${error.message}</li>`;
            } else if (data && data.length > 0) {
                data.forEach((item, idx) => {
                    list.innerHTML += `
                        <li class="ranking-item">
                            <div>
                                <span class="rank-badge">${idx + 1}등</span>
                                <span>${item.name}</span>
                            </div>
                            <div style="font-weight: bold; color: var(--secondary)">${item.score} 점</div>
                        </li>
                    `;
                });
            } else {
                list.innerHTML = `<li style="text-align:center;">아직 등록된 랭킹이 없습니다!</li>`;
            }
        } catch (e) {
            document.getElementById('loadingText').innerText = "불러오기 실패!";
        }
    } else {
        document.getElementById('loadingText').innerText = "Supabase가 연결되어 있지 않습니다.";
    }
}

// Start
renderHome();
