
const state = {
  insurance: null,
  work: null,
  unemployed: null,
  income: null,
};

document.querySelectorAll(".option-button").forEach(button => {
  button.addEventListener("click", () => {
    const question = button.getAttribute("data-question");
    const value = button.getAttribute("data-value");
    state[question] = value;

    // 버튼 시각적 표시 업데이트
    const groupButtons = document.querySelectorAll(
      `.option-button[data-question="${question}"]`
    );
    groupButtons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

document.getElementById("calculatorForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const age = parseInt(document.getElementById("age").value);
  const { insurance, work, unemployed, income } = state;

  const resultBox = document.getElementById("result");

  if (
    isNaN(age) ||
    !insurance ||
    !work ||
    !unemployed ||
    !income
  ) {
    resultBox.innerHTML = "<p>모든 질문에 응답해주세요.</p>";
    resultBox.style.display = "block";
    return;
  }

  if (
    age >= 15 &&
    age <= 69 &&
    unemployed === "yes" &&
    income === "yes" &&
    insurance === "no"
  ) {
    resultBox.innerHTML = "<p><strong class='green'>✅ 지원 가능성이 높습니다!</strong><br>1유형 또는 2유형 대상에 해당할 수 있습니다. 실제 자격은 소득·재산 조사 후 확정됩니다.</p>";
  } else {
    resultBox.innerHTML = "<p><strong class='red'>⚠️ 지원 대상이 아닐 수 있습니다.</strong><br>조건 중 일부가 맞지 않거나 추가 심사 요건이 있을 수 있습니다.</p>";
  }

  resultBox.style.display = "block";
});
