const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          title: "Task 101",
          description: "Complete the monthly report.",
          date: "2025-01-10",
          category: "Management",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Task 102",
          description: "Prepare slides for the team meeting.",
          date: "2025-01-15",
          category: "Presentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          title: "Task 103",
          description: "Resolve ticket #4567.",
          date: "2025-01-12",
          category: "Support",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
      ],
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Task 201",
          description: "Design wireframes for the new project.",
          date: "2025-01-18",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Task 202",
          description: "Submit the revised budget proposal.",
          date: "2025-01-14",
          category: "Finance",
          active: false,
          newTask: true,
          completed: true,
          failed: false,
        },
        {
          title: "Task 203",
          description: "Test the login module for bugs.",
          date: "2025-01-08",
          category: "Testing",
          active: true,
          newTask: false,
          completed: false,
          failed: true,
        },
      ],
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Task 301",
          description: "Research market trends for 2025.",
          date: "2025-01-07",
          category: "Research",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Task 302",
          description: "Coordinate with the marketing team.",
          date: "2025-01-11",
          category: "Communication",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
      ],
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          title: "Task 401",
          description: "Deploy the application to the production server.",
          date: "2025-01-09",
          category: "Deployment",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Task 402",
          description: "Fix the payment gateway integration issue.",
          date: "2025-01-10",
          category: "Development",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          title: "Task 403",
          description: "Set up the database backup process.",
          date: "2025-01-12",
          category: "Maintenance",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
      ],
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          title: "Task 501",
          description: "Organize team-building activities.",
          date: "2025-01-13",
          category: "HR",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          title: "Task 502",
          description: "Review candidate applications.",
          date: "2025-01-10",
          category: "Recruitment",
          active: false,
          newTask: true,
          completed: true,
          failed: false,
        },
        {
          title: "Task 503",
          description: "Finalize training material for the new hires.",
          date: "2025-01-15",
          category: "Training",
          active: true,
          newTask: false,
          completed: false,
          failed: true,
        },
      ],
    },
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123",
    },
  ];
export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
} 
export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
 
    return {employees,admin}
} 
