import { qase } from "testcafe-reporter-qase/qase";

fixture`Example: stepTest.js`
  .page`http://devexpress.github.io/testcafe/example/`;

test("A Test case with steps, updated from code", async (t) => {
  await qase.step("Initialize the environment", async (s1) => {
    await s1.step("Set up configuration", async () => {
      await t.expect(true).ok();
    });
    await s1.step("Load necessary data", async () => {
      await t.expect(true).ok();
    });
  });

  await qase.step("Test Core Functionality of the app", async (s2) => {
    await s2.step("Execute main feature", async () => {
      await t.expect(true).ok();
    });
    await s2.step("Validate outputs", async () => {
      await t.expect(true).ok();
    });
  });

  await qase.step("Verify Expected Behavior of the app", async () => {
    await t.expect(true).ok();
  });

  await qase.step(
    "Verify if user is able to log out successfully",
    async () => {
      await t.expect(true).ok();
    },
  );

  await t.expect(true).ok();
});
