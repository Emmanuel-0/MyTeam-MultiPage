function showModal() {
    document.getElementById("overlay").style.display = "block";
}
function closeModal() {
    document.getElementById("overlay").style.display = "none";
}
var directors= [];
var dirform = document.getElementById('director-form');

dirform.addEventListener('submit', (event) => {
    event.preventDefault() // tprevents the form from autosubmittimg

    var dirphoto = document.getElementById('photo').value.split('\\')[2];
    var dirpos = document.getElementById('postion').value;
    var dirname = document.getElementById('name').value;

    // console.log(dirpos + " " + dirname);

    var newdirector = {
        name: dirname,
        position: dirpos,
        photo: dirphoto
    };
    directors.push(newdirector);
    console.log(newdirector);
    console.log(directors);
    document.getElementById("overlay").style.display = "none";

    document.getElementById('photo').value = '';
    document.getElementById('postion').value = '';
    document.getElementById('name').value = '';

    var dirGrid = document.getElementById('directors__grid');
    let tblRow
    for (i = 0; i < directors.length; i++){
        tblRow = `
            
            
            

            <div class="director__info">
                <img src="./assets/${directors[i].photo}" alt="" class="avatar director__avatar">
                <p class="director__name">
                ${directors[i].name}
                </p>
                <h3 class="director__role">
                ${directors[i].position}
                </h3>
                <svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.6418 0C14.6078 0 13.6199 0.408625 12.8879 1.14062L12.0285 2H2.02848C1.76346 1.99625 1.50034 2.04521 1.2544 2.14404C1.00846 2.24287 0.78462 2.38959 0.595881 2.57568C0.407141 2.76177 0.257269 2.98351 0.154974 3.22803C0.0526781 3.47254 0 3.73495 0 4C0 4.26505 0.0526781 4.52746 0.154974 4.77197C0.257269 5.01649 0.407141 5.23823 0.595881 5.42432C0.78462 5.61041 1.00846 5.75713 1.2544 5.85596C1.50034 5.95479 1.76346 6.00375 2.02848 6H34.0285C34.2935 6.00375 34.5566 5.95479 34.8026 5.85596C35.0485 5.75713 35.2724 5.61041 35.4611 5.42432C35.6498 5.23823 35.7997 5.01649 35.902 4.77197C36.0043 4.52746 36.057 4.26505 36.057 4C36.057 3.73495 36.0043 3.47254 35.902 3.22803C35.7997 2.98351 35.6498 2.76177 35.4611 2.57568C35.2724 2.38959 35.0485 2.24287 34.8026 2.14404C34.5566 2.04521 34.2935 1.99625 34.0285 2H24.0285L23.1691 1.14062C22.4391 0.408625 21.4492 0 20.4152 0H15.6418ZM2.75895 10L5.81364 36.5273C6.07764 38.5073 7.78248 40 9.77848 40H26.2746C28.2706 40 29.9773 38.5097 30.2433 36.5117L33.298 10H2.75895Z" fill="#C4FFFE"/>
                </svg>
                <p class="delete__director">
                Delete
                </p>  
            </div>
            <hr class="director__bottom__line">

                

    `;
    } 
    
    dirGrid.innerHTML += tblRow;

});

// body.onload = function(){
//     var dirTable = document.getElementById('tbl-directors');
//     let tblRow
//     for (i = 0; i < directors.length; i++){
//         tblRow = `
//             <tr>
//                 <td><img src= 'assets/${directors[i].photo}' /></td>
//                 <td>${directors[i].name}</td>
//                 <td>${directors[i].position}</td>
//             </tr>
                

//     `;
//     } 
    
//     dirTable.innerHTML += tblRow;
// }