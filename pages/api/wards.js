// Fake users data
import pkg from 'vietnam-provinces';

const { getWards } = pkg;

export default function handler(req, res) {
  const results = getWards(req.query.district);
  res.status(200).json(results);
}
