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

// test("Check if the elements of an object matches", () => {

//     expect(app.food("japanese","sushi")).toHaveProperty("cuisine", "japanese");
//     expect(app.food("japanese","sushi")).toHaveProperty("meal", "sushi");
// });

test("Check if the values of an object matches", () => {
    if (this.elite && this.mindhunter === true) ;
        expect(app.mySeries).toBeTruthy()
});

test("Check if the elements in the array have 6 or more characters", () => {
    for (i=0; i<app.arrayOfSix.length; i++) {
        expect(app.arrayOfSix[i].length >= 6).toBeTruthy();
    }
});

test("Check if a number is a string", () => {
    expect(app.word).toBe("26");
});

test("Check if the third planet is Earth", () => {
    expect(app.planet(3)).toContain("Earth");
});

test("Check if there 5 students are present in the class", () => {
    expect(app.students([true, true, false, false, true, true, true])).toEqual(5);
});

test("Check if 15 (1^2 and 5^2) is 125", () => {
    expect(app.squareDigi(15)).toEqual(125);
});

test("Check if 1705 year is in 18th century", () => {
    expect(app.century(1705)).toEqual(18);
});

test("Check if binary[1, 1, 0, 0] is equal to 12", () => {
    expect(app.binary([1, 1, 0, 0])).toEqual(12);
});
