export function updateProductReviews () {
  return (req: Request, res: Response, next: NextFunction) => {

    if (typeof req.body.id !== 'string') {
      res.status(400).send()
      return
    }

    db.reviewsCollection.update(
      { _id: req.body.id },
      { $set: { message: req.body.message } }
    ).then(
      (result) => { res.json(result) },
      (err) => { res.status(500).json(err) }
    )
  }
}
