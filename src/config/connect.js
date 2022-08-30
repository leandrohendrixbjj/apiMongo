import db from './connection.js';

try{
  db.on("error", console.log.bind(console,'Error on database connection'));
  db.once("open", () => {
    console.log('Connection was made successfully');
  });
}catch(err){
    console.log(`Error on connect: ${err}`);
}  

export default db;
