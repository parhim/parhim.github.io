import { describe, expect, test } from "bun:test";
import { track, analyticsBuffer, resetAnalyticsBuffer } from "../lib/analytics";

describe("analytics abstraction", () => {
  test("buffers events while disabled by default", () => {
    resetAnalyticsBuffer();
    track("resume_download", { source: "test" });
    expect(analyticsBuffer).toHaveLength(1);
    expect(analyticsBuffer[0]?.event).toBe("resume_download");
  });
});
