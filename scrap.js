const cheerio = require("cheerio")
const rp = require("request-promise")

const urlMum = "https://www.booking.com/searchresults.html?label=gen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AouAsvEFwAIB&sid=5c836ffd842a369e0083f9e0854b91cb&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AouAsvEFwAIB%3Bsid%3D5c836ffd842a369e0083f9e0854b91cb%3Bsb_price_type%3Dtotal%26%3B&sr_autoscroll=1&ss=Mumbai&is_ski_area=0&ssne=Mumbai&ssne_untouched=Mumbai&dest_id=-2092174&dest_type=city&checkin_year=2020&checkin_month=1&checkin_monthday=29&checkout_year=2020&checkout_month=2&checkout_monthday=13&group_adults=3&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1"

const searchHotels = ()=>{
    return rp(urlMum)
    .then(response=>{ return response})
    .catch(e=>{console.log(e)})
}


searchHotels()
    .then(body=>{
        const $ = cheerio.load(body)
        //console.log($(".sr-hotel__name").text())

        const hotels = []
        const hotelNames =[]
        const hotelImages = []
        const hotelLinks = []
        //Working
        $(".sr-hotel__name ").each(function(i,element){
            var $element = $(element).text()
            $element = $element.replace("\n", "");
            $element = $element.replace("\n", "");
            hotelNames.push($element)
            //console.log($element.text())
        })

        //Working
        $(".hotel_image").each(function(i,element){
                const $element = $(element).attr('src')
                hotelImages.push($element)
                //console.log($element.attr('src'))
            })

        
        //Hotel specific link working
        $('.hotel_name_link ') 
            .each(function(i,element){
                var $element = "https://booking.com"+$(element).attr("href")
                $element = $element.replace("\n", "");
                $element = $element.replace("\n", "");
                hotelLinks.push($element)
                //console.log($element)
            })


        for(var i=0;i<hotelImages.length && i<hotelNames.length && i<hotelLinks.length ;i++)
        {
            const hotel = {
                name : hotelNames[i],
                image : hotelImages[i],
                link : hotelLinks[i]

            }
            hotels.push(hotel)
        }

        //console.log(hotels)
        return hotels
 
        
})


module.exports = {searchHotels} 