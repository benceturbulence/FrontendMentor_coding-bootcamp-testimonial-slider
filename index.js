
const testimonial_data = [
    ["images/image-tanya.jpg", "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.", "Tanya Sinclair", "UX Engineer"],
    ["images/image-john.jpg", "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.", "John Tarkpor", "Junior Front-end Developer"]
]



/* Button */
let counter = 0

const back_btn = document.getElementById("btn_back");
const forw_btn = document.getElementById("btn_forward")




function dataLoader(data) {
return `
<p class = "testimonial">  
${data[1]}
</p>
<div class = "author_box">
<p class="author">
    ${data[2]}
</p>
<p class="occupation">
    ${data[3]}
</p>
</div>
`
}


back_btn.addEventListener("click", () =>{

console.log(counter)
if (counter == 0){
    counter += 1 
    console.log("back clicked")
    setHtml(testimonial_data[counter])
}
else { 
counter -= 1;
console.log(`back ${counter}`)
setHtml(testimonial_data[counter])
}
})


forw_btn.addEventListener("click", () => {
console.log(counter)
if (counter == 1){
    counter -= 1
    setHtml(testimonial_data[counter])
}
else {
    counter += 1
    setHtml(testimonial_data[counter])
}
})

function setHtml(data){
document.querySelector('#avatar').src = data[0]
document.querySelector('.content').innerHTML = dataLoader(data)
}

