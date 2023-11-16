import React from "react";
import styled from 'styled-components';

import "./Home.scss";

export const Home: React.FC = () => {
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: #BF4F74;
    `;

    return (
      <div className="main-view-background">
          <div className="container main-view">
              <Title>HOME</Title>
          </div>
      </div>
    );
};
