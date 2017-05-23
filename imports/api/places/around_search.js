import 'net/https'
import 'uri'
import 'json'

const API_KEY = 'AIzaSyD61Eo2xatz_nNr1DuTi24wl936tbM6Mqg';
let lat = '36.572672'
let lng = '140.643013'
let rad = '5000'

let types = 'convenience_store'
// #types = 'grocery_or_supermarket'
// #types = 'food'
// #types = 'school'

// language = 'ja'

// uri = URI.parse "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{lat},#{lng}&radius=#{rad}&types=#{types}&sensor=false&language=ja&key=#{API_KEY}"

// request = Net::HTTP::Get.new(uri.request_uri)
// response = Net::HTTP.start(uri.host, uri.port, use_ssl: uri.scheme == 'https') do |http|
//   http.request(request)
// end

// body = JSON.parse response.body
// results = body['results']

// p "rad - #{rad}"
// p "types - #{types}"

// results.each_with_index do |place, idx|
//   location = place['geometry']['location']
//   lat, lng = location['lat'], location['lng']
//   p "#{idx+1}: #{place['name']}"
// end