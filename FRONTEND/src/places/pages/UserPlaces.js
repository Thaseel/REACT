import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id : 'p1',
        title : 'Empire State Building',
        description : 'One of the most beautiful building in the world!',
        imageUrl : 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq_PDOoVZmdaRfA3p3LhN4EwXHI9RRQtU1RFi6MafHEqdZa5GrT8S0o6bHAtfyV--NJ71wUy5XF34I29JnOBW_QHz4ITQkdXEo4iqs15QO1KKer__Qnl8ZeLrgLeJ-wpt1nNCq-=s1360-w1360-h1020-rw',
        address : '20 W 34th St., New York, NY 10001',
        location : {
            lat : 40.7484405,
            lng : -73.9882393
        },
        creator : 'u1'
    },
    {
        id : 'p2',
        title : 'Empire State Building',
        description : 'One of the most beautiful building in the world!',
        imageUrl : 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq_PDOoVZmdaRfA3p3LhN4EwXHI9RRQtU1RFi6MafHEqdZa5GrT8S0o6bHAtfyV--NJ71wUy5XF34I29JnOBW_QHz4ITQkdXEo4iqs15QO1KKer__Qnl8ZeLrgLeJ-wpt1nNCq-=s1360-w1360-h1020-rw',
        address : '20 W 34th St., New York, NY 10001',
        location : {
            lat : 40.7484405,
            lng : -73.9882393
        },
        creator : 'u2'
    },

]

const UserPlaces = () => {
    return <PlaceList items={DUMMY_PLACES} />
}

export default UserPlaces;