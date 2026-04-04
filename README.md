# 🧪 원소 주기율표 스무고개 (Periodic Table Twenty Questions)

**원소 주기율표 스무고개**는 118개의 화학 원소들을 재미있게 학습할 수 있는 **웹 기반의 교육용 추리 게임**입니다. 제공되는 다양한 과학적 힌트들을 조합하여, 제한 시간 내에 정답 원소를 유추해 보세요!

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

---

## 🎮 주요 기능 (Features)

* **다양하고 정확한 과학적 힌트 생성기**
  * 양성자, 전자 수, 상온에서의 상태(고체/액체/기체), 고유 색상, 대략적인 원자량 및 중성자 수 등 실제 화학 데이터를 기반으로 문제를 출제합니다.
* **짜릿한 제한 시간 & 하트 시스템**
  * 문제당 **1분의 제한 시간**이 주어지며, 10초 이하가 되면 타이머 바가 붉은색으로 깜빡이며 긴장감을 더합니다.
  * 한 문제당 3번의 기회(하트)가 주어집니다.
* **전략적인 점수 시스템**
  * 처음에는 1개의 힌트만 제공됩니다. [다음 힌트 💡]를 열어볼수록 문제를 맞혔을 때 획득할 수 있는 점수가 점차 감소합니다.
* **글로벌 랭킹 보드 (명예의 전당)**
  * **[Supabase](https://supabase.com/)** DB가 연동되어 있어, 게임 종료 시 자신의 점수를 전 세계 사람들과 겨룰 수 있는 리더보드를 제공합니다.
* **3가지 맞춤형 테마 제공**
  * 🚀 우주선, ⚗️ 실험실, 🏫 칠판 테마를 지원하여 원하는 디자인으로 변경할 수 있습니다.
* **자체 BGM & 효과음 내장**
  * 별도의 음원 리소스 파일 없이 브라우저 내장 `Web Audio API`만으로 우주 느낌의 BGM과 직관적인 효과음을 직접 코드로 합성하여 가볍게 구동됩니다.

## 🚀 플레이 방법 (How to Play)

1. 메인 화면에서 원하는 테마를 선택한 뒤 **[▶️ 게임 시작]** 을 누릅니다.
2. 화면에 나타나는 첫 번째 원소 힌트를 읽습니다.
3. 정답을 안다면 아래 입력창에 **원소 기호** (예: H, O, Fe) 혹은 **한글 이름** (예: 수소, 산소, 철)을 적고 정답을 제출합니다.
4. 아직 모르겠다면 **[다음 힌트 💡]** 버튼을 눌러 점수를 조금 포기하고 추가 정보를 얻을 수 있습니다.
5. 시간이 모두 끝날 때까지 최대한 많은 점수를 획득해 **[명예의 전당]**에 등록해 보세요!

## 🛠️ 설치 및 실행 (Installation & Run)

이 프로젝트는 순수 Vanilla (HTML/CSS/JS) 기반으로 만들어져 있어, 별도의 설치나 빌드 과정 없이 즉시 실행이 가능합니다!

1. 레포지토리를 클론합니다.
```bash
git clone https://github.com/your-username/element-guess-game.git
```

2. 클론한 폴더 안의 `index.html` 파일을 크롬(Chrome), 엣지(Edge), 등 모던 웹 브라우저로 엽니다.
*(또는 VS Code의 `Live Server` 확장을 이용해 바로 실행하셔도 됩니다.)*

## 📁 프로젝트 구조 (File Structure)

```text
📦element-guess-game
 ┣ 📜index.html      # 게임 메인 뷰 및 마크업 구조
 ┣ 📜style.css       # 테마 및 글래스모피즘(Glassmorphism) UI 스타일
 ┣ 📜app.js          # 게임 코어 로직, Supabase 랭킹 연동 및 UI 컨트롤러
 ┣ 📜hints.js        # 일부 알려지지 않은 원소의 커스텀 추가 힌트 모음
 ┗ 📜audio.js        # Web Audio API를 활용한 코딩 기반(No-Asset) 효과음 제어
```

## 🤝 기여 (Contributing)

주기율표 데이터나 더 기발한 힌트들을 추가해 주시고 싶으신가요? 
PR(Pull Request)과 이슈(Issue)는 언제나 환영합니다! 
원자량 데이터 등 추가적인 정보 개선에 도움을 주실 분들은 `app.js` 내부의 `knownMasses`, `colorsMap` 딕셔너리를 참고해 주세요.

## 📄 라이선스 (License)

이 프로젝트는 MIT License를 따릅니다. 누구나 자유롭게 수정 및 배포할 수 있습니다.
