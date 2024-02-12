import React, { useState, useEffect } from 'react';
import {  ServerUsersResponse, IUser } from '../../../../shared';
import HttpService from '../../../services/HttpService';

const ListOfUsers = (): React.JSX.Element => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [listOfUsersReceived, setListOfUsersReceived] = useState<boolean>(false);

    const listItem = (item: IUser, index: number) => <li key={index}>
        {item.email}
    </li>

    useEffect(() => {
        const fetchResults = async () => {
            setListOfUsersReceived(true);
            try {
                const response: ServerUsersResponse = await HttpService.get("http://localhost:8080/api/user/");
                console.log(response);
                setUsers(response.data);
            } catch(err) {
                console.error(err);
            }
        }
        if (!listOfUsersReceived) {
            fetchResults().
                then(() => {

                })
                .catch(err => {
                    console.error(err);
                })
        }
    }, [listOfUsersReceived]);

    return <div>
        <ul>
            { users.map(listItem) }
        </ul>
    </div>
}

export default ListOfUsers;
