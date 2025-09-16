const Complains = [
  { id: 1, name: "Azim", complain: "I am not happy with SD" },
  { id: 2, name: "Resam", complain: "I am not happy java" },
  { id: 3, name: "Rumana", complain: "I am not happy C++" },
  { id: 4, name: "Anjani", complain: "I am not happy with js" },
  { id: 5, name: "Dinda", complain: "I am not happy with GATE" },
];

getComplains = () => {
    console.log('getComplains is running');
  setTimeout(() => {
    let output = "";
    Complains.forEach((complain) => {
      output += `<li>${complain.id}. ${complain.name}: ${complain.complain}</li>`;
      console.log('getComplains is Executed');
    });
    document.getElementById("complainList").innerHTML = output;
  }, 1000);
};

getComplains();

createComplain = (complain) => {
     console.log('create Complains is running');
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         if (complain.name.length > 0 && complain.complain.length > 0) {
                Complains.push(complain);
                resolve();
            } else {
                reject('Name and complain is required');
            }
       }, 2000);
     });
};
createComplain({ id: 6, name: 'Raju', complain: 'I am not happy with PYTHON' })
.then(getComplains)
.catch((err)=>{console.log(err)});
