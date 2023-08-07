import { FunctionComponent } from 'react';
import { StyledTh, StyledTd, TableSection, StyledThead, StyledTr } from './Table.styles';
import { ITableProps } from './Table.interfaces';
import { TEXT } from '../../utils/Text';
import { getPriceChange } from '../../utils/helpers/getPriceChange';
import { IQuote } from '../../utils/interfaces';

export const Table: FunctionComponent<ITableProps> = ({ data, selectedQuote }) => {

  function handleQuotationClick(name: string) {
    selectedQuote(name);
  }

  const renderQuotesChange = (high: number, markPrice: number) => {
    let priceChange = getPriceChange(high, markPrice);
    if (priceChange > 0) {
      return <StyledTd style={{color: '#0ea600'}}>{`+${priceChange}%`}</StyledTd>;
    }
    if (priceChange < 0) {
      return <StyledTd style={{color: '#eb4d4b'}}>{`${priceChange}%`}</StyledTd>;
    }
    return <StyledTd>Без изменений</StyledTd>;
  }

  return (
    <TableSection>
      <StyledThead>
        <tr>
          <StyledTh>Тикер</StyledTh>
          <StyledTh>Последний курс</StyledTh>
          <StyledTh>Максимальное значение (24ч.)</StyledTh>
          <StyledTh>Изменение</StyledTh>
        </tr>
      </StyledThead>
      <tbody>
      {data && data.map(({displayName, high, markPrice}: IQuote, index: number) => (
        <StyledTr key={index + displayName} onClick={() => handleQuotationClick(displayName)}>
          <StyledTd>{displayName.replace('/', ` ${TEXT.TO.toLowerCase()} `)}</StyledTd>
          <StyledTd
            style={{
              color:
                markPrice > high
                  ? '#0ea600'
                  : markPrice && markPrice < high
                    ? '#eb4d4b'
                    : ''
            }}
          >
            {markPrice || TEXT.NODATA}
          </StyledTd>
          <StyledTd>{high}</StyledTd>
          {renderQuotesChange(Number(high), Number(markPrice))}
        </StyledTr>
      ))}
      </tbody>
    </TableSection>
  );
}

export default Table;
