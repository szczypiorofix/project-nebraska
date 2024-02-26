import React, { useState, useEffect } from 'react';
import { ServerUsersResponse, IUser } from '../../../../shared';
import HttpService from '../../../services/HttpService';
import { usersRoute } from '../../../router';

const ListOfUsers = (): React.JSX.Element => {
    const [users, setUsers] = useState<IUser[]>([]);

    const listItem = (item: IUser, index: number) => <li key={index}>
        {item.email}
    </li>

    useEffect(()=> {
        HttpService.get<ServerUsersResponse>(usersRoute)
            .then((response) => {
                console.log(response);
                setUsers(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return <div>
        <ul>
            { users.map(listItem) }
        </ul>
    </div>
}

export default ListOfUsers;
