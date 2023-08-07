import React from 'react';

export interface IMessageDialogProps {
  title: string;
  message?: string;
  isOpen: boolean;
  rootClass?: string;
  renderContent?: React.ReactNode;
}
