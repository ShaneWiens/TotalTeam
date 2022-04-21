const Engineer = require("../lib/Engineer")

test("test all engineer properties", () => {
    const engineer = new Engineer("test@email.com", "George", "13", "gitUser")
    expect(engineer.email).toBe("test@email.com");
    expect(engineer.name).toBe("George");
    expect(engineer.id).toBe("13");
    expect(engineer.gitHub).toBe("gitUser");
    
})

test("test all employee methods", () => {
    const engineer = new Engineer("email@domain.com", "Jenny", "7", "userGit")
    expect(engineer.getName()).toBe("Jenny");
    expect(engineer.getId()).toBe("7");
    expect(engineer.getEmail()).toBe("email@domain.com");
    expect(engineer.getGitHub()).toBe("userGit");
    expect(engineer.getRole()).toBe("Engineer");
})