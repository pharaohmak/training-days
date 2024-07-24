const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else if (random === 2) {
        return 'Pentathlon';
    }
};

const getTrainingDays = event => {
    let days;
    if (event === 'Marathon') {
        days = 50;
    } else if (event === 'Triathlon') {
        days = 100;
    } else if (event === 'Pentathlon') {
        days = 200;
    }
    return days;
};

const logEvent = (name, event) => {
    return `${name}'s event is: ${event}`;
};

const logTime = (name, days) => {
    return `${name}'s time to train is: ${days} days`;
};

document.getElementById('generateEvent').addEventListener('click', () => {
    const name = 'Nala';
    const event = getRandEvent();
    const days = getTrainingDays(event);
    const name2 = 'Warren';
    const event2 = getRandEvent();
    const days2 = getTrainingDays(event2);

    document.getElementById('results').innerHTML = `
        <p>${logEvent(name2, event2)}</p>
        <p>${logTime(name2, days2)}</p>
        <p>${logEvent(name, event)}</p>
        <p>${logTime(name, days)}</p>
    `;
});