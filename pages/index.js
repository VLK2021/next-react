import {getFeaturedEvents} from "../dummy-data";

import EventList from "../components/events/event-list";


const Home = () => {
    const featuredEvents = getFeaturedEvents();


    return (
        <main>
            <EventList items={featuredEvents}/>
        </main>
    )
}

export default Home;
