    Backend:-

1. user data - use get and post method

2. notes data -  
1.post method - Login to Get a Token- http://localhost:8080/users/login by passing email and pass in json body
{
"msg": "Login Successfull!",
"token": "<your_token>"
}

After successful login
2.POST /notes endpoint to add a note. Pass the token in the Authorization header.

POST http://localhost:8080/notes \
-H "Authorization: Bearer <your_token>" \
-H "Content-Type: application/json" \
-d '{
"title": "Sample Note",
"description": "This is a sample note description"
}'
Expected Response:

json
Copy
Edit
{
"msg": "Note created successfully!"
}
