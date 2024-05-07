import Paragraph from '@/components/ui/Paragraph';
import TabContentLayout from './TabContentLayout';
import Heading from '@/components/about/Heading';

const TFTeamContent = () => {
  return (
    <TabContentLayout className="flex flex-col gap-12">
      <div>
        <Heading as="h2">2024 큐시즘 전시 TF팀</Heading>
        <Paragraph className="mt-4">
          큐시즘의 첫 외부 전시 &lt;ENGAGE ENERGY&gt;의 기획과 운영, 디자인을
          담당하는 학회원 위원회로 총 14명의 학회원으로 구성되어있습니다. 전시
          관람자 뿐 아니라 큐밀리에게 의미있는 전시 경험을 선사하기를
          기대합니다.
        </Paragraph>
        <Paragraph className="mt-4">PM | 박지호</Paragraph>
      </div>
      <div>
        <Heading as="h2">기획총괄팀</Heading>
        <Paragraph className="mt-4">
          전시가 원활히 개최될 수 있도록 참여 단체 및 후원 단체를 섭외하고,
          밀접하게 소통하며 관리했습니다.
        </Paragraph>
        <Paragraph className="mt-4">
          팀원 | 김가연 김다연 김시연 문서현 박신형
        </Paragraph>
      </div>
      <div>
        <Heading as="h2">행사기획운영팀</Heading>
        <Paragraph className="mt-4">
          전시 당일 타임라인을 정해 운영하고 관리했습니다. 이벤트 기획을 통해
          참여자 및 관람자에게 즐거움을 주었습니다.
        </Paragraph>
        <Paragraph className="mt-4">
          팀원 | 강예림 이은섭 이장미 한나영 홍민서
        </Paragraph>
      </div>
      <div>
        <Heading as="h2">아트미디어팀</Heading>
        <Paragraph className="mt-4">
          전시의 컨셉과 비전을 기획하고 이에 맞게 공간과 컨텐츠를 디자인해
          관람자가 전시 관람에 더욱 몰입할 수 있도록 했습니다.
        </Paragraph>
        <Paragraph className="mt-4">팀원 | 김지은 남서윤 한지원</Paragraph>
      </div>
    </TabContentLayout>
  );
};

export default TFTeamContent;
