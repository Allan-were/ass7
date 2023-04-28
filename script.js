var mymap = L.map('map').setView([-1.359227,36.937984], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
	maxZoom: 18
}).addTo(mymap);

var marker = L.marker([ -1.359227,36.937984 ]).addTo(mymap);
marker.bindPopup("<b>SYOKIMAU</b><br>7:30 AM.").openPopup();

var marker = L.marker([ -1.332686,36.900351]).addTo(mymap);
marker.bindPopup("<b>EMBAKASI</b><br>8:00 AM.").openPopup();

var marker = L.marker([ -1.2920659,36.8219461999]).addTo(mymap);
marker.bindPopup("<b>NAIROBI TOWN STAGE</b><br>9:00 AM.").openPopup();

var marker = L.marker([-1.28653, 36.8211]).addTo(mymap);
marker.bindPopup("<b>CITY HALL</b><br>CONFERENCE AT 10:00 AM.").openPopup();

var marker = L.marker([-1.34567, 36.90764]).addTo(mymap);
marker.bindPopup("<b>LOCAL FLIGHT</b><br>TO ELDORET AT 11:00 AM.").openPopup();

var marker = L.marker([0.404862, 35.22388]).addTo(mymap);
marker.bindPopup("<b>ARRIVAL</b><br>AT ELDORET AIRPORT AT 12:30 NOON.").openPopup();

var marker = L.marker([ 0.52036,35.26993]).addTo(mymap);
marker.bindPopup("<b>LUNCH MEETING</b><br>AT ELDORET TOWN AT 1:30 PM.").openPopup();

var marker = L.marker([0.404862, 35.22388]).addTo(mymap);
marker.bindPopup("<b>ARRIVAL</b><br>AT ELDORET AIRPORT AT 6:30 PM.").openPopup();

var marker = L.marker([-1.3242, 36.81342]).addTo(mymap);
marker.bindPopup("<b>ARRIVAL</b><br>AT WILSON AIRPORT AT 7:30 PM.").openPopup();

var marker = L.marker([ -1.2920659,36.8219461999]).addTo(mymap);
marker.bindPopup("<b>NAIROBI TOWN STAGE</b><br>8:30 AM.").openPopup();

var marker = L.marker([-1.20324, 36.91667]).addTo(mymap);
marker.bindPopup("<b>GITHURAI</b><br>AT 9:30 PM.").openPopup();

var marker = L.marker([ -1.145703, 36.964853]).addTo(mymap);
marker.bindPopup("<b>RUIRU</b><br> AT 10:00 PM.").openPopup();

var marker = L.marker([-1.11828, 37.00859]).addTo(mymap);
marker.bindPopup("<b>DINNER</b><br>AT JUJA CITY MALL AT 10:30 PM.").openPopup();

var marker = L.marker([-1.100396,37.014533]).addTo(mymap);
marker.bindPopup("<b>BACK TO SCHOOL</b><br>AT JKUAT AT 11:00 PM.").openPopup();