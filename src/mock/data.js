import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '강민수의 포폴', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '안녕하세요. 저는 세상의 다양한 문제를',
  name: '강민수',
  subtitle: '로 해결하고 싶은',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'mylife.jpg',
  paragraphOne: '방송국 진행팀부터 교육 사이트 관리자까지.',
  paragraphTwo: '버라이어티 한 일을 즐기다가 이제는.',
  paragraphThree: '개발에 푹빠져, 다양한 서비스를 만들고 싶은.',
  paragraphFour: '프론트엔드 개발자 강민수입니다.',
  resume: 'https://drive.google.com/file/d/1G6IVXWk-IOTbDMv-RruOnijDMQo7bbSH/view?usp=sharing', // if no resume, the button will not show up
  link: 'https://velog.io/@minsu8834/%EB%82%98%EC%9D%98-%EC%9D%B8%EC%83%9D-%ED%9A%8C%EA%B3%A0%EB%A1%9D.-feat-%EB%82%B4%EA%B0%80-%EA%B0%9C%EB%B0%9C%EC%9D%84-%ED%95%98%EA%B8%B0%EA%B9%8C%EC%A7%80%EC%9D%98-%EC%97%AC%EC%A0%95',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'dagym.jpg',
    title: '다짐 웹',
    info: '개발 기간: 2022.06.20~ 개발 완료(총 6개월, 현재 유지 보수 중)',
    info2: `
    <프로젝트 명: 다짐 웹>`,
    info3: ` - 기존 앵귤러 다짐 웹 사이트를 next로 전환 및 전체 페이지 프론트엔드 개발 및 유지 보수`,
    info4: `사용기술: react, nextjs, react-query, emotion, recoil 등.`,
    // info5: `<담당역할>`,
    // info6: `- vuejs 기반으로 다이어트 설문지 서베이의 모바일 최적화 ui 구현.`,
    // info7: `- 사용자 입력 값에 따른 conditional 랜더링 구현.`,
    // info8: `- rest api 방식을 기반으로 카카오 소셜 로그인 기능 및 db토큰 및 쿠키 처리.`,
    // info9: ` - 메디스트림 내부 api와 데이터 get, 설문지 데이터 전송 post, 카카오 로그인 post 구현 등 데이터 전송에 관한 작업.`,
    // info10: ` - 최종 4주 차에 MVP 단계 작업 완료. 추후 별도 구매 도메인으로 배포 예정.`,
    // info11: ``,
    url: 'https://www.da-gym.co.kr',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'medi.jpg',
    title: '린 다이어트 모바일 문진표',
    info: '개발 기간: 2022.02.14 - 2022.03.10',
    info2: `
    <프로젝트 명: 린 다이어트 내원 환자 모바일 서베이 폼>`,
    info3: ` - 4주 간 사내 개발팀 내에 TF팀인 린 다이어트 팀 프론트엔드 개발자로 참여.`,
    info4: `사용기술: vuejs, vuetify, surveyjs 등.`,
    // info5: `<담당역할>`,
    // info6: `- vuejs 기반으로 다이어트 설문지 서베이의 모바일 최적화 ui 구현.`,
    // info7: `- 사용자 입력 값에 따른 conditional 랜더링 구현.`,
    // info8: `- rest api 방식을 기반으로 카카오 소셜 로그인 기능 및 db토큰 및 쿠키 처리.`,
    // info9: ` - 메디스트림 내부 api와 데이터 get, 설문지 데이터 전송 post, 카카오 로그인 post 구현 등 데이터 전송에 관한 작업.`,
    // info10: ` - 최종 4주 차에 MVP 단계 작업 완료. 추후 별도 구매 도메인으로 배포 예정.`,
    // info11: ``,
    url: 'https://velog.io/@minsu8834/1-%EB%8B%AC-%EA%B0%84%EC%9D%98-%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85-%EB%A7%9B-%EB%B3%B4%EA%B8%B0-1%ED%83%84',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'winterest.png',
    title: '윈터레스트',
    info: '개발 기간: 2022.01.17 -2022.01.28',
    info2: `
    대표적인 사진 기반 sns 사이트인 핀터레스트를 모티프로 삼아 윈터레스트라는 사이트를 개발했습니다. `,
    info3: `사용기술: react, react-masonry, styled-components 등.`,
    // info4: `<담당역할>`,
    // info5: `- 랜딩(홈)페이지, 리스트 페이지 메이소니 & 무한스크롤 및 검색 기능 구현. `,
    // info6: `- 일반 로그인 및 카카오 소셜 로그인 기능 구현. `,
    // info7: `- 각종 페이지 내 모달창 구현. `,
    // info8: `- 보드 페이지, 수정 및 저장  ui 및 기능 구현.`,
    url: 'https://velog.io/@minsu8834/%EC%9C%88%ED%84%B0%EB%A0%88%EC%8A%A4%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-%EB%A7%88%EC%B9%9C-%EB%92%A4-%EB%8B%A4%EC%8B%9C-%EB%B3%BC%EC%95%84%EB%B3%B4%EB%8A%94-%ED%9A%8C%EA%B3%A0%EB%A1%9D-1%EB%B6%80',
    repo: 'https://github.com/minchodang/fullstack3-2nd-winterest-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weareneverthat.jpg',
    title: '위얼네버댓',
    info: '개발 기간: 2021.12.27 -2022.01.07',
    info2: `대표적인 쇼핑몰 사이트인 thisisneverthat을 모티프로 삼아 위얼네버댓이라는 사이트를 개발했습니다.`,
    info3: `사용기술: react, sass, nodejs, express, mysql, prisma 등.`,
    // info4: `<담당역할>`,
    // info5: `*프론트 엔드*`,
    // info6: `- 상품 리스트 페이지 ui 구현.  `,
    // info7: `- 각종 페이지 내 모달창 구현. `,
    // info8: `*백엔드*`,
    // info9: `-노드 js와 프리즈마를 통해 유저 로그인, 가입 api 구축.`,
    // info10: `-유저 검증 벨리데이션 작업.`,
    url: 'https://velog.io/@minsu8834/%EB%82%98%EB%8A%94-%EC%97%AC%ED%83%9C%EA%BB%8F-%ED%98%91%EC%97%85%EC%9D%B4%EB%9D%BC%EB%8A%94-%EA%B2%83%EC%9D%84-%EC%9E%98-%EB%AA%B0%EB%9E%90%EC%97%88%EB%8B%A4....-%EC%9C%84%EC%96%BC%EB%84%A4%EB%B2%84%EB%8C%93-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D-1%EB%B6%80',
    repo: 'https://github.com/minchodang/fullstack3-1st-weareneverthat-frontend?organization=minchodang&organization=minchodang', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'minsu910725@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/minchodang',
    },
    // {
    //   id: nanoid(),
    //   name: 'email',
    //   url: 'minsu910725@gmail.com',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: '',
    //   url: '',
    // },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
