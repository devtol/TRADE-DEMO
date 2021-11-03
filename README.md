# 개발 설정
## mui
```
npm install @mui/material @mui/icons-material
```
## emotion
```
npm install @emtion/react @emotion/styled
```
## 상태관리를 편하게 하기위해 redux 라이브러리 추가
```
npm install redux react-redux
```


# 규칙
1. 폴더명은 소문자로 한다.
2. jsx파일의 첫 글자는 대문자로 한다.
3. 스타일 페이지는 컴포넌트명.styles.jsx 로 따로 분리하여 관리한다.
4. import한 스타일의 별칭은 s로 한다.

# UI 구성
1. 사이드바는 왼쪽에 배치하고 주요 링크 메뉴가 표현 된다.
2. 사이드바 하단에 현재 로그인 정보를 표시.
3. 탑 바에는 알림 및 주요 공지를 배치
4. 화면 사이즈는 3단계로 표현 데스크탑, 태블릿, 스마트폰

## 화면 크기별 사이드바 구현
1. 데스크탑(width 1280px 이상): 메뉴 이름 표시 및 왼쪽에 메뉴 아이콘 표시
2. 태블릿(width 1280 미만): 메뉴 아이콘만 표시
3. 스마트폰(width 480 미만): 사이드바 사라지고 상단에 햄버거 (메뉴 or 버튼) 표시
4. 테스트

