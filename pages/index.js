import Head from 'next/head';

import EventList from "../components/events/event-list";
import {getFeaturedEvents} from "../helpers/api-util";


export async function getStaticProps() {
    const filterTransformSales = await getFeaturedEvents();

    return {
        props: {
            featuredEvents: filterTransformSales
        },
        revalidate: 1800
    }
}


const Home = (props) => {
    const {featuredEvents} = props;

    return (
        <div>
            <Head>
                <title>NextJS Events</title>
                <meta
                name={'description'}
                content={'Find a lot of great events that allow you to evolve...'}
                />
            </Head>

            <EventList items={featuredEvents}/>
        </div>
    )
}

export default Home;
