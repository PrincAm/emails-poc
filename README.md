# Emails POC

### Prerequisites 
- add Mailchimp transactional API key 
- have email address with verified domain

### Run
```sh
yarn build

yarn start // start server
```
### Call endpoint
```
POST http://localhost:3000/template
```
request body
```
{
    "name": "John Doe",
    "useMjml": true
}
```