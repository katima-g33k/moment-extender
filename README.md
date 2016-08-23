# Chance for Meteor

Meteor package for extending [momentjs](http://momentjs.com/) - A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.


## Installing
Note: Not yet published, still in development
```bash
meteor add jlachapelle:moment
```

## Usage

Add method to the `momentFunctions` object to use directly with `moment()`

### Example
```js
momentFunctions['startOfToday'] = () => {
  return moment().startOfToday('day');
}

moment().startOfToday().format();
```

## Documentation

See the official [documentation](http://momentjs.com/docs/) for more info on momentjs
