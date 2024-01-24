export async function getAllEvents() {
    const response = await fetch('https://react-meetup-e5ce3-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();

    const transformSales = [];
    for (const key in data) {
        transformSales.push(
            {
                id: key,
                date: data[key].date,
                description: data[key].description,
                image: data[key].image,
                isFeatured: data[key].isFeatured,
                location: data[key].location

            }
        );
    }
    return transformSales;
}


export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}


export async function getEventById(id) {
    const allEvents = await getAllEvents();
    // return DUMMY_EVENTS.find((event) => event.id === id);
}