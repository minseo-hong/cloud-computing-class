import Image from 'next/image';

import Paragraph from '../../Paragraph';
import TabContentLayout from './TabContentLayout';

const VisualIentityTabContent = () => {
  const visualItentityList: {
    role: string;
    identity: string;
    image: {
      src: string;
      alt: string;
    };
  }[] = [
    {
      role: '기획',
      identity: 'Diffusion',
      image: {
        src: '/images/visual-identities/planner-visual-identity.svg',
        alt: '기획자 비주얼 아이덴티티',
      },
    },
    {
      role: '디자인',
      identity: 'Refine',
      image: {
        src: '/images/visual-identities/designer-visual-identity.svg',
        alt: '디자이너 비주얼 아이덴티티',
      },
    },
    {
      role: '개발자',
      identity: 'Function',
      image: {
        src: '/images/visual-identities/developer-visual-identity.svg',
        alt: '개발자 비주얼 아이덴티티',
      },
    },
  ];

  return (
    <TabContentLayout>
      <div>
        <h2 className="text-lg font-medium">전시 비주얼 아이덴티티</h2>
        <Paragraph className="mt-4">
          구조화 되며 맞물리는 세 파트의 모습을 톱니라는 모티브를 통해
          시각화했습니다. 포스터의 메인 그래픽은 맞물려 움직이는 서비스
          제작자들의 모습을 상징합니다. 강렬한 색감의 대비를 통해 전시의
          에너지가 전달될 수 있기를 기대합니다.
        </Paragraph>
        <div className="mt-14 flex justify-between gap-8">
          {visualItentityList.map((visualIdentity, index) => (
            <div key={index}>
              <div>
                <Image
                  src={visualIdentity.image.src}
                  alt={visualIdentity.image.alt}
                  width={140}
                  height={140}
                />
              </div>
              <div className="mt-4 flex flex-col items-center">
                <small className="text-xs font-extralight">
                  {visualIdentity.role}
                </small>
                <span className="font-clash-display font-medium">
                  {visualIdentity.identity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-24">
        <Image
          src="/images/posters/poster.png"
          alt="포스터 이미지"
          width={2481}
          height={3508}
          className="shadow-[0px_0px_19.576px_-5.22px_rgba(255,255,255,0.60)]"
        />
      </div>
    </TabContentLayout>
  );
};

export default VisualIentityTabContent;
