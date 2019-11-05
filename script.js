var dailyHour = [9, 10, 11, 12, 1, 2, 3, 4, 5];

function displayInput() {
  for (var i = 0; i <= dailyHour.length; i++) {
    $(".container").append(`
        <div class="input-group mb-3">
        <div class="input-group-prepend">
        <span class="input-group-text blockHead">${dailyHour[i]}:00</span>
        </div>
        <input class="form-control textArea'" type="text" placeholder="Type here:">
        <div class="input-group-append">
        <button class="btn btn-outline-secondary saveButton" type="button"><i class="fas fa-save"></i></button>
            </div>
           </div>
       `);
  }
}

localStorage.setItem();

displayInput();
