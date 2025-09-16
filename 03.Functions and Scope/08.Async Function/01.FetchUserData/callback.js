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
  }, 5000);
};

getComplains();

createComplain = () => {
     console.log('create Complains is running');
  setTimeout(() => {
    Complains.push({ id: 6, name: "New User", complain: "New Complain" });
     console.log('create Complains is Executed');
  }, 2000);
};
createComplain();
getComplains()