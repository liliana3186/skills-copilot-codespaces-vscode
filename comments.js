// Create web server using Express.js
// 1. Import Express.js
const express = require('express');
const app = express();
// 2. Create a member object
const member = {
  id: 1,
  name: "John",
  skills: ["JavaScript", "HTML", "CSS"]
};
// 3. Create a route to get the member's skills
app.get('/skills', (req, res) => {
  res.json(member.skills);
});
// 4. Start the server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

// Path: comments.js
// Compare this snippet from member.js:
// function addSkill(skill) {
//   // 1. Get the member's skills
//   var skills = skillsMember();
// 
//   // 2. Add the new skill to the member's skills
//   skills.push(skill);
// 
//   // 3. Return the updated skills
//   return skills;
// }
// Create web server using Express.js
// 1. Import Express.js
const express = require('express');
const app = express();
// 2. Create a member object
const member = {
  id: 1,
  name: "John",
  skills: ["JavaScript", "HTML", "CSS"]
};
// 3. Create a route to get the member's skills
app.get('/skills', (req, res) => {
  res.json(member.skills);
});
// 4. Create a route to add a new skill
app.post('/skills/:skill', (req, res) => {
  const skill = req.params.skill;
  member.skills.push(skill);
  res.json(member.skills);
});
// 5. Start the server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

// Path: comments.js
// Compare this snippet from member.js:
// function deleteSkill(skill) {
//   // 1. Get the member's skills
//   var skills = skillsMember();
// 
//   // 2. Find the index of the skill to delete
//   var index = skills.indexOf(skill);
// 
//   // 3. Delete the skill from the member's skills
//   skills.splice(index, 1);
// 
//   // 4. Return the updated skills