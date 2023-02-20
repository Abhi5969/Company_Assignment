const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const { PrismaClient } = require('@prisma/client')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route)



const prisma = new PrismaClient()

async function main() {
   
        await prisma.user.create({
          data: {
            name: 'Alice',
            email: 'alice@prisma.io',
           password:'AliceerDhon'
           
          },
        })
      
        const allUsers = await prisma.user.findMany({
          
        })
        console.dir(allUsers)
      }
 

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});