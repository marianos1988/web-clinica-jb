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
			<video class="vid-servicios ${item.id}" src="./videos/${item.id}.mp4" autoplay></video>
			`;
			
		}
		else if(item.id === `video-2`) {
			document.querySelector(`.${item.id}`).innerHTML = `
			<video class="vid-servicios ${item.id}" src="./videos/${item.id}.mp4" autoplay></video>
			`;

			
		}
		else if(item.id === `video-3`) {
			document.querySelector(`.${item.id}`).innerHTML = `
			<video class="vid-servicios ${item.id}" src="./videos/${item.id}.mp4" autoplay></video>
			`;

		}
		else if(item.id === `video-4`) {
			document.querySelector(`.${item.id}`).innerHTML = `
			<video class="vid-servicios ${item.id}" src="./videos/${item.id}.mp4" autoplay></video>
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

