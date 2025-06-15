# 📅 JavaScript 1주차 과제

## 📖 목차

- [**📦 변수와 상수(variables, constant)**](#-변수와-상수variables-constant)
  <details>
    <summary>📌 세부 변수/상수 목록</summary>

  - [01 사용자 이름 저장](#1-사용자-이름을-저장할-변수-선언-및-할당)
  - [02 절대 영도(상수)](#2-절대-영도를-담을-상수-선언)
  - [03 로그인 여부 확인](#3-로그인-여부를-확인하는-불리언-변수)
  - [04 사용자 나이](#4-사용자-나이-변수)
  - [05 상품 가격](#5-상품-가격-변수)
  - [06 웹 페이지 배경색](#6-웹-페이지-배경색을-담는-변수)
  - [07 댓글 수](#7-댓글-수를-담는-변수)
  - [08 현재 페이지 번호](#8-현재-페이지-번호-변수)
  - [09 회원 등급](#9-회원-등급-변수)
  - [10 버튼 클릭 여부](#10-버튼-클릭-여부-변수)

  </details>

- [**🔁 함수(function)**](#-함수function)
  <details>
    <summary>📌 세부 함수 목록</summary>

  - [👋 인사말 메시지 함수](#1--인사말-메시지-함수)
  - [💰 원가 계산 함수](#2--원가-계산-함수)
  - [🍺 주류 판매 가능 여부](#3--주류-판매-가능-여부)
  - [📉 할인가 계산 함수](#4--할인가-계산-함수)
  - [🏅 등급 판단 함수](#5--등급-판단-함수)
  - [✅ 전체 결과 테스트 예시](#-전체-결과-테스트-예시)

  </details>

## 📘 변수와 상수(variables, constant)

| 구분(데이터 타입)                | 설명                                                                |
| ------------------- | ------------------------------------------------------------------- |
| 🔁 `let`            | 변할 수 있는 값을 저장할 때 사용합니다.                             |
| 🔒 `const`          | **한 번 값이 정해지면 변경할 수 없는 상수**를 선언할 때 사용합니다. |
| 📝 문자열 (String)  | `"큰따옴표"` 또는 `'작은따옴표'`로 감싸서 표현합니다.               |
| 🔢 숫자 (Number)    | 그냥 숫자 형태로 작성합니다.<br>예: `100`, `3.14`                   |
| ✅ 불리언 (Boolean) | `true` 또는 `false`만 가능합니다.                                   |

### 1. 사용자 이름을 저장할 변수 선언 및 할당

**기능**: 사용자의 이름을 문자열을 저장합니다.

```js
let userName = "허시온"; // 자신의 이름을 문자열로 저장
```

---

### 2. 절대 영도를 담을 상수 선언

**기능**: 절대 영도는 변경될 수 없는 값이기 때문에 상수인 `const`로 선언합니다.

```js
const ABSOLUTE_ZERO = -273.15; // 절대 영도(상수의 키워드를 가진 const 사용)
```

---

### 3. 로그인 여부를 확인하는 불리언 변수

**기능**: `true` 또는 `false` 값을 가지는 논리형입니다.

```js
let isLoggedIn = true; // 로그인 상태면 true, 아니면 false
```

---

### 4. 사용자 나이 변수

**기능**: 숫자 타입으로 나이를 저장합니다.

```js
let userAge = 25; // 예시로 25살 할당
```

---

### 5. 상품 가격 변수

**기능**: 가격은 숫자로 다룹니다.

```js
let productPrice = 39900; // 39,900원
```

---

### 6. 웹 페이지 배경색을 담는 변수

**기능**: 웹에 색상은 문자열로 16진수 코드로 표현합니다.

```js
const BACKGROUND_COLOR = "#ffffff"; // 흰색 배경
```

---

### 7. 댓글 수를 담는 변수

**기능**: 작성된 댓글 갯수를 숫자로 저장합니다.

```js
let commentCount = 12; // 예시로 댓글 12개
```

---

### 8. 현재 페이지 번호 변수

**기능**: 페이지를 추적하기 위한 번호입니다.

```js
let currentPage = 3; // 현재 3페이지
```

---

### 9. 회원 등급 변수

**기능**: 등급은 문자열로 표현합니다.

```js
let membershipLevel = "VIP"; // 'VIP', '골드', '실버' 중 하나
```

---

### 10. 버튼 클릭 여부 변수

**기능**: 사용자 클릭 여부를 `true`, `false`로 판단합니다.

```js
let isButtonClicked = false; // 아직 클릭 안 된 상태
```

---

## 📗 함수(function)

### 1. 👋 인사말 메시지 함수

**함수 이름**: `greetUser`  
**타입**: 함수 선언식  
**기능**: 사용자 이름을 받아 인사말 메시지를 문자열로 반환합니다.

```js
function greetUser(username) {
  return `안녕하세요! ${username}님. 좋은 하루되세요!`;
}
```

✅ 예시:

```js
greetUser("시온");
// "안녕하세요! 시온님. 좋은 하루되세요!"
```

---

### 2. 💰 원가 계산 함수

**함수 이름**: `calculateOriginalPrice`  
**타입**: 함수 표현식  
**기능**: 3.3% 세금이 포함된 판매가를 입력받아 세전 금액(원가)을 반환합니다.

```js
const calculateOriginalPrice = function (priceWithTax) {
  const taxRate = 1.033; // 세금 3.3%
  return priceWithTax / taxRate;
};
```

✅ 예시:

```js
calculateOriginalPrice(10330);
// 10000
```

---

### 3. 🍺 주류 판매 가능 여부

**함수 이름**: `canSellAlcohol`  
**타입**: 화살표 함수  
**기능**: 신분증 객체에서 나이를 확인해 19세 이상이면 `true`, 아니면 `false`를 반환합니다.

```js
const canSellAlcohol = (registrationCard) => {
  return registrationCard.age >= 19;
};
```

✅ 예시:

```js
canSellAlcohol({ name: "철수", age: 20, gender: "남" });
// true
```

---

### 4. 📉 할인가 계산 함수

**함수 이름**: `getDiscountedPrice`  
**타입**: 함수 선언식  
**기능**: 원래 가격과 할인율을 입력받아, 최종 할인가를 반환합니다.

```js
function getDiscountedPrice(originalPrice, discountPercent) {
  const discountAmount = originalPrice * (discountPercent / 100);
  return originalPrice - discountAmount;
}
```

✅ 예시:

```js
getDiscountedPrice(18700, 20);
// 14960
```

---

### 5. 🏅 등급 판단 함수

**함수 이름**: `getGradeResult`  
**타입**: 함수 선언식  
**기능**: 점수를 입력받아 등급과 설명을 포함한 객체를 반환합니다.

```js
function getGradeResult(score) {
  let grade, description;

  if (score >= 90) {
    grade = "A";
    description = "매우 우수";
  } else if (score >= 80) {
    grade = "B";
    description = "우수";
  } else if (score >= 70) {
    grade = "C";
    description = "보통";
  } else if (score >= 60) {
    grade = "D";
    description = "미달, 통과 기준 근접";
  } else {
    grade = "F";
    description = "낙제";
  }

  return {
    score: score,
    grade: grade,
    description: description,
  };
}
```

✅ 예시:

```js
getGradeResult(87);
// { score: 87, grade: 'B', description: '우수' }
```

---

### ✅ 전체 결과 테스트 예시

```js
console.log(greetUser("시온"));
// "안녕하세요! 시온님. 좋은 하루되세요!"

console.log(calculateOriginalPrice(10330));
// 10000

console.log(canSellAlcohol({ name: "철수", age: 20, gender: "남" }));
// true

console.log(getDiscountedPrice(18700, 20));
// 14960

console.log(getGradeResult(87));
// { score: 87, grade: 'B', description: '우수' }
```

---

### 🫠 1주차, 과제 느낀점

아직 JavaScript에 대해서 헷갈리는 용어가 많아서 검색하면서 애먹고 있는 중인데,  
이러한 과정 속에서 내가 부족했던 부분을 많이 찾게 되는 것 같다.  
다른 사람들의 학습 과정을 하나씩 보거나 코드 작성하면서 함수가 막힐 때,  
"**_나만 혹시 뒤쳐지는 것이 아닌가?_**"  
라는 의문점을 계속 마음 속으로 던지게 된다.  
예전의 나였더라면 쉽게 포기하고 좌절 했었겠지만,  
과거와 달라진 점이 있다면 포기가 아닌 조금이라도 더 알아가고 싶은 마음이 크다.  
다른 사람들도 열심히 하면서 참고 앞으로 나아가고 있으니 나도 그 뒤를 따라서  
남들보다 진행속도가 더뎌도 <U>JavaScript가 낯설지 않도록</U> 만들어 나가고 싶다.
