import Paragraph from '../../../ui/Paragraph';
import TabContentLayout from './TabContentLayout';
import PosterCarousel from './PosterCarousel';

const VisualIentityTabContent = () => {
  return (
    <TabContentLayout>
      <PosterCarousel />
      <div className="mt-12 flex justify-center">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-lg font-medium">전시 비주얼 아이덴티티</h2>
          <Paragraph>
            구조화 되며 맞물리는 세 파트의 모습을 톱니라는 모티브를 통해
            시각화했습니다.
            <br className="hidden desktop:block" />
            포스터의 메인 그래픽은 맞물려 움직이는 서비스 제작자들의 모습을
            상징합니다.
            <br className="hidden desktop:block" />
            강렬한 색감의 대비를 통해 전시의 에너지가 전달될 수 있기를
            기대합니다.
          </Paragraph>
        </div>
      </div>
    </TabContentLayout>
  );
};

export default VisualIentityTabContent;
