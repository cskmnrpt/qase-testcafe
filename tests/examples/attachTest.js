import { test } from "testcafe";
import { qase } from "testcafe-reporter-qase/qase";

fixture`Example: attachTest.js`
  .page`http://devexpress.github.io/testcafe/example/`;

test("Test result with attachment", async (t) => {
  // To attach a single file
  qase.attach({
    paths: ["./tests/examples/attachments/test-file.txt"],
  });

  /* 
   // Add multiple attachments. 
   qase.attach({ paths: ["/path/to/file", "/path/to/another/file"] });

   // Upload file's contents directly from code.
   qase.attach({ name: "inline-attachment.txt", content: "Hello, world!", contentType: "text/plain" });
  */

  await t.expect(true).ok();
});
