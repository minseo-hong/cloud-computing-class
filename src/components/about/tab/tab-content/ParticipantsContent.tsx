import Heading from '@/components/about/Heading';
import TabContentLayout from './TabContentLayout';

const ParticipantsContent = () => {
  const teamList = [
    {
      name: '홍길동전',
      members: ['김가연', '김다연', '김시연', '문서현', '박신형', '박지호'],
    },
    {
      name: '홍길동전',
      members: ['김가연', '김다연', '김시연', '문서현', '박신형'],
    },
    {
      name: '홍길동전',
      members: ['김가연', '김다연', '김시연', '문서현', '박신형'],
    },
    {
      name: '홍길동전',
      members: ['김가연', '김다연', '김시연', '문서현', '박신형'],
    },
  ];

  return (
    <TabContentLayout>
      <div>
        <Heading as="h2">큐시즘 29기 학회원</Heading>
        <div className="mt-12 flex flex-col gap-12">
          {teamList.map((team, index) => (
            <div key={index}>
              <h3 className="font-medium">Team | 홍길동전</h3>
              <ul
                className="mt-4 grid gap-x-12 gap-y-4"
                style={{
                  gridTemplateColumns: 'repeat(auto-fill, minmax(45px, 1fr))',
                }}
              >
                {team.members.map((member) => (
                  <li className="font-extralight">{member}</li>
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
