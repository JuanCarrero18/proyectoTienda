import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import { Users } from './users.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  showEmail: boolean = false;
  showError: boolean= false;
  loginMessage: string = 'sus credenciales son correctas';
  errorMessage: string = 'Este usuario ya existe';
  users: Users[] = [];
 
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
  });

  constructor(private service: ServicesService, private router : Router) {}

  ngOnInit(): void {
    this.getUsers();
  
  }

  onSubmit(event: any): void {
    const email: string | undefined = this.loginForm.get('email')?.value;
    const password: string | undefined = this.loginForm.get('password')?.value;
    const username: string | undefined = this.loginForm.get('username')?.value;
    console.log(event);
    console.log(password, username);

    if (event.submitter.value === 'register' && this.userAlreadyExist(email)) {
    this.emailTrue()
    
    } else if (
      event.submitter.value === 'register' &&
      !this.userAlreadyExist(email)
    ) {
      this.addUser();
      this.loginForm.reset();
    }
    if (
      event.submitter.value === 'login' &&
      this.userCorrect(password, username)
    ) {
      this.showError=false;
      this.router.navigate(['home'])
    } else {

      this.loginFalse()
    }
    console.log(this.userCorrect(password, username));
  }
  addUser(): void {
    const newUsers: Users = this.loginForm.value;
    console.log(newUsers);

    this.service.addUser(newUsers).subscribe((newUsers: Users) => {
      if (newUsers) {
        console.log(newUsers);
        this.getUsers()
      }
    });
  }
  private getUsers(): void {
    this.service.getUsers().subscribe((users: Users[]) => {
      if (users) {
        console.log(users);

        this.users = users;
        
      }
    });
  }

  userAlreadyExist(email: string | undefined): boolean {
    let user: Users | undefined;
    if (email) {
      user = this.users.find((user) => {
        return email === user.email;
      });
    }

    if (user) {
      return true;
    } else {
      return false;
    }
  }

  userCorrect(
    password: string | undefined,
    userName: string | undefined,
  ): boolean {
    let user: Users | undefined;

    user = this.users.find((user) => {
      return password === user.password && userName === user.username;
    });

    if (user) {
      this.service.setUserLogin(user)
      return true;
    } else {
      return false;
    }
  }
  registerToggle() {
    this.showEmail = !this.showEmail;
  }
  emailTrue(){
     this.showError = true
      setTimeout(() => {
    this.showError = false;
  }, 5000);
     this.errorMessage = "este usuario ya existe"

  }
  loginFalse(){
    this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 5000);
      this.errorMessage="alguno de los datos es incorrecto";
  }
  
}







// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { ServicesService } from 'src/app/services.service';
// import { Users } from './users.interface';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.scss'],
// })
// export class UsersComponent implements OnInit {
//   showEmail: boolean = false;
//   showError: boolean= false;
//   loginMessage: string = 'sus credenciales son correctas';
//   errorMessage: string = 'Este usuario ya existe';
//   users: Users[] = [];
 
//   loginForm: FormGroup = new FormGroup({
//     email: new FormControl('', [Validators.email, Validators.required]),
//     password: new FormControl('', [Validators.required]),
//     username: new FormControl('', [Validators.required]),
//   });

//   constructor(private service: ServicesService, private router : Router) {}

//   ngOnInit(): void {
//     this.getUsers();
  
//   }

//   onSubmit(event: any): void {
//     const email: string | undefined = this.loginForm.get('email')?.value;
//     const password: string | undefined = this.loginForm.get('password')?.value;
//     const name: string | undefined = this.loginForm.get('name')?.value;
//     console.log(event);
//     console.log(password, name);

//     if (event.submitter.value === 'register' && this.userAlreadyExist(email)) {
//     this.emailTrue()
    
//     } else if (
//       event.submitter.value === 'register' &&
//       !this.userAlreadyExist(email)
//     ) {
//       this.addUser();
//       this.loginForm.reset();
//     }
//     if (
//       event.submitter.value === 'login' &&
//       this.userCorrect(password, name)
//     ) {
//       this.showError=false;
//       this.router.navigate(['home'])
//     } else {

//       this.loginFalse()
//     }
//     console.log(this.userCorrect(password, name));
//   }
//   addUser(): void {
//     const newUsers: Users = this.loginForm.value;
//     console.log(newUsers);

//     this.service.addUser(newUsers).subscribe((newUsers: Users) => {
//       if (newUsers) {
//         console.log(newUsers);
//         this.getUsers()
//       }
//     });
//   }
//   private getUsers(): void {
//     this.service.getUsers().subscribe((users: Users[]) => {
//       if (users) {
//         console.log(users);

//         this.users = users;
        
//       }
//     });
//   }

//   userAlreadyExist(email: string | undefined): boolean {
//     let user: Users | undefined;
//     if (email) {
//       user = this.users.find((user) => {
//         return email === user.email;
//       });
//     }

//     if (user) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   userCorrect(
//     password: string | undefined,
//     userName: string | undefined,
//   ): boolean {
//     let user: Users | undefined;

//     user = this.users.find((user) => {
//       return password === user.password && userName === user.name;
//     });

//     if (user) {
//       this.service.setUserLogin(user)
//       return true;
//     } else {
//       return false;
//     }
//   }
//   registerToggle() {
//     this.showEmail = !this.showEmail;
//   }
//   emailTrue(){
//      this.showError = true
//       setTimeout(() => {
//     this.showError = false;
//   }, 5000);
//      this.errorMessage = "este usuario ya existe"

//   }
//   loginFalse(){
//     this.showError = true;
//       setTimeout(() => {
//         this.showError = false;
//       }, 5000);
//       this.errorMessage="alguno de los datos es incorrecto";
//   }
  
// }
