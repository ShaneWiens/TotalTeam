const Intern = require("../lib/Intern")

test("test all intern properties", () => {
    const intern = new Intern("test@email.com", "Mary", "19", "School")
    expect(intern.email).toBe("test@email.com");
    expect(intern.name).toBe("Mary");
    expect(intern.id).toBe("19");
    expect(intern.school).toBe("School");
    
})

test("test all intern methods", () => {
    const intern = new Intern("email@domain.com", "John", "8", "University")
    expect(intern.getName()).toBe("John");
    expect(intern.getId()).toBe("8");
    expect(intern.getEmail()).toBe("email@domain.com");
    expect(intern.getSchool()).toBe("University");
    expect(intern.getRole()).toBe("Intern");
})