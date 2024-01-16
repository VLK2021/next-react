import React from 'react';
import {useRouter} from "next/router";

const ClientsProjectPage = () => {
    const router = useRouter();

    console.log(router.query);


    return (
        <div>
            <h1>ClientsProjectPage</h1>
        </div>
    );
};

export default ClientsProjectPage;