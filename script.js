const passcode = 1234;
let tries = 0;

function buttonClick(number) {
  let userEntry = display.textContent;
  let entryLength = userEntry.length;
  if (entryLength < 4) {
    document.getElementById("display").innerHTML += number;
  }
}

function buttonClear() {
  document.getElementById("display").innerHTML = "";
  console.log("Clear button");
  document.getElementById("display").style.backgroundColor = "black";
  document.getElementById("error").innerHTML = "";
}

function buttonEnter() {
  let userStr = display.textContent;
  let userEntry = Number(display.textContent);
  let entryLength = userStr.length;
  console.log(userEntry);
  if (tries < 3) {
    if (entryLength == 4) {
      if (userEntry === passcode) {
        console.log("Unlocked");
        document.getElementById("display").innerHTML = "Unlocked!";
        document.getElementById("display").style.backgroundColor = "green";
      } else {
        console.log("Wrong passcode.");
        tries += 1;
        console.log(tries);
        document.getElementById("display").innerHTML = "Wrong passcode!";
        document.getElementById("display").style.backgroundColor = "red";
      }
    } else {
      console.log("Too short baby");
      document.getElementById("error").innerHTML =
        "Passcode must be four digits.";
    }
  } else {
    document.getElementById("display").innerHTML = "Locked out!";
    document.getElementById("error").innerHTML = "You have made too many wrong attempts";



  }
}

function buttonTest() {
  document.getElementById("display").style.backgroundColor = "green";
}
