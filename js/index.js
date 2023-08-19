// alert("testtt");

input=document.querySelector('#input1');
btn=document.querySelector('#btn');

function onClick()
{
    if(input!=null)
    {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
        
    }
    
    else
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
            
          })
          
    }

   
   

}

function changeColor()
{
    btn.style.backgroundColor = 'tomato';
    console.log('fkf');
    
}



// btn.addEventListener('mouseover',changeColor);