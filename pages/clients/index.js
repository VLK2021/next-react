import Link from "next/link";
import {useRouter} from "next/router";


const ClientsPage = () => {
    const router = useRouter();
    console.log(router.query);

    const client = [
        {id: 'max', name: "Maximilian"},
        {id: "manu", name: "Manuel"}
    ];


    return (
        <div>
            <h1>ClientsPage</h1>

            <ul>
                {
                    client.map(obj =>
                        <li key={obj.id}>
                            <Link href={{
                                pathname: '/clients/[id]',
                                query: {id: obj.id}
                            }}>{obj.name}</Link>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default ClientsPage;