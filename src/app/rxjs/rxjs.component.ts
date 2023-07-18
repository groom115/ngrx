import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  users = [
    { id: 1, name: 'abhishek', isActive: true },
    { id: 2, name: 'john', isActive: true },
    { id: 3, name: 'ryan', isActive: true },
  ];
  user$ = new BehaviorSubject<{ id: number; name: string } | null>(null);
  users$ = of(this.users);
  username$ = this.users$.pipe(map((users) => users.map((user) => user.name)));
  data$ = combineLatest([this.users$, this.username$]).pipe(
    map(([user, username]) => ({
      user,
      username,
    }))
  );

  ngOnInit(): void {
    this.user$.next({ id: 1, name: 'abhishek' });
    this.user$.subscribe((user) => {
      console.log(user);
    });
  }
}
