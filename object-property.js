
const student = [
    {id : 21, name:"omoffr sany" },
    {id : 31, name:"Tomgor sany" },
    {id : 41, name:"Mangna sany" },
    {id : 51, name:"Depgjal sany"}
]
  const name = student.map(tt =>tt.name);
  const id = student.map(cc => cc.id);
  const bigger = student.filter(pp =>pp.id>40);
  const oneBigger = student.find(pp =>pp.id>40);

  console.log(oneBigger);