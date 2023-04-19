// unit tests are only for the smallest parts of code
// little functions
// integration tests are for the whole app / multiple functions that
// tie into each other
const app = require('./app.js');

test('server starts up correctly', () => {
    expect(app).toBeDefined();
});

afterAll(() => {
    // stop an http server without ctrl c
    app.close();
});

// test driven development TDD is where you write unit tests first
// and then you write the functions after
// you need a lot of documentation ahead of time
// works better in waterfall than agile?

// make your tests fail to begin with
// THEN fix them
// that way you dont get false positives
// give the tests bad params