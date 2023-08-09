import React, { FunctionComponent, useState } from 'react';
import { ButtonGroup, Tab } from './TabList.styles';
import { TABS } from './TabList.constants';

export const TabList: FunctionComponent<{ actualTab: (actualTab: string) => void }> = ({
  actualTab,
}) => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  function handleSetActiveTab(tab: string) {
    setActiveTab(tab);
    actualTab(tab);
  }

  return (
    <ButtonGroup>
      {TABS.map((tab) => (
        <Tab key={tab} active={activeTab === tab} onClick={() => handleSetActiveTab(tab)}>
          {tab}
        </Tab>
      ))}
    </ButtonGroup>
  );
};

export default TabList;
