import React from "react";

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{id:'u1', name: 'LadiesWasheroom', image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fcreative-arts&psig=AOvVaw2Ddtw5-EzOyL_UKPQIcWGH&ust=1755095739354000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjJ9K6_hY8DFQAAAAAdAAAAABAE', places : 3}]

    return <UsersList items={USERS} />
}

export default Users;