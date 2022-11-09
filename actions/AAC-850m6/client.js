function(properties, context) {
    // create a dictionary of key-value pairs from the properties.data array
    // check if properties.event is filled
    var data = {};
    if (properties.event) {
        data.event = properties.event;
    }
    for (var i = 0; i < properties.data.length; i++) {
        var key = properties.data[i].key;
        var value = properties.data[i].value;
        // sanitize the value and format it as a string
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        } else{
            value = value.toString();
        }
        data[key] = value;
    }
    // push the data to the dataLayer
    dataLayer.push(data);
}