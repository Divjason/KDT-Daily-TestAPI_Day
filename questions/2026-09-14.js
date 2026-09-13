window.TEST_DATA = {
  id: "2026-09-14",

  title: "9/14 Daily Test",

  subtitle: "YES24 Marketing Strategy Mission",

  description:
    "Persona → Customer Journey Map → Bottleneck → SWOT/TOWS → 4P Marketing Mix",

  questions: [
    // ========================================================
    // Q1. 객관식
    // ========================================================
    {
      id: "q1",

      type: "multiple",

      score: 8,

      question:
        "마케팅 전략 수립 과정에서 Persona를 작성하는 가장 적절한 목적은 무엇입니까?",

      options: [
        "시장 전체의 규모와 성장률을 계산하기 위해 사용한다.",

        "Target 고객을 구체적인 행동, Needs, Pain Point를 가진 고객상으로 구체화하기 위해 사용한다.",

        "경쟁기업의 Strength와 Weakness를 분석하기 위해 사용한다.",

        "제품의 가격과 유통전략만을 결정하기 위해 사용한다.",
      ],
    },

    // ========================================================
    // Q2. 객관식
    // ========================================================
    {
      id: "q2",

      type: "multiple",

      score: 8,

      question:
        "YES24의 Persona인 이서연 고객이 다음과 같이 이야기했습니다. 이 상황에서 나타나는 핵심 문제로 가장 적절한 것은 무엇입니까?",

      scenario: `"제목은 다 비슷한데 어떤 책이 나한테 맞는 거지?"`,

      options: [
        "Brand Awareness 부족",

        "가격 민감도 증가",

        "선택 과잉으로 인한 탐색 및 의사결정 비용 증가",

        "YES24 회원가입 절차의 복잡성",
      ],
    },

    // ========================================================
    // Q3. 객관식
    // ========================================================
    {
      id: "q3",

      type: "multiple",

      score: 8,

      question:
        "Customer Journey Map에서 고객의 Emotion이 크게 하락하고 다음 단계로의 이동을 방해하는 핵심 문제 구간을 의미하는 표현으로 가장 적절한 것은 무엇입니까?",

      options: ["Segment", "Bottleneck", "Positioning", "Opportunity"],
    },

    // ========================================================
    // Q4. 객관식
    // ========================================================
    {
      id: "q4",

      type: "multiple",

      score: 8,

      question: "다음 중 SWOT Analysis의 분류가 올바르지 않은 것은 무엇입니까?",

      options: [
        "Strength — YES24가 축적한 고객 구매 및 도서 데이터",

        "Weakness — 많은 상품으로 인해 발생할 수 있는 탐색 복잡성",

        "Opportunity — AI 기반 개인화 Recommendation 기술의 발전",

        "Threat — YES24 내부 개인화 추천 UI가 충분하지 않은 상태",
      ],
    },

    // ========================================================
    // Q5. 객관식
    // ========================================================
    {
      id: "q5",

      type: "multiple",

      score: 8,

      question:
        "오늘 수립한 YES24 전략에 가장 적합한 4P의 Product Strategy는 무엇입니까?",

      options: [
        "모든 경제·경영 도서를 일괄적으로 20% 할인한다.",

        "Instagram 광고 예산을 대폭 확대한다.",

        "고객의 관심 및 구매 행동을 활용하여 적합도가 높은 도서를 선별하고 추천 이유와 비교정보를 제공한다.",

        "전국에 YES24 오프라인 매장을 추가한다.",
      ],
    },

    // ========================================================
    // Q6. 주관식
    // ========================================================
    {
      id: "q6",

      type: "subjective",

      score: 12,

      question:
        "다음 Target을 Persona로 발전시키려고 합니다. Persona를 구체화하기 위해 추가적으로 정의해야 할 요소를 4가지 이상 작성하세요.",

      scenario: `"경제·경영 도서 구매 경험이 있는 20~30대 직장인"`,

      placeholder:
        "예: 고객의 어떤 정보와 행동을 추가로 정의해야 하는지 4가지 이상 작성하세요.",
    },

    // ========================================================
    // Q7. 주관식
    // ========================================================
    {
      id: "q7",

      type: "subjective",

      score: 12,

      question:
        "다음 Persona의 발언을 바탕으로 이 고객의 Pain Point와 Need를 각각 한 문장으로 작성하세요.",

      scenario: `"읽고 싶은 책은 계속 생기는데, 지금 나한테 정말 필요한 책이 뭔지 고르는 게 더 어려워졌어요."`,

      placeholder: "Pain Point:\n\nNeed:",
    },

    // ========================================================
    // Q8. 주관식
    // ========================================================
    {
      id: "q8",

      type: "subjective",

      score: 12,

      question:
        "Customer Journey Map 분석 결과 Search → Detail Comparison 단계에서 고객의 Emotion이 크게 하락했습니다. 이 문제를 직접 해결할 수 있는 YES24의 Solution을 2가지 이상 제안하세요.",

      scenario: `Customer Pain Point:
유사한 경제·경영 도서가 너무 많아 각 도서의 차이를 파악하기 위해 상세페이지, 목차, 리뷰 등을 반복적으로 비교해야 한다.`,

      placeholder: "Solution 1:\n\nSolution 2:",
    },

    // ========================================================
    // Q9. 주관식
    // ========================================================
    {
      id: "q9",

      type: "subjective",

      score: 12,

      question:
        "다음 Strength와 Opportunity를 결합하여 하나의 TOWS SO Strategy를 작성하세요.",

      scenario: `Strength:
YES24는 기존 고객의 구매 및 도서 관련 데이터를 활용할 수 있다.

Opportunity:
AI 기반 개인화 Recommendation 기술이 발전하고 있다.`,

      placeholder:
        "두 요소를 단순히 반복하지 말고 실제 실행할 수 있는 전략 문장으로 작성하세요.",
    },

    // ========================================================
    // Q10. 주관식
    // ========================================================
    {
      id: "q10",

      type: "subjective",

      score: 12,

      question:
        "최종 Mission: 다음 Customer Problem을 해결하기 위한 YES24의 4P 전략을 Product, Price, Place, Promotion별로 한 가지씩 제안하세요.",

      scenario: `"경제·경영 도서에 대한 관심은 있지만 유사한 책이 너무 많아 어떤 책을 구매해야 할지 결정하기 어렵다."`,

      placeholder: `Product:

Price:

Place:

Promotion:`,
    },
  ],
};
