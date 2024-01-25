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
        <main>
            <EventList items={featuredEvents}/>
        </main>
    )
}

export default Home;
