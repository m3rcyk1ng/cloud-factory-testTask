import React, { FunctionComponent } from 'react';
import { IMessageDialogProps } from './MessageDialog.interfaces';
import {
  MessageDialogTitle,
  MessageDialogContentWrapper,
  MessageDialogMessage
} from './MessageDialog.styles';

export const MessageDialog: FunctionComponent<IMessageDialogProps> = ({
    title,
    isOpen,
    message,
    renderContent,
    rootClass,
  }) => {

  return (
    isOpen ? (
      <MessageDialogContentWrapper className={rootClass}>
        <MessageDialogTitle>{title}</MessageDialogTitle>
        {renderContent || (
          <MessageDialogMessage>
            {message}
          </MessageDialogMessage>
        )}
      </MessageDialogContentWrapper>
    ) : null
  );
};

export default MessageDialog;
