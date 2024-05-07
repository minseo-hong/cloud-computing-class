import clsx from 'clsx';
import TabItemLabel from './TabItemLabel';

interface TabMenuProps {
  activeTab: number;
  handleTabChange: (tabIndex: number) => void;
}

const TabMenu = ({ activeTab, handleTabChange }: TabMenuProps) => {
  const tabData = [
    'VISUAL\nIDENTITY',
    'EXHIBITION\nTF TEAM',
    'EXHIBITION\nPARTICIPANTS',
  ];

  return (
    <nav className="flex flex-col items-center gap-6">
      <ul className="flex items-center gap-20">
        {tabData.map((tabName, tabIndex) => (
          <li
            key={tabIndex}
            className="cursor-pointer"
            onClick={() => handleTabChange(tabIndex)}
          >
            <div
              className={clsx(
                'h-[1.125rem] w-[1.125rem] rounded-full desktop:hidden',
                {
                  'bg-red': activeTab === tabIndex,
                  'bg-gray': activeTab !== tabIndex,
                },
              )}
            />
            <TabItemLabel
              label={tabName}
              className="hidden desktop:block"
              active={activeTab === tabIndex}
              lineEnter
            />
          </li>
        ))}
      </ul>
      <TabItemLabel label={tabData[activeTab]} className="desktop:hidden" />
    </nav>
  );
};

export default TabMenu;
