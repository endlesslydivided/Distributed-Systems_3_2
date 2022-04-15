const Sequelize = require('sequelize');
const db = require('./context')(Sequelize);
const server = require('./server')(db);


(
    async function() 
    {
        await db.sequelize.sync();
        server.listen(8005, () =>console.log('Server is running'));
    }
)();
