momentFunctions = {
  getDateBetween: (start, end) => {
    const year = chance.integer({ min: moment(start).year(), max: moment(end).year() });
    let month;
    let day;

    if (moment(start).year() === moment(end).year()) {
      month = chance.integer({ min: moment(start).month(), max: moment(end).month() });

      if (moment(start).month() === moment(end).month()) {
        day = chance.integer({ min: moment(start).date(), max: moment(end).date() });
      }
    } else if (year === moment(start).year()) {
      month = chance.integer({ min: moment(start).month(), max: 11 });

      if (month === moment(start).month()) {
        day = chance.integer({
          min: moment(start).date(),
          max: moment(start).endOf('month').date(),
        });
      }
    } else if (year === moment(end).year()) {
      month = chance.integer({ min: 0, max: moment(end).month() });

      if (month === moment(end).month()) {
        day = chance.integer({ min: 1, max: moment(end).date() });
      }
    } else {
      month = chance.integer({ min: 0, max: 11 });
    }

    if (!day) {
      day = chance.integer({
        min: 1,
        max: moment(`${year}/${month}`, 'YYYY/MM').endOf('month').date(),
      });
    }

    return moment(`${year}/${month}/${day}`, 'YYYY/MM/DD');
  },
};
