export const workList: {
  slug: string;
  name: string;
  koName: string;
  members: string[];
  memberPartList: string[];
  teamType: 'OB' | 'YB' | 'COMPANY';
  teamName: string;
  description: {
    simple: string;
    detail: string;
  };
  image: {
    src: string;
  };
  link?: {
    web?: string;
    android?: string;
    ios?: string;
    instagram?: string;
    blog?: string;
    github?: string;
    recruit?: string;
  };
}[] = [
  {
    slug: 'schoolpoint',
    name: '스쿨포인트 | School Point',
    koName: '스쿨포인트',
    teamType: 'YB',
    teamName: 'ASAP',
    members: [
      '김동우',
      '김규리',
      '오민지',
      '임승현',
      '최은정',
      '박예진',
      '유진주',
      '심규민',
      '윤소민',
    ],
    memberPartList: [
      '기획 | 김동우(PM) 김규리 오민지',
      '디자인 | 임승현 최은정',
      '프론트엔드 | 박예진 유진주',
      '백엔드 | 심규민 윤소민',
    ],
    description: {
      simple: '우리 아이 학교소식 핵심 콕콕!, ‘스쿨포인트’',
      detail: `스쿨포인트는 학교 소식의 핵심을 빠르게 제공함으로써 학부모의 효율적인 자녀 등교/학습 준비를 돕는 서비스입니다. AI 가정통신문 요약으로 가정통신문 핵심 세 문장을 한눈에 파악할 수 있습니다. 알림장 내용을 바탕으로 생성된 학부모 투두리스트를 통해 회신/준비물 구비 등 오늘 할 일을 관리할 수 있습니다. 학교 진도를 기반으로 제작된 과목별 활동/체험형 가정학습 교육 정보를 열람할 수 있습니다.`,
    },
    image: {
      src: '/images/works/schoolpoint.png',
    },
    link: {
      instagram: 'schoolpoint_official',
    },
  },
  {
    slug: 'flight',
    name: '플라잇 | Flight',
    koName: '플라잇',
    teamType: 'YB',
    teamName: '밤양갱',
    members: [
      '민혜린',
      '주연진',
      '한나영',
      '윤예현',
      '이어령',
      '백승효',
      '이효원',
      '장세은',
      '김용현',
    ],
    memberPartList: [
      '기획 | 민혜린(PM) 주연진 한나영',
      '디자인 | 윤예현 이어령',
      '프론트엔드 | 백승효 이효원',
      '백엔드 | 장세은 김용현',
    ],
    description: {
      simple: '나를 알아가는 경험 정리의 시작, 플라잇flight',
      detail: `‘플라잇flight’은 효율적인 경험 정리를 도움으로써 사용자가 취업 준비 과정에서 자신의 강점과 역량을 더 잘 이해할 수 있도록 하는 서비스입니다. 플라잇과 함께 깊이 있는 자기 이해를 통해 취업 준비를 의미 있는 과정으로 만들어 가요.\nLet’s “Flight” to a journey of Self-Discovery!`,
    },
    image: {
      src: '/images/works/flight.png',
    },
    link: {
      web: 'https://gangflight.netlify.app/experience/',
    },
  },
  {
    slug: 'flipit',
    name: '플립잇 | Flipit',
    koName: '플립잇',
    teamType: 'YB',
    teamName: '베베',
    members: [
      '박가은',
      '배승우',
      '유자인',
      '권예인',
      '김승은',
      '황주희',
      '박준형',
      '김예찬',
      '장지효',
    ],
    memberPartList: [
      '기획 | 박가은(PM) 배승우 유자인',
      '디자인 | 권예인 김승은',
      '프론트엔드 | 황주희 박준형',
      '백엔드 | 김예찬 장지효',
    ],
    description: {
      simple: '타인을 알아가고 자신을 표현하는 가장 단순한 방법, ‘플립잇’',
      detail: `플립잇은 사용자들이 질문과 답변을 통해 서로의 취향과 관심사를 공유하며 깊이 있는 소통을 가능하게 하는 Q&A 플랫폼입니다. 질문하기, 답변하기, 아이덴티티 카테고라이징, 그리고 특별한 피드백 기능인 '통했당'을 통해 사용자 간의 상호작용을 촉진하고, 개인의 아이덴티티를 표현할 수 있도록 돕습니다.`,
    },
    image: {
      src: '/images/works/flipit.png',
    },
    link: {
      instagram: 'flipit.co.kr',
      web: 'https://www.flipit.co.kr/',
    },
  },
  {
    slug: 'selpiece',
    name: '셀피스 | SELPIECE',
    koName: '셀피스',
    teamType: 'YB',
    teamName: '쿨피스',
    members: [
      '신민선',
      '김민혜',
      '강예림',
      '한수현',
      '이민정',
      '안민하',
      '한상호',
      '이정민',
    ],
    memberPartList: [
      '기획 | 신민선(PM) 김민혜',
      '디자인 | 한수현 강예림',
      '프론트엔드 | 안민하 이정민',
      '백엔드 | 한상호 이민정',
    ],
    description: {
      simple: '자신의 조각을 찾아 고유한 브랜드를 디자인하는 공간 ‘셀피스’',
      detail: `셀피스는 예비 퍼스널브랜더들이 퍼스널브랜딩 이전에 ‘나를 더 잘 알 수 있도록’ 도와주는 자기이해 솔루션입니다. 정의하기 테스트를 통해 나의 조각을 발견하고, 챗봇과의 대화를 통해 나를 이해하며, 사용자는 서비스를 통해 나 자신에 대한 이해라는 가치를 경험할 수 있습니다. 셀피스를 통해, 내 조각을 찾아보고 나의 가치를 창출하는 경험을 해보는 건 어떨까요?`,
    },
    image: {
      src: '/images/works/selpiece.png',
    },
    link: {
      web: 'https://selpiece.vercel.app/',
    },
  },
  {
    slug: 'ddoba',
    name: '또바 | Ddoba',
    koName: '또바',
    teamType: 'YB',
    teamName: '웃토',
    members: [
      '정예진',
      '신기성',
      '구다민',
      '유해령',
      '홍승리',
      '이채민',
      '정서현',
      '노영진',
      '박정호',
    ],
    memberPartList: [
      '기획 | 정예진(PM) 신기성 구다민',
      '디자인 | 유해령 홍승리',
      '프론트엔드 | 이채민 정서현',
      '백엔드 | 노영진 박정호',
    ],
    description: {
      simple: '나의 일생을 더 아름답고 따뜻하게, ‘또바‘',
      detail: `또바는 시니어계층의 사회적 관계 형성을 도와 활기찬 사회활동을 지속할 수 있게 도와주는 서비스입니다. '활동 참여하기'에서는 맞춤형 필터링 기능으로 사회 활동 프로그램을 신청할 수 있고, '배움 나누기'에서는 지식을 직접 공유하고 배울 수 있고, '함께 대화하기'에서는 직접 소통하며 만남을 이어나갈 수 있습니다. 또바에서는 연결, 배움, 지속의 가치를 실현할 수 있습니다. `,
    },
    image: {
      src: '/images/works/ddoba.png',
    },
  },
  {
    slug: 'univfit',
    name: '유니브핏 | UnivFit',
    koName: '유니브핏',
    teamType: 'YB',
    teamName: '맨동',
    members: [
      '홍가연',
      '김병진',
      '이민영',
      '구름',
      '김윤서',
      '홍민서',
      '김영록',
      '차현수',
    ],
    memberPartList: [
      '기획 | 홍가연(PM) 김병진 이민영',
      '디자인 | 구름 김윤서',
      '프론트엔드 | 홍민서',
      '백엔드 | 김영록 차현수',
    ],
    description: {
      simple: '대학생을 위한 장학금 추천·관리 서비스, ‘유니브핏(UnivFit)’',
      detail: `‘유니브핏’은 대학생의 전반적인 장학금 지원과정을 돕는 서비스입니다. 장학금 탐색부터 서류 준비, 자소서 작성, 일정 관리까지 기존의 장학금 지원과정에서의 불편함을 최소화하고 효율적인 지원을 가능케 합니다. 유니브핏을 통해 수많은 장학금 정보와 공고 별 지원 자격 부합여부를 쉽게 알아보고, 지원과정에 있어 필요한 모든 것을 간편하게 관리할 수 있습니다.`,
    },
    image: {
      src: '/images/works/univfit.png',
    },
    link: {
      web: 'https://www.univ-fit.com/',
      instagram: 'univ_fit',
    },
  },
  {
    slug: 'newsthink',
    name: '뉴씽 | Newsthink',
    koName: '뉴씽',
    teamType: 'YB',
    teamName: '굿머닝',
    members: [
      '김연지',
      '김대헌',
      '진성이',
      '윤시연',
      '김수현',
      '차현정',
      '권민혁',
      '백건우',
    ],
    memberPartList: [
      '기획 | 김연지(PM) 김대헌',
      '디자인 | 진성이 윤시연',
      '프론트엔드 | 김수현 차현정',
      '백엔드 | 권민혁 백건우',
    ],
    description: {
      simple: '경제 뉴스는 쉽게 생각은 깊게 의견은 함께 Think New, 뉴씽',
      detail: `‘뉴씽’은 생각하는 힘을 길러주는 경제 뉴스레터 서비스입니다. 사용자들은 뉴스를 통해 발견한 나의 생각을 확장하고, 공유하며 함께 성장합니다. 요즘 청년들은 자신의 삶과 관련된 ‘경제’분야에 관심을 갖지만, 어렵고 복잡한 경제 학습에 어려움을 겪습니다. ‘뉴씽’은 청년들의 낮은 금융 이해도를 해결하기 위해, 쉽고 간편한 뉴스레터를 제공하여 지속적으로 학습할 수 있도록 돕습니다.`,
    },
    image: {
      src: '/images/works/newsthink.png',
    },
  },
  {
    slug: 'sync',
    name: '싱크 | Sync',
    koName: '싱크',
    teamType: 'YB',
    teamName: '에잇취',
    members: [
      '김예은',
      '김서윤',
      '이장미',
      '이재영',
      '김은홍',
      '양규리',
      '박시윤',
      '배현서',
      '정유영',
    ],
    memberPartList: [
      '기획 | 김예은(PM) 김서윤 이장미',
      '디자인 | 이재영 김은홍',
      '프론트엔드 | 양규리 박시윤',
      '백엔드 | 배현서 정유영',
    ],
    description: {
      simple: '서로 다른 문화, 하나의 네트워크 ‘sync(싱크)’',
      detail: `성향과 관심사에 따라 모임을 자유롭게 개설 및 참여하고, 생활 정보를 공유하는 한국인 대학생-외국인 유학생 네트워킹 서비스입니다. 국내 외국인 유학생 수가 증가하고 있지만 한국인, 외국인끼리 무리지어 다니는 게토화 현상과 국제 교류 프로그램이 원활히 진행되지 않는 문제를 인식하여 ‘싱크’의 모임과 커뮤니티로 진정한 싱크를 맞출 수 있도록 공간을 제공합니다.`,
    },
    image: {
      src: '/images/works/sync.png',
    },
  },
  {
    slug: 'remind',
    name: '리마인드 | Re:mind',
    koName: '리마인드',
    teamType: 'YB',
    teamName: '말랑말랑',
    members: [
      '배예진',
      '김서연',
      '김채진',
      '김규리',
      '박정환',
      '송승희',
      '박진우',
      '이상민',
    ],
    memberPartList: [
      '기획 | 배예진(PM) 김서연 김채진',
      '디자인 | 김규리 박정환',
      '프론트엔드 | 송승희',
      '백엔드 | 박진우 이상민',
    ],
    description: {
      simple: '진료실 밖 일상을 더하다, ‘리마인드 (Re:mind)’',
      detail: `'리마인드'는 정신질환 환자의 일상 무드차트와 약 복용 기록이 환자 담당자에게 공유되어, 지속적 관리를 도와주는 서비스입니다. 정신질환자, 정신과 의사, 사례관리 담당자라는 세 입장이 사용 가능한 서비스로 각 입장별 고안된 기능들을 통해 환자 회복을 돕습니다. 무드차트, 약 복용, 환자 관리 등의 정보들로 환자의 일상 회복을 책임집니다.`,
    },
    image: {
      src: '/images/works/remind.png',
    },
  },
  {
    slug: 'daepiro',
    name: '대피로 | Daepiro',
    koName: '대피로',
    teamType: 'OB',
    teamName: '넘버원',
    members: [
      '김연지',
      '김서윤',
      '한나영',
      '한수현',
      '오종석',
      '송승희',
      '노영진',
      '이재현',
    ],
    memberPartList: [
      '기획 | 김연지(PM) 김서윤 한나영',
      '디자인 | 한수현',
      '프론트엔드 | 오종석 송승희',
      '백엔드 | 노영진 이재현',
    ],
    description: {
      simple: '안전 재난 알림 서비스, 대피로',
      detail: `‘대피로’는 사용자 맞춤형 안전 재난 알림을 수신하고, 공동체의 안녕을 서로 챙겨줄 수 있는 사람들이 모이는 안전 재난 알림 서비스입니다. 본 서비스는 모든 국민들이 1)재난 상황에 대한 정확한 행동요령를 전달 받아 적극적으로 대처할 수 있도록 도우며, 재난문자가 제공하기 어려운 2)재난 상황에 대한 구체적인 정보를 공동체의 연결을 통해 확인할 수 있습니다`,
    },
    image: {
      src: '/images/works/daepiro.png',
    },
    link: {
      instagram: 'daepiro_official',
    },
  },
  {
    slug: 'writon',
    name: '라이톤 | Writon',
    koName: '라이톤',
    teamType: 'OB',
    teamName: '라이톤',
    members: ['박지호', '강서연', '최호연', '이승렬'],
    memberPartList: [
      '기획 | 박지호(PM)',
      '디자인 | 강서연',
      '프론트엔드 | 최호연',
      '백엔드 | 이승렬',
    ],
    description: {
      simple: 'Writon',
      detail: `라이톤은 나에게 필요한 목표달성을 위해 “회고 챌린지”에 도전하고, “커뮤니티”를 통해 다른 유저들과 시너지를 만들어가는 회고&커뮤니티 웹서비스입니다. 함께 이야기하고 싶은 회고 질문을 추가하여 공유하고, 나의 회고를 편하게 모아볼 수 있어요. 또, 우리팀의 공간은 프라이빗하게 이용할 수 있습니다!`,
    },
    image: {
      src: '/images/works/writon.png',
    },
  },
  {
    slug: 'recoding',
    name: '레코딩 | RE:CODING',
    koName: '레코딩',
    teamType: 'OB',
    teamName: '밋플',
    members: [
      '신민선',
      '박지호',
      '정예진',
      '강서연',
      '홍민서',
      '김승훈',
      '류관곤',
      '배현서',
    ],
    memberPartList: [
      '기획 | 신민선(PM) 박지호 정예진',
      '디자인 | 강서연',
      '프론트엔드 | 홍민서 김승훈',
      '백엔드 | 류관곤 배현서',
    ],
    description: {
      simple: '함께하는 코드 리뷰, 코드로 연결되는 성장의 기회 RE:CODING',
      detail: `RE:CODING은 현직 개발자와 대학생을 매칭하여, 코드 리뷰를 제공하고 받을 수 있는 서비스입니다. 대학생들은 실무에서 활용할 수 있는 개발 꿀팁과 피드백을 받을 수 있고, 개발자들은 자신의 지식과 경험을 공유하며 예비 개발자와 소통할 수 있어요. 더 나은 개발자로 성장하고 싶다면, 레코딩과 함께하세요!`,
    },
    image: {
      src: '/images/works/recoding.png',
    },
    link: {
      web: 'https://re-coding-meetpl.vercel.app/',
    },
  },
  {
    slug: 'winey',
    name: '와이니 | WINEY',
    koName: '와이니',
    teamType: 'OB',
    teamName: '와이니',
    members: [
      '김희연',
      '최성경',
      '김동현',
      '박혜운',
      '정도현',
      '임현우',
      '정성훈',
    ],
    memberPartList: [
      '기획 | 김희연',
      '디자인 | 최성경',
      'Android | 김동현',
      'iOS | 박혜운 정도현',
      '백엔드 | 임현우 정성훈',
    ],
    description: {
      simple: '와인취향을 찾는 나만의 여정, WINEY',
      detail: ` 사용자가 작성한 테이스팅 노트를 분석 후, 사용자 입맛에 딱 맞는 와인을 추천해주는 서비스입니다. 와인 용어에 대한 설명과 함께 와인을 '보고, 맡고, 맛볼 수' 있도록 구성된 테이스팅 노트로, 누구나 쉽게 테이스팅 노트를 작성하며 와인을 즐길 수 있습니다.\nEnjoy your WINY Way, WINEY!`,
    },
    image: {
      src: '/images/works/winey.png',
    },
    link: {
      android:
        'https://play.google.com/store/apps/details?id=com.teamwiney.winey ',
      ios: 'https://apps.apple.com/kr/app/winey/id6469306159',
      instagram: 'whynotwiney',
      github: 'https://github.com/orgs/AdultOfNineteen/repositories',
    },
  },
  {
    slug: 'connectdog',
    name: '코넥독 | Connectdog',
    koName: '코넥독',
    teamType: 'OB',
    teamName: '포윗유',
    members: ['이시윤', '민혜린', '권예인', '강승구', '민경혁', '한호정'],
    memberPartList: [
      '기획 | 이시윤 민혜린',
      '디자인 | 권예인',
      '프론트엔드 | 강승구',
      '백엔드 | 민경혁 한호정',
    ],
    description: {
      simple: '나의 여행길이 유기동물에게 새 삶의 기회로',
      detail: `내 여행길이 유기동물에게 새 삶을 선물할 수 있다면?\n\n‘코넥독’은 유기동물의 새 삶을 연결하는 이동봉사를 매칭하는 서비스입니다. 이동봉사는 구조, 병원 치료, 국내외 입양 등 장거리 이동이 필요한 유기동물을 데려다주는 간단한 봉사입니다. 코넥독에서는 (1)내 이동 일정과 지역에 맞는 공고를 편리하게 검색할 수 있고, (2)이동봉사 후기를 남기고, (3)봉사 횟수에 따라 배지를 달성하며 연결의 뿌듯함을 기록할 수 있습니다. `,
    },
    image: {
      src: '/images/works/connectdog.png',
    },
    link: {
      instagram: 'connectdog.official',
    },
  },
  {
    slug: 'farmus',
    name: '팜어스 | Farmus',
    koName: '팜어스',
    teamType: 'OB',
    teamName: '모던파머',
    members: ['이은섭', '이장미', '남서윤', '이승렬', '양건희', '김아린'],
    memberPartList: [
      '기획 | 이장미',
      '디자인 | 남서윤',
      '프론트엔드 | 양건희 김아린',
      '백엔드 | 이은섭(PM) 이승렬',
    ],
    description: {
      simple: '홈파밍의 시작은 쉽게, 과정은 함께하며 즐겁게 ',
      detail: `팜어스는 홈파밍에 어려움을 느끼는 사람들을 위한 그룹 챌린지형 서비스입니다.\n\n[채소 성장일기]\n성장일기를 통한 꾸준한 기록을 유도합니다. 팜클럽 구성원들과 성장일기를 공유하며 동기부여를 할 수 있습니다.\n\n[팜클럽 미션]\n채소의 생장주기에 따른 맞춤형 미션을 수행하며 제때 필요한 정보를 얻을 수 있습니다.\n\n팜어스는 도시농부를 꿈꾸는 모든 이들의 여정에 함께하여 누구나 홈파밍의 즐거움을 느껴 포기하지 않도록 돕는 서비스입니다. 나에게 맞는 팜클럽을 가입하고 수확의 즐거움을 느껴보세요!`,
    },
    image: {
      src: '/images/works/farmus.png',
    },
  },
  {
    slug: 'flowith',
    name: '플로잇 | Flowith',
    koName: '플로잇',
    teamType: 'OB',
    teamName: '펫모리',
    members: [
      '신민선',
      '김가연',
      '하현정',
      '한수현',
      '심규민',
      '장세은',
      '김형석',
      '황주희',
    ],
    memberPartList: [
      '기획 | 신민선(PM) 김가연 하현정',
      '디자인 | 한수현',
      '프론트엔드 | 김형석 황주희',
      '백엔드 | 심규민 장세은',
    ],
    description: {
      simple: '팀과 개인의 균형 속에서, 일상을 함께 설계하는 서비스 ‘플로잇’',
      detail: `플로잇은 여러 팀에 속하여 할 일을 관리해야만 하는 2030세대의 일 과부하문제에 공감하여 팀과 개인 사이의 일상에서 보다 나은 삶을 효율적으로 살 수 있도록 도와주는 생산성 서비스입니다. 플로잇은 공유 투두를 통해, 나만의 개인 과업 뿐 아니라 누군가와 함께하는 일을 함께 소통하며 설계할 수 있도록 돕습니다. `,
    },
    image: {
      src: '/images/works/flowith.png',
    },
    link: {
      blog: 'https://pawith.framer.ai/',
      ios: 'https://apps.apple.com/kr/app/%ED%8F%AC%EC%9E%87-pawith/id6472612736',
    },
  },
  {
    slug: 'lets-career',
    name: '렛츠커리어 | Let’s Career',
    koName: '렛츠커리어',
    teamType: 'COMPANY',
    teamName: '렛츠커리어',
    members: [
      '송다예',
      '임호정',
      '백지수',
      '홍민서',
      '김용연',
      '김민서',
      '류관곤',
      '장재영',
      '함이수',
      '최하영',
      '정수범',
      '송민제',
      '김명원',
    ],
    memberPartList: [
      'CEO | 송다예',
      '기획 | 임호정(PM)',
      '디자인 | 백지수',
      '프론트엔드 | 홍민서 김용연',
      '백엔드 | 김민서 류관곤',
      '전략기획 | 장재영',
      '기획운영 | 송민제 김명원',
      '마케팅 | 함이수 최하영 정수범',
    ],
    description: {
      simple: '커리어의 첫 걸음을 함께 해요, 렛츠커리어(Let’s Career)',
      detail: `렛츠커리어는 취업의 가장 첫 걸음인 커리어 탐색 단계에서 시작하여 취업에 필요한 단계별 커리큘럼을 제공합니다. 경험 정리와 직무 탐색을 포함한 베이직 챌린지를 기반으로, 다양한 챌린지와 클래스를 통해 서류 작성과 면접 준비 등 합격까지의 여정을 돕습니다. 합격 후에도 커리어를 발전시켜나갈 수 있도록 주니어 네트워크 멤버십으로써 다양한 클래스와 온오프라인 네트워킹을 하며 긍정적인 시너지가 날 수 있도록 합니다. 궁극적으로 취업 준비생과 주니어가 주도권을 가지고 본인의 커리어를 만들어갈 수 있는 세상을 만듭니다.`,
    },
    image: {
      src: '/images/works/letscareer.png',
    },
    link: {
      web: 'https://www.letsintern.co.kr/',
      instagram: 'letscareer.official',
    },
  },
  {
    slug: 'codeit',
    name: '코드잇 | Codeit',
    koName: '코드잇',
    teamType: 'COMPANY',
    teamName: '코드잇',
    members: ['이예은'],
    memberPartList: ['담당 | 이예은'],
    description: {
      simple: '취업까지 달린다! 코드잇 스프린트',
      detail: `코드잇은 '온라인 코딩 교육 서비스'를 운영하는 EdTech 스타트업입니다. '코드잇 스프린트'는 코드잇이 지난 8년 동안 교육 서비스를 운영해온 경험과 퀄리티에 대한 집착으로 철저히 준비한 부트캠프입니다.\n\n코드잇은 모든 강의를 자체 제작하여 퀄리티 높은 교육 콘텐츠를 제공하고, 코드잇만의 교육 노하우와 탄탄한 커리큘럼을 바탕으로 ‘코드잇 스프린트’라는 부트캠프를 운영하고 있으며, 이를 통해 양질의 훈련생을 배출하고 있습니다.\n\n스프린트는 2024 KCAB 한국소비자평가에서 IT부트캠프 부문 대상을 수상하며 가치를 인정받았습니다.`,
    },
    image: {
      src: '/images/works/codeit.png',
    },
    link: {
      web: ' https://bit.ly/4979ksN/',
      instagram: 'codeit_sprint',
      recruit: 'https://careers.codeit.com',
    },
  },
  {
    slug: 'pickply',
    name: '픽플리 | Pickply',
    koName: '픽플리',
    teamType: 'COMPANY',
    teamName: 'R2C컴퍼니',
    members: ['김동호', '김현웅', '이승원', '이다영', '강우성'],
    memberPartList: [
      'PO(대표) | 김동호',
      '개발 | 김현웅, 이승원',
      '디자인 | 이다영',
      '데이터 & 그로스 | 강우성',
    ],
    description: {
      simple: '데이터의 수요자와 공급자를 연결한 D2C 데이터 플랫폼',
      detail: `픽플리는 데이터의 수요자와 공급자를 직접 연결하는 D2C 데이터 수집·생성 플랫폼입니다.\n\n게이미피케이션과 보상 콘텐츠와 커뮤니티를 통해 데이터 수집·생성 프로세스를 최적화하고, 자체 개발한 품질 관리 솔루션을 통해 고품질의 데이터를 제공합니다.\n\n데이터가 필요한 리서처는 합리적인 비용으로 양질의 데이터를, 데이터를 제공하는 픽플러는 정당한 보상을 제공받을 수 있습니다.\n\nR2C 컴퍼니는 픽플리를 통해 국내 2,000만 명이 이용하는 통계청 이상의 데이터 허브를,
전세계 10억 명이 이용하는 글로벌 데이터 플랫폼을 만들 것입니다.`,
    },
    image: {
      src: '/images/works/pickply.png',
    },
    link: {
      web: 'https://pickply.com/',
      instagram: 'pickply_official',
      recruit:
        'https://www.notion.so/r2c-company/R2C-03faa4c44b924d7ab4bdac9f58cc2874?pvs=4',
    },
  },
];
