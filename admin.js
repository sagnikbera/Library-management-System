document.addEventListener("DOMContentLoaded", () => {
    const userTableBody = document.getElementById("userTableBody");

    // Example data for users
    const users = [
        {
            profilePic: "img/profile-pic.jpg",
            name: "Sagnik Bera",
            borrowedBooks: 2,
            department: "Information technology",
            fineDue: "0",
            returnDate: "20-09-2024",
        },
        {
            profilePic: "img/malo.jfif",
            name: "Aniruddha Malo",
            borrowedBooks: 199,
            department: "Civil Engineering",
            fineDue: "2999",
            returnDate: "15-09-2024",
        },
        {
            profilePic: "img/arka.png",
            name: "Arka Mandal",
            borrowedBooks: 9,
            department: "Printing Engineering",
            fineDue: "13",
            returnDate: "17-09-2024",
        },

        {
            profilePic: "img/sandi.png",
            name: "Sayndip Paul",
            borrowedBooks: 3,
            department: "Fire Engineering",
            fineDue: "18",
            returnDate: "27-09-2024",
        },
        
    ];

    function populateUserTable() {
        let rows = "";

        users.forEach((user) => {
            rows += `
                <tr class="border-b border-gray-600">
                    <td class="px-4 py-2">
                        <img src="${user.profilePic}" alt="Profile Picture" class="w-12 h-12 rounded-full">
                    </td>
                    <td class="px-4 py-2">${user.name}</td>
                    <td class="px-4 py-2">${user.borrowedBooks}</td>
                    <td class="px-4 py-2">${user.department}</td>
                    <td class="px-4 py-2">${user.fineDue}</td>
                    <td class="px-4 py-2">${user.returnDate}</td>
                    <td class="px-4 py-2">
                        <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Edit</button>
                    </td>
                </tr>
            `;
        });

        userTableBody.innerHTML = rows;
    }

    populateUserTable();
});
