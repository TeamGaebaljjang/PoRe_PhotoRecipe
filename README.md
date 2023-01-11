# <span id="top">📷 PoRe_PhotoRecipe</span>
<img src="src\assets\img\readme\Mockup.png">
📎 배포 URL : https://pore.netlify.app
<br/>
🔓 계정 : `kbjj23@pore.com` | `123123`
<br/>

#### [ 프로젝트 설명 ]

- **당신이 있는 곳이 포토존입니다.** '포토레시피 PORE'는 포토존을 공유할 수 있는 SNS형 웹 애플리케이션 입니다.

- 나만의 포토존을 등록해 공유하거나, 다른 유저들이 등록한 포토존들을 지도 페이지에서 확인할 수 있습니다. <br/>
- 포토존을 등록하지 않아도 본인이 찍은 사진과 설명을 게시글로 공유하며 즐거운 SNS 활동을 할 수 있습니다. <br/>
- **PORE를 사용해 새로운 인생 사진을 찍고 남겨보세요.**
<br/>

<details>
<summary>목차</summary>
<div markdown="1">

1. [팀 소개](#teamsogae)
2. [기술 및 개발 환경](#gisul)
3. [개발 기간 및 작업 관리](#task)
4. [주요 기능](#juyogineung)
5. [프로젝트 구조 및 포인트](#gujo)
6. [역할분담](#role)
7. [UI](#UI)
8. [페이지 기능](#pagegineung)
9. [리팩토링 계획](#versionplan)
10. [팀 활동](#whatwedid)
11. [느낀점](#sogam)
<br/>

</div>
</details>

## <span id="teamsogae">Team ㄱㅂㅉ👊을 소개합니다!</span>
안녕하세요. 저희는 4명의 Front-end 개발자로 구성된 '**Team ㄱㅂㅉ**' 입니다. 팀원들의 초성인 ㄱ,ㅂ,ㅈ,ㅈ 을 하나로 모아 서로 도와주며 함께 성장하는 '**개발짱**' 이 되자는 의미를 담은 팀명입니다. (기본적으로 '개발짱'으로 팀명을 발음합니다.)
<br/>_(🦁멋쟁이사자처럼 프론트엔드스쿨 3기 프로젝트 23팀입니다.)_
|**ㄱ 김도영**|**ㅂ 배이솔**|**ㅈ 장희수**|**ㅈ 조민지** |
| :------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="180" alt="doyoung_profile_img" src="./src/assets/img/readme/RM%20profile-01.jpg"> | <img width="180" alt="isol_profile_img" src="./src/assets/img/readme/RM%20profile-02.jpg"> | <img width="180" alt="heesu_profile_img" src="./src/assets/img/readme/RM%20profile-03.jpg"> | <img width="180" alt="minji_profile_img" src="./src/assets/img/readme/RM%20profile-04.jpg"> |
|                      [dyFlower](https://github.com/dyFlower)                      |                        [jjangi](https://github.com/jjangi)                        |                     [heesu0303](https://github.com/heesu0303)                     |                       [ming-Jo](https://github.com/ming-Jo)                       |
|                                     개발 리더                                     |                               기획 & 소통 리더                               |                            디자인 & 문서화 리더                             |                             팀장 & 디자인 리더                              |



#### [ 프로젝트 목표 ]
- 학습한 React와 여러 라이브러리를 활용해 SPA 웹 어플리케이션 개발
- 페어프로그래밍, 협업 툴 사용해 협업 경험 쌓기
- 디자인, 기능 추가 등 제공된 API와 디자인을 넘어 팀만의 프로젝트로 구현 완료해내기
<br/>
<p align="right"><a href="#top">(Top)</a></p>

## <span id="gisul">⚙️ 기술 및 개발 환경</span>

#### [ 사용 기술 ]
- FrontEnd
  <br/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
  <img src="https://img.shields.io/badge/ReduxToolkit-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
  <br/>
- BackEnd
  <br/>
  [제공된 API](https://www.notion.so/API-53151605673d438cbc4389f7591c5982)

#### [ 개발 환경 ]
<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"/> <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/> <img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=Discord&logoColor=white"/>
- [GitHub Projects](https://github.com/orgs/TeamGaebaljjang/projects/2) : GitHub Issues와 함께 프로젝트 진행상황 총괄보드 관리
- [Notion](https://grizzled-crib-db0.notion.site/1f7a58eedf1c42ae99b8343c41d0f686) : 회의록, 정보 공유, 트러블 슈팅 작성 등 팀 프로젝트 동안의 모든 기록을 남김
- [Figma](https://www.figma.com/file/QZ6SyhBxDVNi3nUNgkDAoU/%ED%8F%AC%ED%86%A0%EB%A0%88%EC%8B%9C%ED%94%BC?node-id=0%3A1&t=hboGhZFHnTvuFo3B-0) : 공동 계정 생성 후 팀원 전체 접속해 레퍼런스 검색부터 디자인 시안 상의까지 진행

#### [Git-flow 전략]
main 브랜치에서는 충돌이 발생하지 않게 하고, main 브랜치의 역할(배포)만 할 수 있도록 기능 구현 또는 버그 수정 시 기능 단위별로 브랜치를 생성해 develop 브랜치에 push하는 Git-flow 전략을 사용했습니다. <br/> 각 브랜치의 이름은 `feat/세부기능`으로 이름 지어 어떠한 기능의 브랜치인지를 알 수 있게 하였으며 push 완료 이후에는 삭제하여 브랜치를 잘못 사용하는 경우를 방지했습니다. <br/> (기본적으로 5가지 브랜치를 활용하는 Git-flow 전략이나, 프로젝트 규모에 맞춰 3가지로 축소해 활용하였습니다.)

#### [컨벤션]
&nbsp;일관적인 코드 작성을 위해 여러 컨벤션을 정해 사용했습니다.
- <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=Prettier&logoColor=white"/> 
```
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "always",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "insertPragma": false,
  "requirePragma": false,
  "vueIndentScriptAndStyle": false,
  "jsxSingleQuote": false,
  "htmlWhitespaceSensitivity": "css",
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "endOfLine": "auto",
  "embeddedLanguageFormatting": "auto"
}
```
- <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=white"/>  (airbnb Style Guide)
```
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
        trailingComma: 'all',
      },
    ],
    'no-console': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['htmlFor'],
      },
    ],
    'react/prop-types': 'off',
  },
};
```
- [Git Commit Message](https://www.notion.so/fab1f4c2ff814adcace4c0f693d365ac?p=ca58839bf7954ee2b74df37e9cd344b2&pm=c)
```
✨ Feat: 새로운 기능 추가
💄 Design : CSS, 사용자 UI 디자인 변경
📝 Docs : 문서 수정
🎨 Style : 코드포맷, 세미콜론, 개행, 코드 구조, 형태
🤔 Test : 테스트
♻️ Refactor: 코드 리팩토링
🐛 Fix : 버그 및 오류 수정
🔥 Remove : 불필요한 파일 삭제
🔨 Chore : 빌드 업무, 패키지매니저, 폴더트리, 세팅 수정
💡 Comment : 필요한 주석 추가 및 변경
```
- 파일명 : 폴더는 카멜 케이스, 파일은 파스칼 케이스로 입력해 저장
  
#### [ 서비스 배포 ]
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=white"/>
<p align="right"><a href="#top">(Top)</a></p>

## <span id='task'>⏱ 개발 기간 및 작업 관리</span>
* 프로젝트 기간 : 2022.12.09 - 2023.01.05
### 총괄보드
팀 노션 워크스페이스에서 [총괄보드](https://www.notion.so/124d64ea15f2471eba5351aa2a5fa829?v=2d54626e41da47bda2bf9c6eb1fa9ec9)를 생성해 팀 스케줄(오프라인/구현/발표/정기회의)을 세우고 이를 따랐습니다.
<br/>
<img width="1552" alt="스크린샷 2023-01-08 오후 9 17 11" src="https://user-images.githubusercontent.com/72817156/211740045-727be481-f143-4984-ad57-f1fa7fad0770.png">

### 일일회의
매일 시작 전 20분 정도 개인 진행 상황 공유 및 상의, 이를 팀 노션 워크스페이스 [회의록 페이지](https://www.notion.so/cda525f5ca7a4a06b4ad76d6cfa3e3e1)에 기록했습니다.
<br/>
<img width="1552" alt="스크린샷 2023-01-08 오후 9 19 12" src="https://user-images.githubusercontent.com/72817156/211740182-6e217e38-7746-498c-9f7f-167751485685.png">

### 트러블슈팅
개인 파트 개발 중에 생긴 여러 문제, 해결 과정을 팀 노션 워크스페이스 [트러블슈팅 페이지](https://www.notion.so/c982788909a247e2b52634daf1f44497)에 기록해 공유했습니다. <br/>
_이를 통해 동일한 트러블 발생 시 정확하게 이유를 알고 해결까지 편리하게 해낼 수 있었습니다.
<br/>
<img width="1552" alt="스크린샷 2023-01-08 오후 9 19 51" src="https://user-images.githubusercontent.com/72817156/211740251-6d74c76a-8763-4db0-b46d-34fc5b6f7cba.png">
<br/>
<p align="right"><a href="#top">(Top)</a></p>

## <span id='juyogineung'>🗸 주요 기능</span>

- 🔐 계정

  - 로그인 / 로그아웃
  - 회원가입
  - 회원 정보 설정
  - 유효성 검증
  - 토큰 검증

- 🏡 홈 / 피드

  - 유저 검색
  - 게시물 목록
  - 무한 스크롤 / Top 버튼
  - 캐러셀 배너
  - 지역별 필터 버튼

- 👤 프로필

  - 팔로우 / 언팔로우
  - 게시물 등록 / 수정 / 삭제 / 신고
  - 프로필 수정

- 💬 게시물 / 댓글

  - 게시물 작성 / 수정 / 삭제 / 신고
  - 댓글 작성 / 삭제 / 신고
  - 이미지 업로드 / 수정
  - 다중 이미지 표시
  - 게시물 표시 방식(앨범형 / 리스트형)
  - 좋아요 / 좋아요 취소

- 📸 포토존

  - 포토존 등록 / 수정 / 삭제 / 신고
  - 지역별 포토존 목록

- 📍 지도
  - 카카오맵 API 연동
  - 포토존 위치 마커
  - 키워드 검색
  - 마커 클릭 시 해당 포토존 이름 표시

<br/>
<p align="right"><a href="#top">(Top)</a></p>

## <span id='gujo'>🗂 프로젝트 구조 및 포인트</span>
- assets/ : 아이콘, 파비콘
- components/ : 컴포넌트 
- pages/ : 생성한 컴포넌트들을 조합해 각 페이지 구현
- styles/ : globalStyle, 라이트/다크 모드 색상 적용
```
📦 PoRe_PhotoRecipe
├─ 📁.github
├─ 📁node_modules
├─ 📁public
├─ 📁src
│  ├─ 📁assets
│  │  ├─ 📁icons
│  │  └─ 📁img
│  ├─ 📁components
│  │  ├─ 📁button
│  │  ├─ 📁card
│  │  ├─ 📁comment
│  │  ├─ 📁errorMessage
│  │  ├─ 📁header
│  │  ├─ 📁input
│  │  ├─ 📁modal
│  │  ├─ 📁navBar
│  │  ├─ 📁profile
│  │  └─ 📁user
│  ├─ 📁pages
│  │  ├─ 📁Chat
│  │  ├─ 📁Feed
│  │  ├─ 📁Home
│  │  ├─ 📁Login
│  │  ├─ 📁Map
│  │  ├─ 📁NotFound
│  │  ├─ 📁PostDetail
│  │  ├─ 📁Profile
│  │  ├─ 📁Search
│  │  └─ 📁Splash
│  ├─ 📁routes
│  ├─ 📁store
│  ├─ 📁styles
│  ├─ App.jsx
│  └─ index.jsx
├─ .env
├─ .eslintrc.js
├─ .gitignore
├─ .gitmessage.txt
├─ .prettierrc
├─ package-lock.json
├─ package.json
└─ README.md
```

### 코드 포인트
- [ ] 코드 중에서도 기술하고 싶은 부분 몇 개 추려서 기술해보기?

### 스페셜 포인트
- [ ] 기능이나 디자인 등 코드 외 포인트로 설명하고 싶은 부분 몇 개 추려 기술해보기?
<br/>
<p align="right"><a href="#top">(Top)</a></p>

## <span id="role">🙋‍♀️ 역할 분담</span>

### 김도영

### 배이솔

### 장희수

### 조민지

<br/>
<p align="right"><a href="#top">(Top)</a></p>

## <span id="UI">🧭 UI</span>
![UI](https://user-images.githubusercontent.com/72817156/211751023-26d374e4-a7d0-4f07-8b5e-14dcb757f07c.png)

<br/>
<p align="right"><a href="#top">(Top)</a></p>

## <span id="pagegineung">💻️ 페이지 기능</span>
- 상세 기능 설명은 각 페이지별 링크 연결해두었습니다.
### 1) Start
|🔗[splash](링크)|🔗[로그인](링크)|🔗[회원가입](링크)|
|:-:|:-:|:-:|
|짤|짤|짤|

### 2) 홈
|🔗[캐러셀](링크)|🔗[검색](링크)|🔗[지역필터](링크)|🔗[포토존 스크롤](링크)|
|:-:|:-:|:-:|:-:|
|짤|짤|짤|짤|

### 3) 피드
|🔗[피드 스크롤](링크)|🔗[검색](링크)|🔗[피드 상세](링크)|🔗[좋아요와 댓글](링크)|
|:-:|:-:|:-:|:-:|

### 4) 지도
|🔗[포토존 모달 스크롤](링크)|🔗[검색](링크)|🔗[마커 hover](링크)|
|:-:|:-:|:-:|
|짤|짤|짤|


### 5) 프로필
|🔗[팔로워](링크)|🔗[팔로잉](링크)|🔗[포토존 등록](링크)|🔗[게시글 등록](링크)|🔗[프로필 수정](링크)|🔗[검색](링크)|🔗[포토존 모달](링크)|🔗[게시글 앨범형&리스트형](링크)|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|짤|짤|짤|짤|짤|짤|짤|짤|

### + 다크모드/반응형

<br/>
<p align="right"><a href="#top">(Top)</a></p>

## <span id="versionplan">📚 리팩토링 계획</span>
포토존 등록 시, 사진 촬영 일자 Date 적용 <br/>
이미지 압축 라이브러리 적용 <br/>
리덕스 툴킷 전체 적용
<br/>
<p align="right"><a href="#top">(Top)</a></p>


## <span id="whatwedid">👨‍👩‍👧‍👧 팀 활동</span>
&nbsp;'ㄱㅂㅉ'은 팀 프로젝트 기간 동안, 개발 이외 팀 친목 시간을 많이 가졌습니다. 이러한 시간 보냄으로서 팀워크를 단단히 다질 수 있었습니다!  ('[추억 보따리](https://www.notion.so/05c69c4337214b95aadaea0a10d75ffa)'라는 이름의 팀 노션 워크스페이스의 페이지를 생성해 사진들을 기록했고, 프로젝트 중간에 꺼내보며 추억을 회상하고 많이 웃을 수 있었습니다☺) <br/> <br/>
<img width="1552" alt="스크린샷 2023-01-08 오후 9 43 58" src="https://user-images.githubusercontent.com/72817156/211741340-9e88eacf-ef61-4e15-b383-980c33877f6f.png">

- 오프라인 모임 (드레스코드 맞춰 단체 사진 찍기) <br/>
<img width="650" height="500" src="https://user-images.githubusercontent.com/65801741/211146724-f1e3e335-bf22-4a52-a991-d8e4accadb78.jpeg">

- 퇴실 후 주변 맛집 찾아 맛저! <br/>
![image](https://user-images.githubusercontent.com/65801741/211146858-2674939d-8ed1-4828-90c0-ce1625de60e6.png)

<p align="right"><a href="#top">(Top)</a></p>


## <span id="sogam">✒ 프로젝트를 마치며,</span>
**우리 개발짱은 아직 프로젝트를 마치지 않았습니다! <br/> 리팩토링과 버전 업그레이드를 통해서 PORE를 더욱 완성시켜 나갈 것 입니다!** <br/>

🦁 **ㄱ도영** <br/>
super thx,,
<br/>
🦁 **ㅂ이솔** <br/>
super thx,,
<br/>
🦁 **ㅈ희수** <br/>
super thx,,
<br/>
🦁 **ㅈ민지** <br/>
super thx,,
<br/>
<p align="right"><a href="#top">(Top)</a></p>

