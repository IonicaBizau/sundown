## Documentation

You can see below the API reference of this module.

### `sundown(d, lat, lon)`
Calculate sunset and sunrise times for given date and coordinates.

#### Params

- **Date** `d`: The date you want to find the sun data for.
- **Number** `lat`: The latitude.
- **Number** `lon`: The longitude.

#### Return
- **Object** An object containing:
   - `sunrise` (Object):
     - `raw_time` (Array): An array of two numbers (hours and minutes)
     - `time` (String): Formatted sunrise time (`HH:mm`)
   - `sunset` (Object):
     - `raw_time` (Array): An array of two numbers (hours and minutes)
     - `time` (String): Formatted sunset time (`HH:mm`)
   - `date` (Date): The provided date.
   - `coordinates` (Array): An array of latitude and longitude values.

