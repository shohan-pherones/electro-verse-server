const createUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {};

module.exports = { createUser, loginUser };
