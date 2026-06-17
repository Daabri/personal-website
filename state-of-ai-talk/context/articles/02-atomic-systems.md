---
title: Creative work shifting from outputs to atomic system-led outcomes
author: emmettshine (X) / Little Plains
source: https://x.com/emmettshine/status/2054539694097015171
captured: 2026-06
chapter_relevance: skills, connecting-tools, where-it-goes (magic_trick, paid-for-your-mind)
---

How creative work is shifting from traditional outputs to atomic system-led outcomes.

Last week we sent a founder a zip file containing two folders: /human, /agent, & a readme.md. After a month of work, inside the agent folder, their entire brand was encoded as instructions via YAML, JSON, Markdown, HTML, CSS, SVG files. Upon receipt, they dropped the packet into Cursor, typed a prompt, and had a near-complete landing page that day.
In the last few weeks the simple zip folder has become the deliverable we've been asked to produce. Not a website, a software product, or a go-to-market campaign bible. Said another way, our input is where our value lies and what helps drives the outcome, not our outputs.
This is pretty new for us and in part pushed by what's possible through Claude Design. The accessible UI layer and the organized files Design produces have been a pretty big breakthrough at @littleplainsxo.
We wanted to walk through what we've been experiencing over the past few weeks with a few of the earliest stage founders we've been working with this on.
We'll also talk about where we see human creativity and original thinking (the 'magic trick') being the most valuable, and why this is increasingly what we want to be paid for.

An example of what our 'deliverables' have been looking like over the past few weeks.
Project Value is Moving Upstream

We're in the early stages of seeing first-hand that creative work itself is changing, and the value, timeline, and pricing model along with it.
A few days ago, @alexleiphart and I were at the office trying to explain this shift in how we're working to a few friends in the industry who were visiting. To illustrate what we were grappling with, we drew a diagram on a whiteboard: a project's value on the vertical axis + project time on the horizontal.

A whiteboard sketch from last week showing how value is becoming more upfront and input based.
A crude whiteboard drawing showing how value is becoming more upfront / input based.
In traditional service engagements, value grows slow and steady as deliverables accumulate. You pay for the time, you receive the outputs, and the value builds across the engagement. Over the past few months, what we're finding looks more like a funnel laid on its side.
For early-stage engagements, we're finding the highest concentration of value sits at the very start: the 0-to-1 thrust of deep research, expert synthesis, and the bold judgment calls about how to position a company as a brand. Who it's for. What it says. How it sounds. Where it lives in the market. Those judgment calls are what separates a system that holds from one that doesn't. The funnel narrows sharply from here because once the thinking is done, the outputs runs on the thinking's logic.
Note: notice 'magic-trick.md' at the very end of the diagram. We'll come back to that.
The Agency Model is Shifting

For most of the history of (all?) agency work, the handoff was static. A design file, a PDF, a deck the client would reference, interpret ...and gradually drift from as new work got built, new copy got written, and new vendors and teammates got hired.
In the past few decades of digital-based creative work, anyone who's encountered a Brand_Guidelines_FINAL_v3-FINAL-FINAL.pdf knows the pattern. The brand existed in the world after handoff in whatever shape the client's team could maintain.
However, what we and others on the front lines of agentic creative have been shipping recently is different in form and different in intent.
brand_atomic_system/
├── readme.md
├── magic_trick.md
├── human/                     <- drop PDF brand guidelines here
└── agent/
    ├── verbal/
    │   ├── positioning.md
    │   ├── audience.yaml
    │   ├── messaging.md
    │   ├── differentiation.md
    │   ├── concepts.md
    │   └── voice.md
    └── visual/
        ├── colors_and_type.css
        ├── fonts/              <- 5 OTFs
        ├── assets/             <- logo + brand assets
        ├── components/         <- 11 UI primitives
        ├── tokens/             <- 25 token specimens
        ├── motion/             <- full motion system (JSON, CSS)
        └── artifacts/
            ├── web/
            └── product/
The shape of every kit we ship now.
The /human folder contains brand guidelines in traditional format (PDFs, Figma linked docs, etc), still valuable and still core to the vast majority of teams.
The /agent folder is the more interesting piece.
Based on the work in the /human folder, the YAML, JSON, Markdown, HTML, CSS, and SVG files are structured so any agentic tool can read them and build from them. The brand is now encoded as instructions, not documentation, and based on our upstream judgement calls. An agent opening that folder gets a holistic system it can act on, with an embedded POV.
The breakthrough of the past few months is that the kit is coherent end-to-end, not just individually retrievable.
Input this 'atomic system' into Claude Design, Code, Cursor (or many, many other tools) and the brand DNA can expand to write, design, animate, and ship a landing page, a UI surface, or a GTM campaign at a high level of quality, context, EQ, and technical specificity because the foundational thinking is embedded in the structure of the files.
It's the same brand in two formats: one that humans use to understand the system, one that agents use to extend it. The breakthrough of the past month is now that packet of information for agents has a more clear higher-level unifying direction, and has the lower-level technical details to build towards it.
In Example:

The Type atomic kit open in Claude Design. Components, tokens, and artifacts organized as a living design system.
We recently helped build the atomic kit for Type (see the real site that just launched!), a multiplayer AI workspace tool (thanks @fletchrichman).
We put the final packet into Cursor and typed a single prompt: "generate me an HTML landing page based on the atomic design system and strategy." The model walked through atoms, molecules, and organisms and produced a full landing page with correct fonts, working hover states, specific modules, motion that matched the spec, and CSS elements from the embedded brand guidelines. It also followed the brand positioning, strategy, tone of voice, and production copy guidelines. It was very good, and was assisted by an incredible founding team + a little magic (see next section).

A professional landing page built from the kit components.
The motion folder contains a JSON file specifying Type-specific easing curves and transition speeds. Asked to visualize it, Claude Design produced an interactive component you can click through and feel the motion system rather than just read about it.

The motion system as an interactive HTML page. Four named curves, five durations, all generated from the JSON parameters in the kit.
For design or engineering-led founding teams (such as Type), the loop runs even tighter. They pulled the kit into their editor, changed a value or two, save, and we're building instantly. Change a primary color: update one CSS variable. Change a motion curve: edit the JSON. Re-upload to Claude Design and the whole guideline regenerates against the new values. The kit is editable in code, in real time, by the people closest to the work.
The same kit opened in Cursor with Opus 4.7. One prompt: build me an HTML landing page from the atomic kit.

The same kit opened in Cursor with Opus 4.7. One prompt: build me an HTML landing page from the atomic kit.

The same prompt, the same kit, in Codex with GPT 5.5. A different output, useful for comparing and iterating toward the best result.

An interactive button component generated from the kit's motion specs. Hover states, transform values, and timing all sourced directly from the files.
magic_trick.md

Here's why usually a one-shot prompt won't deliver what you need to ship.
Everything the agentic kit typically produces is a recombination of what's put in: the positioning, the tone, the components, the motion. That's what the kit is built to do. The output will be consistent, branded, shippable. It will also gravitate toward the median of what the inputs allowed. Correctness and originality are not the same.
Most people forget the small upturn at the end of the whiteboard diagram; the magic trick.
When the execution layer is largely agentic, there's a moment near the end of an engagement when things start converging toward the middle, exactly when you need them to do the opposite. One-shotting almost never produces magical breakthroughs (sometimes I do miss the creativity of AI hallucinations).
For a premium-priced studio working with founders making big bets, "the median" is exactly what people pay us to avoid.
This is where a human has to walk back in with an idea. A real, glucose-burning, left-of-center, weird, sweaty original creative thought that couldn't have been predicted from the inputs.
The kind of move that tilts the outcome: a launch film concept based on a film-noir binge from last winter, a sublime product moment thought of while on a walk, a sub-culture-winking campaign idea based on a very late night out, a radical above-the-fold showstopper inspired by a tiny art gallery stumbled into during a rainstorm in a foreign country, a piece of billboard copy that lands harder than the system would have produced on its own.
We've been calling this magic_trick.md internally, and it's only half a joke.

Don't leave home without it!
Vocabulary's Value

Recently, Diplo was asked about AI. In his answer, he talked about how the best DJs in the world are often older than him because of their vocabulary; their accumulated knowledge of music.
For him, his excellent vocabulary came from years of waking up at five in the morning to dig through crates of records at flea markets, going house to house searching for obscure vinyl, reading every track, knowing every bass player on every record.
What makes a DJ great is those years of accumulated knowledge, and accumulating experience. Both let them know which record to pull, in which room, on which night. "That's what makes us good. My gift is that I came from digging up old records."

A well-produced agentic system is the equivalent of an enormous, perfectly cross-referenced record library. Incredible in itself, and useless without understanding the energy of a crowd, the pheromones of a room, and the experience to do what no one expected and everyone remembered.
If the atomic kit is the library, magic_trick.md is the set a great DJ puts together for a specific room on a specific night. Yesterday's idea is not today's idea. The winning combination for each important brand output is a well-produced agentic kit and a deep-cut magic trick of an idea.
Make sure you leave room for that original thinking downstream, or you risk shipping something correct that nobody remembers.
If you only have the bold idea and no system underneath it, you'll ship something memorable that won't survive past the launch announcement.
System thinking and original thinking. One hand washes the other.
HTML & .MD: From Markdown to markup

One thing worth debating about (as did Nathaniel Whittemore two days ago on his excellent podcast, AI Daily Brief) is that we think HTML is increasingly the right format for this kind of work.
A component expressed in structured HTML is parseable by any modern agent. An SVG has its logic baked into geometry. A CSS file encodes the visual language at a structural level. These files are instructions an agent can act on directly. A flat raster export — PNG, JPEG, PDF — can be looked at but not built from.
When we structure a system as HTML, CSS, and SVG, we're building for how agents read and construct, not just for how humans view. That distinction shapes nearly every output decision we make.
(For a great technical read on this, see Using Claude Code: The Unreasonable Effectiveness of HTML by @thariq.)

Flora: A node-based generative workflow producing the marble assets. Each sphere a unique output, delivered as a reusable technique rather than a one-time export.

The marble assets are imported into the kit. Claude Design indexes them alongside the type, color, and component files as part of the same system.

The kit opened in Cursor. The marbles are referenced as assets, the motion specs wired in from the JSON, building toward a live page.

The marbles running in the browser. Physics, rotation, and easing sourced directly from the motion files in the kit.
What Claude Design Changed For Us

Our atomic kit concept predates Claude Design. We've been pushing in this direction since early this year, and our essay Building Brands for Humans and Agents laid out the case for refactoring brand work into agent-readable formats.
What feels significantly different now is that producing one of these kits well, at the speed a sprint demands, is genuinely feasible, and more impactful.
Claude Design has let us think through a system more visually, verbally, strategically, and structurally. We can work inside the same tool, producing artifacts in the right formats, without the manual conversion step that used to eat the back half of every project. The work that took a 12-week engagement in 2025 can now (sometimes) fit inside a 4-week sprint without compressing the value. When done right, the value has actually gone up.
The kit a client walks away with is generative, structured, future-proofed, and alive. The old deliverables were static, required manual maintenance, and extremely limited in their immediate implementation ability.

The Marcom CTAs component in Claude Design.

The same component as HTML code.

What We're Selling: Atomic Worlds

When an atomic kit is the deliverable, the kit isn't a finished asset. It's a system that produces finished assets.
That changes what's actually being sold. What's being sold is the encoded thinking that makes every future artifact, page, and product feel like the same brand.
The kit is an original work derived from original thinking. Every downstream output a client generates from it inherits that originality.
Jack Dorsey and Roelof Botha recently published "From Hierarchy to Intelligence," arguing that the next generation of companies will be organized around what they call a "world model" - a continuously updated, machine-readable understanding of the business itself, rich enough that AI can act on it directly. Their bet is that understanding is the moat, and that the depth of that understanding compounds as the system runs.
The same thing applies to the creative work we do.
An atomic kit is a brand world model. A structured, machine-readable understanding of what the brand is, who it's for, how it sounds, and how it looks. The depth of that understanding is what makes it valuable, and what makes it durable.
"An atomic kit is a brand world model."
How This Work Will Be Sold (Soon?)

Traditional creative work prices time and materials: scope it, pay for the output, move on. If the kit is the actual product, the upfront work is where the value concentrates, exactly as the whiteboard diagram shows. The ongoing relationship looks less like rescoping for production work and more like maintaining access to a living system.
We've already started doing versions of this. Through Dan Batten, we built a custom node-based deep research agent the Little Plains team has exclusive access to. We've been asked by multiple clients to use it. If we were ready, we'd offer monthly access at a flat fee with the understanding that we'd maintain and improve it continuously. They'd always get the current version.
Something structurally similar could apply to a brand system. We'd stay in the kitchen refining the recipe. Clients always build from the best version of it. Lower upfront cost, ongoing license, continuous quality.
The same principle applies in our Flora work. We build original generative workflows for clients (a way of producing visuals, a custom UI generation pattern, a node-based content pipeline) and deliver that technique as an asset they can keep using, not just the outputs. As these techniques have grown more sophisticated, we're exploring licensing out access and usage.

An example of a custom Flora 'technique' we produced.
We're not all the way to a full licensing model for creative, but we're close enough to start talking about it. The future of how this work gets bought and sold is closer to software pricing than agency pricing. For us it'll likely be a hybrid: scoped time and materials on the front end, ongoing licensing for the systems we leave behind.
If you believe you have original thinking and original ideas, this should feel like an advantage.
Aim to be paid for your mind, not your hands.
Where We're At Now

We've handed over multiple atomic kits in the past month. Founding teams are building from them in real time, on real launch deadlines, which is the only test that actually matters.
Each member of our full-time team is using Claude Design daily. Our copywriters are testing copy inside HTML sites rather than Google docs, which gives a cleaner read on character counts, line breaks, and how narrative actually flows in situation. Our designers are stress-testing components in the same environment they'll be deployed into. The work is more honest because the medium is the medium.
In short, the upstream definition work; the strategy, the positioning logic, the visual and verbal systems that make a brand coherent is becoming the actual product. The following work is increasingly downstream.
Lastly, the work we've always cared about the most (the original, creative thinking) is the part that might matter even more going forward.
