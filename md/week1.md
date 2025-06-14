# 📅 JavaScript 1주차 과제

## 📖 목차

- [**📦 변수와 상수(variables, constant)**](#-변수와-상수-사용-가이드variables-constant)
- [**🔁 함수(function)**](#-함수-사용-가이드function)
  <details>
    <summary>📌 세부 함수 목록 보기</summary>

  - [👋 인사말 메시지 함수](#1--인사말-메시지-함수)
  - [💰 원가 계산 함수](#2--원가-계산-함수)
  - [🍺 주류 판매 가능 여부](#3--주류-판매-가능-여부)
  - [📉 할인가 계산 함수](#4--할인가-계산-함수)
  - [🏅 등급 판단 함수](#5--등급-판단-함수)
  - [✅ 전체 결과 테스트 예시](#5--등급-판단-함수)

  </details>

## 📘 변수와 상수 사용 가이드(variables, constant)

| 구분                | 설명                                                                |
| ------------------- | ------------------------------------------------------------------- |
| 🔁 `let`            | 변할 수 있는 값을 저장할 때 사용합니다.                             |
| 🔒 `const`          | **한 번 값이 정해지면 변경할 수 없는 상수**를 선언할 때 사용합니다. |
| 📝 문자열 (String)  | `"큰따옴표"` 또는 `'작은따옴표'`로 감싸서 표현합니다.               |
| 🔢 숫자 (Number)    | 그냥 숫자 형태로 작성합니다.<br>예: `100`, `3.14`                   |
| ✅ 불리언 (Boolean) | `true` 또는 `false`만 가능합니다.                                   |

---

## 📗 함수 사용 가이드(function)

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
