const grid = document.querySelector('.grid')
const items = document.querySelectorAll('.item')




items.forEach((item) => {
	item.addEventListener('mouseenter', () => {
		gsap.to(grid, {
			'--track': '2fr',
			duration: 0.3,
		})
		gsap.to(item, {
			'--innerTrack': '1fr',
			duration: 0.3,
		})
		if(item.id === `video-1`) {
			document.querySelector(`.${item.id}`).innerHTML = `
			<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dSHgRZGIznU?autoplay=1&controls=0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			`;
		}
		else if(item.id === `video-2`) {
			document.querySelector(`.${item.id}`).innerHTML = `
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9sqbAadwIm0?autoplay=1&controls=0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			`;
		}
		else if(item.id === `video-3`) {
			document.querySelector(`.${item.id}`).innerHTML = `
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Vc41jG_84cQ?autoplay=1&controls=0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			`;
		}
		else if(item.id === `video-4`) {
			document.querySelector(`.${item.id}`).innerHTML = `
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/kymMZhvyTXo?autoplay=1&controls=0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			`;
		}



		// <video class="vid-servicios ${item.id}" src="./videos/${item.id}.mp4" autoplay></video>
	})
	item.addEventListener('mouseleave', () => {
		gsap.to(grid, {
			'--track': '1fr',
			duration: 0.3,
		})
		gsap.to(item, {
			'--innerTrack': '0fr',
			duration: 0.3,
		})
		if(item.id === `video-1`) {
			document.querySelector(`.${item.id}`).innerHTML = `

			`;
		}
		else if(item.id === `video-2`) {
			document.querySelector(`.${item.id}`).innerHTML = `

			`;
		}
		else if(item.id === `video-3`) {
			document.querySelector(`.${item.id}`).innerHTML = `

			`;
		}
		else if(item.id === `video-4`) {
			document.querySelector(`.${item.id}`).innerHTML = `

			`;
		}
	})
})

