var MyApp;
(function (MyApp) {
    var MovieListController = (function () {
        function MovieListController() {
            this.movies = [
                { id: 1, title: 'Inception', director: 'Nolan' },
                { id: 2, title: 'Interstellar', director: 'Nolan' },
                { id: 3, title: 'The Departed', director: 'Scorsese' },
                { id: 4, title: 'The Usual Suspects', director: 'Singer' },
                { id: 5, title: 'The Avengers', director: 'Whedon' }
            ];
        }
        return MovieListController;
    }());
    angular.module('MovieApp').controller('MovieListController', MovieListController);
})(MyApp || (MyApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxLQUFLLENBb0JkO0FBcEJELFdBQVUsS0FBSztJQUVmO1FBR0E7WUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHO2dCQUNaLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBQyxPQUFPLEVBQUM7Z0JBQzVDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBQyxPQUFPLEVBQUM7Z0JBQy9DLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBQyxVQUFVLEVBQUM7Z0JBQ2xELEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFDLFFBQVEsRUFBQztnQkFDdEQsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFDLFFBQVEsRUFBQzthQUNqRCxDQUFBO1FBQ0YsQ0FBQztRQUNGLDBCQUFDO0lBQUQsQ0FBQyxBQVpELElBWUM7SUFDQSxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBS25GLENBQUMsRUFwQlMsS0FBSyxLQUFMLEtBQUssUUFvQmQiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgTXlBcHAge1xuXG5jbGFzcyBNb3ZpZUxpc3RDb250cm9sbGVyIHtcbnB1YmxpYyBtb3ZpZXM7XG5cbmNvbnN0cnVjdG9yKCkge1xuICB0aGlzLm1vdmllcyA9IFtcbiAgICB7aWQ6MSwgdGl0bGU6ICdJbmNlcHRpb24nLCBkaXJlY3RvcjonTm9sYW4nfSxcbiAgICB7aWQ6MiwgdGl0bGU6ICdJbnRlcnN0ZWxsYXInLCBkaXJlY3RvcjonTm9sYW4nfSxcbiAgICB7aWQ6MywgdGl0bGU6ICdUaGUgRGVwYXJ0ZWQnLCBkaXJlY3RvcjonU2NvcnNlc2UnfSxcbiAgICB7aWQ6NCwgdGl0bGU6ICdUaGUgVXN1YWwgU3VzcGVjdHMnLCBkaXJlY3RvcjonU2luZ2VyJ30sXG4gICAge2lkOjUsIHRpdGxlOiAnVGhlIEF2ZW5nZXJzJywgZGlyZWN0b3I6J1doZWRvbid9XG4gIF1cbiB9XG59XG4gYW5ndWxhci5tb2R1bGUoJ01vdmllQXBwJykuY29udHJvbGxlcignTW92aWVMaXN0Q29udHJvbGxlcicsIE1vdmllTGlzdENvbnRyb2xsZXIpO1xuXG5cblxuXG59XG4iXX0=