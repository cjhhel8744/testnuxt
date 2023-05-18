const CommonUI = {}

CommonUI.appName = () => {
	const agent = navigator.userAgent.toLowerCase()
	let appName = ''

	if (agent.indexOf('eduwill_portal') >= 0) {
		appName = 'EDUWILL_PORTAL'
	} else if (agent.indexOf('eduwill_study') >= 0) {
		appName = 'EDUWILL_STUDY'
	} else if (agent.indexOf('eduwill_sisa') >= 0) {
		appName = 'EDUWILL_SISA'
	}

	if (agent.indexOf('_ios') >= 0) {
		appName += '_IOS'
	}

	return appName
}

CommonUI.isApp = () => {
	return CommonUI.appName() != ''
}

CommonUI.isMobile = () => {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
}

CommonUI.makeLine = content => {
	return (content || '').replace(/(?:\r\n|\r|\n)/g, '<br />')
}

CommonUI.scrollTo = (el, time) => {
	const delay = time || 100
	var scrollInterval = setInterval(function () {
		const $el = $(el)
		if ($el.length > 0) {
			$('html, body').animate(
				{
					scrollTop: parseInt($el.offset().top),
				},
				50,
			)
			clearInterval(scrollInterval)
		}
	}, delay)
}

CommonUI.stripHtml = html => {
	let regex = /(<([^>]+)>)/gi
	return html.replace(regex, '')
}

CommonUI.formatNumber = text => {
	let parts = text.toString().split('.')
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	return parts.join('.')
}

CommonUI.fnThumbYoutube = (url, isMax) => {
	const spl = url.split('/')
	let yid = spl[spl.length - 1]
	yid = yid.replace('watch?v=', '')
	const fileNm = 'mqdefault'
	if (isMax) {
		fileNm = 'maxresdefault'
	}
	return `//img.youtube.com/vi/${yid}/${fileNm}.jpg`
}

CommonUI.openWindowPop = (url, name) => {
	var options = 'top=10, left=10, width=1230, height=600, status=no, menubar=no, toolbar=no, resizable=no'
	window.open(url, name, options)
}

CommonUI.routeUrl = (data, headers) => {
	var serializedData = []
	for (var k in data) {
		if (data[k]) {
			serializedData.push(encodeURIComponent(data[k]))
		}
	}
	return serializedData.join('/')
}

CommonUI.openWindow = (url, target, opt) => {
	window.open(url, target, opt)
}

//TP 추가
CommonUI.replaceTag = val => {
	return val.replace(/\\n/g, '<br>').replace(/\n/g, '<br>').replace(/\t/g, '  ')
}

CommonUI.targetBlank = url => {
	try {
		if (window.top.location.href) {
			if (!url) {
				return ''
			}
			var hostName = location.host
			var splHost = hostName.split('-')
			if (splHost.length > 1) hostName = splHost[1]
			return url.indexOf(hostName) > -1 ? '' : '_blank'
		}
		return '_blank'
	} catch (e) {
		return '_blank'
	}
}

// 두개의 날짜를 비교하여 차이를 알려준다.
CommonUI.dateDiff = (_date1, _date2, signed) => {
	var diffDate_1 = _date1 instanceof Date ? _date1 : new Date(_date1)
	var diffDate_2 = _date2 instanceof Date ? _date2 : new Date(_date2)

	diffDate_1 = new Date(diffDate_1.getFullYear(), diffDate_1.getMonth(), diffDate_1.getDate())
	diffDate_2 = new Date(diffDate_2.getFullYear(), diffDate_2.getMonth(), diffDate_2.getDate())

	var diff = !signed ? Math.abs(diffDate_2.getTime() - diffDate_1.getTime()) : diffDate_2.getTime() - diffDate_1.getTime()
	diff = Math.ceil(diff / (1000 * 3600 * 24))

	return diff
}

CommonUI.getDayName = day => {
	switch (moment(day).format('dddd')) {
		case 'Monday':
			return '월'
			break
		case 'Tuesday':
			return '화'
			break
		case 'Wednesday':
			return '수'
			break
		case 'Thursday':
			return '목'
			break
		case 'Friday':
			return '금'
			break
		case 'Saturday':
			return '토'
			break
		case 'Sunday':
			return '일'
			break
	}
	return ''
}

CommonUI.isEmpty = obj => {
	return Object.keys(obj).length === 0
}

CommonUI.loadScript = src => {
	// eslint-disable-line no-param-reassign
	return new Promise(function (resolve, reject) {
		let shouldAppend = false
		let el = document.querySelector('script[src="' + src + '"]')
		if (!el) {
			el = document.createElement('script')
			el.type = 'text/javascript'
			el.async = true
			el.src = src
			shouldAppend = true
		} else if (el.hasAttribute('data-loaded')) {
			resolve(el)
			return
		}

		el.addEventListener('error', reject)
		el.addEventListener('abort', reject)
		el.addEventListener('load', function loadScriptHandler() {
			el.setAttribute('data-loaded', true)
			resolve(el)
		})

		if (shouldAppend) document.head.appendChild(el)
	})
}
CommonUI.unloadScript = src => {
	// eslint-disable-line no-param-reassign
	return new Promise(function (resolve, reject) {
		const el = document.querySelector('script[src="' + src + '"]')
		if (!el) {
			reject()
			return
		}
		document.head.removeChild(el)
		resolve()
	})
}

export default CommonUI
