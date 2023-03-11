module.exports = (err, res, status, msg) => {
    console.error(err);
    return res.status(status).json({
        success: false,
        errors: { msg }
    });
};