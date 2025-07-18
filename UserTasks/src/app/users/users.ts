import { Component} from '@angular/core';
import users from '../assets/users.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-users',
  imports: [CommonModule,FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  users: any[] = users.users;
  searchText: any;
  filteredUsers: any[] = users.users;


  filterUsers(): void {
    const term = this.searchText.toLowerCase().trim();
    this.filteredUsers = this.users.filter(user =>
      user.email.toLowerCase().includes(term)
    );
  }

  ResetfilterUsers(): void {
    const term = this.searchText.toLowerCase().trim();
    this.filteredUsers = this.users;
  }
}
