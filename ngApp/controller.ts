namespace MyApp {

class MovieListController {
public movies;

constructor() {
  this.movies = [
    {id:1, title: 'Inception', director:'Nolan'},
    {id:2, title: 'Interstellar', director:'Nolan'},
    {id:3, title: 'The Departed', director:'Scorsese'},
    {id:4, title: 'The Usual Suspects', director:'Singer'},
    {id:5, title: 'The Avengers', director:'Whedon'}
  ]
 }
}
 angular.module('MovieApp').controller('MovieListController', MovieListController);




}
