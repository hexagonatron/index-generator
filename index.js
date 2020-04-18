const inquirer = require("inquirer");
const fs = require("fs");


inquirer
  .prompt([{
    name: "name",
    message: "What is your name?",
  },
  {
      message: "Where you live",
      name: "location"
  },
  {
      name:"bio",
      message: "Tell me about yourself."
  },
  {
      name: "linkedinURL",
      message: "Enter your LinkedIn URL."
  },
  {
    name:"github_url" ,
    message: "What is your GitHub username",
  }
]).then(answers => {
    console.log(answers);

    const html =
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bio Page</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </head>
    <body>
        <h1 class="text-center">Profile page</h1>
    
        <div>My name is ${answers.name}</div>
        <div>My location: ${answers.location}</div>
        <div>My Bio info:${answers.bio}</div>
        <div>linkedinURL: ${answers.linkedinURL}</div>
        <div>github_url:${answers.github_url}</div>
    
    </body>
    </html>`
    
    fs.writeFileSync("index.html", html, "utf8");

});