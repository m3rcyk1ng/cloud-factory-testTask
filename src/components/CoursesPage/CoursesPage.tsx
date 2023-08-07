import React, {FunctionComponent, useEffect, useState} from 'react';
import Table from '../Table/Table';
import TabList from '../TabList/TabList';
import {
  CoursesPageWrapper,
  PreloaderWrapper,
  MessageDialogMessage,
  CloseBtn,
  AlertImg,
} from './CoursesPage.styles';
import Preloader from '../../assets/images/Preloader.svg'
import {mainApi} from '../../utils/Api';
import {IQuote, QuoteName} from '../../utils/interfaces';
import {TEXT} from '../../utils/Text';
import MessageDialog from '../MessageDialog/MessageDialog';
import AlertIcon from '../../assets/images/alert-circle.svg';
import {getPriceChange} from '../../utils/helpers/getPriceChange';

export const CoursesPage: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState('BTC');
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [actualData, setActualData] = useState([]);
  const [showInformationDialog, setShowInformationDialog] = useState({
    showDialog: false,
    name: '',
    highPrice: 0,
    marketPrice: 0,
    priceChange: 0,
  });
  const [showErrorDialog, setShowErrorDialog] = useState({
    showDialog: false,
    title: '',
    message: '',
  });
  const isShowInformationDialogOpen = showInformationDialog.showDialog;
  const isShowErrorDialogOpen = showErrorDialog.showDialog;

  useEffect(() => {
    let queryInterval: NodeJS.Timer;
    if (activeTab === QuoteName.BTC && !isShowInformationDialogOpen && !isShowErrorDialogOpen) {
      queryInterval = setTimeout(getFirstApiData, 5000);
    }
    if (activeTab === QuoteName.USDT && !isShowInformationDialogOpen && !isShowErrorDialogOpen) {
      queryInterval = setTimeout(getSecondApiData, 5000);
    }
    return () => {
      clearTimeout(queryInterval);
    };
  }, [activeTab, actualData, isShowErrorDialogOpen, isShowInformationDialogOpen, showInformationDialog]);

  function getFirstApiData () {
    mainApi
      .getData()
      .then((res: any[]) => {
        if (res) {
          setIsDataLoading(false);
          setShowErrorDialog({showDialog: false, message: '', title: ''})
          const filteredData = res.reduce((acc, item) => {
            if (item.symbol.includes(QuoteName.BTC)) acc.push(item);
            return acc;
          }, [])
          setActualData(filteredData);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setShowErrorDialog({
          showDialog: true,
          title: TEXT.ERROR,
          message: TEXT.QUERY_ERROR_TEXT,
        });
      })
  }

  function getSecondApiData() {
    mainApi
      .getSecondData()
      .then((res: any[]) => {
        if (res) {
          setIsDataLoading(false);
          setShowErrorDialog({showDialog: false, message: '', title: ''})
          const filteredData = res.reduce((acc, item) => {
            if (item.symbol.includes(QuoteName.USDT)) acc.push(item);
            return acc;
          }, [])
          setActualData(filteredData);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setShowErrorDialog({
          showDialog: true,
          title: TEXT.ERROR,
          message: TEXT.QUERY_ERROR_TEXT,
        });
      });
  }

  function handleSetActiveTab(actualTab: string) {
    if (actualTab === QuoteName.BTC) getFirstApiData();
    if (actualTab === QuoteName.USDT) getSecondApiData();
    setActiveTab(actualTab);
  }

  function handleCloseBtnClick() {
    if (isShowErrorDialogOpen)
      setShowErrorDialog({
        title: '',
        message: '',
        showDialog: false
      })
    if (isShowInformationDialogOpen)
      setShowInformationDialog({
        showDialog: false,
        name: '',
        highPrice: 0,
        marketPrice: 0,
        priceChange: 0,
      })
  }

  function handleOpenQuoteInformation(name: string) {
    actualData.filter((quote: IQuote) => {
      if (quote.displayName === name) {
        const { displayName, high, markPrice } = quote;
        const quoteData = {
          name: displayName,
          highPrice: Number(high),
          marketPrice: Number(markPrice),
          priceChange: getPriceChange(Number(high), Number(markPrice)),
        }
        setShowInformationDialog({ showDialog: true, ...quoteData });
      }
      return null;
    })
  }

  const renderErrorDialogContent = () => (
    <>
      <AlertImg src={AlertIcon}/>
      <MessageDialogMessage>{showErrorDialog.message}</MessageDialogMessage>
      <CloseBtn onClick={handleCloseBtnClick}>{TEXT.CLOSE}</CloseBtn>
    </>
  )

  const renderQuoteInformation = () => (
    <>
      <MessageDialogMessage>{`${TEXT.MARKET_PRICE}: ${showInformationDialog.marketPrice}`}</MessageDialogMessage>
      <MessageDialogMessage>{`${TEXT.HIGH_PRICE}: ${showInformationDialog.highPrice}`}</MessageDialogMessage>
      <MessageDialogMessage>{`${TEXT.PRICE_CHANGE}: ${showInformationDialog.priceChange}%`}</MessageDialogMessage>
      <CloseBtn onClick={handleCloseBtnClick}>{TEXT.CLOSE}</CloseBtn>
    </>
  )

  const renderPageDialogs = () => {
    if (isShowErrorDialogOpen) {
      return (
        <MessageDialog
          isOpen={isShowErrorDialogOpen}
          title={`${showErrorDialog.title}!`}
          renderContent={renderErrorDialogContent()}
        />
      )
    }
    if (isShowInformationDialogOpen) {
      return (
        <MessageDialog
          isOpen={isShowInformationDialogOpen}
          title={showInformationDialog.name}
          renderContent={renderQuoteInformation()}
        />
      )
    }
  }

  return (
    <>
      <CoursesPageWrapper>
        <TabList actualTab={(tab) => handleSetActiveTab(tab)}/>
        {isDataLoading && !isShowErrorDialogOpen ? <PreloaderWrapper src={Preloader} /> :
          <Table data={actualData} selectedQuote={handleOpenQuoteInformation}/>
        }
      </CoursesPageWrapper>
      {renderPageDialogs()}
    </>
  );
};

export default CoursesPage;