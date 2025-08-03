
const answers = {};

function setAnswer(field, value, btn) {
  answers[field] = value;
  const group = btn.parentNode;
  const buttons = group.querySelectorAll("button");
  buttons.forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  evaluate();
}

function evaluate() {
  const age = parseInt(document.getElementById("age").value);
  if (!age || age < 15 || age > 34) {
    document.getElementById("resultBox").innerText = "⚠️ 대상 연령은 만 15세 이상 34세 이하 청년입니다.";
    return;
  }

  const { employment, company, insurance, duration } = answers;

  if (!employment || !company || !insurance || !duration) {
    document.getElementById("resultBox").innerText = "❗ 모든 항목에 응답해주세요.";
    return;
  }

  if (employment === "regular" &&
      company === "sme" &&
      insurance === "yes" &&
      duration === "over6") {
    document.getElementById("resultBox").innerText =
      "✅ 해당 청년은 제도 요건을 충족할 가능성이 높습니다. 기업이 신청하면 최대 1,200만원의 인건비 지원을 받을 수 있습니다.";
  } else if (company === "large") {
    document.getElementById("resultBox").innerText =
      "❌ 대기업은 청년일자리도약장려금의 지원 대상이 아닙니다.";
  } else {
    document.getElementById("resultBox").innerText =
      "⚠️ 조건 일부가 부족하여 지원 대상이 아닐 수 있습니다. 기업 및 고용노동부에 문의하세요.";
  }
}
