//-----------------------------------------------------------------
// 📌 함수(function) 문제 
//-----------------------------------------------------------------

// 1. 인사말 메시지 함수
function greetUser(username) {
	return `안녕하세요! ${username}님. 좋은 하루되세요!`
}


// 2. 원가 계산 함수
const calculateOriginalPrice = function(priceWithTax) {
	const taxRate = 1.033 // 세금 3.3%
	return priceWithTax / taxRate
}


// 3. 주류 판매 가능 여부 함수
const canSellAlcohol = (registrationCard) => {
	return registrationCard.age >= 19
}


// 4. 할인가 계산 함수
function getDiscountedPrice(originalPrice, discountPercent) {
  const discountAmount = originalPrice * (discountPercent / 100)
  return originalPrice - discountAmount
}


// 5. 등급 판단 함수
function getGradeResult(score) {
	let grade, description
  
	if (score >= 90) {
	  grade = 'A'
	  description = '매우 우수'
	} else if (score >= 80) {
	  grade = 'B'
	  description = '우수';
	} else if (score >= 70) {
	  grade = 'C'
	  description = '보통';
	} else if (score >= 60) {
	  grade = 'D'
	  description = '미달, 통과 기준 근접'
	} else {
	  grade = 'F'
	  description = '낙제'
	}

	return {
	  score: score,
	  grade: grade,
	  description: description
	}
}

// 결과창
console.log(greetUser("시온")) // 안녕하세요! 시온님. 좋은 하루되세요!
console.log(calculateOriginalPrice(10330)) // 10000
console.log(canSellAlcohol({ name: "철수", age: 20, gender: "남" })) // true
console.log(getDiscountedPrice(18700, 20)) // 14960
console.log(getGradeResult(87)) // { score: 87, grade: 'B', description: '우수' }