const $ = require("cheerio");
const pt = require("puppeteer");
const axios = require("axios");
const url = "https://www.youtube.com/feed/trending";

_getTitle = html =>
  $("#video-title", html)
    .text()
    .trim();

_getImg = html => {
  // video img is lazy-loaded
  if ($("#img", html).attr("src") === undefined) {
    return "";
  }
  return $("#img", html)
    .attr("src")
    .trim();
};

_getChannelName = html =>
  $("#byline > a", html)
    .text()
    .trim();

_getViews = html =>
  $("#metadata-line > span:first-child", html).text().split(" ")[0];


_getUploadDate = html =>
  $("#metadata-line > span:nth-child(2)", html).text().trim()

_getDuration = html =>
  $("#overlays", html)
    .find("ytd-thumbnail-overlay-time-status-renderer > span").text().trim()




_getVid = html => {
  const data = $("#grid-container", html)
    .children()
    .each(function(i, ele) {
      const video = {
        title: _getTitle(ele),
        image: _getImg(ele),
        channelName: _getChannelName(ele),
        views:_getViews(ele),
        uploadDate:_getUploadDate(ele),
        duration: _getDuration(ele)
      };

      // check if image is "" then do not post
      if (video.image === ""){
          console.log("Image is Empty!")
      }else{
        axios.post('http://localhost:5000/api/videos',video).then(res => console.log(`(${i}) Success`)).catch(err=>console.log("Error"))
      }
    });
};


let _browser;

pt.launch({ headless: true })
  .then(function(browser) {
      _browser = browser
    return browser.newPage();
  })
  .then(async function(page) {
    await page.goto(url, { waitUntil: "load" });

    //lazy-loading images
    const delay = 2000;
    _printTimer(delay)
    await scrollDown(page,delay);
    
    return page.content();
  })
  .then(function(html) {
    _getVid(html);
  })
  .then(function(){
    _browser.close()
  })
  .catch(function(err) {
    console.log(err);
  });

async function scrollDown(page,delay) {
  await page.$$eval("#grid-container", e => {
    e[e.length - 1].lastChild.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "end"
    });
  });
  await page.waitFor(delay);
}

async function _printTimer(timer){
    var printTimer = await setInterval(function(time){        
        console.log(`${timer/1000}s left...`);
        timer -= 1000;
        if(timer <=0){
            clearInterval(printTimer);
        }
    },1000)
}