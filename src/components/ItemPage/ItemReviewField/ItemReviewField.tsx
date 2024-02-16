import "./ItemReviewField.css";

const ItemReviewField = () => {

	const handleReviewSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const author = e.currentTarget[0] as HTMLInputElement;
		const review = e.currentTarget[2] as HTMLInputElement;
		const date = new Date();
	}
	return (
		<form onSubmit={handleReviewSubmit} className="itemReviewForm">
			<div className="revieAutorContainer">
			<label className="itemReviewLabel">Author
				<input type="text" name="author" className="itemReviewField" required/>
			</label>
			<button type="submit" className="itemReviewButton">Sent</button>
			</div>

			<label className="itemReviewLabelArea">Review
				<textarea name="review" className="itemReviewFieldArea" wrap="soft" required></textarea>
			</label>
		</form>
	)
}

export default ItemReviewField