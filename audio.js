/* audio.js */
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let bgmInterval = null;
let bgmOscillator = null;
let isMuted = true; // 기본적으로 소리 꺼짐 (브라우저 정책 대응)

function toggleMute() {
    isMuted = !isMuted;
    if (!isMuted) {
        if(audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        playBGM();
    } else {
        stopBGM();
    }
    return isMuted;
}

function playBGM() {
    if (isMuted || bgmOscillator) return;
    
    // 밝고 몽환적인 멜로디 시퀀스
    const notes = [261.63, 329.63, 392.00, 523.25, 392.00, 329.63]; // C4, E4, G4, C5, G4, E4
    let noteIdx = 0;
    
    bgmInterval = setInterval(() => {
        if (audioCtx.state === 'suspended' || isMuted) return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = 'triangle';
        osc.frequency.value = notes[noteIdx];
        
        gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
        
        noteIdx = (noteIdx + 1) % notes.length;
    }, 400);
    
    bgmOscillator = true;
}

function stopBGM() {
    if (bgmInterval) {
        clearInterval(bgmInterval);
        bgmInterval = null;
    }
    bgmOscillator = null;
}

function playSound(type) {
    if (isMuted) return;
    if(audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'correct') {
        // 정답 (경쾌한 아르페지오 C5 E5 G5)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
        osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1);
        osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.5);
    } else if (type === 'wrong') {
        // 오답 (짧고 둔탁한 버저파)
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        osc.frequency.setValueAtTime(120, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.2);
    } else if (type === 'timeout') {
        // 시간 초과 (경고음 느낌의 사각파)
        osc.type = 'square';
        osc.frequency.setValueAtTime(400, audioCtx.currentTime);
        osc.frequency.setValueAtTime(300, audioCtx.currentTime + 0.1);
        osc.frequency.setValueAtTime(200, audioCtx.currentTime + 0.2);
        osc.frequency.setValueAtTime(100, audioCtx.currentTime + 0.3);
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
    } else if (type === 'hint') {
        // 힌트 (가벼운 종소리)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
    }
}

window.GameAudio = {
    toggleMute,
    isMuted: () => isMuted,
    playBGM,
    stopBGM,
    playSound
};
