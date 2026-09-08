window.TEST_DATA = {
  id: "2026-09-09",

  title: "9/9 Daily Test",

  subtitle: "YES24 Marketing Execution Strategy",

  description:
    "3C / SWOT Review → 4P Marketing Mix → Customer Journey → Message & Content → Media Mix → SQL Bridge",

  questions: [
    {
      id: "q1",

      type: "multiple",

      score: 8,

      question:
        "3C Analysis에 대한 설명으로 가장 적절한 것은 무엇입니까?",

      options: [
        "Customer, Content, Campaign을 분석하여 광고 소재를 제작하는 방법이다.",

        "Customer, Competitor, Company 관점에서 시장과 전략적 상황을 검토하는 Framework이다.",

        "Cost, Conversion, Customer를 이용하여 광고비를 계산하는 방법이다.",

        "Company의 Strength와 Weakness만을 분석하는 내부 분석 방법이다.",
      ],
    },

    {
      id: "q2",

      type: "multiple",

      score: 8,

      question:
        "다음 중 SWOT의 구분이 올바르지 않은 것은 무엇입니까?",

      options: [
        "Strengths - 내부 요인",

        "Weaknesses - 내부 요인",

        "Opportunities - 외부 요인",

        "Threats - 내부 요인",
      ],
    },

    {
      id: "q3",

      type: "multiple",

      score: 8,

      question:
        "YES24 경제·경영 도서 데이터를 검토한 결과 '도서별 Rating, Review Count, 판매지수 등의 상품 반응 정보를 활용할 수 있다'는 Evidence를 확인했다고 가정합니다. 이를 SWOT의 Strength 후보로 해석할 때 가장 적절한 것은 무엇입니까?",

      options: [
        "YES24의 모든 고객은 리뷰를 신뢰한다.",

        "리뷰가 많으면 반드시 판매량이 증가한다.",

        "상품 및 고객 반응 데이터를 활용하여 추천·큐레이션 전략을 설계할 가능성이 있다.",

        "경쟁 온라인 서점보다 YES24의 추천 알고리즘이 반드시 우수하다.",
      ],
    },

    {
      id: "q4",

      type: "multiple",

      score: 8,

      question:
        "최근 구매가 감소한 기존 고객에게 과거 관심분야를 기반으로 경제·경영 도서를 추천하고, Email과 App Push를 통해 다시 방문하도록 한다고 가정합니다. 이때 Email / App Push와 같은 '고객 접점'을 결정하는 것과 가장 직접적으로 관련된 4P 요소는 무엇입니까?",

      scenario:
        "※ 실제 전략에서는 Place와 Promotion이 서로 연결될 수 있지만, 여기서는 '어떤 접점에서 고객과 만날 것인가'에 초점을 맞춰 답하세요.",

      options: [
        "Product",

        "Price",

        "Place",

        "Promotion",
      ],
    },

    {
      id: "q5",

      type: "multiple",

      score: 8,

      question:
        "Customer Journey와 Data의 관계에 대한 설명으로 가장 적절한 것은 무엇입니까?",

      options: [
        "Customer Journey는 Persona 작성 후에는 데이터와 관계가 없다.",

        "모든 Customer Journey 단계는 현재 YES24 Crawling Data만으로 완벽하게 측정할 수 있다.",

        "고객에게는 하나의 Journey이지만 데이터 관점에서는 Page View, Review, Order 등의 Event로 기록될 수 있다.",

        "Customer Journey는 광고를 집행한 이후에만 작성한다.",
      ],
    },

    {
      id: "q6",

      type: "multiple",

      score: 8,

      question:
        "마케터가 '경제·경영 도서를 3회 이상 구매했지만 최근 90일 동안 구매하지 않은 고객을 찾고 싶다'고 요청했습니다. 이를 향후 SQL로 분석할 때 가장 적절한 접근은 무엇입니까?",

      options: [
        "고객별 데이터를 GROUP BY하고 구매횟수와 최근 구매일을 집계한 후 조건을 적용한다.",

        "모든 고객 데이터를 ORDER BY만 사용하여 가나다순으로 정렬한다.",

        "책 제목에 AVG()를 적용하여 평균 제목을 계산한다.",

        "DELETE를 이용하여 최근 90일 동안 구매하지 않은 고객을 삭제한다.",
      ],
    },

    {
      id: "q7",

      type: "subjective",

      score: 12,

      question:
        "다음 Evidence를 이용하여 A와 B를 작성하세요.",

      scenario:
        "Evidence: YES24는 도서정보, Rating, Review 등 고객의 도서 선택을 지원할 수 있는 정보를 보유하고 있다.\n\nA. SWOT의 어떤 영역으로 해석할 수 있는가?\nB. 이 Evidence를 활용한 Marketing Strategy를 한 가지 작성하세요.",

      placeholder:
        "A. SWOT 영역: ...\nB. Marketing Strategy: ...",
    },

    {
      id: "q8",

      type: "subjective",

      score: 12,

      question:
        "다음 Customer Journey 상황을 읽고 세 가지 질문에 답하세요.",

      scenario:
        "고객 행동: 경제·경영 도서 검색 → 상품 상세페이지 조회 → Review 확인 → 구매하지 않고 이탈\n\n① 이 고객이 구매를 고민하고 있는 주요 Journey Stage는?\n② 이 구간에서 발생한 Bottleneck을 한 문장으로 설명하세요.\n③ 이 문제를 확인하기 위해 향후 Database에서 확인하면 좋은 데이터 2가지를 작성하세요.",

      placeholder:
        "① Journey Stage: ...\n② Bottleneck: ...\n③ 확인할 Data 2가지: ...",
    },

    {
      id: "q9",

      type: "subjective",

      score: 14,

      question:
        "다음 정보를 이용하여 고객에게 전달할 Core Message를 한 문장으로 작성하고, 그 Message가 Target / Pain / Value와 어떻게 연결되는지 간단한 이유를 함께 작성하세요.",

      scenario:
        "Target: 최근 경제·경영 도서 구매가 감소한 기존 고객\nPain: 다음에 읽을 책을 다시 검색하고 여러 책을 비교하는 과정이 번거롭다.\nValue: 과거 관심·구매 이력을 활용한 개인화 도서 추천\nBenefit: 책을 찾고 비교하는 시간 감소",

      placeholder:
        "Core Message: ...\n이유: ...",
    },

    {
      id: "q10",

      type: "subjective",

      score: 14,

      question:
        "다음 Campaign을 가정하고 A, B, C를 작성하세요.",

      scenario:
        "Target: 최근 구매가 감소한 기존 경제·경영 도서 고객\nGoal: 재방문 및 재구매 증가\nMessage: 고객의 관심분야를 기반으로 다음 경제책 추천\n\nA. Paid / Owned / Earned Media 중 하나를 선택하고 구체적인 Channel 한 가지를 제안하세요.\nB. 왜 이 Target에게 해당 Channel이 적합한지 작성하세요.\nC. Campaign 종료 후 해당 Channel의 성과를 확인하기 위해 SQL로 답하고 싶은 Business Question 한 가지를 작성하세요.",

      placeholder:
        "A. Media / Channel: ...\nB. 선택 이유: ...\nC. SQL Business Question: ...",
    },
  ],
};
