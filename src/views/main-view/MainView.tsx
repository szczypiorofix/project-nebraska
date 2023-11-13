import React from "react";
import styled from 'styled-components';

import "./MainView.scss";

export const MainView: React.FC = () => {

    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: #BF4F74;
    `;

    return (
      <div className="main-view-background">
          <div className="container main-view">
              <Title>MAIN VIEW</Title>
          </div>
      </div>
    );
};
