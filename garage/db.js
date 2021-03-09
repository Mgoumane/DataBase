const mongoose = require("mongoose")
mongoose.connect(                            
    "mongodb://localhost:27017/garage",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("BD connectée");
    }
);

const carsSchema = new mongoose.Schema({
    brand : String,
    model : String,
    year : Number,
    created: Date,
});
const carsModel = mongoose.model("cars",carsSchema);

carsModel.create(
    [
        {
            brand:"Renault",
            model:"Espace",
            year:1999,

        },
        {
            brand:"Renault",
            model:"Scenic",
            year:2004,

        },
        {
            brand:"Peugeot",
            model:"308",
            year:2017,

        },
    ]
)
/*carsModel.findById(
    "6046393fb4a6442acc0d4945"
).then((response) => console.log(response));


carsModel.updateMany(
    {
        model: "Espace"
        
    },
    {
        year: 2000
    }
).then((response) => {
    console.log(response);
})
carsModel.deleteMany(
    {
        brand: "Renault"
        
    },
    
).then((response) => {
    console.log(response);
})

carsModel.insertMany(
   [ {
        brand:"Aston Martin",
        model:"DB9",
        year:2010,

    },
    {
        brand:"Range Rover",
        model:"Discovery Sport",
        year:2017,

    },]
).then((response)=>{
    console.log(response)
})*/ 
carsModel.find(
    {year : {$gt: 2015},}
).then((response) => console.log(response));