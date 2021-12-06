---
title: 'Case study: Building a hospitality assistant for a robotics company'
date: '2021-11-28'
roles: [
	Requirements analysis,
	UI Design,
	UX Design,
	User Research,
	Frontend Development,
]
image: '/images/festo/live.png'
imageAltText: 'Dashboard showing multiple reservations and a detail window'
---
## Context
Festo is a worldwide industrial control and automation company. Their Delft location wants to be a bigger social presence in their municipality in terms of hospitality. They often host gatherings, events, parties and meetings, and can receive a lot of guests in different rooms with different activities. They have showrooms, presentation rooms, and even an escape room to treat their guests accordingly. Frequent visitors are customers, schools, Festo colleagues from abroad, or other companies nearby.
```
 
```
Festo’s hospitality is important to them, so they have multiple receptionists and a hospitality manager to make sure every visit is a success. They use regular planning software to manage room reservations and catering, which is not tailored to Festo’s specific use case. This often causes a lot of work for the hospitality team, a lot of (mis)communication and many errors in reservations.
```
 
```
The lack of communication between software solutions and having too many tools for the job creates a repetitive, slow and problematic reservation process for all employees at Festo. The mission is to **create a single software solution that Festo employees can use to create and manage reservations, ranging from small internal meetings to school events and seminars.** These reservations should be able to include data about rooms, gifts, catering and visitor badges, among other things.

### Project goals
- **Make the reservation creation process faster, more reliable and less time-consuming** for the people that create them
- **Improve the maintainability of a reservation** for the hospitality assistant and the receptionists.
- **Provide a user experience that anyone can understand** within minutes of first using it.
- Allow reservations to **include additional information about the reservation**, like room(s), catering, name badges, the host, and more
- Make sure that **the reservation host, catering and the hospitality team always have the latest information** about upcoming reservations, and the ability to handle them accordingly.

### Research conclusions
By observing and interviewing several people from the hospitality team, we could conclude a few things:
- **More than 4 different tools were used** to book reservations
- **E-mail was the only way to request changes to a reservation**, and the hospitality manager was the only one implementing these changes
- Additionally, **a lot of communication was done outside working hours** through Whatsapp
- This meant that the tooling **did not provide (immediate) feedback to the user** without relying on the hospitality manager to communicate changes
- **All communication was one-to-one**, which means that there's always someone who isn't up to date with the latest reservation changes

This information really highlighted the biggest painpoints in the process and helped us understand which parts in the process could benefit the most from a new solution.

### Constraints and trade-offs
A fully fledged notification feature for new and edited reservations was requested, but this would take a lot of time to implement. To still allow people to notice newly edited reservations, we created a checkbox at the bottom of the creation form that would mark it highlighted for a specific role. If you requested a catering change, you would tick the box and press 'update'. Only the catering team could see the 'notification' and could clear it after handling the change. The solution worked like a charm, saved them a good deal of budget and got them an earlier release as well!

![dashboard notification](/images/festo/dashboard-notification.png)
![card notification](/images/festo/card-notification.png)
![notification checkbox](/images/festo/notification-checkbox.png)

## Impact
Our solution saved them a lot of time. Some other indicators of its impact on their processes:
- **Huge decrease in time spent communicating between host and hospitality team** because the dashboard always shows the latest changes
- **Barely any errors in new reservations**, which further decreases the need for communication
- **Removal of all other software tooling** except for the Microsoft Office package