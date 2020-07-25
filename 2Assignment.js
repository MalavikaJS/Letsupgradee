console.log('hi');

    class User {
        constructor(name, age,email) {
          this.name = name;
          this.age = age;
          this.email = email;
          this.luCoins = 0;
          this.courses = [];
        }
         static greet(){
            console.log("Welcome to the Javascript Course");
        }
    
        login(){
            console.log(`${this.name} has logged in`);
            return this;
        }
        logout(){
            console.log(`${this.name} has logged out`);
            return this;
        }
        addCoins(){
            this.luCoins++;
            console.log(`${this.name} has ${this.luCoins} coins`);
            return this;
        }
        getDetails(){
            console.log(`Name is ${this.name}, email is ${this.email}`);
            return this;
        }
    
    }
    
    class Moderator extends User{
        constructor(name,age,email,role){
            super(name,age,email);
            this.role = role;
        }
    
        deleteUser(user){
            users = users.filter(u =>{
                return u.email != user.email; 
            })
        }
    
    }
    
    class Admin extends Moderator{
       addCourse(user,course){
           user.courses.push(course);
           console.log(user);
       }
    }
    
    
    let user1 = new User('Dora',18,'girl@gmail.com')
    let user2 = new User('Buji',16,'buji@gmai.com')
    let mod = new Moderator('Map',20,'mappy@gmail.com','Moderator');
    let admin = new Admin('Backpack',19,'baggy@gmail.com');
    let users = [user1,user2,mod,admin];
    
    users.forEach(element => {
        console.log(element);
    });
    
    User.greet();
    admin.addCourse(user1,'Javascript');
    admin.addCourse(user2,'Cpp');

 user1.login()
 user1.addCoins();
 user1.addCoins();
 user1.addCoins();
 user1.logout()

 user1.login().addCoins().addCoins().getDetails().logout();

 user2.login()
 user2.addCoins();
 user2.addCoins();
 user2.addCoins();
 user2.logout()

 user2.login().addCoins().addCoins().getDetails().logout();

 mod.deleteUser(user1);
 console.log(users);


