const ticketInfo = "Your E-Ticket for train from ";

document.getElementById('ticketForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const date = document.getElementById('date').value;
  const classType = document.getElementById('class').value;

  if (!from || !to || !date || !classType) {
    alert("Please fill in all required fields!");
    return;
  }

  const ticket = `${ticketInfo}${from} to ${to} on ${date} in ${classType} class.`;

  const ticketContainer = document.getElementById('ticketContainer');
  ticketContainer.innerHTML = `<p>${ticket}</p>`;

});
