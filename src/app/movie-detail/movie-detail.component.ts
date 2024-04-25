import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  

  @Input()movie!: Movie;
  constructor(
    private movieService:MovieService,
    private route: ActivatedRoute,
    private location:Location
  ){}
  ngOnInit() {
    this.getMovie();
  }
  
  // getMovie():void{
  //   const id= +this.route.snapshot.paramMap.get('id');
  //   this.movieService.getMovie(id)
  //      .subscribe(movie=>this.movie=movie);
  //  }
  
  getMovie(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
        const id = +idParam;
        this.movieService.getMovie(id)
            .subscribe(movie => {
                if (movie) {
                    this.movie = movie;
                } else {
                    console.error('Movie not found');
                }
            });
    } else {
        console.error('Movie ID is null or undefined');
    }
}

save(): void{ //değer döndürmez
  this.movieService.update(this.movie) 
  //fadesi, movieService adlı bir servisin update() yöntemini çağırır. 
  //Bu yöntem, düzenlenen film verilerini güncellemek veya kaydetmek için kullanılır. 
  //this.movie ifadesi, formdaki düzenlenen film nesnesini 
  //temsil eder ve bu nesne update() yöntemine iletilir.
  //update() yöntemi tarafından döndürülen Observable'ı (gözlemleyici) dinler. 
  //Bu Observable, işlem başarıyla 
   //tamamlandığında bir geri çağrı fonksiyonunu tetikler.
  .subscribe(()=>{
    this.location.back();
    //Bu ifade, kullanıcının bir önceki sayfaya geri dönmesini sağlayan
    // Angular'ın yerleşik Location hizmetini kullanır. Yani, kullanıcı film düzenleme
    // işlemi tamamlandığında 
    //otomatik olarak bir önceki sayfaya yönlendirilir.
  });
}





}  
