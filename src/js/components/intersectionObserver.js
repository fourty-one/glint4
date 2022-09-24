import vars from '../_vars';

function onEntry(entry) {
  entry.forEach(change => {
	  if (change.isIntersecting)
	   	change.target.classList.add('element-show')
 	})
}

let observer = new IntersectionObserver(onEntry, { threshold: [0.1] })

vars.$containers.forEach(c => observer.observe(c))