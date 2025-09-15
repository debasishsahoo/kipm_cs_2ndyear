let name = "deb";
name="abc"
//let name = "debasish";
// Block scope
function blockScopeExample() {
  if (true) {
    let blockScoped = "I'm only accessible in this block";
    console.log("Inside block:", blockScoped);
  }
  //console.log("Outside block:", blockScoped); // ReferenceError
}
blockScopeExample();

// No hoisting
try {
  console.log(notYetDeclared);
  let notYetDeclared = "Now I exist";
  console.log("Declared:", notYetDeclared);
} catch (e) {
  console.error(e);
}
