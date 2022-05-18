// Fake users data
import pkg from 'vietnam-provinces';

const { getProvinces } = pkg;

export default function handler(req, res) {
  const results = getProvinces();
  res.status(200).json(results);
}
