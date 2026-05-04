// Case content — converted from case-data.jsx to ES module
// Block helpers
const P = (...nodes) => ({ p: nodes })
const UL = (...items) => ({ ul: items })
const B = (text) => ({ strong: text })

export const CASE_CONTENT = {
  ion: {
    slug: 'ion',
    glow: '#41A641',
    statColor: '#5B8DEF',
    tags: ['Itaú Unibanco', '2022 – 2024', 'Product Design', 'Accessibility'],
    title: ['Designing íon web: accessibility, scale, data-driven decisions, and ', { accent: '9.2% conversion' }],
    sub: "In 2022, I helped Itaú expand their investment platform to the web. Through iterative design, accessibility work, and data-driven decisions, we reached 30,000 monthly users and hit 9.2% conversion — more than double the goal.",
    spec: [['Period','2022 – 2024'], ['Company','NTT Data × Itaú'], ['Role','Senior Product Designer'], ['Scope','UX · UI · Accessibility']],
    summary: [
      "Itaú's investment platform was already a reference on mobile — the challenge was bringing it to the web without losing quality, consistency, or accessibility.",
      "I joined the squad responsible for the product showcase area, working across UX, UI, accessibility, and technical alignment with development and QA teams.",
      "We followed an iterative, data-driven approach: beta with 100 users in Dec/22, alpha with 10,000 in Jul/23, and official launch in Dec/23.",
      "Key deliverables: logged-in homepage, product carousels, product table, product detail page, news page, and accessibility specifications.",
      "Result: 30,000+ monthly users (double the target), 9.2% conversion rate (goal was 4%), and 80% positive feedback via Likert surveys.",
      "The site was recognized as the most accessible in the Brazilian financial sector.",
    ],
    blocks: [
      { kind:'section', label:'The challenge', title:'A platform built for mobile, ready to conquer the web', body:[
        P("Íon is Itaú's investment platform, already well-established in the mobile environment as a robust and sophisticated solution for investors."),
        P("The challenge was to expand this experience to the web, creating an omnichannel journey that maintained the same level of excellence. More than a simple interface adaptation, the project required rethinking flows, components, and interactions for a new usage scenario, with a strong focus on accessibility, performance, and scalability. The goal was ambitious: ", B('15,000 monthly users by December 2023'), "."),
      ]},
      { kind:'section', label:'My role', title:'Cross-functional design at the heart of the platform', body:[
        P("As a senior product designer, I was part of the squad responsible for the product showcase on íon web — focused on presenting investment products in a clear, engaging, and efficient way. My role was cross-functional, ranging from UX and UI decisions to technical alignment with development and QA teams."),
        UL(
          [B('Conversion: '), 'structured journeys that encouraged user engagement and decision-making, especially for complex financial products.'],
          [B('User satisfaction: '), 'created a fluid, intuitive, and pleasant experience, reflected in 80% positive feedback through Likert-scale surveys.'],
          [B('Accessibility: '), 'actively ensured the platform was inclusive, leading to recognition as the most accessible site in the sector.'],
        ),
      ]},
      { kind:'section', label:'Roadmap and evolution', title:'Iterating in the open, from 100 users to 30,000', body:[
        P("My involvement in the project began in August 2022. With each new release — beta, alpha, or final launch — we collected qualitative and quantitative feedback. These insights were essential for identifying friction points, validating hypotheses, and prioritizing improvements."),
      ]},
      { kind:'figure', src:'/images/ion-roadmap.png', caption:'Project timeline: from beta and alpha phases to the official launch in December 2023' },
      { kind:'timeline', items:[
        ['Dec/22', 'Beta version launched', '100 selected users. This phase allowed us to validate the core flows and adjust the structure of the product showcase based on early feedback.'],
        ['Jul/23', 'Alpha expansion', '~10,000 users. We deepened our analysis of behavior and satisfaction, refining components and interactions based on real usage data.'],
        ['Dec/23', 'Official launch', 'Delivering a solid, validated, functional MVP, ready to scale without major rework.'],
      ]},
      { kind:'section', label:'Initial assessment', title:'What we inherited, and what needed to change', body:[
        P("When I joined the project, I was introduced to materials developed by the consultancy Work & Co. While instrumental in selling the vision, the material was still far from being a product ready for implementation."),
        UL(
          [B('Misalignment with the iDS: '), "components didn't follow the bank's visual and functional standards."],
          [B('Lack of accessibility: '), "several elements ignored accessibility best practices."],
          [B('Incomplete flows: '), "alternative scenarios, empty states, and edge cases were missing."],
        ),
      ]},
      { kind:'section', label:'Challenges faced', title:'Bridging the gap between design and development', body:[
        P("Two key points stood out throughout the project."),
        { kind:'h3', text:'Integration with the iDS (Itaú Design System)' },
        P("The discrepancy between design and dev libraries was constant: we worked with an up-to-date library, devs had an outdated one. I had to map what was actually available, adapt layouts based on those constraints, and negotiate intermediate solutions that maintained consistency."),
        { kind:'h3', text:'Usability testing' },
        P("We postponed formal testing until after launch due to a tight timeline. To mitigate risk, I monitored usage metrics, collected qualitative feedback during beta and alpha phases, and adjusted based on data — even before the public release."),
      ]},
      { kind:'section', label:'Key deliverables', title:'Logged-in Homepage', body:[
        P("The logged-in homepage was designed to be the user's entry point into the íon web experience. I worked on structuring a page that balanced informative content, efficient navigation, and personalization."),
        UL(
          'Interactive cards with stock market info, investments, and product suggestions.',
          'Regulatory content blocks, integrated discreetly but accessibly.',
          'Relevant news and updates for investors, curated automatically.',
        ),
      ]},
      { kind:'figure', src:'/images/ion-home.png', caption:'Logged-in home: portfolio cards, product carousels and curated news' },
      { kind:'section', title:'Product Carousels', body:[
        P("The consultancy Work & Co had proposed a visual concept where each carousel would have a distinct color. The original concept included only 8 colors, which quickly proved insufficient given the number of carousels needed."),
        P("I led a study to expand this palette from 8 to 16 colors, ensuring visual harmony and accessibility. We also defined the ideal card sizes for each carousel, considering different screen resolutions and breakpoints."),
      ]},
      { kind:'figure', src:'/images/ion-trilhos.png', caption:'Product carousels: palette expanded from 8 to 16 colors, card sizes defined for multiple resolutions' },
      { kind:'section', title:'Product Table', body:[
        P("The product table needed to be robust and highly functional: real-time pricing updates, advanced sorting and filtering, responsive pagination, and visual performance indicators. I also ensured full accessibility via keyboard navigation and screen readers."),
      ]},
      { kind:'figure', src:'/images/ion-tabela.png', caption:'Product table: real-time quotes, advanced sorting and filtering, fully accessible' },
      { kind:'section', title:'Product Detail Page', body:[
        P("This screen displayed specific information about an asset. The price chart required significant technical refinement. Since charts are not read by screen readers, I created a ", B('complementary table that translated visual information into textual data'), "."),
      ]},
      { kind:'figure', src:'/images/ion-detalhe.png', caption:'Product detail: price chart with complementary accessibility table' },
      { kind:'section', title:'Accessibility', body:[
        P("This initiative was carried out in direct collaboration with the specialized team, ensuring that the solutions were inclusive and functional for all user profiles. Robust accessibility specifications were essential to guarantee quality."),
      ]},
      { kind:'figure', src:'/images/ion-acessibilidade.png', caption:'Accessibility specifications, developed in direct collaboration with the specialized team' },
      { kind:'section', title:'Data-driven changes', body:[
        P("Throughout the project, we evolved features based on two pillars: active customer listening and strategic data analysis. A standout case was the table display function for the chart — with a clear redesign, I transformed friction into noticeable engagement."),
      ]},
      { kind:'figure', src:'/images/ion-dados.png', caption:'Before and after: table display function redesign driven by user behavior data' },
      { kind:'section', label:'Results', title:'Double the users, more than twice the conversion', body:[
        P("By the end of the project, the results exceeded initial expectations. The collaborative work, combined with an iterative and user-centered approach, enabled íon web to be launched as a solid, functional, and well-received product."),
      ]},
      { kind:'stats', color:'#5B8DEF', items:[
        ['+30k', 'Monthly active users, doubling the initial goal of 15,000'],
        ['9.2%', 'Conversion rate, far surpassing the 4% target'],
        ['80%', 'Positive feedback via Likert-scale surveys'],
      ]},
      { kind:'callout', text:['30+ features delivered. The site was recognized as the ', B('most accessible in the financial sector'), '.'] },
    ],
  },

ids: {
    slug: 'ids',
    glow: '#F97300',
    statColor: '#F97300',
    tags: ['Itaú Unibanco', '2024 – 2025', 'Design System'],
    title: "Fixing Itaú's Design System: how I analysed and standardized 60+ components from design to code",
    spec: [['Period','2024 – 2025'], ['Company','NTT Data × Itaú'], ['Role','Senior Product Designer'], ['Scope','Analysis · Figma · Handoff · Docs']],
    summary: [
      "NTT DATA assembled a multidisciplinary squad to standardize and align Itaú's design system across 4 tech stacks: Angular, React, Flutter, and Swift.",
      "As a senior designer, I was responsible for component analyses, Figma library updates, technical handoffs, and documentation on the internal design system portal.",
      "iDS consists of 70+ components used by 500+ designers, 5,000+ developers, and 6,000+ product managers — a large-scale, high-impact initiative.",
      "We systematically reviewed 60+ components, identifying and resolving 600+ points of concern across design, technology, QA, and accessibility.",
      "My main contribution to the handoff process was a structured properties and variants table, adopted as the standard by the entire team.",
      "An unexpected final phase involved revising and maintaining official documentation on the internal design system portal.",
    ],
    blocks: [
      { kind:'section', label:'Context', title:'One design system. Four tech stacks. Thousands of people.', body:[
        P("NTT DATA assembled a multidisciplinary squad of specialists focused on different aspects of the design system: design, mobile and desktop technology, quality assurance, accessibility, and strategy. Our primary objective was to standardize and align the four core technology stacks, Angular, React, Flutter, and Swift, while ensuring Figma components and templates remained up to date and fully optimized for designers and developers."),
        P("As a senior designer on this project, alongside one to three other designers depending on the project phase, I was responsible for conducting initial component analyses, refining designs within the core Figma library, updating technical handoff specifications, and ultimately revising the design documentation on the internal design system website. To provide a sense of scale, iDS consists of over 70 components, is utilized by approximately 500 designers, more than 5,000 developers, and over 6,000 product managers. This was a large-scale, high-impact initiative spanning nearly a year, an experience that significantly deepened my expertise in design systems and their strategic implementation."),
      ]},
      { kind:'stats', color:'#F97300', items:[
        ['70+', 'Components in the system'],
        ['500', 'Designers using iDS'],
        ['5k+', 'Developers and product managers'],
      ]},
      { kind:'section', label:'Strategy and planning', title:'Getting 20 people aligned before touching a single component', body:[
        P("One of the first steps in the project was a general alignment among the nearly 20 professionals involved. After initial introductions, we conducted a detailed assessment based on the client's briefings, establishing a clear understanding of the project scope and execution timeline for each area. Our primary responsibility was to systematically review over 60 designated components, analyzing them in detail, identifying inconsistencies, and implementing the necessary corrections."),
        P("To ensure alignment on what aspects of each component we would evaluate and how far our revisions would extend, we developed initial sketches and diagrams in FigJam. These artifacts helped define our workflow and delineate the responsibility structure within the team. The workstream framework and accountability map became foundational elements guiding our approach throughout the project."),
      ]},
      { kind:'figure', src:'/images/ids-estrategia.png', caption:'Workflow diagram and accountability map developed in FigJam, the foundational elements guiding our approach throughout the project' },
      { kind:'section', label:'Component analysis', title:'From chaos to clarity: how we built our process', body:[
        P("Our first analysis was both the most intriguing and the most chaotic. The team focused on a single component, gathering every possible piece of information and insight. It was during this process that the design team's role in consolidating findings and creating a structured report became clear, something that had not been explicitly defined before. This approach became the foundation for all subsequent component analyses, with the design team centralizing evaluations and reporting any critical issues."),
        P("Although our initial presentation wasn't the most polished, the analysis was well received by the Itaú team, who recognized it as the first tangible value delivery. We identified key areas for improvement, including taxonomy inconsistencies, documentation gaps, and accessibility issues. It also became evident that efficient communication was essential to ensure components were developed simultaneously across multiple technology stacks. Without it, discrepancies and misalignments were inevitable."),
        P("Following the delivery of our first report and the subsequent approval of the proposed corrections, we immediately shifted our focus to implementing the necessary adjustments, refining our workflow, and preparing for the analysis of the next batch of components."),
      ]},
      { kind:'figure', src:'/images/ids-analise1.png', caption:'First component analysis, recognized by the Itaú team as the first tangible value delivery' },
      { kind:'section', body:[
        P("Here is an example of one of the subsequent analyses we conducted, this time with a more structured approach, componentized elements, and full alignment with the client's visual identity. We consistently aimed to create deliverables that could evolve into internal tools or reference materials, ensuring we spoke the client's language and adhered to their brand guidelines, including colors, typography, and design principles."),
        P("To facilitate asynchronous reviews and ensure comprehensive documentation, we also included a final column consolidating key insights. This section provided an overall assessment of the component, highlighted inconsistencies and issues, and outlined opportunities for improvement. In case of any doubts regarding points discussed during our analysis presentation, stakeholders could simply refer to the final column for clarification."),
      ]},
      { kind:'figure', src:'/images/ids-analise2.png', caption:'Subsequent analysis: more structured approach, componentized elements, full alignment with the client\'s visual identity' },
      { kind:'section', body:[
        P("Later, we had to adapt our deliverables due to timeline constraints and changes in the team structure. To streamline the process while maintaining essential quality, we developed a minimum viable version of our analysis, focusing on three core aspects for each component:"),
        UL('Anatomy', 'Properties', 'Design Tokens'),
      ]},
      { kind:'figure', src:'/images/ids-analise3.png', caption:'MVA (Minimum Viable Analysis): streamlined to three core aspects while maintaining essential quality' },
      { kind:'callout', text:['By the end of the project, we had conducted an in-depth analysis of ', B('over 60 components and 5 templates'), '. Throughout this process, we identified more than ', B('600 points of concern'), ', which were thoroughly discussed and addressed by the design, technology, QA, and accessibility teams.'] },
      { kind:'section', label:'Updating Figma libraries and technical handoffs', title:'Where design meets development', body:[
        P("After refining our workflow and completing our initial analyses, the next steps were to update the components in the bank's official Figma library and, subsequently, revise the technical handoffs. As a team, we consistently adhered to best practices at every stage, working in isolated branches for each component to ensure a structured and controlled update process."),
        P("Additionally, to facilitate the approval process and optimize time for all stakeholders, we placed component playgrounds within Figma. These interactive spaces allowed reviewers to explore components in different states and variations, often accompanied by a concise changelog summarizing the updates made."),
      ]},
      { kind:'figure', src:'/images/ids-bib1.png', caption:'Component playground in Figma, allowing reviewers to explore different states and variations, with integrated changelog' },
      { kind:'section', body:[
        P("Once the Figma updates were finalized, we moved on to the handoff phase, one of the most critical aspects of our work as a design team. This step served as the final bridge between our improvements and the development team, ensuring seamless implementation. From the outset, the Itaú team shared with us an initial handoff model they had been using, and we quickly began refining and adapting it to fit our needs."),
        P("Ayrton Camossa, the Lead Designer of the project, transformed each section of the provided handoff model into reusable Figma components, ensuring consistency across all deliverables. This mini-library of handoff elements was carried throughout the project and significantly accelerated our workflow, maximizing the reuse of standardized elements while maintaining clarity and efficiency."),
        P("My mainly contribution for the handoff process was creating structured properties and variants table that was quickly adopted as the standard for all materials we produced. This table became a foundational element, allowing developers to clearly understand each component's full range of possibilities. While Figma's Dev Mode provides a solid foundation for developer handoffs, a well-structured example table remains an invaluable reference, eliminating ambiguities and further streamlining our process."),
      ]},
      { kind:'figure', src:'/images/ids-bib2.png', caption:'Properties and variants table: adopted as the standard for all handoff materials, eliminating ambiguities for developers' },
      { kind:'section', body:[
        P("Additionally, we collaborated closely with the accessibility teams from both Itaú and NTT DATA to build and refine accessibility guidelines for each component. Given that accessibility is a fundamental principle of the design system, we dedicated significant effort to maintaining and even raising the system's high standards of inclusivity and usability."),
      ]},
      { kind:'figure', src:'/images/ids-bib3.png', caption:'Accessibility guidelines: built and refined in close collaboration with accessibility teams from both Itaú and NTT DATA' },
      { kind:'section', body:[
        P("We handled both relatively simple handoffs, such as the image component example above, and highly complex ones, like the modal component example below. Regardless of complexity, we always put ourselves in the shoes of developers and QA professionals who would rely on this documentation, ensuring clarity in every aspect of a component development."),
      ]},
      { kind:'figure', src:'/images/ids-bib4.png', caption:'Modal component handoff: one of the most complex, with every state, variation and behavior fully documented' },
      { kind:'section', body:[
        P("To finalize this phase, and in alignment with the internal guidelines set by the iDS team, we conducted all approvals and reviews using Figma's branch review tools. Since updates were automatically notified through Figma's interface and email, we maintained a clear and structured approval record at all times. Once a handoff was approved, we simply updated our Overview Panel to reflect the latest status of each step."),
      ]},
      { kind:'figure', src:'/images/ids-bib5.png', caption:'Overview Panel: clear and structured approval record updated after each handoff was approved' },
      { kind:'section', label:'Updating Documentation', title:'The phase no one planned for, and why it mattered', body:[
        P("As we approached the final stretch of the project, we were unexpectedly assigned a new phase in our workflow. Beyond updating components and technical handoffs, we were now responsible for revising and maintaining the official documentation on the design system's internal portal."),
        P("This task built upon the work of another consultancy that had previously handled documentation but was now shifting to a different initiative. Since the components had been updated after their involvement, we needed to revisit these materials to ensure full alignment and consistency."),
        P("Each component went through a two-step process:"),
        UL(
          [B('Initial validation in Figma: '), 'We updated usage examples, property tables, and instructional content. To streamline approvals, we also introduced a simplified changelog format, clearly documenting and illustrating every change, an approach we had successfully applied in other stages of our workflow.'],
          [B('Portal updates: '), 'We then uploaded revised images and text to the designated documentation platform, ensuring that the latest specifications were accessible to all stakeholders.'],
        ),
        P("Below is an example of our modal component update (original version on the left, revised version on the right), where we meticulously reviewed every instance and application of the component. These documents are referenced daily by thousands of designers, developers, and product managers, making precision and clarity essential."),
      ]},
      { kind:'figure', src:'/images/ids-doc1.png', caption:'Modal component documentation update: original version (left) vs. revised version (right), referenced daily by thousands of stakeholders' },
      { kind:'section', label:'Impact', title:'600+ issues resolved. 60+ components reviewed and standardized. One system to rule them all.', body:[
        P("Working in a multidisciplinary team required close collaboration and shared responsibility across design, development, QA, and accessibility. Strong partnerships between disciplines allowed us to analyze, refine, and update components effectively while keeping our workflow seamless."),
        P("We take pride in the impact we achieved: over 600 issues resolved across dozens of components, improving consistency, accessibility, and overall quality. Through teamwork and continuous iteration, we optimized the design system while establishing a scalable, efficient delivery process for future iterations."),
        P("More than just delivering components, we delivered ", B("clarity, trust, and a solid foundation"), " for the design system to continue evolving with consistency."),
      ]},
      { kind:'stats', color:'#F97300', items:[
        ['600+', 'Issues resolved across dozens of components'],
        ['60+', 'Components and 5 templates analyzed in depth'],
        ['4', 'Tech stacks aligned simultaneously'],
      ]},
    ],
  },,

    rite: {
    slug: 'rite',
    glow: '#C6D167',
    statColor: '#C6D167',
    tags: ['Itaú', '2025', 'UX Research', 'Usability Testing', 'Prototyping'],
    title: 'No budget, plenty of bureaucracy: how I built a testing process from scratch',
    spec: [['Period','2025'], ['Company','NTT Data × Itaú'], ['Role','Senior Product Designer'], ['Scope','UX Research · Usability Testing · Prototyping']],
    summary: [
      "The project was part of Itaú's expansion into the free energy market, offering a 10% discount on electricity bills for individual customers spending over R$200/month.",
      "Bureaucracy between the bank's B2B and B2C structures and the high cost of traditional testing (R$40,000) made conventional research unfeasible.",
      "The RITE method was adopted as an alternative: an iterative testing approach that allows prototype adjustments between sessions, accelerating hypothesis validation.",
      "6 tests were conducted across 5 prototype versions, identifying and resolving critical usability issues in real time.",
      "Midway through the tests, the budget for the research institute was approved. RITE had already refined the journey enough to make the formal test far more efficient.",
      "The project reinforced that describing a usability problem clearly is a design skill, and that speed without judgment is not a method — it is just improvisation.",
    ],
    blocks: [
      { kind:'section', label:'Context', title:'A new project, an untested journey and an uncertain budget', body:[
        P("Itaú was expanding into the free energy market, following new regulations that allow consumers to migrate from the traditional regulated market to the open market. The initiative offered individual customers spending over R$200/month the chance to save 10% on their bills."),
        P("When I joined the project, a Visioning had already been designed. I was brought in to turn it into an MVP and conduct usability testing with real users — something that had not yet been done."),
      ]},
      { kind:'section', label:'The challenge', title:"We didn't know if the budget would come. So I started testing.", body:[
        P("The project sat within IBBA, the bank's B2B structure, but the end client was Retail, a B2C structure. That difference created a bureaucratic barrier that made direct access to clients impossible. On top of that, a traditional test with a research institute cost around R$40,000."),
        P("The project manager was working to get the budget approved, but there was no guarantee. We needed to move forward regardless. The alternative was the RITE method."),
        P("Midway through the tests, the budget was approved. What started as a plan B became an essential part of the process."),
      ]},
      { kind:'section', label:'The method', title:'The tool that solved the problem', body:[
        P("RITE (Rapid Iterative Testing and Evaluation) is a usability testing approach designed to identify and fix problems quickly and continuously, during the testing process itself. Unlike traditional testing, RITE allows prototype adjustments between sessions, without waiting for all tests to finish before acting."),
        P("The method originated in 2002 at Microsoft Games Studios. Engineers realized the development pace was too slow and needed an approach that allowed immediate iteration."),
        P("During testing, problems are classified into three categories:"),
        UL(
          [B('Obvious cause and quick fix: '), 'corrected immediately and tested in the next session.'],
          [B('Obvious cause but harder to fix quickly: '), 'adjustments started to be tested in the following session.'],
          [B('No obvious cause or solution: '), 'more data needed before taking any action.'],
        ),
      ]},
      { kind:'section', label:'In practice', title:'Six tests, five prototypes, many discoveries', body:[
        P("For the tests, two journeys were considered: the end-to-end purchase journey and the post-purchase journey. I developed a test script with targeted questions aimed at validating hypotheses. For recruitment, we looked for people spending over R$200/month on electricity."),
        P("We ran ", B('6 tests across 5 different prototype versions'), "."),
      ]},
      { kind:'section', label:'What users taught us', title:'Home screen', body:[
        P("In the first version, users didn't notice there was more content below the fixed button — it was blocking the visual flow. We also identified redundancy: two buttons with the same function placed close together created confusion."),
        P("The decision was to keep the first button to gather more data, and move the discount simulation button to the bottom of the screen."),
      ]},
      { kind:'figure', src:'/images/rite-case-2.png', caption:'Home screen: v1 with fixed button blocking content flow, and final version with simulation button repositioned' },
      { kind:'section', title:'Checkout screen', body:[
        P("In the first test, users assumed the discount would be applied the month after signing up, which was incorrect. We updated the journey to clearly communicate the onboarding process and its estimated timeframe."),
        P('In the next test, users had no idea who the partner behind the service was. One participant joked it was the "mystery partner." We added the partner\'s name to the journey.'),
        P("The final version featured a closing screen with much clearer next steps in the contracting flow."),
      ]},
      { kind:'figure', src:'/images/rite-case-3.png', caption:'Checkout screen: from unclear partner identity and missing onboarding context to a clear closing screen' },
      { kind:'section', title:'Product and billing cards', body:[
        P("In the first version, the open billing section competed visually with the address card. We removed the section and moved the billing line inside the card itself."),
        P("In the next test, users could only find payment history through trial and error. We updated the section title and action button to be more direct."),
      ]},
      { kind:'figure', src:'/images/rite-case-4.png', caption:'Product and billing cards: from competing sections and unclear labels to a consolidated card with direct action' },
      { kind:'section', title:'Product cancellation', body:[
        P("The feedback here was sharp: having to contact the partner to cancel a service purchased through the app was considered a terrible experience. We decided to gather more data before building the cancellation journey."),
      ]},
      { kind:'section', label:'After the tests', title:'RITE opened the door for the definitive test', body:[
        P("With the prototype refined through RITE, we ran a full usability testing round conducted by a research institute."),
        P("The RITE method was essential not just for validating hypotheses, but for refining the journey, the prototype, and the test script itself. This allowed the team to get the most out of the institute's testing sessions."),
      ]},
      { kind:'section', label:'Learnings', title:'What I would bring to the next project', body:[
        P(B("Think about context before applying RITE."), " Do you have time to update the prototype between sessions? Can you run multiple tests in the same day? The method only works well when there are real conditions for iteration."),
        P(B("Have a solid foundation."), " Define clear hypotheses and specific objectives before you start. Knowing what you want to discover is what makes RITE efficient, not just fast."),
        P(B("RITE is not chaos."), " Not every user error or hesitation requires an immediate change. Avoid rushed decisions: observe, analyze, and then validate."),
        P(B("Be agile, but responsible."), " Every prototype change must be thought through strategically. Agility does not mean disorganization. It means focus, judgment, and collaboration."),
      ]},
    ],
  },
}
