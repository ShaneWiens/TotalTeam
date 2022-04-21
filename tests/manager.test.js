const Manager = require("../lib/Manager")

test("test all Manager properties", () => {
    const manager = new Manager("test@email.com", "Tammy", "3", "123-456-7890")
    expect(manager.email).toBe("test@email.com");
    expect(manager.name).toBe("Tammy");
    expect(manager.id).toBe("3");
    expect(manager.officeNumber).toBe("123-456-7890");
    
})

test("test all manager methods", () => {
    const manager = new Manager("email@domain.com", "Clay", "77", "987-654-4321")
    expect(manager.getEmail()).toBe("email@domain.com");
    expect(manager.getName()).toBe("Clay");
    expect(manager.getId()).toBe("77");
    expect(manager.getofficeNumber()).toBe("987-654-4321");
    expect(manager.getRole()).toBe("Manager");
})