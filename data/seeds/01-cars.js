
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
            "vin": "WBSBR93466PK11830",
            "make": "BMW M3",
            "model": "2006",
            "miles": "92,565",
            "transmission type": "6-Speed Automatic with Auto-Shift",
            "title status": "salvage"
        },
        {
            "vin": "1G1FY6S07K4101270",
            "make": "Chevrolet Bolt EV LT",
            "model": "2018",
            "miles": "41,101",
            "transmission type": "Automatic"
        },
        {
            "vin": "1FTEW1EP2KKC50508",
            "make": "Ford F-150 XLT",
            "model": "2019",
            "miles": "5,701",
            "transmission type": "10-Speed Automatic",
            "title status": "clean"
        },
        {
            "vin": "1HGCS1B83CA010697",
            "make": "Honda Accord EX-L",
            "model": "2012",
            "miles": "95,904"
        }
    ]);
    });
};
