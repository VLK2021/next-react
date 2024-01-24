import {useEffect, useState} from "react";
import useSWR from "swr";


const fetcher = (url) => fetch(url).then((res) => res.json());


const LastSalesPage = (props) => {
    const apiUrl = 'https://react-meetup-e5ce3-default-rtdb.firebaseio.com/sales.json';

    const [sales, setSales] = useState(props.sales);
    const {data, error} = useSWR(apiUrl, fetcher);
    // const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        if (data) {
            const transformSales = [];

            for (const key in data) {
                transformSales.push(
                    {
                        id: key,
                        username: data[key].username,
                        volume: data[key].volume
                    }
                );
            }

            setSales(transformSales);
        }
    }, [data]);

    // useEffect(() => {
    //     setIsLoading(true);
    //
    //     fetch('https://react-meetup-e5ce3-default-rtdb.firebaseio.com/sales.json')
    //         .then(response => response.json())
    //         .then(data => {
    //             const transformSales = [];
    //
    //             for (const key in data) {
    //                 transformSales.push(
    //                     {
    //                         id: key,
    //                         username: data[key].username,
    //                         volume: data[key].volume
    //                     }
    //                 );
    //             }
    //
    //             setSales(transformSales);
    //             setIsLoading(false);
    //         })
    // }, []);

    if (error) {
        return <p>Failed to load</p>
    }

    if (!data && !sales) {
        return <p>Loading...</p>
    }


    return (
        <ul>
            {
                sales.map(sale => <li key={sale.id}>{sale.username} - ${sale.volume}</li>)
            }
        </ul>
    );
}


export async function getStaticProps() {
    const response = await fetch('https://react-meetup-e5ce3-default-rtdb.firebaseio.com/sales.json');
    const data = await response.json();

    const transformSales = [];

    for (const key in data) {
        transformSales.push(
            {
                id: key,
                username: data[key].username,
                volume: data[key].volume
            }
        );
    }
    return {props: {sales: transformSales}};
}

export default LastSalesPage;



