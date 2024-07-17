
# GUIDES

Please read below and follow while developing. This is how dev flow goes in here.

In our Blog Page Github Repo, There will be three branches `main` `staging` `development` and we are going the follow the development flow as below
```
main
 /\
 ||
staging
 /\
 ||
development
```
## Workflow

All of us need to work on development branch. Make sure to follow conventional commits for all your changes. Use the following types:

  * feat: A new feature
    * Example: `feat: add authentication module`
    * When to Use: This type of commit is suitable when introducing a new feature to the codebase. It might involve adding a significant functionality or capability to the project.

  * fix: A bug fix
    * Example: `fix: resolve issue with user login`
    * When to Use: Use this commit type when addressing and fixing bugs in the code. It helps distinguish bug fixes from other changes in the version history.

  * docs: Documentation only changes

#### For more info see [convention commits](https://www.conventionalcommits.org/en/v1.0.0/)
#### Please these commit style generation of CHANGELOGs with help of tools like [semantic-release](https://github.com/semantic-release/semantic-release)


 * Raising Pull Requests:
   * If you have completed your task, raise a Pull Request (PR) from the `development` branch to the `staging` branch.
  
    * Provide clear and concise description of the changes., including the type of changes based on conventional commits.

    * Ensure your PR is reviewed and approved by at least one other team member before merging.

 * Staging Branch:
   * Once your changes are merged into the staging branch, they will undergo further testing.
   * Only tested and stable changes from the staging branch will be merged into the main branch.

 * Main Branch:
    The main branch will hold the production-ready code.
    Any deployment to production will be done from the main branch after thorough testing in the staging branch.


By following this structured approach, we ensure that our codebase remains clean, stable, and production-ready. Thank you for your cooperation and adherence to these new guidelines

## Pull Request Guidelines

* Development Branch PRs: Once your feature or bugfix is complete, raise a PR to merge your branch into the development branch. Include a clear and concise description of the changes
* Staging Branch PRs: After thorough testing and when development is stable, you should raise a PR to merge development into the staging branch.
* Main Branch PRs: For hotfixes or when a release is ready, we will raise a PR to merge staging into the main branch.

## **Example Workflow**

Let's go through an example workflow to illustrate the process:
Step 1: Start Working on a Task

* Task Assignment:
  * You are assigned a task to add a new feature to the Career Page.

Checkout the Development Branch:

```bash
git checkout development
```

Step 2: Make Your Changes

* Develop the Feature:
  * Add the code for the new job application form.
  * Make sure to write tests and update documentation if necessary.
  * Commit Your Changes Using Conventional Commits:

```bash
    git add .
    git commit -m "feat: add job application form with validation"
```

Step 3: Push Your Branch

 * Push Your Branch to the Remote Repository:

```bash
git push origin feature/add-job-application-form
```

Step 4: Create a Pull Request

* Open a Pull Request:
    * Go to the repository on GitHub.
    * Create a new Pull Request from feature/add-job-application-form to development.

  * Provide a Detailed Description:
        In the PR description, include:
            A summary of the changes.
            The type of changes based on conventional commits.
            Any relevant information for the reviewers.

    Example Description:

    markdown

    ### Summary
    - Added a new job application form with client-side validation.

    ### Changes
    - `feat`: Added job application form component.
    - `docs`: Updated README with instructions on how to use the new form.
    - `test`: Added unit tests for the form validation logic.

    ### Additional Information
    - Ensure to test the form on different browsers.

    Request Reviews:
        Request reviews from at least one other team member.

Step 5: Code Review and Merge

    Code Review:
        The team reviews your PR, leaves comments, and requests changes if necessary.

    Address Feedback:
        Make any requested changes and push the updates to your branch.

    Merge the PR:
        Once approved, merge the PR into the development branch.