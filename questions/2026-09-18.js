window.TEST_DATA = {
  id: "2026-09-18",
  title: "9/18 Weekend Review Test",
  subtitle: "Python Crawling × MySQL SQL Fundamentals",
  description:
    "DDL / DML / DCL / TCL + SELECT / FROM / WHERE / AS / LIMIT / DISTINCT / GROUP BY / ORDER BY",
  questions: [
    {
      id: "q1",
      type: "multiple",
      score: 1.5,
      question: "SQL의 Full Name으로 올바른 것은 무엇입니까?",
      options: [
        "Standard Query Language",
        "Structured Query Language",
        "System Query Language",
        "Structured Question Language",
      ],
    },
    {
      id: "q2",
      type: "multiple",
      score: 1.5,
      question:
        "다음 중 DDL(Data Definition Language, 데이터 정의어)에 해당하는 명령어는 무엇입니까?",
      options: ["SELECT", "INSERT", "CREATE", "COMMIT"],
    },
    {
      id: "q3",
      type: "multiple",
      score: 1.5,
      question:
        "다음 중 DML(Data Manipulation Language, 데이터 조작어)에 해당하는 것은 무엇입니까?",
      options: ["CREATE", "GRANT", "SELECT", "COMMIT"],
    },
    {
      id: "q4",
      type: "multiple",
      score: 1.5,
      question:
        "다음 중 DCL(Data Control Language, 데이터 제어어)에 해당하는 것은 무엇입니까?",
      options: ["DROP", "UPDATE", "GRANT", "ROLLBACK"],
    },
    {
      id: "q5",
      type: "multiple",
      score: 1.5,
      question:
        "다음 중 TCL(Transaction Control Language, 트랜잭션 제어어)에 해당하는 것은 무엇입니까?",
      options: ["DELETE", "ALTER", "REVOKE", "COMMIT"],
    },
    {
      id: "q6",
      type: "multiple",
      score: 1.5,
      question: "다음 연결 중 잘못된 것은 무엇입니까?",
      options: ["DDL → CREATE", "DML → UPDATE", "DCL → GRANT", "TCL → DROP"],
    },
    {
      id: "q7",
      type: "multiple",
      score: 1.5,
      question:
        "기존 테이블의 구조를 변경할 때 사용하는 SQL 명령어는 무엇입니까?",
      options: ["ALTER", "UPDATE", "MODIFY DATA", "CHANGE DATA"],
    },
    {
      id: "q8",
      type: "multiple",
      score: 1.5,
      question:
        "다음 중 DELETE와 DROP의 차이를 가장 적절하게 설명한 것은 무엇입니까?",
      options: [
        "DELETE는 DB를 삭제하고 DROP은 Row만 삭제한다.",
        "DELETE는 데이터를 삭제하고 DROP은 Table 등의 객체 자체를 제거할 수 있다.",
        "두 명령어는 완전히 같다.",
        "DELETE는 DDL이고 DROP은 DML이다.",
      ],
    },
    {
      id: "q9",
      type: "multiple",
      score: 1.5,
      question:
        "관리자 A가 사용자 B에게 특정 Database의 조회 권한을 부여하려고 합니다. 가장 관련 있는 SQL 분류는 무엇입니까?",
      options: ["DDL", "DML", "DCL", "TCL"],
    },
    {
      id: "q10",
      type: "multiple",
      score: 1.5,
      question:
        "여러 데이터 변경 작업을 하나의 Transaction으로 처리한 뒤 최종적으로 변경 내용을 확정할 때 가장 적절한 명령어는 무엇입니까?",
      options: ["SELECT", "COMMIT", "CREATE", "GRANT"],
    },
    {
      id: "q11",
      type: "multiple",
      score: 1.5,
      question: "products 테이블의 모든 Column을 조회하는 SQL은 무엇입니까?",
      options: [
        "SELECT ALL FROM products;",
        "SELECT * FROM products;",
        "SELECT products;",
        "FROM products SELECT *;",
      ],
      scenario:
        "다음 products 테이블을 기준으로 답하세요.\n\nproduct_id | brand_name | product_name | price | review_count\n1 | Nike | Air Max | 180000 | 120\n2 | Adidas | Samba | 139000 | 250\n3 | Nike | Air Force | 149000 | 300\n4 | New Balance | 530 | 129000 | 80\n5 | Adidas | Gazelle | 159000 | 0",
    },
    {
      id: "q12",
      type: "multiple",
      score: 1.5,
      question:
        "product_name, price 두 Column만 조회하는 올바른 SQL은 무엇입니까?",
      options: [
        "SELECT product_name AND price FROM products;",
        "SELECT product_name, price FROM products;",
        "SELECT (product_name, price) products;",
        "FROM products GET product_name, price;",
      ],
    },
    {
      id: "q13",
      type: "multiple",
      score: 1.5,
      question: "WHERE의 주요 역할은 무엇입니까?",
      options: [
        "Column 이름 변경",
        "조건을 만족하는 Row 선택",
        "Table 이름 변경",
        "결과 개수 제한",
      ],
    },
    {
      id: "q14",
      type: "multiple",
      score: 1.5,
      question:
        "가격이 150,000원 이상인 상품을 조회하는 올바른 조건은 무엇입니까?",
      options: [
        "WHERE price > 150000",
        "WHERE price >= 150000",
        "WHERE price => 150000",
        "WHERE price =< 150000",
      ],
    },
    {
      id: "q15",
      type: "multiple",
      score: 1.5,
      question: "브랜드가 Nike인 상품을 조회하는 올바른 조건은 무엇입니까?",
      options: [
        "WHERE brand_name = Nike",
        "WHERE brand_name == 'Nike'",
        "WHERE brand_name = 'Nike'",
        "WHERE brand_name := 'Nike'",
      ],
    },
    {
      id: "q16",
      type: "multiple",
      score: 1.5,
      question: "다음 Query의 결과 Row 수는 몇 개입니까?",
      options: ["1개", "2개", "3개", "4개"],
      scenario:
        "다음 products 테이블을 기준으로 답하세요.\n\nproduct_id | brand_name | product_name | price | review_count\n1 | Nike | Air Max | 180000 | 120\n2 | Adidas | Samba | 139000 | 250\n3 | Nike | Air Force | 149000 | 300\n4 | New Balance | 530 | 129000 | 80\n5 | Adidas | Gazelle | 159000 | 0",
      code: "SELECT *\nFROM products\nWHERE review_count > 100;",
    },
    {
      id: "q17",
      type: "multiple",
      score: 1.5,
      question: "다음 Query의 결과에 포함되는 상품 조합은 무엇입니까?",
      options: [
        "Air Max, Gazelle",
        "Samba, Air Force, 530",
        "Air Max, Air Force",
        "Samba, Gazelle",
      ],
      scenario:
        "다음 products 테이블을 기준으로 답하세요.\n\nproduct_id | brand_name | product_name | price | review_count\n1 | Nike | Air Max | 180000 | 120\n2 | Adidas | Samba | 139000 | 250\n3 | Nike | Air Force | 149000 | 300\n4 | New Balance | 530 | 129000 | 80\n5 | Adidas | Gazelle | 159000 | 0",
      code: "SELECT product_name\nFROM products\nWHERE price < 150000;",
    },
    {
      id: "q18",
      type: "multiple",
      score: 1.5,
      question: "다음 중 WHERE에 대한 설명으로 가장 적절한 것은 무엇입니까?",
      options: [
        "SELECT보다 항상 먼저 작성한다.",
        "Table 자체를 수정한다.",
        "조건을 만족하는 Row를 선택한다.",
        "조회 결과의 Column 이름을 변경한다.",
      ],
    },
    {
      id: "q19",
      type: "multiple",
      score: 1.5,
      question: "다음 Query에서 FROM의 역할은 무엇입니까?",
      options: [
        "조회할 Column 결정",
        "데이터를 가져올 Table 결정",
        "Row 조건 결정",
        "출력 순서 결정",
      ],
      code: "SELECT product_name\nFROM products\nWHERE price >= 150000;",
    },
    {
      id: "q20",
      type: "multiple",
      score: 1.5,
      question:
        "다음 Query를 자연스러운 문장으로 가장 정확하게 표현한 것은 무엇입니까?",
      options: [
        "모든 상품의 리뷰 수를 수정한다.",
        "리뷰가 200개 이상인 상품의 상품명과 리뷰 수를 조회한다.",
        "상품을 리뷰 순으로 정렬한다.",
        "리뷰가 정확히 200개인 상품만 삭제한다.",
      ],
      code: "SELECT product_name, review_count\nFROM products\nWHERE review_count >= 200;",
    },
    {
      id: "q21",
      type: "multiple",
      score: 1.5,
      question: "AS의 대표적인 역할은 무엇입니까?",
      options: ["데이터 삭제", "Alias(별칭) 지정", "조건 설정", "권한 설정"],
    },
    {
      id: "q22",
      type: "multiple",
      score: 1.5,
      question: "다음 Query의 조회 결과에서 표시되는 Column 이름은 무엇입니까?",
      options: [
        "product_name, price",
        "상품명, 판매가격",
        "products, price",
        "name, 판매가격",
      ],
      code: "SELECT\n    product_name AS 상품명,\n    price AS 판매가격\nFROM products;",
    },
    {
      id: "q23",
      type: "multiple",
      score: 1.5,
      question:
        "SELECT에서 AS를 사용하면 원본 Table의 Column 이름도 변경됩니까?",
      options: [
        "항상 변경된다.",
        "조회 결과에서만 Alias로 표현되며 원본 Column은 변경되지 않는다.",
        "Table까지 변경된다.",
        "Database가 삭제된다.",
      ],
    },
    {
      id: "q24",
      type: "multiple",
      score: 1.5,
      question: "SELECT 조회 결과에서 중복 값을 제거하는 Keyword는 무엇입니까?",
      options: ["UNIQUE", "ONLY", "DISTINCT", "REMOVE"],
    },
    {
      id: "q25",
      type: "multiple",
      score: 1.5,
      question: "다음 Query의 결과는 몇 Row입니까?",
      options: ["2개", "3개", "4개", "5개"],
      scenario:
        "다음 products 테이블을 기준으로 답하세요.\n\nproduct_id | brand_name | product_name | price | review_count\n1 | Nike | Air Max | 180000 | 120\n2 | Adidas | Samba | 139000 | 250\n3 | Nike | Air Force | 149000 | 300\n4 | New Balance | 530 | 129000 | 80\n5 | Adidas | Gazelle | 159000 | 0",
      code: "SELECT DISTINCT brand_name\nFROM products;",
    },
    {
      id: "q26",
      type: "multiple",
      score: 1.5,
      question:
        "조회 결과 중 최대 3개 Row만 가져오는 올바른 문법은 무엇입니까?",
      options: ["LIMIT = 3", "LIMIT 3", "ROW 3", "SELECT LIMIT(3)"],
    },
    {
      id: "q27",
      type: "multiple",
      score: 1.5,
      question: "다음 Query에 대한 설명으로 가장 적절한 것은 무엇입니까?",
      options: [
        "브랜드가 2번 이상 등장한 상품을 찾는다.",
        "중복 브랜드를 제거한 결과에서 최대 2개 Row를 반환한다.",
        "상품 2개를 삭제한다.",
        "브랜드별 상품 수를 계산한다.",
      ],
      code: "SELECT DISTINCT brand_name\nFROM products\nLIMIT 2;",
    },
    {
      id: "q28",
      type: "multiple",
      score: 1.5,
      question: "조회 결과를 정렬할 때 사용하는 Keyword는 무엇입니까?",
      options: ["GROUP BY", "ORDER BY", "ALIGN BY", "SORT TABLE"],
    },
    {
      id: "q29",
      type: "multiple",
      score: 1.5,
      question: "ORDER BY에서 DESC의 의미는 무엇입니까?",
      options: ["오름차순", "내림차순", "중복 제거", "그룹화"],
    },
    {
      id: "q30",
      type: "multiple",
      score: 1.5,
      question: "가격이 낮은 상품부터 정렬하는 올바른 SQL 구문은 무엇입니까?",
      options: [
        "ORDER BY price ASC",
        "ORDER BY price DESC",
        "GROUP BY price ASC",
        "LIMIT price ASC",
      ],
    },
    {
      id: "q31",
      type: "multiple",
      score: 1.5,
      question: "다음 Query 결과에서 첫 번째로 출력되는 상품은 무엇입니까?",
      options: ["Air Max", "Samba", "Air Force", "Gazelle"],
      scenario:
        "다음 products 테이블을 기준으로 답하세요.\n\nproduct_id | brand_name | product_name | price | review_count\n1 | Nike | Air Max | 180000 | 120\n2 | Adidas | Samba | 139000 | 250\n3 | Nike | Air Force | 149000 | 300\n4 | New Balance | 530 | 129000 | 80\n5 | Adidas | Gazelle | 159000 | 0",
      code: "SELECT product_name, review_count\nFROM products\nORDER BY review_count DESC;",
    },
    {
      id: "q32",
      type: "multiple",
      score: 1.5,
      question: "다음 Query의 결과에 대한 설명으로 올바른 것은 무엇입니까?",
      options: [
        "가장 저렴한 상품",
        "가장 비싼 상품",
        "리뷰가 가장 많은 상품",
        "가장 최근 상품",
      ],
      scenario:
        "다음 products 테이블을 기준으로 답하세요.\n\nproduct_id | brand_name | product_name | price | review_count\n1 | Nike | Air Max | 180000 | 120\n2 | Adidas | Samba | 139000 | 250\n3 | Nike | Air Force | 149000 | 300\n4 | New Balance | 530 | 129000 | 80\n5 | Adidas | Gazelle | 159000 | 0",
      code: "SELECT product_name, price\nFROM products\nORDER BY price DESC\nLIMIT 1;",
    },
    {
      id: "q33",
      type: "multiple",
      score: 1.5,
      question: "GROUP BY의 주요 목적은 무엇입니까?",
      options: [
        "데이터를 삭제하기 위해",
        "동일한 값을 기준으로 Row를 그룹화하기 위해",
        "Table을 생성하기 위해",
        "결과를 무조건 내림차순으로 만들기 위해",
      ],
    },
    {
      id: "q34",
      type: "multiple",
      score: 1.5,
      question: "다음 Query는 어떤 분석을 수행합니까?",
      options: [
        "브랜드별 평균 가격",
        "브랜드별 상품 개수",
        "상품별 브랜드 개수",
        "전체 브랜드 삭제",
      ],
      code: "SELECT\n    brand_name,\n    COUNT(*) AS product_count\nFROM products\nGROUP BY brand_name;",
    },
    {
      id: "q35",
      type: "multiple",
      score: 1.5,
      question:
        "다음 Query의 실행 결과에서 가장 먼저 출력되는 브랜드는 무엇입니까?",
      options: ["Nike", "Adidas", "New Balance", "판단할 수 없다"],
      scenario:
        "다음 products 테이블을 기준으로 답하세요.\n\nproduct_id | brand_name | product_name | price | review_count\n1 | Nike | Air Max | 180000 | 120\n2 | Adidas | Samba | 139000 | 250\n3 | Nike | Air Force | 149000 | 300\n4 | New Balance | 530 | 129000 | 80\n5 | Adidas | Gazelle | 159000 | 0",
      code: "SELECT\n    brand_name,\n    AVG(price) AS avg_price\nFROM products\nGROUP BY brand_name\nORDER BY avg_price DESC;",
    },
    {
      id: "q36",
      type: "multiple",
      score: 1.5,
      question: "다음 SQL의 논리적 처리 순서로 가장 적절한 것은 무엇입니까?",
      options: [
        "SELECT → FROM → WHERE → GROUP BY → ORDER BY → LIMIT",
        "FROM → WHERE → GROUP BY → SELECT → ORDER BY → LIMIT",
        "FROM → SELECT → LIMIT → WHERE → GROUP BY → ORDER BY",
        "WHERE → FROM → SELECT → GROUP BY → LIMIT → ORDER BY",
      ],
      code: "SELECT brand_name, AVG(price)\nFROM products\nWHERE review_count > 0\nGROUP BY brand_name\nORDER BY AVG(price) DESC\nLIMIT 3;",
    },
    {
      id: "q37",
      type: "multiple",
      score: 1.5,
      question:
        "Python Crawling으로 수집한 데이터를 MySQL에 저장하는 이유로 가장 적절한 것은 무엇입니까?",
      options: [
        "Python에서는 List를 사용할 수 없기 때문이다.",
        "데이터를 구조적으로 저장하고 반복 조회·필터링·집계·분석하기 쉽기 때문이다.",
        "Selenium을 사용하려면 MySQL이 필수이기 때문이다.",
        "MySQL을 사용하면 크롤링 속도가 항상 빨라지기 때문이다.",
      ],
    },
    {
      id: "q38",
      type: "multiple",
      score: 1.5,
      question:
        "크롤링한 상품 데이터에 같은 브랜드가 여러 번 등장합니다. 현재 존재하는 브랜드 종류만 중복 없이 확인하는 SQL은 무엇입니까?",
      options: [
        "SELECT brand_name FROM products;",
        "SELECT DISTINCT brand_name FROM products;",
        "SELECT brand_name FROM products LIMIT 1;",
        "SELECT * FROM products ORDER BY brand_name;",
      ],
    },
    {
      id: "q39",
      type: "multiple",
      score: 1.5,
      question:
        "마케터가 '리뷰가 존재하는 상품 가운데 리뷰가 많은 상품 5개를 먼저 확인하고 싶다'고 요청했습니다. 가장 적절한 Query는 무엇입니까?",
      options: [
        "SELECT * FROM products WHERE review_count > 0 ORDER BY review_count DESC LIMIT 5;",
        "SELECT * FROM products LIMIT 5 ORDER BY review_count;",
        "SELECT DISTINCT review_count FROM products WHERE review_count = 0;",
        "SELECT * FROM products GROUP BY review_count LIMIT 5;",
      ],
    },
    {
      id: "q40",
      type: "multiple",
      score: 1.5,
      question:
        "브랜드별 평균 리뷰 수를 계산했더니 현재 수집 데이터에서 Nike가 가장 높았습니다. 이 결과만으로 내릴 수 있는 가장 적절한 결론은 무엇입니까?",
      options: [
        "Nike이기 때문에 리뷰가 많아진 것이 확실하다.",
        "Nike 상품은 항상 가장 많이 판매된다.",
        "현재 수집 데이터에서는 Nike 상품군의 평균 리뷰 수가 가장 높게 관찰되었다.",
        "Nike 광고비를 늘리면 매출이 반드시 증가한다.",
      ],
      code: "SELECT\n    brand_name,\n    AVG(review_count) AS avg_reviews\nFROM products\nGROUP BY brand_name\nORDER BY avg_reviews DESC;",
    },
    {
      id: "q41",
      type: "subjective",
      score: 4,
      question:
        "DDL, DML, DCL, TCL의 Full Name과 각각의 역할을 간단하게 작성하세요.",
      placeholder: "DDL = ...\nDML = ...\nDCL = ...\nTCL = ...",
    },
    {
      id: "q42",
      type: "subjective",
      score: 4,
      question: "다음 Query를 자연어로 해석하세요.",
      placeholder:
        "이 Query가 어떤 Table에서 어떤 데이터를 어떤 조건과 순서로 조회하는지 작성하세요.",
      code: "SELECT\n    product_name AS 상품명,\n    price AS 가격\nFROM products\nWHERE price >= 150000\nORDER BY price DESC;",
    },
    {
      id: "q43",
      type: "subjective",
      score: 4,
      question: "DISTINCT와 GROUP BY의 차이를 설명하세요.",
      placeholder: "DISTINCT: ...\nGROUP BY: ...",
    },
    {
      id: "q44",
      type: "subjective",
      score: 4,
      question:
        "products 테이블에서 가격이 100,000원 이상인 상품의 product_name, price를 조회하는 SQL을 작성하세요.",
      placeholder: "SELECT ...\nFROM ...\nWHERE ...;",
    },
    {
      id: "q45",
      type: "subjective",
      score: 4,
      question:
        "리뷰 수가 많은 상품부터 product_name, review_count를 조회하고 상위 10개만 출력하는 SQL을 작성하세요.",
      placeholder: "SELECT ...\nFROM ...\nORDER BY ...\nLIMIT ...;",
    },
    {
      id: "q46",
      type: "subjective",
      score: 4,
      question:
        "products 테이블에 어떤 브랜드들이 존재하는지 중복 없이 조회하는 SQL을 작성하세요.",
      placeholder: "SELECT ...\nFROM ...;",
    },
    {
      id: "q47",
      type: "subjective",
      score: 4,
      question:
        "브랜드별 상품 개수를 계산하고 상품이 많은 브랜드부터 출력하세요. 상품 개수 Column 이름은 product_count로 표시합니다.",
      placeholder: "SELECT ...\nFROM ...\nGROUP BY ...\nORDER BY ...;",
    },
    {
      id: "q48",
      type: "subjective",
      score: 4,
      question: "다음 SQL의 문제점을 찾아 올바른 SQL로 수정하세요.",
      placeholder: "문제점: ...\n\n수정 SQL:\nSELECT ...",
      code: "SELECT\n    brand_name,\n    AVG(price) AS avg_price\nFROM products\nWHERE price >= 100000\nORDER BY avg_price DESC\nGROUP BY brand_name;",
    },
    {
      id: "q49",
      type: "subjective",
      score: 4,
      question:
        "Python Crawling → MySQL → SQL 분석의 관계를 자신의 말로 설명하세요. 반드시 '수집', '저장', '조회', '분석'이라는 단어를 모두 포함하세요.",
      placeholder: "수집 / 저장 / 조회 / 분석의 흐름이 드러나도록 작성하세요.",
    },
    {
      id: "q50",
      type: "subjective",
      score: 4,
      question: "최종 Mission: 아래 요구사항을 만족하는 SQL을 작성하세요.",
      placeholder:
        "SELECT ...\nFROM ...\nWHERE ...\nGROUP BY ...\nORDER BY ...\nLIMIT ...;",
      scenario:
        "Wconcept에서 Crawling한 product_id, brand_name, product_name, price, sale_price, review_count가 products 테이블에 저장되어 있다고 가정합니다.\n\n요구사항: 리뷰가 1개 이상 존재하는 상품만 대상으로 브랜드별 평균 판매가격을 확인하고, 평균 판매가격이 높은 브랜드부터 정렬한 뒤 상위 5개 브랜드만 출력하세요.",
    },
  ],
};
