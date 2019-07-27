# Metube
metube is a clone of youtube which is used to explore a MERN stack

```bash
# to run nodemon server
npm run server

# to run client
npm run client

# to download client node modules
npm run client-install

# to run server and client together (using concurrently)
npm run dev
```

client is set at port 3000
API is set at port 5000

API Routes used:
- ```http://localhost:5000/api/videos ``` (GET/POST)
- ```http://localhost:5000/api/channels ``` (GET/POST)


Data is scrapped from youtube trending page with cheerio and puppeteer.
```bash
# to run youtube scrapper
node youtubeScrapper.js
```
`ps1: there is no duplicates checking as of yet when posting. Hence, it is recommended to manually reset the collection before running the scrapper`

`ps2: due to lazy-loading of data by youtube page, there is some images link not grabbed. thus it is not posted to the database ` 