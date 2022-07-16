// let url="https://www.anapioficeandfire.com/api/books"

var bookData=document.getElementById('bookData')
// console.log("test")
async function getBookData(){
var bookName=document.getElementById('bookName').value
console.log(bookName)
let data = await fetch(`https://www.anapioficeandfire.com/api/books`)
let res = await data.json()
console.log(res)



bookData.innerHTML=

`

<div class="row g-0">
    <div class="col-md-4 p-0">
        <img src="https://mmv2api.s3-us-east-2.amazonaws.com/products/images/2-image-lghtgothssymset-2-productimagenowatermark.jpg"
            class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body bg-color:dark">
            <h5 class="card-title">Book Name: Game of Thrones </h5>
            <p class="card-text m-0"><small class="text-muted">Isbn:978-0553103540 </small></p>
            <p class="card-text m-0"><small class="text-muted">Number of Pages: 694</small></p>
            <p class="card-text m-0"><small class="text-muted">Publishers Name: Bantam Books</small></p>
            <p class="card-text m-0"><small class="text-muted"></small>Released Date: 1996/08/01</p>
            <p class="card-text m-0"><small class="text-muted">Author's Name: George R. R. Martin </small></p>
            <p class="card-text m-0"><small class="text-muted">Character's Name</small></p>
         </div>
    </div>
</div>



`
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     searchTerm=favouriteBookName.value
//     console.log(searchTerm)
//     console.log(Url+searchTerm)
//     if(searchTerm &&  searchTerm.value!==""){
//         getMovieData(Url+searchTerm)
//     }
//     else{
//         window.location.reload()
//     })

}
// getdataContainer.innerHtml=   
//https://www.anapioficeandfire.com/api/characters/2
