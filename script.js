let inp = document.querySelector("#input");

var data = [
    {name:"Java DSA fundamental" , author: "Robert Lafore" , src :"img/javaDSA.jpg" , subject : "coding" , number:"CD001" , bkN:"11" },
    {name:"Cpp DSA fundamental" , author: "Yedidyah Langsam" , src :"img/CppDSA.jpg" , subject : "coding" , number:"CD002" , bkN:"9" },
    {name:"Rich Dad Poor Dad" , author: "Robert T.Kiyosaki" , src :"img/RdPd.jpg" , subject : "finance" , number:"FN001" , bkN:"3" },
    {name:"Basic Electrical Engineering" , author: "C L Wadhwa" , src :"img/elec.jpg" , subject : "electrical" , number:"EE001" , bkN:"12" },
    {name:"Objective Electrical Engineering" , author: "Aniruddha Malo" , src :"img/oelec.jpg" , subject : "electrical" , number:"EE002" , bkN:"17" },
    {name:"Software Engineering 10e" , author: "Lan Sommerville" , src :"img/soe1.jpg" , subject : "CSE" , number:"EE003" , bkN:"17" },
    {name:"Fundamental of Software Engineering" , author: "Rajib Mall" , src :"img/soe2.jpeg" , subject : "CSE" , number:"EE004" , bkN:"15" },
    {name:"Compiler Design SRS KM RY" , author: "Sudha Rani S" , src :"img/comd.jfif" , subject : "CSE" , number:"CD003" , bkN:"3" },
    {name:"A History of English Literature" , author: "Rickett" , src :"img/lit.jfif" , subject : "Literature" , number:"LT001" , bkN:"6" },
    {name:"Loving Literature (English) " , author: "Deidre Shauna Lynch" , src :"img/lit2.jfif" , subject : "Literature" , number:"LT002" , bkN:"2" },
    {name:"An Introduction to Python" , author: "Dr. Krishna Kr. mohbey" , src :"img/python.jfif" , subject : "Coding" , number:"CD003" , bkN:"8" },
    {name:"Harry Potter Chamber Of Secrets" , author: "J.K. Rowling" , src :"img/hp.jfif" , subject : "Literature" , number:"LT003" , bkN:"2" },
    {name:"Harry Potter and the Order of the Phoenix" , author: "J.K. Rowling" , src :"img/hp.png" , subject : "Literature" , number:"LT004" , bkN:"3" },
    {name:"Harry Potter Philosopher's Stone" , author: "J.K. Rowling" , src :"img/hp1.jfif" , subject : "Literature" , number:"LT005" , bkN:"2" },
    {name:"Gora by Rabindranath Tegor 1910" , author: "Rabindranath Tagore" , src :"img/gora.jfif" , subject : "Literature" , number:"LT006" , bkN:"3" },
    {name:"Ram's Wise Mind by " , author: "Sarat Chandra Chattopadhyay" , src :"img/ram.jfif" , subject : "Literature" , number:"LT007" , bkN:"1" },
];

function displayBooks(bookData) {
    let books = "";
    bookData.forEach(function(e, index) {
        books += `<div class="class w-52 p-4 rounded-md bg-zinc-800">
                    <div class="w-44 h-60 bg-zinc-500 rounded-2xl mb-3 overflow-hidden">
                        <img src="${e.src}" class="w-full h-full fit-cover" alt="">
                    </div>
                    <h3 class="font-bold text-2xl">${e.name}</h3>
                    <h5 class="font-semibold text-base opacity-90">${e.author}</h5>
                    <h5 class="font-semibold text-sm opacity-60">${e.subject}</h5>
                    <h6 class="font-semibold text-sm opacity-40">Tag no: <span>${e.number}</span></h6>
                    <p class="font-semibold text-sm opacity-60 mt-5">Available Book: <span id="bkN-${index}">${e.bkN}</span></p>
                    <button class="getBook bg-green-600 px-8 py-2 rounded-md font-semibold text-sm mb-4 mt-4" data-index="${index}">Get This Book</button>
                </div>`;
    });

    document.querySelector("#parent").innerHTML = books;

    // // Add event listeners to "Get This Book" buttons
    // document.querySelectorAll(".getBook").forEach(button => {
    //     button.addEventListener("click", function() {
    //         let bookIndex = this.getAttribute("data-index");
    //         if (data[bookIndex].bkN > 0) {
    //             data[bookIndex].bkN--;
    //             document.getElementById(`bkN-${bookIndex}`).textContent = data[bookIndex].bkN;

    //             this.disabled = true;
    //         this.textContent = "Book Taken"; 
    //         this.classList.add('bg-gray-600'); 
    //         }
    //     });
    // });
}

// Display all books initially
displayBooks(data);

// Search functionality
inp.addEventListener("input", function() {
    let searchValue = data.filter(function(e) {
        return (
            e.name.toUpperCase().startsWith(inp.value.toUpperCase()) ||
            e.subject.toUpperCase().includes(inp.value.toUpperCase()) ||
            e.author.toUpperCase().includes(inp.value.toUpperCase()) ||
            e.number.toUpperCase().includes(inp.value.toUpperCase())
        );
    });

    displayBooks(searchValue);
});

//floating button

let takenBooks = [];

document.querySelectorAll(".getBook").forEach((button, index) => {
    button.addEventListener("click", function() {
        let bookIndex = this.getAttribute("data-index");
        
        if (data[bookIndex].bkN > 0) {
            data[bookIndex].bkN--;
            document.getElementById(`bkN-${bookIndex}`).textContent = data[bookIndex].bkN;

            // Disable the button after clicking
            this.disabled = true;
            this.textContent = "Book Taken"; 
            this.classList.add('bg-gray-600');

            // Add book to taken list
            takenBooks.push(data[bookIndex].name);

            // Update the floating box
            updateFloatingBox();
        }        else {
            // Show the "Book unavailable" message
            showUnavailableMessage();
        }
    });
});



function updateFloatingBox() {
    const floatingBox = document.getElementById("floatingBox");
    const bookList = document.getElementById("bookList");

    // Clear the previous list
    bookList.innerHTML = "";

    // Update the list with books taken
    takenBooks.forEach(book => {
        let li = document.createElement("li");
        li.textContent = book;
        bookList.appendChild(li);
    });

    // Display the floating box and set the book count
    floatingBox.style.display = "block";
}


document.getElementById("showProfile").addEventListener("click", function() {
    const profilePopup = document.getElementById("profilePopup");
    const profileContent = document.getElementById("profileContent");

    // Generate the HTML for the taken books
    let profileHTML = "";
    takenBooks.forEach((book, index) => {
        profileHTML += `<div class="class w-52 p-4 rounded-md bg-zinc-800 mb-4">
                            <div class="w-44 h-60 bg-zinc-500 rounded-2xl mb-3 overflow-hidden">
                                <img src="${data.find(d => d.name === book).src}" class="w-full h-full fit-cover" alt="">
                            </div>
                            <h3 class="font-bold text-2xl">${book}</h3>
                        </div>`;
    });

    // Update profile content
    profileContent.innerHTML = profileHTML;

    // Show the popup
    profilePopup.style.display = "block";
});

document.getElementById("closeProfile").addEventListener("click", function() {
    const profilePopup = document.getElementById("profilePopup");
    
    // Hide the popup
    profilePopup.style.display = "none";
});


