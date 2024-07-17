# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## v0.6(13 July 2024)
### :tada:Features
 * **category**:  create new category while selecting others and it will update in landing pasge as well

### :bug:Bug Fixes:
 * **category**: 
   * automatically scrolls to category list on click any button by using ID
   * overlapped image in mobile view
 * **Login Page**: add logo to login page
 * **card**: allow data to cache by removing "no-store"
 * **pagination**: add ID tag so that it can move directly to section
 * **server components**:  cache enabled for all server compnents

### Chore:
 * **folder**: re-arrange auth route and layout for login page

## v0.5(12 July 2024)
### :tada:Features
 * **edit blog**: 
   * edit blog API and UI is running
   * API endpoint to update blog in the database
### :bug:Bug Fixes:
 * **build**:  all build type errors are cleared
 * **package.json**:  Update prisma client version to 5.16.2
 * **write blog**: 
   * write blog work with category
   * write blog with image upload success
 * **myblog**: 
   * create grid layout for myblog page
   * add conditional redirect using session
   * remove async for client component
 * **blogpage**:  
   * Modifiy Image container
   * styles in  author container
   * sanitaize and parse html content with styles
 * **UI Fixes**:
   * Responsiveness :catagory list
   * blog page
   * comment
   * footer
   * card

### Chores
 * **server**: made change in API URL
 * **env**: update from ENV PROD to ENV LOCAL


## v0.4(11 July 2024)
### :tada:Features
 - **Editor**: create blog creator page(MEDIUM CLONE EDITOR)
 - **Upload Blog**: Default UI for publish new blogs working
 - **pagination**: create pagination functionalities
the pagination button is disabled based on count of data
  - **comments**: create comment system with 
    - GET and POST API endpoint for fetching and posting comments
    - where logged in users can only login through it 

### :bug:Bug Fixes
  - **card**: fetch data from DB and display in blog page
    - Using searchParams I managed to display the blog cards based on page and category
  - **posts/[slug]**: API endpoint to fetch single POST
  - **UI**: UI fixes
    - UI in layout.tsx , global css , Footer , and scrolltotopbutton, header , navbar, landing page
    - responsivness in the loginpage
  - **WRITE**: publish blog works, but prisma is in error need to figure that out
### Chores:
  - **server** create server files



## v0.3(10 July 2024)
### :tada:Features
 - **Admin Login**: admin's can login through special page only with skillmate.ai sub-domain email
   - It will only accept skillmate.ai subdomain from client-side itself
 - **Card**: create UI layout for CardList and Card component
   - built a responsive UI for card component with better approach
 - **EditBlog**: Implement GET api for edit
 - **UploadBlogNew**:  create bubble themed text editor(Medium Clone) for creating blog post
 - **blog/[slug]**: create single post page
 - **Cookie Popup**: Cookie when the user logged in first time

### :bug:Bug Fixes
  - **myblog**: add image in myblog page. need responsiveness
  - **landing page**: add images in the landing page
  - **authOptions**: add Credentials Provider and validates with database using prisma
  - **categories**: restructure links in categories to new component


## v0.2 (9 July 2024)
### :tada:Features
 - **Landing Page**: add landing page
 - **footer**: add footer component to landing page
 - **API Route**:
   -  upload blog
 - **success card**:  create success popup
 -  Added Privacy, Terms and Cookies folders.
 -  **Upload Blog**
    -  Blog upload form
    -  upload images
 - **MyBlog** 
   - create GET api endpoint for my blogs page
   - display blog array from DB
 - **Card**  Create Card Component

### :bug:Bug **Fixes**
 - **Blog**: Create Myblog page for admins
 - **NavBar**: remove login route
 - **Write Blog**: api for post, schema changed
 - **Footer** 
   - Changes from image to icons
   - Add social links in footer

## v0.1 (8 July 2024)
### :tada:Features
 - **auth**: created roles for authentication.
### :bug:Bug **Fixes**
 - **prisma**: prisma model generated successfully
 - **DB**: create database model and user authentication working