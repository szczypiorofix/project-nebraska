import { ListProps } from '../../models';
import { UnorderedListStyled } from './UnorderdList.style';

const UnorderedList = <T extends {}>( list: ListProps<T>) => {
    return <UnorderedListStyled>
        {list.items.map(list.renderItem)}
    </UnorderedListStyled>
}

export default UnorderedList;
