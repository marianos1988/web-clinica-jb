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

			// document.querySelector(`.${item.id}`).innerHTML = `
			// <video class="vid-servicios ${item.id}" src="./videos/${item.id}.mp4" autoplay></video>
			// `;
			document.querySelector(`.${item.id}`).innerHTML = `
			 <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
			   src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFvAZFVRIA&#x2F;watch?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
			 </iframe>
			`;
			
		}
		else if(item.id === `video-2`) {
			// document.querySelector(`.${item.id}`).innerHTML = `
			// <video class="vid-servicios ${item.id}" src="./videos/${item.id}.mp4" autoplay></video>
			// `;
			document.querySelector(`.${item.id}`).innerHTML = `
			 <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
			   src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFvAd2D4aQ&#x2F;watch?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
			 </iframe>
			`;

		}
		else if(item.id === `video-3`) {
			// document.querySelector(`.${item.id}`).innerHTML = `
			// <video class="vid-servicios ${item.id}" src="./videos/${item.id}.mp4" autoplay></video>
			// `;
			document.querySelector(`.${item.id}`).innerHTML = `
			 <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
			   src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFvAeLlqiU&#x2F;watch?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
			 </iframe>
			`;

		}
		else if(item.id === `video-4`) {
			// document.querySelector(`.${item.id}`).innerHTML = `
			// <video class="vid-servicios ${item.id}" src="./videos/${item.id}.mp4" autoplay></video>
			// `;
			document.querySelector(`.${item.id}`).innerHTML = `
			 <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
			   src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFvAaNFzYI&#x2F;watch?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
			 </iframe>
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

