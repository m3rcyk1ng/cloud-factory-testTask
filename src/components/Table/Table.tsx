import { FunctionComponent } from 'react';
import { StyledTh, StyledTd, TableSection, StyledThead, StyledTr } from './Table.styles';
import { ITableProps } from './Table.interfaces';
import { TEXT } from '../../utils/Text';
import { IQuote } from '../../utils/interfaces';
import { THEME } from '../../utils/theme';
import { getPriceChange } from '../../utils/helpers';

export const Table: FunctionComponent<ITableProps> = ({ data, selectedQuote }) => {
  const { green, danger} = THEME;
  function handleQuotationClick(name: string) {
    selectedQuote(name);
  }

  const renderQuotesChange = (high: number, markPrice: number) => {
    let priceChange = getPriceChange(high, markPrice);
    if (priceChange > 0) {
      return <StyledTd style={{color: green}}>{`+${priceChange}%`}</StyledTd>;
    }
    if (priceChange < 0) {
      return <StyledTd style={{color: danger}}>{`${priceChange}%`}</StyledTd>;
    }
    return <StyledTd>{TEXT.WITHOUT_CHANGE}</StyledTd>;
  }

  return (
    <TableSection>
      <StyledThead>
        <tr>
          <StyledTh>{TEXT.TICKER}</StyledTh>
          <StyledTh>{TEXT.LAST_COURSE}</StyledTh>
          <StyledTh>{TEXT.MAX_PRICE}</StyledTh>
          <StyledTh>{TEXT.CHANGE}</StyledTh>
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
                  ? green
                  : markPrice && markPrice < high
                    ? danger
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
