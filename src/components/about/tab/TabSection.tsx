'use client';

import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import VisualIentityTabContent from './tab-content/VisualIentityTabContent';
import TFTeamContent from './tab-content/TFTeamTabContent';
import ParticipantsContent from './tab-content/ParticipantsContent';
import TabMenu from './TabMenu';

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showContent, setShowContent] = useState(true);

  const handleTabChange = (tabIndex: number) => {
    setShowContent(false);
    setTimeout(() => {
      setActiveTab(tabIndex);
      setShowContent(true);
    }, 150);
  };

  return (
    <section className="mt-24">
      <TabMenu activeTab={activeTab} handleTabChange={handleTabChange} />
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
