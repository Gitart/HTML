$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay',
            defaultAllDay: true,
        },
        lazyFetching: false,
        defaultDate: '2015-01-06',
        editable: false,
        eventLimit: 10, 
        weekMode: 'liquid',
        dayPopoverFormat: 'DD/MM/YYYY',

        //events: {
        //          url: 'instant-tools.cgi',
        //          type: 'POST',
        //          data: {
        //              events: 1,
        //              pending: 1,
        //              from: '2014-01-01',
        //              to: '2016-12-31',
        //          }
        //      },

        viewRender: function(view, element) {
            var events_slice = new Object();
            events_slice.eventSources = [
                {
                    url: 'instant-tools.cgi',
                    type: 'POST',
                    data: { events: 1, pending: 1, from: '2014-01-01', to: '2016-12-31' }
                }
            ];

            $('#calendar').fullCalendar('addEventSource', events_slice);

            //$('#calendar').fullCalendar('renderEvents');
        },

        eventClick: function(calEvent, jsEvent, view) {
            alert(calEvent.title + "n" + calEvent.start.format('DD/MM/YYYY') + " to " + calEvent.end.format('DD/MM/YYYY'));
        },
    });
});


$(document).ready(function() {
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,basicWeek,basicDay',
      defaultAllDay: true,
    },
    lazyFetching: false,
    defaultDate: '$today',
    editable: false,
    eventLimit: 10,
    weekMode: 'liquid',
    dayPopoverFormat: 'DD/MM/YYYY',

    events: function(start, end, timezone, callback) {
      $.ajax({
        url: 'instant-tools.cgi',
        data: {
          events: 1,
          pending: 1,
          from: '2014-01-01',
          to: '2016-12-31',
        },
        success: function(doc) {
          var obj = jQuery.parseJSON(doc);
          var events = [];
          $.each(obj, function(index, value) {

            events.push({
              id: value['id'],
              //all data
            });
            //console.log(value)
          });
          callback(events);
        },
        error: function(e, x, y) {
          console.log(e);
          console.log(x);
          console.log(y);
        }
      });
    },

    eventClick: function(calEvent, jsEvent, view) {
      alert(calEvent.title + "n" + calEvent.start.format('DD/MM/YYYY') + " to " + calEvent.end.format('DD/MM/YYYY'));
    },
  });
});

