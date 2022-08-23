import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/sevices/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  loading: boolean = true;

  constructor(private _noteService: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    this._noteService.getNotes().subscribe(
      ({ data }) => {
        this.loading = false;
        this.notes = data;
      },
      (error) => {
        this.loading = false;
        console.log(error);
      }
    );
  }

  deleteNote(id: number) {
    this.loading = true;
    this._noteService.deleteNote(id).subscribe(
      (data) => {
        setTimeout(() => {
          this.loading = false;
        }, 2000);
        this.getNotes();
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  editNote(id: number) {}
}
