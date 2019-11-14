module.exports = async function (context, req) {
    let sentiment;

    if (req.body.sentiment < 0.3) {
        sentiment = "negative";
    } else if (req.body.sentiment > 0.3 && req.body.sentiment < 0.7) {
        sentiment = "neutral";
    } else {
        sentiment = "positive";
    }

    context.log('Determined sentiment: ', sentiment)
    context.res = {
        body: {
            sentiment: sentiment
        }
    }
    return;
};