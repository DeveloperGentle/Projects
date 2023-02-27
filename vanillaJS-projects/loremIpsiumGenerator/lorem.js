// import { texts } from "./lorem-texts";

const texts = [
 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque officia amet culpa! Necessitatibus eos, tempora maiores consequatur beatae architecto temporibus rerum reprehenderit assumenda dolore eaque. Molestiae soluta doloremque iste expedita?',
 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit soluta corporis voluptatum repellendus magni officiis animi voluptatibus minima eos, harum dolorum fugit molestias praesentium quos, aperiam, porro maiores dolore esse. Tenetur reiciendis, consectetur nesciunt eveniet assumenda expedita magnam numquam fuga enim cumque quidem itaque corporis. Eaque nesciunt deserunt aperiam incidunt sit tempore quo veritatis nisi quaerat similique, doloribus nihil est cum fuga totam expedita pariatur culpa sequi ab ipsum quam optio non. Blanditiis nam unde mollitia omnis maxime tempore obcaecati.',
 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus explicabo modi voluptatibus porro temporibus nisi reiciendis exercitationem? Laboriosam, est eaque! Nam sint magnam cupiditate enim sed facere reprehenderit itaque quo sunt nesciunt eos maxime fugiat, harum illo dignissimos, provident aliquam laudantium, numquam vel qui dolorem! Nulla nostrum eius, natus assumenda porro esse deleniti incidunt? Laudantium nesciunt autem commodi quibusdam consequatur.',
 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, eaque a. Nemo fugiat autem sit ad doloremque enim ut odit! Corporis omnis deleniti optio! Enim sequi minima dicta magni adipisci ipsa. Iusto ad eveniet facere fugiat explicabo recusandae ipsam molestias.',
 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium dolore minima recusandae, laboriosam obcaecati dicta minus. Aspernatur quidem et repudiandae! A error exercitationem nostrum sequi aperiam beatae modi quod dolores. Adipisci, perspiciatis maiores fugiat omnis consequuntur impedit tempora! Officia aut asperiores numquam, ipsam ex voluptatibus minima autem inventore praesentium!',
 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt recusandae aperiam sit cumque alias atque cupiditate quidem architecto veritatis quae accusamus accusantium nobis praesentium optio deleniti perferendis repudiandae dolore excepturi voluptatibus totam expedita, reprehenderit doloribus nostrum. Reiciendis, maiores numquam!'
]

const paragraphs = $('.number-of-paragraphs')
const generateBtn = $('.generate-btn')
const loremText = $('.lorem-text')

generateBtn.on('click',() => {

let output = ''

for(let i=0;i<paragraphs.val();i+=1) {
 output+=`<p>${texts[Math.floor(Math.random()*texts.length)]}</p>`
}
loremText.css('opacity',1)
loremText.html(output)
})