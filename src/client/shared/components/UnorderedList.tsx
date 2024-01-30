import React from 'react';
import styled from 'styled-components';
import { ListProps } from '../models/models';


const UnorderedListStyled = styled.ul`
    margin: 0 auto;
`;

const UnorderedList = <T extends {}>( list: ListProps<T>) => {
    return <UnorderedListStyled>
        {list.items.map(list.renderItem)}
    </UnorderedListStyled>
}

export default UnorderedList;
