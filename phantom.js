const puppeteer = require('puppeteer');

const hotels = async (place) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url = `https://hotel.yatra.com/hotel-search/dom/search?checkInTime=00:00:00&checkOutTime=18:00:00&checkoutDate=29/01/2020&checkinDate=26/01/2020&roomRequests[0].id=1&roomRequests[0].noOfAdults=2&roomRequests[0].noOfChildren=0&source=BOOKING_ENGINE&pg=1&tenant=B2C&isPersnldSrp=1&city.name=${place}&city.code=${place}&state.name=MHR&state.code=MHR&country.name=India&country.code=IND`
  await page.goto(url);

  const textContent = await page.evaluate(() => {
    return document.querySelector(".result-details-left").data
  });

  console.log(textContent); /* No Problem Mate */

  browser.close();
}

hotels("Pune")
.then(res=>{
    console.log(res)
})