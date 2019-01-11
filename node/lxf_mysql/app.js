const Sequelize = require('sequelize');
const config = require('./config');
console.log('init sequelize...');

var sequelize = new Sequelize(`mysql://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`);

var Pet = sequelize.define('pet',{
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  gender: Sequelize.BOOLEAN,
  birth: Sequelize.STRING(10),
  createdAt: Sequelize.BIGINT,
  updatedAt: Sequelize.BIGINT,
  version: Sequelize.BIGINT
},{
  timestamps: false
})

var now = Date.now();

// Pet.create({
//   id: 'g-' + now,
//   name: 'Akali',
//   gender: true,
//   birth: '2001-01-01',
//   createdAt: now,
//   updatedAt: now,
//   version: 0
// }).then((p)=>{
//   console.log(`created:${JSON.stringify(p)}`);
// }).catch(err => {
//   console.log(`failed:${err}`)
// })

// (async ()=> {
//   var dog = await Pet.create({
//     id: 'd-' + now,
//     name: 'Odie',
//     gender: false,
//     birth: '2008-08-08',
//     createdAt: now,
//     updatedAt: now,
//     version: 0
//   });
//   console.log(`created: ${JSON.stringify(dog)}`);
// })();

(async ()=>{
  var pets = await Pet.findAll({
    where: {
      name: 'Akali'
    }
  });

  console.log(`find ${pets.length} pets.`)
  for (let pet of pets){
    console.log(JSON.stringify(pet))
    // pet.gender = true;
    // pet.updatedAt = Date.now();
    // pet.version++;
    // await pet.save();
 
  }
})();