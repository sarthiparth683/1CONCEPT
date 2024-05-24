function getUserData(id, callback) {
    setTimeout(() => {
        const user = {
            id,
            name: `  User ${id}  `,
            email: `   user${id}@example.com  `,
        };

        callback(user);
    }, 2000);
}

function displayUser(user) {
    console.log(`  User ID: ${user.id}  `);
    console.log(`  User Name: ${user.name}  `);
    console.log(`  User Email: ${user.email}  `);
    console.log("------------------------");
}
getUserData(1, displayUser);
getUserData(2, displayUser);
getUserData(3, displayUser);