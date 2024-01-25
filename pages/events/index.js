import {useRouter} from "next/dist/client/compat/router";

import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import {getAllEvents} from "../../helpers/api-util";



export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            events: events,
        },
        revalidate: 60
    }
}


const AllEventsPage = (props) => {
    const router = useRouter();
    const {events} = props;

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }


    return (
        <>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </>
    );
};

export default AllEventsPage;