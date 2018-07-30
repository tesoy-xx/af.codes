var timespans = $('.timespan');

function maybePlural(text, number) {
    if (number !== 1) {
        return text + 's';
    }
    return text;
}

$.each(timespans, function () {
    var start = moment($(this).attr('startdate'));

    var rawEnd = $(this).attr('enddate');
    var end;
    if (rawEnd) {
        end = moment(rawEnd);
    } else {
        end = moment();
    }

    var diff = end.diff(start, 'years');
    var diffUnit = maybePlural('year', diff);
    if (diff === 0) {
        diff = end.diff(start, 'months');
        diffUnit = maybePlural('month', diff);
    }
    if (diff === 0) {
        diff = end.diff(start, 'weeks');
        diffUnit = maybePlural('week', diff);
    }
    if (diff === 0) {
        diff = end.diff(start, 'days');
        diffUnit = maybePlural('day', diff);
    }

    if (rawEnd) {
        $(this).html(start.format('MMM D, YYYY') + ' &mdash; ' + end.format('MMM D, YYYY') + ' (' + diff + ' ' + diffUnit + ')');
    } else {
        $(this).html(start.format('MMM D, YYYY') + ' &mdash; Present (' + diff + ' ' + diffUnit + ')');
    }
});
