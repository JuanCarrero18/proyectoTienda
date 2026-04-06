import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UsersModule } from 'src/app/components/users/users.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule,UsersModule],
  exports: [LoginComponent],
})
export class LoginModule {}
