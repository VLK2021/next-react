import React from 'react';
import {useRouter} from "next/router";


const ClientsProjectPage = () => {
    const router = useRouter();

    console.log(router.query);

    function loadProjectHandler() {
//..load data

        router.push({
            pathname: '/clients/[id]/[clienntprojectid]',
            query: {id: 'max', clienntprojectid: 'projeta'}
        });

    }


    return (
        <div>
            <h1>ClientsProjectPage</h1>

            <button onClick={loadProjectHandler}>Load project A</button>
        </div>
    );
};

export default ClientsProjectPage;