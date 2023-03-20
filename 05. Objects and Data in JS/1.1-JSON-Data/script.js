var json =
  '{ "first_name": "Joe", "last_name": "Jones", "age": 25, "social_media": [ "facebook", "Twitter", "Instagram" ], "online": true, "phone_numbers": { "home": "916-123-4567", "work": "916-321-9876", "mobile": "530-212-1111" }, "status": "active" }';

var user = JSON.parse(json);

// console.log(json);

// console.log(user);

// console.log(user.first_name);

// You can delete values in the object

delete user.phone_numbers.home; // If you console log user, you will see now home in phone number is deleted

// You can add values to the object

user.social_media[3] = "WordPress.com"; // now you will wordpress.com is added in the social media list.

// Converting Back to JSON =======>>>>>>>>>

var data = JSON.stringify(user);

console.log(data);
