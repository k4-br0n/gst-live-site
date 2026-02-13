# Website Implementation Plan: The Acquisition Engine

This plan outlines how to integrate the **Offer Doc — Draft v1** into the GST website. The goal is to move from a general "portfolio" feel to a direct-response, high-trust sales page for technical founders.

## 1. Structural Mapping (The StoryBrand Flow)

We will map the Offer Doc sections to the following page flow in `src/app/(frontend)/page.tsx`:

| Offer Doc Section | UI Block | Purpose |
| :--- | :--- | :--- |
| **Identity-Led Positioning** | **Hero** | Immediate clarity on the "Thinking + Building" promise. |
| **Who This Is For (ICP)** | **Target Audience** | Qualify the visitor (MSPs, Cyber, 3-20 staff). |
| **The Problem** | **The Reality Check** | Agitate the pain of "scattered tactics" vs "systems." |
| **How It Works (3 Phases)** | **The System** | Detailed breakdown of Audit, Build, and Optimize. |
| **Agency vs. Me** | **Comparison Grid** | Establish the "Unfair Advantage" and build trust. |
| **Pricing (Stark Framework)** | **Investment** | Transparent 3-option pricing (Audit, Build, Partner). |
| **The Process (1-7 Steps)** | **Roadmap** | De-risk the engagement with a clear timeline. |
| **FAQ** | **FAQ** | Pre-emptively answer technical/pricing objections. |

---

## 2. Technical Requirements & Block Updates

To implement this correctly, we need to update/create the following in `src/blocks/`:

### A. The Pricing Block (`src/blocks/Pricing/`)
*   **Feature:** Implement a 3-column grid for the Stark Framework.
*   **Design:** Use `bg-surface-dark` for the "Recommended" (Middle) option to make it pop.
*   **Content:** Option A (£3k), Option B (£8k-12k), Option C (£10k+).

### B. The Comparison Table (`src/blocks/Comparison/`)
*   **Feature:** A clean, two-column grid for "Agency" vs "Me."
*   **Design:** Minimalist borders, serif headings. Focus on the "Thinking + Building" distinction.

### C. The Process Roadmap (`src/blocks/Steps/`)
*   **Feature:** A vertical or horizontal numbered list (1-7).
*   **Design:** Uses the Architectural Grid ethos.

---

## 3. Copy Refinement Strategy

We will move away from the generic copy I previously implemented and use the **exact clinical tone** from your Offer Doc:

*   **Avoid:** "Let's grow your business."
*   **Use:** "Unfucking your positioning," "Built by engineers," "Engine room."
*   **Focus:** Answering "Why up-front?" and "Why me?" before they ask.

---

## 4. Implementation Phases

### Phase 1: Core Content Update (Immediate)
*   Update `page.tsx` with the detailed "Three Phases" and "ICP" copy.
*   Refine the Hero to be more aggressive about the "No Acquisition System" problem.

### Phase 2: Visual Block Development (Next)
*   Build the **Pricing Grid** component.
*   Build the **Comparison Table** component.
*   Build the **Roadmap/Steps** component.

### Phase 3: The DA Case Study (Refinement)
*   Create a dedicated "Proof" section that tells the Digital Avenue story (Anonymized).
*   Focus on: Problem (Referral dependency) -> Action (Positioning pivot) -> Result (HubSpot + Outreach Engine).

---

## 5. Success Metrics for the Page
1.  **Clarity:** A visitor knows exactly what I do in 5 seconds.
2.  **Trust:** The "Agency vs Me" table resonates with their past bad experiences.
3.  **Transparency:** The pricing removes the "Can I afford this?" anxiety immediately.
4.  **Conversion:** The CTA (Discovery Call) is the only logical next step.
