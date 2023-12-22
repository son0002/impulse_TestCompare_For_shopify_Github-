function run(number_day, yeahs, hours) {
	var myInterval;// Used to save previous interval if one has been started
	clearInterval(myInterval);
	var interval = 1000;
	myInterval = setInterval(() => {
		var timeZone = document.getElementById("selectTimezone");//指定参照时区
		var i = timeZone.selectedIndex;
		var removeParenthesis = timeZone.options[i].text.replace(/[()]/g, '')
		var splitString = removeParenthesis.split(' ')
		// var d = new Date('March 19, 2022 ' + ' ' + splitString[0]);

		var today_count = number_day.toString() + ' ,'
		var d = new Date('aug' + today_count + yeahs + ' ' + hours + ':00:00' + ' ' + 'UTC+08:00');
		//   var d = new Date('Apr 1, 2022 15:00:00');
		var $clock = $('#clock');
		var eventTime = moment(d.getTime()).unix();
		var currentTime = moment(new Date().getTime()).unix();
		var diffTime = eventTime - currentTime;
		var duration = moment.duration(diffTime * 1000, 'milliseconds');

		if (diffTime > 0) {
			duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
			var d = moment.duration(duration).days(),
				h = moment.duration(duration).hours(),
				m = moment.duration(duration).minutes(),
				s = moment.duration(duration).seconds();
			d = $.trim(d).length === 1 ? '0' + d : d;
			h = $.trim(h).length === 1 ? '0' + h : h;
			m = $.trim(m).length === 1 ? '0' + m : m;
			s = $.trim(s).length === 1 ? '0' + s : s;

			// show how many hours, minutes and seconds are left
			$('.days').text(d + '');
			$('.hours').text(h + '');
			$('.minutes').text(m + '');
			$('.seconds').text(s + '');
		} else {
			// if (hours + 5 > 23) {
			//     run(number_day + 1, yeahs, (hours + 7) - 24)
			// } else {
			//     run(number_day, yeahs, hours + 7)
			// }

			run(number_day + 1,'2022',15);
		}
	})
	}

	run(1,'2022',15);