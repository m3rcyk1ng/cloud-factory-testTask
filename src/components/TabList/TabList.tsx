import React, { FunctionComponent, useState } from 'react';
import { ButtonGroup, Tab } from './TabList.styles';
import { QuoteName } from '../../utils/interfaces';

export const TabList: FunctionComponent<{ actualTab: (actualTab: string) => void }> = ({ actualTab }) => {
  const tabs: string[] = [QuoteName.BTC, QuoteName.USDT];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  function handleSetActiveTab(tab: string) {
    setActiveTab(tab);
    actualTab(tab);
  }

  return (
    <ButtonGroup>
      {tabs.map(tab => (
        <Tab
          key={tab}
          active={activeTab === tab}
          onClick={() => handleSetActiveTab(tab)}
        >
          {tab}
        </Tab>
      ))}
    </ButtonGroup>
  );
};

export default TabList;