const handleHttpError = (res, mess = 'Something Happen', code = 403) => {
    res.status(code);
    res.send({ error: mess });
}

module.exports = { handleHttpError };