
//used for adding cards to the HTML
const addCards = (items) => {
    console.log(items);
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align"> <div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+ item.image +'"></img></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">'+ item.title +'<i class="material-icons right">more_vert</i></span><p><a href="#">About this Language.</a></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span><p class="card-text">'+item.description+'</p></div></div></div>';
        $('#card-section').append(itemToAppend);
    });
}

//Run on clickin on submit
const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.image = $('#image').val();
    formData.description = $('#description').val();

    console.log('form data: ', formData);
    addData(formData);
   
}

//getting data from database.
const getCats = () => {
    $.get('/api/cats', (res) => {
        if (res.statusCode === 200) {
            addCards(res.data);
        }
    });
}

//adding data to the database.
const addData = (data) => {
    $.ajax({
        url: 'api/cats',
        data: data,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload();
        }
    });
}


$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('.modal').modal();

    getCats();

    $('#formSubmit').click(()=>{
        submitForm();
    })
});