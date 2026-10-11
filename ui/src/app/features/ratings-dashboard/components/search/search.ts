import { Component, input, output, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  searchChange = output<string>();
  value = signal('');

  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor() {
    this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe((value: any) => {
      this.searchChange.emit(value);
    });
  }

  search(event: any) {
    const value = (event.target as HTMLInputElement).value;
    this.value.set(value);
    this.searchSubject.next(value);
  }
}
