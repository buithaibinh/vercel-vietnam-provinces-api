// Fake users data
import pkg from 'vietnam-provinces';

const { getDistricts } = pkg;

export default function handler(req, res) {
  const results = getDistricts(req.query.city);
  res.status(200).json(results);
}
