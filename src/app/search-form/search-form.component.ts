import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup = this.fb.group({
    searchTerm: ['', Validators.required]
  });
  movies: Movie[] = [];

  constructor(private fb: FormBuilder, private movieService: MovieService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchTerm: ['', Validators.required]
    });
  }

  search() {
    const searchTerm = this.searchForm.get('searchTerm')?.value;

    if (searchTerm) {
      this.movieService.searchMovies(searchTerm)
        .subscribe(data => {
          this.movies = data;
          console.log(data);
        });
    }
  }
}

