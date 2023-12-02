import React from "react";
import styled from 'styled-components';

import { AppContext } from '../../context/AppContext';
import { AppContextType } from '../../types/app';

import "./Home.scss";

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
`;

export const Home: React.FC = () => {
    const { setView } = React.useContext(AppContext) as AppContextType;
    return (
      <div className="main-view-background">
          <div className="container main-view">
              <Title>HOME</Title>
          </div>
      </div>
    );
};
