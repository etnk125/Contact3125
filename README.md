# EGCO427: Assignment 1(20%)–MAX. 2members/group
Create the “Contact List” web application by using Node.js and/or Vue.js(v3). This web application must contain the list of features below.Your Vue project name must be “Contact<Last 4 Digits of StudentID>” such as Contact2345.Select ID from one of your group membersThere are 5 marks deduction if you do not set the the project name according to the assigned format.
- (1 mark)Use MongoDB for your database
  - Set your database name: ContactList
  - Set your collection name: Contacts-UI can be download from FormaticUI oSemantic UI: https://github.com/nightswinger/vue-fomantic-ui
- The images can be downloaded from this URL below:
  - https://nightswinger.github.io/vue-fomantic-ui/views/card
- For UI, try to make it similar to the example below but may not exactly the same as example

1. **LoginPage**:(2 marks) User can access the contact list in Figure 1 after their login. 
   - You must create a simple login page (Figure 2) that can use to check username and password whether they can be matched with one of usernames and passwords in the database.
   - Set one of your accounts in database must be:
     - Username: bob 
     - Password: 1234
  
2. **New Contact Page**:(2 marks) When user clicks “+ Add” button (Orange button), it will go to “New Contact Page” as shown below.When“Save” button is clicked, the information in this form will be saved to database via “add” API.
   
3. **Edit Contact Page**:(3 marks)When the user clicks at “Edit” button (Blue button), it will go to “Edit Contact” page.  After the information has been edited and save button is clicked, the information will be saved to database.

4. **Delete**:(2mark)When user clicks at “Delete” button (Red button), that contact will be removed from database and also removed from Contact List page
   
5. **Search**:(3marks) User can search a contact according to the FirstName or LastName.
   
6. **NODE API**: (7marks)This web application must integrate with the REST API as shown below. Your NodeJS’s filename to run all API must be “server.js”

## Example of CRUD for REST API
| #   | method | url                                | Response Message                |
| --- | ------ | ---------------------------------- | ------------------------------- |
| 1   | POST   | http://localhost:5000/contacts/    | Add new contact => that contact |
| 2   | GET    | http://localhost:5000/contacts/    | Show All Contact                |
| 3   | GET    | http://localhost:5000/contacts/:id | Show One Contact                |
| 4   | POST   | http://localhost:5000/contacts/:id | Edit Contact => that contact    |
| 5   | DELETE | http://localhost:5000/contacts/:id | Delete One => Delete message    |
---
### Contact
``` json
{
  "cid" : "<Contact id>",
  "firstname" : "<Contact firstname>",
  "lastname" : "<Contactlastname>",
  "email" : "<Contactemail>",
  "mobile" : "<Contactmobile number>",
  "facebook" : "<Contact facebook>",
  "imageUrl" : "<Contact imake>"
}
```
### Delete message

``` json
{ 
  "message":"This contact has been deleted",
  "firstname":<Contact firstname>
}
``` 

---
## Submission(0 marks if you missed one of these stepsbelow)
- Create  the  video  demonstration  of  your  assignment  (.mov,  .avi  or  .mp4  )and  upload  to  your bitbucket under “Info” folder. 
- Use Mongo Atlas as your cloud database
- Deploy yourFrontend and Backend to the Google Cloud server, Heroku or MS Azure server 
- Upload  your  code  to bitbucket and  set  your  repository  as  a  private  repository.  Then  add  my account: [lalita.nar@mahidol.edu] as your collaborator to your repository.
- Add the  repository  URL,  your  virtual  host  URLand  the  list  of  members  in  your  group  including student ID and Full name to Readme.txt and upload to your bitbucket under “Info” folder.
- **Readme.txt**
  - Repository URL: [http://bitbucket.com/username/Contact2345]
  - Vue Server: [http://username.firebase.app/Contact2345]
  - Node Server: [http://username.gcloud.com/Contact2345]
  - Member:
    - [Natthawee Koengfak](https://github.com/etnk125) ID: 6213125
    - [Nicharee Chaloemsuksri](https://github.com/nnichar) ID: 6213198
- Submit only the bitbucket URL to Microsoft Team and only one submission per group
---
# Assignment 1

## Due April 18, 2022 9:00 AM - Closes April 18, 2022 11:59 PM

### Instructions

- Please follow the instructions in the [attached](ins.pdf) file for details.

- API DOCUMENT: https://documenter.getpostman.com/view/2345572/UVsQrPUh

### Points 

20 points possible

---