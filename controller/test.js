const testController = (req, res) => {
  return res.send({
    message: "this is for testing",
  });
};
module.exports = testController;
