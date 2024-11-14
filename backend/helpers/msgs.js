function successRespoonse(stat, msg, data, statusCode) {
  return { status: stat, message: msg, data: data, code: statusCode };
}

module.exports = {
  successRespoonse,
};
