$(document).on('pagebeforeshow', '#index', function() {
    $("#tabs").tabs();
});

$('#aboutTab').click(function (e)
{
    e.preventDefault()
    $(this).tab('show')
});

$('#workExperienceTab').click(function (e)
{
    e.preventDefault()
    $(this).tab('show')
});

$('#projectsTab').click(function (e)
{
    e.preventDefault()
    $(this).tab('show')
});