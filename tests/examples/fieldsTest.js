import { qase } from "testcafe-reporter-qase/qase";

fixture`Example: fields.spec.js Test cases with field: Priority`
  .page`http://devexpress.github.io/testcafe/example/`;

test.meta(qase.fields({ priority: "low" }).create())(
  "Priority = low",
  async (t) => {
    await t.expect(true).ok();
  },
);

test.meta(qase.fields({ priority: "medium" }).create())(
  "Priority = medium",
  async (t) => {
    await t.expect(true).ok();
  },
);

test.meta(qase.fields({ priority: "high" }).create())(
  "Priority = high",
  async (t) => {
    await t.expect(true).ok();
  },
);

fixture`Example: fields.spec.js Test cases with field: Severity`
  .page`http://devexpress.github.io/testcafe/example/`;

test.meta(qase.fields({ severity: "trivial" }).create())(
  "Severity = trivial",
  async (t) => {
    await t.expect(true).ok();
  },
);

test.meta(qase.fields({ severity: "minor" }).create())(
  "Severity = minor",
  async (t) => {
    await t.expect(true).ok();
  },
);

test.meta(qase.fields({ severity: "normal" }).create())(
  "Severity = normal",
  async (t) => {
    await t.expect(true).ok();
  },
);

test.meta(qase.fields({ severity: "major" }).create())(
  "Severity = major",
  async (t) => {
    await t.expect(true).ok();
  },
);

test.meta(qase.fields({ severity: "critical" }).create())(
  "Severity = critical",
  async (t) => {
    await t.expect(true).ok();
  },
);

test.meta(qase.fields({ severity: "blocker" }).create())(
  "Severity = blocker",
  async (t) => {
    await t.expect(true).ok();
  },
);

fixture`Example: fields.spec.js Test cases with field: Layer`
  .page`http://devexpress.github.io/testcafe/example/`;

test.meta(qase.fields({ layer: "e2e" }).create())("Layer = e2e", async (t) => {
  await t.expect(true).ok();
});

test.meta(qase.fields({ layer: "api" }).create())("Layer = api", async (t) => {
  await t.expect(true).ok();
});

test.meta(qase.fields({ layer: "unit" }).create())(
  "Layer = unit",
  async (t) => {
    await t.expect(true).ok();
  },
);

fixture`Example: fields.spec.js Test cases with Description, Pre & Post Conditions`
  .page`http://devexpress.github.io/testcafe/example/`;

import { markdownContent } from "./markdownContent";

test.meta(qase.fields({ description: markdownContent }).create())(
  "Description with Markdown Support",
  async (t) => {
    await t.expect(true).ok();
  },
);

test.meta(qase.fields({ preconditions: markdownContent }).create())(
  "Preconditions with Markdown Support",
  async (t) => {
    await t.expect(true).ok();
  },
);

test.meta(qase.fields({ postconditions: markdownContent }).create())(
  "Postconditions with Markdown Support",
  async (t) => {
    await t.expect(true).ok();
  },
);
