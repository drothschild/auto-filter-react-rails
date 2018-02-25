# Full Stack Software Engineer, Coding Challenge

The goal is to implement the User Interface and Backend for a feature to filter a list of customers based on first name, and last name. It is a classic Use Case that we use everyday,
for example, in Github.com you can filter Pull Requests or Issues using a similar user experience.

## Use Case: Filter Customers

1. I am a user and I open the "Filter Customers" page, and the system presents me with a text field.
2. As I type text in the input field:
  - the system displays, below the text field, a list of customers whose first name,
  last name matches the text entered.
  - the system persists the text in the URL as a query param, in such a way that I can search a particular with a coworker.

## Evaluation

1. Use Github issues to break down clearly the main use case into deliverable tasks.  
2. Focus on small, well tested, incremental changes that are easy to test and demo.
3. Own your architecture decisions and your strategy to write tests, be pragmatic: regardless you went for a Single Page App or server-side rendered HTML.
4. Take into account team collaboration, and how would you set up other engineers, who are new to the project, for success.

We expect you to use Ruby, Ruby on Rails or Elixir for the backend, and any form of modern JavaScript for the front-end. Feel free to leverage a JS/CSS framework to build a simple and functional user interface.

The MVP will be used as a starting point to continue working on it during your on-site interview:
  - You will demo the main use case,
  - You will spend the day with the engineering team pairing to build out some features specified below in the Additional Scenarios section.


## Additional Scenarios
We will pair with you for a couple of hours during your on site interview. We will likely
write these feature and additional scenarios.

- Pagination. You can use a Name generator to seed your UI's data source. https://github.com/stympy/faker
- Instrument User Activity happening in the page.
- Implement a basic A/B test with Optimizely.
- Search customers by the name of the company they work for, or their address.
