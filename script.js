var data = JSON.parse(localStorage.getItem('timeTask'));
if (data == null){
  data = [];
}


function timeTask() {

  var time = $('#timeInput').val();
  var task = $('#task').val();
  return {
    time: time,
    task: task
  };
}


$('#sumbitBtn').on('click', function() {
  event.preventDefault();

  data.push(timeTask());

  let storeTask = JSON.stringify(data);

  console.log(data);

  localStorage.setItem("timeTask", storeTask);

  //console.log("localStorage as object " + JSON.parse(localStorage.getItem("timeTask",data)));
 showingTask(data[data.length - 1]);
  

});

let showingTaskVal =  JSON.parse(localStorage.getItem('timeTask'));
  
showingTaskVal.forEach(showingTask);

function showingTask(obj){

  $('.schedule').append(
    `
    <h4>${obj.time}:${obj.task} <br></h4>
    
    `

  
  )
};
  






// function displayInput() {
//   for (var i = 0; i <= dailyHour.length; i++) {)
//     $(".container").append(`
//         <div class="input-group mb-3">
//         <div class="input-group-prepend">
//         <span class="input-group-text blockHead">${dailyHour[i]}:00</span>
//         </div>
//         <input id='textInput${i}' class="form-control textArea" type="text" placeholder="Type here:">
//         <div class="input-group-append">
//         <button id='saveButton${i}' class="btn btn-outline-secondary saveButton" type="button"><i class="fas fa-save"></i></button>
//             </div>
//            </div>
//        `);
//   }
//   $(`#saveButton0`).on("click", function() {
//     console.log($(`#textInput0`)[0].value);x
//     localStorage.setItem("hourlyText0", $(`#textInput0`)[0].value);
//   });
//   $(`#saveButton1`).on("click", function() {
//     console.log($(`#textInput1`)[0].value);
//     localStorage.setItem("hourlyText1", $(`#textInput1`)[0].value);
//   });
//   $(`#saveButton2`).on("click", function() {
//     console.log($(`#textInput2`)[0].value);
//     localStorage.setItem("hourlyText2", $(`#textInput2`)[0].value);
//   });
//   $(`#saveButton3`).on("click", function() {
//     console.log($(`#textInput3`)[0].value);
//     localStorage.setItem("hourlyText3", $(`#textInput3`)[0].value);
//   });
//   $(`#saveButton4`).on("click", function() {
//     console.log($(`#textInput4`)[0].value);
//     localStorage.setItem("hourlyText4", $(`#textInput4`)[0].value);
//   });
//   $(`#saveButton5`).on("click", function() {
//     console.log($(`#textInput5`)[0].value);
//     localStorage.setItem("hourlyText5", $(`#textInput5`)[0].value);
//   });
//   $(`#saveButton6`).on("click", function() {
//     console.log($(`#textInput6`)[0].value);
//     localStorage.setItem("hourlyText6", $(`#textInput6`)[0].value);
//   });
//   $(`#saveButton7`).on("click", function() {
//     console.log($(`#textInput7`)[0].value);
//     localStorage.setItem("hourlyText7", $(`#textInput7`)[0].value);
//   });
//   $(`#saveButton8`).on("click", function() {
//     console.log($(`#textInput8`)[0].value);
//     localStorage.setItem("hourlyText8", $(`#textInput8`)[0].value);
//   });
// }

// displayInput();
// window.localStorage.getItem('');
