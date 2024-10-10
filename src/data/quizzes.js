export const quizzes = [
    {
      id: 1,
      title: "JavaScript Basics",
      description: "Test your knowledge of JavaScript basics.",
      questions: [
        {
          question: "What is the output of 2 + 2?",
          options: ["3", "4", "5"],
          correctAnswer: "4",
        },
        {
          question: "Which company developed JavaScript?",
          options: ["Google", "Netscape", "Microsoft"],
          correctAnswer: "Netscape",
        },
        {
          question: "What is the correct syntax for referring to an external script called 'script.js'?",
          options: [
            "<script src='script.js'>",
            "<script href='script.js'>",
            "<script name='script.js'>",
            "<script file='script.js'>"
          ],
          correctAnswer: "<script src='script.js'>"
        },
        {
          question: "Which operator is used to assign a value to a variable?",
          options: ["-", "=", "==", ":="],
          correctAnswer: "="
        },
        {
          question: "What will the following code return: Boolean(10 > 9)?",
          options: ["NaN", "true", "undefined", "false"],
          correctAnswer: "true"
        }
      ],
    },
    {
      id: 2,
      title: "React Essentials",
      description: "A quiz about the fundamentals of React.",
      questions: [
        {
          question: "What is React mainly used for?",
          options: ["Data management", "User Interface", "Database management"],
          correctAnswer: "User Interface",
        },
        {
          question: "What is a component in React?",
          options: [
            "A function that returns a piece of UI",
            "A JavaScript library",
            "A styling approach",
            "A type of state"
          ],
          correctAnswer: "A function that returns a piece of UI"
        },
        {
          question: "Which method is called to update the component's state in React?",
          options: ["this.updateState", "this.setState", "this.refresh", "this.forceUpdate"],
          correctAnswer: "this.setState"
        },
        {
          question: "How do you pass data from a parent component to a child component in React?",
          options: ["Using props", "Using state", "Using context", "Using API"],
          correctAnswer: "Using props"
        },
        {
          question: "What does JSX stand for?",
          options: [
            "JavaScript XML",
            "Java Syntax Extension",
            "JavaScript Extended",
            "Java XML Syntax"
          ],
          correctAnswer: "JavaScript XML"
        }
      ],
    },
    {
      id: 3,
      title: "HTML & CSS Quiz",
      description: "Test your knowledge on the fundamentals of HTML and CSS.",
      questions: [
        {
          question: "What does HTML stand for?",
          options: [
            "HyperText Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "HyperText Markdown Language"
          ],
          correctAnswer: "HyperText Markup Language"
        },
        {
          question: "Which HTML tag is used to define an internal style sheet?",
          options: [
            "<script>",
            "<style>",
            "<css>",
            "<link>"
          ],
          correctAnswer: "<style>"
        },
        {
          question: "Which property is used to change the background color in CSS?",
          options: [
            "background-color",
            "color",
            "bg-color",
            "background"
          ],
          correctAnswer: "background-color"
        },
        {
          question: "What is the correct HTML element for inserting a line break?",
          options: [
            "<break>",
            "<br>",
            "<lb>",
            "<hr>"
          ],
          correctAnswer: "<br>"
        },
        {
          question: "How do you make a list that lists the items with bullets?",
          options: [
            "<ol>",
            "<list>",
            "<ul>",
            "<dl>"
          ],
          correctAnswer: "<ul>"
        },
        {
          question: "Which CSS property controls the text size?",
          options: [
            "font-size",
            "text-style",
            "text-size",
            "font-style"
          ],
          correctAnswer: "font-size"
        },
        {
          question: "Which HTML attribute is used to define inline styles?",
          options: [
            "class",
            "style",
            "font",
            "styles"
          ],
          correctAnswer: "style"
        },
        {
          question: "How do you add a background color for all <h1> elements in CSS?",
          options: [
            "h1 {background-color: #FFFFFF;}",
            "h1.all {background-color: #FFFFFF;}",
            "all.h1 {background-color: #FFFFFF;}",
            "h1.background {color: #FFFFFF;}"
          ],
          correctAnswer: "h1 {background-color: #FFFFFF;}"
        }
      ],
    },
    // New quizzes added below
    {
      id: 4,
      title: "CSS Flexbox",
      description: "Test your understanding of CSS Flexbox.",
      questions: [
        {
          question: "What does the 'flex-direction' property do?",
          options: [
            "Aligns flex items",
            "Sets the direction of the flex items",
            "Sets the order of the flex items",
            "Sets the flex item width"
          ],
          correctAnswer: "Sets the direction of the flex items"
        },
        {
          question: "Which property is used to define the space between flex items?",
          options: ["flex-gap", "gap", "space-between", "padding"],
          correctAnswer: "gap"
        },
        {
          question: "How do you center flex items vertically?",
          options: [
            "align-items: center;",
            "justify-content: center;",
            "align-content: center;",
            "margin: auto;"
          ],
          correctAnswer: "align-items: center;"
        },
        {
          question: "What does the 'flex-wrap' property do?",
          options: [
            "Wraps the flex container",
            "Wraps the flex items",
            "Allows flex items to overflow",
            "Hides overflow items"
          ],
          correctAnswer: "Wraps the flex items"
        },
        {
          question: "What is the default value of 'flex-direction'?",
          options: ["row", "column", "row-reverse", "column-reverse"],
          correctAnswer: "row"
        },
      ],
    },
    {
      id: 5,
      title: "Git Basics",
      description: "Test your knowledge of Git version control.",
      questions: [
        {
          question: "What does 'git init' do?",
          options: [
            "Creates a new repository",
            "Commits changes",
            "Clones an existing repository",
            "Removes a repository"
          ],
          correctAnswer: "Creates a new repository"
        },
        {
          question: "Which command is used to stage changes for a commit?",
          options: ["git add", "git commit", "git push", "git stage"],
          correctAnswer: "git add"
        },
        {
          question: "How do you view the commit history in Git?",
          options: ["git history", "git log", "git status", "git commits"],
          correctAnswer: "git log"
        },
        {
          question: "What does 'git clone' do?",
          options: [
            "Creates a new repository",
            "Creates a local copy of a remote repository",
            "Pushes changes to a remote repository",
            "Fetches changes from a remote repository"
          ],
          correctAnswer: "Creates a local copy of a remote repository"
        },
        {
          question: "Which command is used to push changes to a remote repository?",
          options: ["git push", "git add", "git commit", "git send"],
          correctAnswer: "git push"
        },
      ],
    },
    {
      id: 6,
      title: "Node.js Fundamentals",
      description: "Test your knowledge of Node.js.",
      questions: [
        {
          question: "What is Node.js primarily used for?",
          options: [
            "Frontend development",
            "Backend development",
            "Database management",
            "Web design"
          ],
          correctAnswer: "Backend development"
        },
        {
          question: "Which of the following is a Node.js framework?",
          options: ["Express", "Django", "Rails", "Flask"],
          correctAnswer: "Express"
        },
        {
          question: "What is npm in Node.js?",
          options: [
            "Node Package Manager",
            "New Project Manager",
            "Node Process Manager",
            "Node Package Maker"
          ],
          correctAnswer: "Node Package Manager"
        },
        {
          question: "How do you create a server in Node.js?",
          options: [
            "http.createServer()",
            "server.create()",
            "createServer()",
            "http.startServer()"
          ],
          correctAnswer: "http.createServer()"
        },
        {
          question: "What does 'require' do in Node.js?",
          options: [
            "Imports modules",
            "Exports modules",
            "Creates modules",
            "Deletes modules"
          ],
          correctAnswer: "Imports modules"
        },
      ],
    },
  ];
  