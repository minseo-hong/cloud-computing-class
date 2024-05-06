'use client';

import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import TabItem from './TabItem';
import VisualIentityTabContent from './tab-content/VisualIentityTabContent';
import TFTeamContent from './tab-content/TFTeamTabContent';
import ParticipantsContent from './tab-content/ParticipantsContent';

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showContent, setShowContent] = useState(true);

  const tabData = [
    'VISUAL IDENTITY',
    'EXHIBITION TF TEAM',
    'EXHIBITION PARTICIPANTS',
  ];

  const handleTabChange = (tabIndex: number) => {
    setShowContent(false);
    setTimeout(() => {
      setActiveTab(tabIndex);
      setShowContent(true);
    }, 150);
  };

  return (
    <section className="mt-32">
      <nav className="flex flex-col items-center gap-6">
        <ul className="flex items-center gap-12">
          <TabItem
            as="li"
            active={activeTab === 0}
            onClick={() => handleTabChange(0)}
          />
          <TabItem
            as="li"
            active={activeTab === 1}
            onClick={() => handleTabChange(1)}
          />
          <TabItem
            as="li"
            active={activeTab === 2}
            onClick={() => handleTabChange(2)}
          />
        </ul>
        <span className="font-clash-display text-xl font-semibold text-red">
          {tabData[activeTab]}
        </span>
      </nav>
      <CSSTransition
        in={showContent}
        unmountOnExit
        timeout={150}
        classNames="fade"
      >
        {activeTab === 0 ? (
          <VisualIentityTabContent />
        ) : activeTab === 1 ? (
          <TFTeamContent />
        ) : (
          activeTab === 2 && <ParticipantsContent />
        )}
      </CSSTransition>
    </section>
  );
};

export default TabSection;
