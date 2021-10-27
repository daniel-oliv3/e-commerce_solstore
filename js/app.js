let slide_imgs = document.querySelectorAll('#slide-img img')

let slide_infos = document.querySelectorAll('.slide-info')

let hero_imgs_animate = []

slide_imgs.forEach((e, index) => {
    let next_img = slide_imgs[index === slide_imgs.length - 1 ? 0 : index + 1].getAttribute('src')

    let animation = new hoverEffect({
        parent: document.querySelector('#slide-img'),
        intensity: 0.3,
        image1: e.getAttribute('src'),
        image2: next_img,
        displacementImage: 'images/distortion.jpg',
        hover: false
    })
    hero_imgs_animate.push(animation)
})

//remove a imagem
slide_imgs.forEach(e => e.remove())

let curr_item = 0

showSlideIndex = (index) => {
    document.querySelector('#hero-slide-index').innerHTML = `${index + 1}/${slide_imgs.length}`
}

nextSlide = () => {
    let prev_item = curr_item
    curr_item = (curr_item + 1) % hero_imgs_animate.length

    //imagem animation
    hero_imgs_animate[prev_item].next()

    //change slide info
    document.querySelector('.slide-info.active').classList.remove('active')
    slide_infos[curr_item].classList.add('active')

    showSlideIndex(curr_item)

    setTimeout(() => {
        let canvas = document.querySelectorAll('#slide-img canvas')
        document.querySelector('#slide-img').appendChild(canvas[0])
        hero_imgs_animate[prev_item].previous()
    }, 1200);


    document.querySelector('#hero-slide-toggle-next').onclick = () => {
        nextSlide()
    }
}