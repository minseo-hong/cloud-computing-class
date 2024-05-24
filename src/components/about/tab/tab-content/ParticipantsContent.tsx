import Heading from '@/components/about/Heading';
import TabContentLayout from './TabContentLayout';
import { workList } from '@/data/works';

const ParticipantsContent = () => {
  return (
    <TabContentLayout>
      <div>
        <Heading as="h2">큐시즘 29기 학회원</Heading>
        <div className="mt-12 flex flex-col gap-12 desktop:gap-8">
          {workList.map((work, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 lg:flex-row lg:gap-16"
            >
              <h3 className="w-32 font-medium">Team | {work.koName}</h3>
              <ul
                className="grid gap-x-12 gap-y-4 lg:flex-1 lg:gap-x-8"
                style={{
                  gridTemplateColumns: 'repeat(auto-fill, minmax(45px, 1fr))',
                }}
              >
                {work.members.map((member, index) => (
                  <li key={index} className="font-extralight">
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </TabContentLayout>
  );
};

export default ParticipantsContent;
