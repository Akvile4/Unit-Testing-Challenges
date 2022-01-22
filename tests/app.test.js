// .. means it takes you out of the folder
const app = require("../app")

test("should equal 5 when passed 2 and 3", () => {
    
    expect(app.add(2,3)).toBe(5);
});

test("Should contain Rhys", () => {

    expect(app.myArray).toContain("Rhys");
});

test("Check if the answer is 15", () => {

    expect(app.multiply(3,5)).toEqual(15);
});

test("Check if the answer is not null", () => {

    expect(app.multiply(3,7)).not.toBe(null);
});

test("Check if MindHunter returns true", () => {

    expect(app.mySeries.mindhunter).toBeTruthy();
});

test("Check if BigMouth returns false", () => {

    expect(app.mySeries.bigmouth).toBeFalsy();
});

test("Check if the elements of an object matches", () => {

    expect([{cuisine: "Japanese"}, {meal: "sushi"}]).toMatchObject([{cuisine: "Japanese"}, {meal: "sushi"}]);
});