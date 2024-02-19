# Booking System


## Start the stack (requires docker desktop)
`docker compose up` in the root repository.

If you haven't got Docker desktop, you could build the images themselves indiviually, and then run them. (DB container should be run first though) You would probably have to change some things in the `server/db/connection.ts` file, and solve networking between the containers on your own.

## Some of the features
(*) = Requires authentication
## Logging in
* Login via /auth/login, posting your phone number and password

### Create some entities
* Create a user via POST /users with phone number, name, and a password
* Create a property, by POST /properties (*)
* Create a reservation, by POST /reservations/:propertyId (*)
* Create a message, by POST /messages (*)

### Finding stuff
* GET /users - Finds all registered users
* GET /properties - Finds all properties
* GET /reservations/:propertyId - Gets the current reservations to the property
* GET /messages - Gets all measssages for the logged in user, where they are either a recipient or a sender

## Other 
* PUT /check-in/:reservationId - Checks in to reservation (*)
There are also PUT (*) and DELETE (*) operations for the entitites, but I kept them out of this description for brevity.

## Things that could be improved
* Type safery between controller and middleware
* Multiple sources of truth of the model, both the actual db tables in `db/init.sql` and the `server/db/database.types.ts` file.
* Error filter middleware to catch all expections and turn them into http-exceptions
* Adding tests, used DI to make this as easy as possible. Would like to add some BDD tests, the only thing that would have to be mocked is the db-implementation. One could also run a in-memory server I believe for authentic "e2e" tests.
