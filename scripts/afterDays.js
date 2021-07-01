const afterDays = (days) => {
    const today = new Date();
    today.setDate( today.getDate() + days );
    const parseDate = new String(today);
    const date = parseDate.split('(')[0];
    return date;
}

module.exports = {
    afterDays
}