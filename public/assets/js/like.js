document.querySelector(".like-react").addEventListener("click", ()=>{
    $.ajax({
        url: "/like-post",
        type: "post",
        dataType: 'JSON',
        data: "1",
        success: function(response){
    
        },
        error: function(){
            alert("An error occured")
        }
    })
})