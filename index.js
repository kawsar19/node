const express = require('express');
const app = express();
const cors=require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(express.static('public'))
app.use(cors())
app.use(express.json())



const uri = "mongodb+srv://kawsar30:UEPUaFAsyMaMA4X2@cluster0.n0fnndq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }); 

async function run() {
  try{
    await client.connect()
    console.log('connected');
    const productCullection=client.db('groceryDB').collection('product');
    app.get("/products",async(req,res)=>{
     
      const query={};
      const cursor=productCullection.find(query);
      const products=await cursor.toArray();
      res.send(products)
    }) 
    app.post('/products', async (req, res) => {
      const user = req.body;
      console.log(user);
       const result = await productCullection.insertOne({name:"kawsr"})
       res.send(result);
  });

  }finally {

  }
}
run().catch(err=>console.log(err+"kawsar"))



//index.js
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
  })
app.get('/hello', (req, res) => {
    res.send("hllwo ");
  })

app.listen(process.env.PORT || 3000);