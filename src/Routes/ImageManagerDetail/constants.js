import React from 'react';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import InProgressIcon from '@patternfly/react-icons/dist/js/icons/in-progress-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/js/icons/times-circle-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/js/icons/question-circle-icon';
import infoColor from '@patternfly/react-tokens/dist/esm/global_active_color_100';

export const composeStatus = [
  'CREATED',
  'BUILDING',
  'ERROR',
  'SUCCESS',
  'INTERRUPTED',
];

export const DEFAULT_RELEASE = 'rhel-85';

//For this object, it's need to sisable lint once this is not a react component
export const statusIcons = {
  // eslint-disable-next-line react/display-name
  unknown: (color) => <QuestionCircleIcon color={color} />,
  // eslint-disable-next-line react/display-name
  CREATED: (color) => <CheckCircleIcon color={color} />,
  // eslint-disable-next-line react/display-name
  BUILDING: (color) => <InProgressIcon color={color} />,
  // eslint-disable-next-line react/display-name
  ERROR: (color) => <TimesCircleIcon color={color} />,
  // eslint-disable-next-line react/display-name
  SUCCESS: (color) => <CheckCircleIcon color={color} />,
  // eslint-disable-next-line react/display-name
  INTERRUPTED: (color) => <InProgressIcon color={color} />,
};

export const statusColors = {
  unknown: 'grey',
  CREATED: 'green',
  BUILDING: infoColor.value,
  ERROR: 'red',
  SUCCESS: 'green',
  INTERRUPTED: infoColor.value,
};

export const imageStatusMapper = {
  CREATED: 'CREATED',
  BUILDING: 'Image build in progress',
  ERROR: 'ERROR',
  SUCCESS: 'Ready',
  INTERRUPTED: 'Image build in progress',
};

export const distributionMapper = {
  'rhel-85': 'RHEL 8.5',
};

export const releaseMapper = {
  'rhel-85': 'Red Hat Enterprise Linux (RHEL) 8.5',
};

export const imageTypeMapper = {
  'rhel-edge-commit': 'RHEL for Edge Commit (.tar)',
  'rhel-edge-installer': 'RHEL for Edge Installer (.iso)',
};

export const isAccountMissing = (data) => data && !data?.Account;
