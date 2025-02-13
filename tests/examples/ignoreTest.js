import { qase } from "testcafe-reporter-qase/qase";

fixture`Example: ignoreTest.js`
  .page`http://devexpress.github.io/testcafe/example/`;

const q = qase.ignore().create();
test.meta(q)(
  "This test is executed using TestCafe; however, it is NOT reported to Qase",
  async (t) => {
    await t.expect(true).ok();
  },
);
