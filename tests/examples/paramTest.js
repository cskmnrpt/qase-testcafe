import { qase } from "testcafe-reporter-qase/qase";

const testCases = [
  { browser: "Chromium", username: "@alice", password: "123" },
  { browser: "Firefox", username: "@bob", password: "456" },
  { browser: "Webkit", username: "@charlie", password: "789" },
];

fixture`Example paramTest.js Single Parameter`
  .page`http://devexpress.github.io/testcafe/example/`;

testCases.forEach(({ browser }) => {
  const q = qase
    .title("Verify if login page loads successfully")
    .parameters({ Browser: browser })
    .create();

  /*
   * Instead of creating three separate test cases in Qase, this method will add a 'browser' parameter, with three values.
   */

  test.meta(q)(`Test login with ${browser}`, async (t) => {
    await t.expect(true).ok();
  });
});

fixture`Example paramTest.js Group Parameter`
  .page`http://devexpress.github.io/testcafe/example/`;

testCases.forEach(({ username, password }) => {
  const q = qase
    .title("Verify if user is able to login with their username.")
    .groupParameters({ Username: username, Password: password })
    .create();

  /*
   * Here, we're grouping the username and password parameters to track them together, as a set of parameters for the test.
   * This will show the username and password combinations for the test.
   */

  test.meta(q)(
    `Test login with ${username} using qase.groupParameters`,
    async (t) => {
      await t.expect(true).ok();
    },
  );
});
