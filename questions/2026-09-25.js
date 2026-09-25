window.TEST_DATA={
  "id": "2026-09-25",
  "title": "9/25 Chuseok SQL Daily Mission",
  "subtitle": "DAY 2 · JOIN 집중 → LEFT JOIN → Subquery 응용",
  "description": "객관식 15문항 + 주관식 5문항 · 총 100점",
  "questions": [
    {
      "id": "q1",
      "type": "multiple",
      "score": 4,
      "question": "JOIN의 가장 핵심적인 목적은?",
      "options": [
        "Table의 Column 삭제",
        "서로 관련된 여러 Table의 데이터를 연결하여 조회",
        "조회 결과 정렬",
        "중복 데이터 제거"
      ]
    },
    {
      "id": "q2",
      "type": "multiple",
      "score": 4,
      "question": "다음 SQL에서 c와 o의 의미는?",
      "options": [
        "새 Table 생성",
        "Table에 Alias(별칭) 부여",
        "Column 삭제",
        "두 Table 그룹화"
      ],
      "code": "SELECT c.customer_name, o.order_id FROM customers AS c JOIN orders AS o ON c.customer_id=o.customer_id;"
    },
    {
      "id": "q3",
      "type": "multiple",
      "score": 4,
      "question": "ON c.customer_id = o.customer_id의 의미는?",
      "options": [
        "모든 Row 연결",
        "customer_id가 같은 Row끼리 연결",
        "서로 다른 Row만 연결",
        "customer_id 정렬"
      ]
    },
    {
      "id": "q4",
      "type": "multiple",
      "score": 4,
      "question": "김민지는 몇 Row 출력됩니까?",
      "options": [
        "1개",
        "2개",
        "3개",
        "4개"
      ],
      "code": "SELECT c.customer_name,o.order_id FROM customers c JOIN orders o ON c.customer_id=o.customer_id WHERE c.customer_name='김민지';"
    },
    {
      "id": "q5",
      "type": "multiple",
      "score": 4,
      "question": "INNER JOIN 결과에 포함되는 고객은?",
      "options": [
        "모든 고객",
        "주문 기록이 존재하는 고객",
        "주문 기록이 없는 고객",
        "서울 고객만"
      ]
    },
    {
      "id": "q6",
      "type": "multiple",
      "score": 4,
      "question": "3 Table JOIN에서 orders의 역할은?",
      "options": [
        "customers와 products를 연결하는 중간 Table",
        "가격 계산 Table",
        "고객 이름 저장 Table",
        "중복 제거 Table"
      ]
    },
    {
      "id": "q7",
      "type": "multiple",
      "score": 4,
      "question": "customer_name, product_name, quantity를 3 Table JOIN하면 무엇을 알 수 있습니까?",
      "options": [
        "거주 지역",
        "어떤 고객이 어떤 상품을 몇 개 구매했는지",
        "상품별 평균가격",
        "주문 횟수만"
      ]
    },
    {
      "id": "q8",
      "type": "multiple",
      "score": 4,
      "question": "WHERE p.category='디지털'의 역할은?",
      "options": [
        "디지털 상품을 구매한 주문만 조회",
        "디지털 상품 삭제",
        "디지털 상품끼리 JOIN",
        "고객 그룹화"
      ]
    },
    {
      "id": "q9",
      "type": "multiple",
      "score": 4,
      "question": "고객별 GROUP BY 후 COUNT(*)는?",
      "options": [
        "고객별 주문 Row 수",
        "고객별 상품가격",
        "전체 고객 수",
        "재고 수"
      ]
    },
    {
      "id": "q10",
      "type": "multiple",
      "score": 4,
      "question": "INNER JOIN의 특징은?",
      "options": [
        "왼쪽 모든 Row 출력",
        "JOIN 조건이 일치하는 Row 중심 조회",
        "불일치 Row만 조회",
        "모든 가능한 조합"
      ]
    },
    {
      "id": "q11",
      "type": "multiple",
      "score": 4,
      "question": "LEFT JOIN 시 주문이 없는 윤지수는?",
      "options": [
        "포함 안 됨",
        "포함되고 order_id는 NULL",
        "order_id는 0",
        "오류"
      ]
    },
    {
      "id": "q12",
      "type": "multiple",
      "score": 4,
      "question": "미주문 고객을 찾는 핵심 조건은?",
      "options": [
        "INNER JOIN",
        "LEFT JOIN 후 o.order_id IS NULL",
        "customer_id IS NULL",
        "DISTINCT만 사용"
      ]
    },
    {
      "id": "q13",
      "type": "multiple",
      "score": 4,
      "question": "price > (SELECT AVG(price) FROM products)의 의미는?",
      "options": [
        "평균과 같은 상품",
        "평균보다 비싼 상품",
        "가장 비싼 하나",
        "평균보다 저렴한 상품"
      ]
    },
    {
      "id": "q14",
      "type": "multiple",
      "score": 4,
      "question": "product_id=102 주문을 찾는 Subquery가 반환하는 것은?",
      "options": [
        "스마트워치 가격",
        "스마트워치를 주문한 customer_id",
        "모든 고객 이름",
        "주문 수"
      ]
    },
    {
      "id": "q15",
      "type": "multiple",
      "score": 4,
      "question": "product_id=102를 주문한 고객은?",
      "options": [
        "김민지, 박서연",
        "이준호, 최현우",
        "김민지, 이준호",
        "박서연, 윤지수"
      ]
    },
    {
      "id": "q16",
      "type": "subjective",
      "score": 8,
      "question": "customer_name, order_id, order_date를 조회하세요.",
      "scenario": "customers와 orders를 customer_id로 JOIN",
      "placeholder": "SQL을 작성하세요."
    },
    {
      "id": "q17",
      "type": "subjective",
      "score": 8,
      "question": "customer_name, product_name, quantity를 조회하세요.",
      "scenario": "customers → orders → products 3개 Table JOIN",
      "placeholder": "SQL을 작성하세요."
    },
    {
      "id": "q18",
      "type": "subjective",
      "score": 8,
      "question": "한 번도 주문하지 않은 고객 이름을 조회하세요.",
      "scenario": "customers 기준 LEFT JOIN + IS NULL",
      "placeholder": "SQL을 작성하세요."
    },
    {
      "id": "q19",
      "type": "subjective",
      "score": 8,
      "question": "고객별 주문 횟수를 구하고 많은 순으로 출력하세요.",
      "scenario": "customer_name, order_count / COUNT(*) + GROUP BY + ORDER BY DESC",
      "placeholder": "SQL을 작성하세요."
    },
    {
      "id": "q20",
      "type": "subjective",
      "score": 8,
      "question": "평균 가격보다 비싼 상품을 실제 구매한 고객을 조회하세요.",
      "scenario": "customer_name, product_name, price / 3 Table JOIN + AVG(price) Subquery + 가격 DESC",
      "placeholder": "SQL을 작성하세요."
    }
  ]
};