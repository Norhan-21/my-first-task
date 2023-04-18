import express from 'express';

const app = express();


const students=[
  {
    id: 1,
    name: 'norhan',
    city: 'tanta'

},




  {
      id: 2,
      name: 'mohamed',
      city: 'shibeen'

  }, {
      id: 3,
      name: 'ali',
      city: 'shibeen'

  }, {
      id: 4,
      name: 'ahmed',
      city: 'tanta'

  },
]

const studentsFunction = (request, response) => {
  let output = '<ul>';
   for( let i=0;i<students.length;i++){
    const student =students[i];

    output += '<li>'+student.name+'</li>';

   }

  output += '</ul>';

  response.send(output);

};

app.get('/students',studentsFunction)

app.listen(5000);