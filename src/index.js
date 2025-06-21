document.addEventListener("DOMContentLoaded", () => {

  const guestForm = document.getElementById("guestForm");
  const guestInput = document.getElementById("guestInput");
  const guestList = document.getElementById("guestList");

  let guestCount = 0;
  const maxGuests = 10;


  guestForm.addEventListener("submit", function (event) {
    event.preventDefault();


    const guestName = guestInput.value.trim();

    if (guestName === "") {
      alert("Please enter a guest name.");
      return;
    }

    if (guestCount >= maxGuests) {
      alert("You can only add up to 10 guests.");
      return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = guestName;

    const rsvpButton = document.createElement("button");
    rsvpButton.textContent = "Not Attending";
    rsvpButton.addEventListener("click", () => {
      if (rsvpButton.textContent === "Not Attending") {
        rsvpButton.textContent = "Attending";
      } else {
        rsvpButton.textContent = "Not Attending";
      }
    });

  
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      guestList.removeChild(listItem); 
      guestCount--; 
    });

    
    listItem.appendChild(document.createTextNode(" "));
    listItem.appendChild(rsvpButton);
    listItem.appendChild(removeButton);

    
    guestList.appendChild(listItem);

    guestCount++;

 
    guestInput.value = "";
  });
});
