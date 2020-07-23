module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      'connector': 'bookshelf',
      'settings': {
        'client': 'postgres',
        'host':'localhost',
        'port':'5432',
        'database' :'firststrapi',
        'username':'postgres',
         'password':'root',
         "ssl": false
        
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
