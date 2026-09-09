window.TEST_DATA = {
  id: "2026-09-09",

  title: "9/9 Daily Test",

  subtitle: "Selenium Web Crawling Mission",

  description:
    "Selenium 기본 개념 → WebDriver → 요소 탐색 → 반복 수집 → Explicit Wait → Crawling Mission",

  questions: [
    {
      id: "q1",

      type: "multiple",

      score: 8,

      question:
        "다음 중 Selenium을 사용하는 이유로 가장 적절한 것은 무엇입니까?",

      options: [
        "HTML 문자열을 Python Dictionary로 변환하기 위해 사용한다.",

        "JavaScript에 의해 동적으로 생성되거나 변경되는 웹페이지를 실제 Browser처럼 제어하기 위해 사용한다.",

        "MySQL Database에 데이터를 저장하기 위해 사용한다.",

        "Pandas DataFrame을 Excel 파일로 저장하기 위해 사용한다.",
      ],
    },

    {
      id: "q2",

      type: "multiple",

      score: 8,

      question:
        "다음 코드에서 driver의 역할로 가장 적절한 것은 무엇입니까?",

      code: `from selenium import webdriver

driver = webdriver.Chrome()`,

      options: [
        "HTML 문서를 문자열로 저장하는 객체이다.",

        "Chrome Browser를 Python에서 제어하기 위한 WebDriver 객체이다.",

        "BeautifulSoup 객체를 생성하는 기능이다.",

        "웹사이트의 CSS 파일을 다운로드하는 객체이다.",
      ],
    },

    {
      id: "q3",

      type: "multiple",

      score: 8,

      question:
        "다음 Selenium 코드에서 By.CSS_SELECTOR의 역할로 가장 적절한 것은 무엇입니까?",

      code: `from selenium.webdriver.common.by import By

title = driver.find_element(
    By.CSS_SELECTOR,
    "h2.title"
)`,

      options: [
        "페이지를 새로고침한다.",

        "CSS Selector 방식으로 HTML 요소를 찾는다.",

        "찾은 HTML 요소를 삭제한다.",

        "Browser를 종료한다.",
      ],
    },

    {
      id: "q4",

      type: "multiple",

      score: 8,

      question:
        "find_element()와 find_elements()의 차이에 대한 설명으로 가장 적절한 것은 무엇입니까?",

      options: [
        "find_element()는 여러 요소를 List로 반환한다.",

        "find_elements()는 첫 번째 요소 하나만 반환한다.",

        "find_element()는 하나의 요소를 찾고, find_elements()는 여러 요소를 List 형태로 찾는다.",

        "두 Method는 이름만 다르고 완전히 같은 역할을 한다.",
      ],
    },

    {
      id: "q5",

      type: "subjective",

      score: 10,

      question:
        "다음 코드를 보고 book_title과 title에 각각 어떤 값이 저장되는지 설명하세요.",

      code: `book_title = driver.find_element(
    By.CSS_SELECTOR,
    "h2.title"
)

title = book_title.text`,

      scenario:
        "HTML 예시:\n<h2 class=\"title\">파이썬 데이터 분석</h2>",

      placeholder:
        "book_title: ...\ntitle: ...",
    },

    {
      id: "q6",

      type: "subjective",

      score: 10,

      question:
        "다음 Selenium 코드가 어떤 순서로 동작하는지 설명하세요.",

      code: `books = driver.find_elements(
    By.CSS_SELECTOR,
    "div.book"
)

for book in books:
    title = book.find_element(
        By.CSS_SELECTOR,
        "h2.title"
    ).text

    print(title)`,

      placeholder:
        "예: 먼저 무엇을 찾고 → 반복문에서 무엇을 하고 → 최종적으로 무엇을 출력하는지 순서대로 설명하세요.",
    },

    {
      id: "q7",

      type: "subjective",

      score: 12,

      question:
        "다음 HTML에서 저자(author)를 Selenium으로 수집할 수 있도록 빈칸을 완성하세요.",

      scenario:
        `<div class="book">
    <h2 class="title">데이터 분석 입문</h2>
    <p class="author">홍길동</p>
</div>`,

      code: `author = book.____________(
    By.CSS_SELECTOR,
    "____________"
).text`,

      placeholder:
        "첫 번째 빈칸: ...\n두 번째 빈칸: ...",
    },

    {
      id: "q8",

      type: "subjective",

      score: 12,

      question:
        "다음 코드에서 가져온 여러 도서의 제목을 book_list라는 Python List에 저장하도록 코드를 작성하세요.",

      code: `books = driver.find_elements(
    By.CSS_SELECTOR,
    "div.book"
)`,

      scenario:
        "각 div.book 안의 도서 제목 Selector는 h2.title입니다.",

      placeholder:
        "book_list = []부터 시작하여 for 반복문, find_element(), .text, append()를 활용해 작성하세요.",
    },

    {
      id: "q9",

      type: "subjective",

      score: 12,

      question:
        "웹페이지가 JavaScript를 통해 데이터를 늦게 불러와 요소를 바로 찾지 못하는 상황에서 사용할 수 있는 Selenium의 대기 기능 이름과 목적을 설명하고, 가능하면 간단한 예시 코드를 작성하세요.",

      scenario:
        "힌트: 단순히 정해진 시간만 기다리는 time.sleep()보다 특정 조건이 충족될 때까지 기다리는 방식입니다.",

      placeholder:
        "기능 이름: ...\n목적: ...\n예시 코드(선택): ...",
    },

    {
      id: "q10",

      type: "subjective",

      score: 12,

      question:
        "최종 Mission: 아래 HTML 구조에서 각 도서의 title, author, price를 Selenium으로 수집하여 Dictionary로 만들고 book_list에 저장하는 코드를 작성하세요.",

      scenario:
        `<div class="book">
    <h2 class="title">책 제목</h2>
    <p class="author">저자명</p>
    <strong class="price">18,000원</strong>
</div>

최종 데이터 형태:
[
    {
        "title": "...",
        "author": "...",
        "price": "..."
    }
]`,

      placeholder:
        "driver.find_elements() → for → 각 요소 find_element() → .text → Dictionary → append() 순서로 작성하세요.",
    },
  ],
};
