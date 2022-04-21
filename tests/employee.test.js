const Employee = require("../assets/employee")

test("Check employee properties", ()=>{
    const employee = new Employee("email@domain.com", "Bob", "13")
    expect(employee.email).toBe("email@domain.com");
    expect(employee.name).toBe("bob");
    expect(employee.id).toBe("13");
})

test("Check employee methods", () =>{
    const employee = new Employee("test@email.com", "Susan", "8")
    expect(employee.getEmail()).toBe("test@email.com");
    expect(employee.getName()).toBe("Susan");
    expect(employee.getId()).toBe("8");
    expect(employee.getRole()).toBe("Employee");
})