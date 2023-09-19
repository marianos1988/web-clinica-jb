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
			<iframe src="https://drive.google.com/file/d/1_pBj1tr9cuFW2jgLmIzRwa73nQoLeIYx/preview" width="100%" height="100%" allow="autoplay"></iframe>
			`;
		}
		else if(item.id === `video-2`) {
			document.querySelector(`.${item.id}`).innerHTML = `
			<iframe src="https://drive.google.com/file/d/1Rm3VRL-nv3PdWFzhM0W-NDa7xm1GX4do/preview" width="100%" height="100%" allow="autoplay"></iframe>
			`;
			
		}
		else if(item.id === `video-3`) {
			document.querySelector(`.${item.id}`).innerHTML = `
			<iframe src="https://drive.google.com/file/d/1SZRJh5ER9nzj2-oKoxy2ktEWOR4iYP8C/preview" width="100%" height="100%" allow="autoplay"></iframe>
			`;
		}
		else if(item.id === `video-4`) {
			document.querySelector(`.${item.id}`).innerHTML = `
			<iframe src="https://drive.google.com/file/d/1c0gHfgJUKUNfskdIRvMrBATQiPdx1sP_/preview" width="100%" height="100%" allow="autoplay"></iframe>
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

