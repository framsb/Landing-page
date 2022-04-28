import React from "react";

export const Cards = () => {
	return (
		<div class="col-lg-3 col-md-4 mx-auto">
			<div className="card text-center">
				<img
					src="https://images.unsplash.com/photo-1422422153408-a3298d6d542c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
					className="card-img-top"></img>
				<div className="card-body">
					<h5 class="card-title">Card title</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vestibulum tristique elit sed augue imperdiet pretium.
					</p>
				</div>
				<div class="card-footer">
					<small class="text-muted">
						<a href="#" class="btn btn-primary">
							Find Out More!
						</a>
					</small>
				</div>
			</div>
		</div>
	);
};
