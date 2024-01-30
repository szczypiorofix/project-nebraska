import React from 'react';

import { CONNECTION_STATUS } from '../../../../shared';
import { NetworkSignal, NetworkSignalContainer, NetworkSignalLabel } from './NetworkIndicator.stylle';

export interface NetworkIndicatorProps {
    status: CONNECTION_STATUS;
}

export const NetworkIndicator = ( props: NetworkIndicatorProps ): React.JSX.Element => {
    const statusResolver = (status: CONNECTION_STATUS): string => {
      switch (status) {
        case CONNECTION_STATUS.CONNECTING:
          return "yellow";
        case CONNECTION_STATUS.CONNECTED:
            return "green";
        default:
          return "red";
      }
    };

    return <NetworkSignalContainer>
        <NetworkSignalLabel>Network: </NetworkSignalLabel>
        <NetworkSignal $statusColor={ statusResolver( props.status ) }/>
    </NetworkSignalContainer>
}
