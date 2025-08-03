
const answers = {};

function setAnswer(field, value) {
  answers[field] = value;
  evaluate();
}

function evaluate() {
  const age = parseInt(document.getElementById("age").value);
  if (!age || age < 15 || age > 69) {
    document.getElementById("resultBox").innerText = "⚠️ 지원 가능한 연령은 만 15세~69세입니다.";
    return;
  }

  const { income, insurance, asset, intent } = answers;

  if (!income || !insurance || !asset || !intent) {
    document.getElementById("resultBox").innerText = "❗ 모든 질문에 응답해주세요.";
    return;
  }

  if (intent === "no") {
    document.getElementById("resultBox").innerText = "❌ 구직 의사가 없으면 지원 대상이 아닙니다.";
    return;
  }

  if (income === "low" && asset === "under" && insurance === "no") {
    document.getElementById("resultBox").innerText = "✅ 당신은 I유형 대상자일 가능성이 있습니다. 예상 지원금: 월 최대 100만원 × 최대 6개월 = 총 600만원.";
  } else if (income === "high" && insurance === "no" && asset === "under") {
    document.getElementById("resultBox").innerText = "✅ 당신은 II유형 대상자일 가능성이 있습니다. 취업지원서비스와 일부 수당이 제공됩니다.";
  } else {
    document.getElementById("resultBox").innerText = "⚠️ 현재 조건으로는 국민취업지원제도 수급 가능성이 낮습니다. 고용센터에 문의하세요.";
  }
}
