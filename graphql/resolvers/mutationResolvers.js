const Event = require('../models/event');
const Restaurant = require('../models/restaurant');
const User = require('../models/user');
const Vote = require('../models/vote');

const createEvent = ({ name, date, lat, long, distance }) => {
  let event = new Event({
    name,
    date,
    long,
    lat,
    distance
  })
  return event.save();
}

const createUser = ({ eventId, name, email, password, city }) => {
  let user = new User({
    eventId,
    name,
    email,
    password,
    city
  });
  return user.save();
}

const createRestaurant = ({ eventId, name, description, photo, price, ranking, rating, phone, website, address, cuisine, dietRestrictions }) => {
  let restaurant = new Restaurant({
    eventId,
    name,
    description,
    photo,
    price,
    ranking,
    rating,
    phone,
    website,
    address,
    cuisine,
    dietRestrictions
  })
  return restaurant.save();
}

const createVote = ({ eventId, restaurantId, userId, positiveVote, negativeVote }) => {
  let vote = new Vote({
    eventId,
    restaurantId,
    userId,
    positiveVote,
    negativeVote
  })
  return vote.save();
}



module.exports = {
  createEvent,
  createUser,
  createRestaurant,
  createVote
}