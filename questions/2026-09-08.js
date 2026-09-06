window.TEST_DATA = {
  id: "2026-09-08",

  title: "9/8 Daily Test",

  subtitle: "YES24 Data-driven Customer Strategy",

  description:
    "Evidence Review → Segmentation → RFM → Targeting → Positioning → Persona → Value Proposition → SQL Preview",

  questions: [
    {
      id: "q1",

      type: "multiple",

      score: 8,

      question:
        "마케팅 전략을 수립하기 전에 Evidence Review(근거 검토)를 수행하는 가장 적절한 목적은 무엇입니까?",

      options: [
        "가지고 있는 데이터의 개수를 최대한 늘리기 위해 수행한다.",

        "현재 데이터로 무엇을 알 수 있고 무엇을 알 수 없는지 구분하기 위해 수행한다.",

        "모든 데이터를 하나의 고객 데이터로 변환하기 위해 수행한다.",

        "데이터 분석 없이 바로 Target을 선정하기 위해 수행한다.",
      ],
    },

    {
      id: "q2",

      type: "multiple",

      score: 8,

      question:
        "다음 중 현재 YES24 Crawling Data를 분석한 뒤 작성할 수 있는 Observation(관찰)으로 가장 적절한 것은 무엇입니까?",

      options: [
        "가격이 낮기 때문에 리뷰가 많아졌다.",

        "평점이 높기 때문에 판매량이 증가했다.",

        "도서별 리뷰 수에 차이가 관찰된다.",

        "신간이기 때문에 고객의 구매전환율이 높다.",
      ],
    },

    {
      id: "q3",

      type: "multiple",

      score: 8,

      question:
        "Market Segmentation(시장 세분화)에 대한 설명으로 가장 적절한 것은 무엇입니까?",

      options: [
        "모든 고객에게 동일한 마케팅 전략을 적용하는 과정이다.",

        "전체 시장을 공통적인 특성을 가진 여러 집단으로 나누는 과정이다.",

        "가장 매출이 높은 고객 한 명을 찾는 과정이다.",

        "고객의 구매전환율을 계산하는 과정이다.",
      ],
    },

    {
      id: "q4",

      type: "multiple",

      score: 10,

      question:
        "RFM Analysis의 Full Name과 설명의 연결로 올바른 것은 무엇입니까?",

      options: [
        "Recency - 고객이 얼마나 자주 구매했는가",

        "Frequency - 고객이 얼마나 최근에 구매했는가",

        "Monetary - 고객이 얼마나 많은 금액을 구매했는가",

        "Monetary - 고객이 마지막으로 구매한 날짜",
      ],
    },

    {
      id: "q5",

      type: "multiple",

      score: 10,

      question:
        "현재 YES24 Crawling Data가 주로 도서명, 가격, 평점, 리뷰 수, 출판사, 출간일 등의 Product Data라고 할 때, 이 데이터만으로 완전한 RFM 분석을 수행하기 어려운 가장 중요한 이유는 무엇입니까?",

      options: [
        "Python으로 수집한 데이터이기 때문이다.",

        "Crawling Data는 SQL에서 사용할 수 없기 때문이다.",

        "고객별 주문일, 주문횟수, 구매금액 등의 구매행동 데이터가 없기 때문이다.",

        "RFM은 도서 마케팅에서는 사용할 수 없는 분석 방법이기 때문이다.",
      ],
    },

    {
      id: "q6",

      type: "multiple",

      score: 10,

      question:
        "Targeting(목표시장 선정)에 대한 설명으로 가장 적절한 것은 무엇입니까?",

      options: [
        "Persona에게 이름과 사진을 만드는 과정이다.",

        "여러 Segment 중 기업이 집중할 시장 또는 고객집단을 선택하는 과정이다.",

        "고객을 RFM 점수로 나누는 과정이다.",

        "광고를 집행할 Media를 선택하는 과정이다.",
      ],
    },

    {
      id: "q7",

      type: "subjective",

      score: 10,

      question:
        "다음 마케터의 요청을 SQL로 표현하려고 합니다. 빈칸 A, B에 들어갈 적절한 Aggregate Function(집계 함수)을 작성하세요.",

      scenario: "요청: 고객별 구매횟수와 총 구매금액을 알고 싶습니다.",

      code: `SELECT
    customer_id,
    A(order_id) AS frequency,
    B(order_amount) AS monetary
FROM orders
GROUP BY customer_id;`,

      placeholder: "예: A = ______ / B = ______ 형식으로 작성하세요.",
    },

    {
      id: "q8",

      type: "subjective",

      score: 10,

      question: "Targeting과 Positioning의 차이를 각각 한 문장으로 작성하세요.",

      scenario: "① Targeting = ?\n② Positioning = ?",

      placeholder: "각 개념이 답하는 핵심 질문이 드러나도록 작성하세요.",
    },

    {
      id: "q9",

      type: "subjective",

      score: 12,

      question:
        "다음 가상 고객 정보와 Persona 문장을 보고 Data/Evidence로 직접 확인할 수 있는 내용과 Assumption(가정)을 각각 하나 이상 작성하세요.",

      scenario:
        "가상 고객 정보\n- 최근 구매 후 100일 경과\n- 과거 경제·경영 도서 구매 8회\n- 누적 구매금액 240,000원\n- 과거 재테크 관련 도서를 주로 구매\n\nPersona 문장\n“이 고객은 최근 회사 업무가 바빠져서 책을 읽을 시간이 없으며, 경제책을 다시 읽고 싶지만 책이 너무 많아 선택에 어려움을 느끼고 있다.”",

      placeholder: "Data/Evidence: ...\nAssumption: ...",
    },

    {
      id: "q10",

      type: "subjective",

      score: 14,

      question:
        "오늘 학습한 다음 과정을 올바른 순서로 작성하고, 각 단계가 어떤 질문에 답하는지 간단히 설명하세요.",

      scenario:
        "RFM / Evidence Review / Value Proposition / Positioning / Segmentation / Persona / Targeting",

      placeholder:
        "예: Evidence Review → ... 순서로 작성한 뒤 각 단계의 핵심 질문도 함께 작성하세요.",
    },
  ],
};
