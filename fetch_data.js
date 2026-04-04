const fs = require('fs');
const https = require('https');

https.get('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json', (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        const parsedData = JSON.parse(rawData);
        const elementsData = {};
        for(let el of parsedData.elements) {
            // translate phases
            let phaseKOR = "알 수 없음";
            if (el.phase === "Gas") phaseKOR = "기체";
            else if (el.phase === "Liquid") phaseKOR = "액체";
            else if (el.phase === "Solid") phaseKOR = "고체";

            const colorMap = {
                "colorless": "무색",
                "colorless gas": "무색",
                "silvery white": "은백색",
                "silvery gray": "은회색",
                "silver": "은색",
                "yellow": "노란색",
                "pale yellow": "옅은 노란색",
                "yellowish": "노르스름한 색",
                "greenish": "녹색빛",
                "red": "붉은색",
                "copper red": "구리빛 붉은색",
                "gold": "황금색",
                "gray": "회색",
                "black": "검은색",
                "slate gray": "점판암 회색",
                "silver-white": "은백색",
                "metallic": "금속 광택이 나는 색",
                "redish": "붉은빛"
            };

            let korColor = null;
            if (el.color) {
                let lower = el.color.toLowerCase();
                for (let k in colorMap) {
                    if (lower.includes(k)) {
                        korColor = colorMap[k];
                        break;
                    }
                }
            }

            // Some well-known missing colors
            if (el.number === 79) korColor = "황금색";
            if (el.number === 29) korColor = "붉은색(적갈색)";
            if (el.number === 17) korColor = "황록색";
            if (el.number === 35) korColor = "적갈색";
            if (el.number === 53) korColor = "보라색을 띤 흑회색";
            if (el.number === 16) korColor = "노란색";
            
            // noble gases are colorless
            if ([2, 10, 18, 36, 54, 86, 118].includes(el.number) || [1, 7, 8, 9].includes(el.number)) korColor = "무색";
            
            // most metals are silvery white
            if (!korColor && (el.category.includes("metal") || el.category.includes("lanthanide") || el.category.includes("actinide"))) {
                korColor = "은백색 또는 회색";
            }

            elementsData[el.number] = {
                color: korColor,
                phase: phaseKOR,
                atomic_mass: el.atomic_mass
            };
        }
        
        fs.writeFileSync('C:/Users/leave/.gemini/antigravity/scratch/element-guess-game/element_data.js', 'window.ELEMENT_DATA = ' + JSON.stringify(elementsData, null, 2) + ';');
        console.log('done');
    });
});
