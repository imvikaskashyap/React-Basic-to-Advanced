import React from "react";
import cart from "./assets/icons8-shopping-cart (1).gif";

const Home = () => {
	return (
		<>
			<div className="px-1 my-1 bg-light rounded-3 py-5">
				<img
					style={{ position: "absolute", right: "1%", top: "1%" }}
					src={cart}
					alt=""
				/>
				<div className="container py-1">
					<div className="d-flex  align-items-center justify-content-center">
						<div className="col-md-4 ">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4KbKFQe14beB1i_CBrmfQ3M_gDXq2t4tJcSZU4ZLX&s"
								height="200px"
								width="180px"
								style={{ objectFit: "cover" }}
							/>
						</div>
						<div className=" col-md-4 mt-3" style={{ marginLeft: "20px" }}>
							<h3>Iphone</h3>
							{/* <p className="lead fw-bold">
								{product.qty} X ₹{product.price} = ₹
								{product.qty * product.price}
							</p> */}
							<div className=" mx-auto">
								<button
									style={{ backgroundColor: "#ffc300" }}
									className="btn btn-sm me-4 "
									// onClick={() => handleDel(product)}
								>
									<i className="fa fa-minus"> Remove </i>
								</button>
							</div>
							{/* <button
									className="btn btn-outline-dark"
									onClick={() => handleAdd(product)}>
									<i className="fa fa-plus"> + </i>
								</button> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
