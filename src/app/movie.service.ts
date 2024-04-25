import { Injectable } from '@angular/core';
import { Movie } from './movie';
import  {Movies } from './movie.datasource';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


 @Injectable({ //uygulamanın root üzerinden ulaşılması
  providedIn: 'root'
})
export class MovieService {
  private apiMoviesUrl='/api/movies'

  constructor(private loggingService: LoggingService,
    private http: HttpClient
    
    ) { }

  getMovies(): Observable <Movie[]> { //HttpClient aracılığıyla belirtilen API URL'sine bir HTTP GET isteği gönderir ve dönen sonucu bir Observable olarak döndürür.
    this.loggingService.add('MovieService: listing movies');
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }
  // getMovie(id):Observable<Movie>{
  //   this.loggingService.add('MovieService: get detail by id ='+id)
  //   return of(Movies.find(movie=>movie.id===id));
  // }

  getMovie(id: number): Observable<Movie | undefined> {
    this.loggingService.add('MovieService: get detail by id =' + id);
    return this.http.get<Movie>(this.apiMoviesUrl+ '/' +id);
}

update(movie: Movie):Observable<any>{
  const httpOptions={
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  return this.http.put(this.apiMoviesUrl, movie, httpOptions)

}


// belirtilen film nesnesini ve güncelleme için 
// HTTP isteği yapmak için gerekli olan HTTP seçeneklerini alır.
//  Daha sonra, HttpClient aracılığıyla belirtilen API URL'sine bir 
//  HTTP PUT isteği gönderir ve dönen sonucu bir Observable olarak döndürür.

add(movie:Movie):Observable<Movie>{
  return this.http.post<Movie>(this.apiMoviesUrl, movie);
}
//  bir Movie nesnesi alarak Observable<Movie>
//   türünde bir değer döndürür. Bu değer, HTTP POST isteği
//    sonucunda backend tarafından döndürülen yanıttır. 
//    Bu yanıtın bir Movie nesnesi olması beklenir.


//belirttiğimiz adrese post req yap ve post req body'ye movie bilgisini gönder 

delete(movie:Movie):Observable<Movie>{
  return this.http.delete<Movie>(this.apiMoviesUrl + '/' + movie.id );
}

}

