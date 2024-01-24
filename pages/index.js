import EventList from "../components/events/event-list";
import {getAllEvents} from "../helpers/api-util";


export async function getStaticProps() {
    const events = await getAllEvents();
    const filterTransformSales = events.filter((event) => event.isFeatured);

    return {props: {featuredEvents: filterTransformSales}}
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
