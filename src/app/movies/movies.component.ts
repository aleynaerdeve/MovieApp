// import { Component } from '@angular/core';
// import { Movie } from '../movie';
// import { MovieService } from '../movie.service';

// @Component({
//     selector: 'movies'  ,
//     templateUrl: 'movies.component.html'
// })
// export class MoviesComponent {
//     title = 'Movie List';
//     movies!: Movie[];
//     selectedMovie!: Movie;
    
//     constructor(private movieService:MovieService){}

//     ngOnInit(): void {
//         this.getMovies();
//     }

//     onSelect(movie:Movie): void {
//         this.selectedMovie = movie; 
//         //moviecomponent içindeki selected movie yi dışarıdan gönderdiğim movie'ye atadım

//     }

//     getMovies():void {
//     this.movieService.getMovies()
//         .subscribe(movies=> {
//           this.movies=movies;
//         });
//     }

//     add(name:string,imageUrl:string, description:string):void{
//     this.movieService.add({
//         name,
//         imageUrl,
//         description
//     } as Movie).subscribe(movie=> this.movies.push(movie))

//     // İlk olarak, add metodu, name, 
//     // imageUrl ve description parametrelerini alır ve bu değerlerle bir Movie nesnesi oluşturur.
//     // bu nesneyi movieService.add metodu aracılığıyla HTTP POST isteği göndererek
//     //  backend'e ekler. Backend işlemi tamamlandığında, geri dönen film nesnesi (movie) subscribe 
//     //  fonksiyonu aracılığıyla alınır ve mevcut movies dizisine eklenir.


//     }
//     delete(movie:Movie):void{
//         this.movies=this.movies.filter(m=>m!==movie);
//         this.movieService.delete(movie).subscribe();
//     }

// }


import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html'
})
export class MoviesComponent {
    title = 'Movie List';
    movies!: Movie[];
    selectedMovie!: Movie;

    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
        this.getMovies();
    }

    onSelect(movie: Movie): void {
        this.selectedMovie = movie;
    }

    getMovies(): void {
        this.movieService.getMovies()
            .subscribe(movies => {
                this.movies = movies;
            });
    }

    add(name: string, imageUrl: string, description: string): void {
        this.movieService.add({
            name,
            imageUrl,
            description
        } as Movie).subscribe(movie => this.movies.push(movie));
    }
    // İlk olarak, add metodu, name, 
//     // imageUrl ve description parametrelerini alır ve bu değerlerle bir Movie nesnesi oluşturur.
//     // bu nesneyi movieService.add metodu aracılığıyla HTTP POST isteği göndererek
//     //  backend'e ekler. Backend işlemi tamamlandığında, geri dönen film nesnesi (movie) subscribe 
//     //  fonksiyonu aracılığıyla alınır ve mevcut movies dizisine eklenir.

    delete(movie: Movie): void {
        this.movies = this.movies.filter(m => m !== movie);
        this.movieService.delete(movie).subscribe();
    }

}