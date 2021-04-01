define('issue-hover', ['ajs'], function(AJS){
    AJS.toInit(function() {
        var i = new Date().getTime();
        AJS.$("#issue_actions_container").find('.action-body a').each(function() {
            if (this.href.match(/\/browse\/[A-Z]+\-\d+$/)) {
                var split = this.href.split('/browse/');
                var base = split[0];
                var key = split[1];
                var options = { cacheContent: true, onHover: true, showDelay: 400, hideDelay: 400, closeOthers: false, width: 500 }
                var draw = function(contents, trigger, showPopup) {
                    AJS.$.getJSON(base + '/rest/api/latest/issue/' + key, function(data) {
                        var fields = data["fields"];
                        contents.empty();
                        contents.append(
                            "<ul class=\"item-details\">"
                            + "<li>"
                            + "<dl><dt>Summary: </dt>" + "<dd>" + fields["summary"] + "</dd></dl>"
                            + "<dl><dt>Type: </dt>" + "<dd>" + fields["issuetype"]["name"] + "</dd></dl>"
                            + "<dl><dt>Priority: </dt>" + "<dd>" + fields["priority"]["name"] + "</dd></dl>"
                            + "<dl><dt>Status: </dt>" + "<dd>" + fields["status"]["name"] + "</dd></dl>"
                            + "<dl><dt>Assignee: </dt>" + "<dd>" + fields["assignee"]["name"] + "</dd></dl>"
                            + "<dl><dt>Description: </dt>" + "<dd>" + fields["description"] + "</dd></dl>"
                            + "</li></ul>");
                        contents.append("<form id=\"add-watch\" name=\"watch\" action=\"\">");
                        AJS.$("<input type=\"button\" name=\"button\" value=\"Watch\"/>").click(function() {
                            // We don't actually know our own username...and we need it to add a Watcher. So we get it from the
                            // "current user" resource
                            AJS.$.getJSON(base + '/rest/auth/latest/session', function(data) {
                                AJS.$.ajax({
                                    type: "POST",
                                    url: base + "/rest/api/latest/issue/" + key + "/watchers",
                                    data: "\""+ data['name']+ "\"",
                                    dataType: "json",
                                    contentType: "application/json"
                                })
                            })
                        }).appendTo(contents);
                        contents.append("</form>");
                        showPopup()
                    })
                };
                AJS.InlineDialog(AJS.$(this), "issue-linking-" + (i++), draw, options)
            }
        })
    })
});

require('issue-hover');
