const populateCategory = (cats) => {
    const categoriesElement = '<div class="cate'>
    cats.forEach(cat => {
        categoriesElement += `<span class=""><a href="#">${cat}</a></span>`;
    });
    categoriesElement += '<div class="cate'>
}

const renderPopularMovies = (movies) => {
	const popularMovieElement = $('.slick-multiItem2');;
	popularMovieElement.innerHTML = "";

	movies.forEach(movie => {
        popularMovieElement.innerHTML += `
                                <div class="movie-item">
                                    <div class="row">
                                        <div class="col-md-8 col-sm-12 col-xs-12">
                                            <div class="title-in">
                                                <div class="cate">
                                                    <span class="blue"><a href="#">Sci-fi</a></span>
                                                    <span class="yell"><a href="#">Action</a></span>
                                                    <span class="orange"><a href="#">advanture</a></span>
                                                </div>
                                                <h1><a href="#">${title}<span>${year}</span></a></h1>
                                                <div class="mv-details">
                                                    <p><i class="fas fa-star"></i><span>7.4</span> /10</p>
                                                    <ul class="mv-infor">
                                                        <li>  Run Time: 2h21’ </li>
                                                        <li>  Rated: PG-13  </li>
                                                        <li>  Release: 1 May 2015</li>
                                                    </ul>
                                                </div>
                                                <div class="btn-transform transform-vertical">
                                                    <div><a href="#" class="item item-1 redbtn">more detail</a></div>
                                                    <div><a href= "#" class="item item-2 redbtn hvrbtn">more detail</a></div>
                                                </div>		
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-12 col-xs-12">
                                            <div class="mv-img-2">
                                                <a href="#"><img src="http://image.tmdb.org/t/p/w342/bOKjzWDxiDkgEQznhzP4kdeAHNI.jpg" alt=""></a>
                                            </div>
                                        </div>
                                    </div>	
                                </div>`;


		listBookElement.innerHTML += `
			<div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
				<div class="card">
					<div class="card-body">
						<h5>(${book.id}) ${book.title}</h5>
						<p>${book.author}</p>
						<button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
					</div>
				</div>
			</div>
		`;
	});
};

export default renderAllBooks;