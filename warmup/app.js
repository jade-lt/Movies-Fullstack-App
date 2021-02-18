//fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson');

async function processData() {

    let promiseArray = [];

    promiseArray.push(fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')); //resA
    promiseArray.push(fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson')); //resB
    promiseArray.push(fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson')); //resC

    //expecting object 
    /*
        {
            title: string,
            place: string
        }
    */
    const data = await Promise.all(promiseArray)
                        .then((data) => {
                            console.log(data);
                            let result = [];
                            data.forEach((quakeList) => {
                                result.push(quakeList.json())
                            })
                            
                            return Promise.all(result);
                        })
                        .then((data) => {
                            console.log(data);
                            let result = [];
                            data.forEach((quakeList) => {
                                quakeList.features.forEach(quake => {
                                    result.push({
                                        title: quake.properties.title,
                                        place: quake.properties.place
                                    })
                                })
                            })

                            return result;
                        });

    console.log(data);

    //const [resA, resB, resC] = data;
    //console.log(resA);
    //console.log(resB);
    //console.log(resC);

}

processData();