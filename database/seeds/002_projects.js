
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {user_id: 9, title: 'primeiro'},
        {user_id: 9, title: 'segundo'},
      ]);
    });
};
