import { describe, expect, test } from "bun:test";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { portfolio } from "../content/portfolio";
import { analyticsBuffer } from "../lib/analytics";

describe("portfolio app", () => {
  test("renders branded header mark (not short name alone)", () => {
    render(<App />);
    const home = screen.getByRole("link", { name: /parhim — home/i });
    expect(home).toBeTruthy();
    expect(home.textContent).toContain(portfolio.person.brandName);
    expect(home.textContent).not.toBe(portfolio.person.shortName);
  });

  test("renders core navigation landmarks and links", () => {
    render(<App />);

    expect(screen.getAllByRole("banner").length).toBe(1);
    expect(screen.getByRole("main")).toBeTruthy();
    expect(screen.getByRole("contentinfo")).toBeTruthy();

    for (const item of portfolio.nav) {
      expect(screen.getAllByRole("link", { name: item.label }).length).toBeGreaterThan(0);
    }
  });

  test("renders experience including Orca progression and OpenHaus timeline entry", () => {
    render(<App />);

    expect(document.getElementById("orca-heading")).toBeTruthy();
    const progression = screen.getByText((_, element) => {
      const text = element?.textContent ?? "";
      return (
        element?.tagName === "P" &&
        text.includes("Senior Software Engineer") &&
        text.includes("Engineering Manager") &&
        text.includes("→")
      );
    });
    expect(progression).toBeTruthy();
    const experience = document.getElementById("experience");
    expect(experience?.textContent).toContain("Aug 2024 — Jul 2026");
    expect(experience?.textContent).toContain("Jan 2022 — 2024");
    expect(experience?.textContent).toContain("Technical Founder · Part time");
    expect(document.getElementById("openhaus-heading")).toBeTruthy();
  });

  test("renders primary projects and external links", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Orca TX Sender", level: 3 })).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        name: "Improving liquidity deposit retention at Orca",
        level: 3,
      }),
    ).toBeTruthy();
    expect(screen.getByRole("heading", { name: "openhaus.ca", level: 3 })).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Automated Dev Environment VMs", level: 3 }),
    ).toBeTruthy();

    const txLink = screen.getByRole("link", { name: "GitHub repository" });
    expect(txLink.getAttribute("href")).toContain("orca-so/tx-sender");
  });

  test("resume links point to the PDF", () => {
    render(<App />);
    const resumes = screen.getAllByRole("link", { name: /resume/i });
    expect(resumes.length).toBeGreaterThan(0);
    for (const link of resumes) {
      expect(link.getAttribute("href")).toBe(portfolio.person.resumeHref);
    }
  });

  test("external profile links are present", () => {
    render(<App />);
    const github = screen.getAllByRole("link", { name: "GitHub" });
    const linkedin = screen.getAllByRole("link", { name: "LinkedIn" });
    expect(github[0]?.getAttribute("href")).toBe("https://github.com/parhim/");
    expect(linkedin[0]?.getAttribute("href")).toContain("linkedin.com");
  });

  test("theme toggle switches data-theme and exposes pressed state", async () => {
    const user = userEvent.setup();
    render(<App />);

    const toggle = screen.getByRole("button", { name: /switch to dark theme/i });
    expect(toggle.getAttribute("aria-pressed")).toBe("false");

    await user.click(toggle);
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    expect(
      screen.getByRole("button", { name: /switch to light theme/i }).getAttribute(
        "aria-pressed",
      ),
    ).toBe("true");
    expect(analyticsBuffer.some((e) => e.event === "theme_toggle")).toBe(true);
  });

  test("mobile navigation can open and close", async () => {
    const user = userEvent.setup();
    render(<App />);

    const openBtn = screen.getByRole("button", { name: /open menu/i });
    await user.click(openBtn);

    const panel = document.getElementById("mobile-nav");
    expect(panel).toBeTruthy();
    expect(panel?.getAttribute("aria-hidden")).toBe("false");
    expect(panel?.hasAttribute("inert")).toBe(false);

    const mobileNav = within(panel as HTMLElement);
    await user.click(mobileNav.getByRole("link", { name: "Experience" }));
    expect(document.getElementById("mobile-nav")?.getAttribute("aria-hidden")).toBe(
      "true",
    );
  });

  test("contact email uses the configured address", () => {
    render(<App />);
    const emailLinks = screen.getAllByRole("link", {
      name: new RegExp(portfolio.person.email, "i"),
    });
    expect(emailLinks[0]?.getAttribute("href")).toBe(`mailto:${portfolio.person.email}`);
  });

  test("skills section is present with AI case study", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "Technical capabilities" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: portfolio.aiEngineering.title })).toBeTruthy();
    expect(screen.getByText("Development problem")).toBeTruthy();
  });

  test("hero exposes leadership CTAs and resume download", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: "Review leadership experience" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "View selected case studies" })).toBeTruthy();
    expect(screen.getByRole("link", { name: /download résumé/i })).toBeTruthy();
  });

  test("contact section includes what I am looking for", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "What I am looking for" })).toBeTruthy();
    expect(screen.getByText(portfolio.lookingFor)).toBeTruthy();
  });

  test("education appears in contact footer", () => {
    render(<App />);
    expect(
      screen.getByText(/The University of British Columbia/i),
    ).toBeTruthy();
  });
});
