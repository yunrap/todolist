import { v4 as uuidv4 } from "uuid";

const todoTemplates = [
  "리액트 공부하기",
  "JavaScript 복습하기",
  "운동하기",
  "독서하기",
  "프로젝트 완성하기",
  "영어 공부하기",
  "요리 레시피 찾아보기",
  "친구와 약속 잡기",
  "영화 보기",
  "음악 듣기",
  "산책하기",
  "청소하기",
  "빨래하기",
  "장보기",
  "병원 예약하기",
  "은행 업무 보기",
  "세금 신고하기",
  "보험 상담받기",
  "자동차 정비하기",
  "치과 검진받기",
  "헬스장 등록하기",
  "새로운 취미 찾기",
  "온라인 강의 수강하기",
  "포트폴리오 업데이트하기",
  "이력서 수정하기",
  "면접 준비하기",
  "네트워킹 이벤트 참석하기",
  "업계 동향 파악하기",
  "새로운 기술 학습하기",
  "오픈소스 프로젝트 기여하기",
  "블로그 포스팅하기",
  "소셜미디어 관리하기",
  "사진 정리하기",
  "컴퓨터 백업하기",
  "패스워드 변경하기",
  "보안 설정 점검하기",
  "구독 서비스 정리하기",
  "불필요한 앱 삭제하기",
  "파일 정리하기",
  "메일함 정리하기",
  "가계부 작성하기",
  "투자 포트폴리오 점검하기",
  "적금 가입하기",
  "용돈 기입장 작성하기",
  "가족과 시간 보내기",
  "부모님께 안부 전화하기",
  "형제자매와 만나기",
  "반려동물 돌보기",
  "식물에 물주기",
  "방 인테리어 바꾸기",
];

const generateMockTodos = () => {
  const todos = [];

  for (let i = 0; i < 600; i++) {
    const randomTemplate =
      todoTemplates[Math.floor(Math.random() * todoTemplates.length)];
    const todo = {
      id: uuidv4(),
      text: `${randomTemplate} ${i + 1}`,
    };
    todos.push(todo);
  }

  return todos;
};

export const mockTodos = generateMockTodos();
