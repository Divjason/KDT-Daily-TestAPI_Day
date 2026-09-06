window.TEST_DATA = {
  id: "2026-09-07",

  title: "9/7 Daily Test",

  subtitle: "YES24 Data-driven Marketing Process",

  description: "Problem Definition → Funnel → Goal → OKR → KPI → SQL Preview",

  questions: [
    {
      id: "q1",

      type: "multiple",

      score: 8,

      question:
        "YES24 크롤링을 통해 판매지수, 리뷰 수, 평점, 가격, 할인율 등의 데이터를 수집했습니다. 이 단계에 대한 설명으로 가장 적절한 것은?",

      options: [
        "데이터를 수집했으므로 이미 마케팅 전략 수립이 완료된 상태이다.",

        "판매지수가 높은 도서는 반드시 할인율 때문에 판매가 잘 된 것이다.",

        "수집한 데이터는 문제를 발견하고 가설을 세우기 위한 근거(Evidence)로 활용할 수 있다.",

        "리뷰 수가 많다면 반드시 고객 만족도가 높은 것이다.",
      ],
    },

    {
      id: "q2",

      type: "multiple",

      score: 8,

      question:
        "다음 중 Problem Definition(문제 정의)의 실무 흐름으로 가장 적절한 것은?",

      options: [
        "Goal → KPI → Funnel → Data",

        "Data Inventory → Observation → Business Question → Hypothesis → Problem Statement",

        "KPI → Hypothesis → Goal → SQL",

        "Funnel → Advertisement → Purchase → Review",
      ],
    },

    {
      id: "q3",

      type: "multiple",

      score: 8,

      question:
        "다음 중 Observation(관찰)과 Hypothesis(가설)를 가장 올바르게 구분한 것은?",

      options: [
        "Observation은 추측이고, Hypothesis는 확정된 사실이다.",

        "Observation은 데이터에서 확인한 현상이고, Hypothesis는 그 현상을 설명하기 위한 검증 가능한 추정이다.",

        "Observation과 Hypothesis는 같은 의미이다.",

        "Hypothesis는 반드시 숫자를 포함해야 한다.",
      ],
    },

    {
      id: "q4",

      type: "multiple",

      score: 8,

      question:
        "YES24 고객 행동을 Exposure → Click → Product View → Purchase → Review의 Funnel로 표현했다고 할 때, 현재 크롤링 데이터만으로 직접 확인하기 가장 어려운 데이터는 무엇입니까?",

      options: ["리뷰 수", "평점", "클릭 수", "도서 가격"],
    },

    {
      id: "q5",

      type: "multiple",

      score: 8,

      question:
        "다음 중 Goal과 KPI(Key Performance Indicator)의 관계를 가장 잘 설명한 것은?",

      options: [
        "Goal은 측정 지표이고 KPI는 추상적인 방향이다.",

        "Goal은 원하는 미래 상태이고 KPI는 그 목표의 진행 상황을 측정하는 핵심 성과 지표이다.",

        "Goal과 KPI는 동일한 의미이다.",

        "KPI는 측정 가능한 모든 데이터를 의미한다.",
      ],
    },

    {
      id: "q6",

      type: "multiple",

      score: 8,

      question: "다음 SQL이 마케팅 관점에서 주로 확인하려는 것은 무엇입니까?",

      code: `SELECT
    sale_rate,
    AVG(sale_num) AS avg_sale_index
FROM books
GROUP BY sale_rate;`,

      options: [
        "도서별 저자명을 출력한다.",

        "할인율별로 도서를 묶어 평균 판매지수를 비교한다.",

        "판매지수가 가장 높은 도서 한 권만 찾는다.",

        "리뷰가 없는 도서를 삭제한다.",
      ],
    },

    {
      id: "q7",

      type: "subjective",

      score: 12,

      question:
        "다음 두 문장을 보고 각각 Observation(관찰)과 Hypothesis(가설) 중 무엇인지 작성하세요.",

      scenario:
        "A. 판매지수가 높은 도서들 사이에서도 리뷰 수의 차이가 크게 나타났다.\nB. 판매지수가 높은 도서는 리뷰 수도 많을 것이다.",

      placeholder:
        "예: A = Observation / B = Hypothesis 처럼 작성하고, 가능하면 이유도 간단히 적어주세요.",
    },

    {
      id: "q8",

      type: "subjective",

      score: 12,

      question:
        "YES24 경제·경영 도서 담당 마케터라고 가정하고, 다음 상황을 바탕으로 Problem Statement를 2~3문장으로 작성하세요.",

      scenario:
        "도서별 판매지수, 리뷰 수, 가격, 할인율, 해시태그를 확인해보니 상품별 고객 반응의 차이가 크게 나타났다. 하지만 현재는 어떤 요인이 높은 판매성과와 관련되어 있는지 명확하지 않다.",

      placeholder:
        "현재 상태, 확인된 문제/차이, 추가로 확인해야 할 방향이 드러나도록 작성하세요.",
    },

    {
      id: "q9",

      type: "subjective",

      score: 14,

      question:
        "다음 가상 Funnel 데이터를 보고 Product View → Purchase 전환율(CVR)을 계산하고, 이 수치가 의미하는 바를 한 문장으로 설명하세요.",

      scenario:
        "Product View: 5,000명\nPurchase: 500명\n\nCVR = Conversion Rate = 전환율",

      placeholder: "전환율 계산 결과와 해석을 함께 작성하세요.",
    },

    {
      id: "q10",

      type: "subjective",

      score: 14,

      question:
        "다음 마케터의 질문을 SQL로 검증한다고 할 때 필요한 SQL 개념을 2개 이상 선택하고, 그 이유를 간단히 작성하세요.",

      scenario:
        "질문: 상품 상세페이지를 본 고객 중 실제 구매한 고객이 몇 명인지 확인하고 싶다.\n\n선택 가능 개념: SELECT, WHERE, JOIN, GROUP BY, COUNT, ORDER BY",

      placeholder:
        "예: JOIN - page_views와 orders를 연결하기 위해 사용 / COUNT - 구매 고객 수를 계산하기 위해 사용",
    },
  ],
};
