const DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', ($scope) => {
  const PUBLIC_KEY = 'AIzaSyBnNAISIUKe6xdhq1_rjor2rxoI3UlMY7k';
  const CALENDAR_ID = 'f7jnetm22dsjc3npc2lu3buvu4@group.calendar.google.com';

  $scope.options = {
    dataSource: new DevExpress.data.DataSource({
      store: new DevExpress.data.CustomStore({
        load() {
          const result = $.Deferred();
          $.ajax({
            data: { showDeleted: false },
            dataType: 'json',
            // url: [
              // 'https://www.googleapis.com/calendar/v3/calendars/',
              // CALENDAR_ID,
              // '/events?key=',
              // PUBLIC_KEY,
            // ].join(''),
			url : '../events.json',
			crossDomain: true,
 headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
   }
		
			
          }).done( function(response)  {
            result.resolve(response.items);
          }
		  
		  );

          return result.promise();
        },
      }),
    }),
    editing: false,
    startDateExpr: 'start.dateTime',
    endDateExpr: 'end.dateTime',
    textExpr: 'summary',
    startDayHour: 7,
    timeZone: 'America/Los_Angeles',
    showAllDayPanel: false,
    views: ['month', 'day', 'workWeek'],
    currentView: 'month',
    currentDate: new Date(2017, 4, 25),
    height: 500,
  };
});