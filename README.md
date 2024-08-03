# Social_Media_API

## Description

- Back end for a social Media app! You are able to create/update/delete users, create/update/delete thoughts by each user and create/update/delete reactions to each of the thoughts posted. You also have the capability of adding and deleting other users to your friend group!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

- To run this locally, copy the repo and 
- Make sure that Node.js is installed and run `npm init -y` in your terminal to activate your package json.
- Make sure you are connected to your MongoDB instance, a database named `socialNetworkAPI` as your database.
- Install dependencies by entering `npm i` into the terminal, then `npm run start` to start the server.
- The local host is running on Port 3001. 

## Usage

- You will need to create your userbase, so use the following Models to create Users, Thoughts, and Reactions.

* To create a User, you will need: 'username', 'valid email adress'.

* To create a Thought, you will need: 'thoughtText' (min 1 character, max 300).

* To create a Reaction, you will need: 'reactionBody', 'username'

* To update or delete any of these you will require the id of the item you want to modify.

* To add friends, you will need the id of both of the Users.

## License

![GitHub License](https://img.shields.io/badge/license-None-blue.svg)

## Contributing

None

## Tests

None

## Questions

GitHub Repository: [GitHub](https://github.com/MLazalde/Social_Media_Mod18.git)

If you have any questions, please email me at <Mikealazalde@gmail.com>.


